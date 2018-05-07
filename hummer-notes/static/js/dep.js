!function (e, t) {
  'object' == typeof module && 'object' == typeof module.exports
    ? module.exports = e.document
    ? t(e, !0)
    : function (e) {
      if (!e.document)throw new Error(
        'jQuery requires a window with a document')
      return t(e)
    }
    : t(e)
}('undefined' != typeof window ? window : this, function (e, t) {
  function n (e) {
    var t = e.length, n = ie.type(e)
    return 'function' !== n && !ie.isWindow(e) && (!(1 !== e.nodeType || !t) ||
      ('array' === n || 0 === t || 'number' == typeof t && t > 0 && t - 1 in e))
  }

  function r (e, t, n) {
    if (ie.isFunction(t))return ie.grep(e,
      function (e, r) {return !!t.call(e, r, e) !== n})
    if (t.nodeType)return ie.grep(e, function (e) {return e === t !== n})
    if ('string' == typeof t) {
      if (pe.test(t))return ie.filter(t, e, n)
      t = ie.filter(t, e)
    }
    return ie.grep(e, function (e) {return ie.inArray(e, t) >= 0 !== n})
  }

  function i (e, t) {
    do e = e[t] while (e && 1 !== e.nodeType)
    return e
  }

  function o (e) {
    var t = be[e] = {}
    return ie.each(e.match(ye) || [], function (e, n) {t[n] = !0}), t
  }

  function a () {
    de.addEventListener
      ? (de.removeEventListener('DOMContentLoaded', s,
      !1), e.removeEventListener('load', s, !1))
      : (de.detachEvent('onreadystatechange', s), e.detachEvent('onload', s))
  }

  function s () {
    (de.addEventListener || 'load' === event.type ||
    'complete' === de.readyState) && (a(), ie.ready())
  }

  function u (e, t, n) {
    if (void 0 === n && 1 === e.nodeType) {
      var r = 'data-' + t.replace(Se, '-$1').toLowerCase()
      if (n = e.getAttribute(r), 'string' == typeof n) {
        try {
          n = 'true' === n || 'false' !== n && ('null' === n
              ? null
              : +n + '' === n
                ? +n
                : Te.test(n)
                  ? ie.parseJSON(n)
                  : n)
        } catch (i) {}
        ie.data(e, t, n)
      } else n = void 0
    }
    return n
  }

  function c (e) {
    var t
    for (t in e)if (('data' !== t || !ie.isEmptyObject(e[t])) &&
      'toJSON' !== t)return !1
    return !0
  }

  function l (e, t, n, r) {
    if (ie.acceptData(e)) {
      var i, o, a = ie.expando, s = e.nodeType, u = s ? ie.cache : e,
        c = s ? e[a] : e[a] && a
      if (c && u[c] && (r || u[c].data) || void 0 !== n ||
        'string' != typeof t)return c ||
      (c = s ? e[a] = Q.pop() || ie.guid++ : a), u[c] ||
      (u[c] = s ? {} : {toJSON: ie.noop}), 'object' != typeof t &&
      'function' != typeof t ||
      (r ? u[c] = ie.extend(u[c], t) : u[c].data = ie.extend(u[c].data,
        t)), o = u[c], r || (o.data || (o.data = {}), o = o.data), void 0 !==
      n && (o[ie.camelCase(t)] = n), 'string' == typeof t ? (i = o[t], null ==
      i && (i = o[ie.camelCase(t)])) : i = o, i
    }
  }

  function f (e, t, n) {
    if (ie.acceptData(e)) {
      var r, i, o = e.nodeType, a = o ? ie.cache : e,
        s = o ? e[ie.expando] : ie.expando
      if (a[s]) {
        if (t && (r = n ? a[s] : a[s].data)) {
          ie.isArray(t)
            ? t = t.concat(ie.map(t, ie.camelCase))
            : t in r
            ? t = [t]
            : (t = ie.camelCase(t), t = t in r ? [t] : t.split(
              ' ')), i = t.length
          for (; i--;)delete r[t[i]];
          if (n ? !c(r) : !ie.isEmptyObject(r))return
        }
        (n || (delete a[s].data, c(a[s]))) && (o
          ? ie.cleanData([e], !0)
          : ne.deleteExpando || a != a.window
            ? delete a[s]
            : a[s] = null)
      }
    }
  }

  function p () {return !0}

  function h () {return !1}

  function d () {try {return de.activeElement} catch (e) {}}

  function v (e) {
    var t = _e.split('|'), n = e.createDocumentFragment()
    if (n.createElement)for (; t.length;)n.createElement(t.pop());
    return n
  }

  function g (e, t) {
    var n, r, i = 0, o = typeof e.getElementsByTagName !== Ce
      ? e.getElementsByTagName(t || '*')
      : typeof e.querySelectorAll !== Ce
        ? e.querySelectorAll(t || '*')
        : void 0
    if (!o)for (o = [], n = e.childNodes || e; null != (r = n[i]); i++)!t ||
    ie.nodeName(r, t) ? o.push(r) : ie.merge(o, g(r, t));
    return void 0 === t || t && ie.nodeName(e, t) ? ie.merge([e], o) : o
  }

  function m (e) {je.test(e.type) && (e.defaultChecked = e.checked)}

  function $ (e, t) {
    return ie.nodeName(e, 'table') &&
    ie.nodeName(11 !== t.nodeType ? t : t.firstChild, 'tr')
      ? e.getElementsByTagName('tbody')[0] ||
      e.appendChild(e.ownerDocument.createElement('tbody'))
      : e
  }

  function y (e) {
    return e.type = (null !== ie.find.attr(e, 'type')) + '/' + e.type, e
  }

  function b (e) {
    var t = Xe.exec(e.type)
    return t ? e.type = t[1] : e.removeAttribute('type'), e
  }

  function x (e, t) {
    for (var n, r = 0; null != (n = e[r]); r++)ie._data(n, 'globalEval',
      !t || ie._data(t[r], 'globalEval'))
  }

  function w (e, t) {
    if (1 === t.nodeType && ie.hasData(e)) {
      var n, r, i, o = ie._data(e), a = ie._data(t, o), s = o.events
      if (s) {
        delete a.handle, a.events = {}
        for (n in s)for (r = 0, i = s[n].length; r < i; r++)ie.event.add(t, n,
          s[n][r])
      }
      a.data && (a.data = ie.extend({}, a.data))
    }
  }

  function C (e, t) {
    var n, r, i
    if (1 === t.nodeType) {
      if (n = t.nodeName.toLowerCase(), !ne.noCloneEvent && t[ie.expando]) {
        i = ie._data(t)
        for (r in i.events)ie.removeEvent(t, r, i.handle);
        t.removeAttribute(ie.expando)
      }
      'script' === n && t.text !== e.text
        ? (y(t).text = e.text, b(t))
        : 'object' === n
        ? (t.parentNode && (t.outerHTML = e.outerHTML), ne.html5Clone &&
        e.innerHTML && !ie.trim(t.innerHTML) && (t.innerHTML = e.innerHTML))
        : 'input' === n && je.test(e.type)
          ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value &&
          (t.value = e.value))
          : 'option' === n
            ? t.defaultSelected = t.selected = e.defaultSelected
            : 'input' !== n && 'textarea' !== n ||
            (t.defaultValue = e.defaultValue)
    }
  }

  function T (t, n) {
    var r, i = ie(n.createElement(t)).appendTo(n.body),
      o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0]))
        ? r.display
        : ie.css(i[0], 'display')
    return i.detach(), o
  }

  function S (e) {
    var t = de, n = Ze[e]
    return n || (n = T(e, t), 'none' !== n && n ||
    (Ke = (Ke || ie('<iframe frameborder=\'0\' width=\'0\' height=\'0\'/>')).appendTo(
      t.documentElement), t = (Ke[0].contentWindow ||
    Ke[0].contentDocument).document, t.write(), t.close(), n = T(e,
      t), Ke.detach()), Ze[e] = n), n
  }

  function E (e, t) {
    return {
      get: function () {
        var n = e()
        if (null != n)return n ? void delete this.get : (this.get = t).apply(
          this, arguments)
      },
    }
  }

  function k (e, t) {
    if (t in e)return t
    for (var n = t.charAt(0).toUpperCase() +
      t.slice(1), r = t, i = pt.length; i--;)if (t = pt[i] + n, t in e)return t
    return r
  }

  function A (e, t) {
    for (var n, r, i, o = [], a = 0, s = e.length; a <
    s; a++)r = e[a], r.style &&
    (o[a] = ie._data(r, 'olddisplay'), n = r.style.display, t ? (o[a] ||
    'none' !== n || (r.style.display = ''), '' === r.style.display && Ae(r) &&
    (o[a] = ie._data(r, 'olddisplay', S(r.nodeName)))) : (i = Ae(r), (n &&
    'none' !== n || !i) &&
    ie._data(r, 'olddisplay', i ? n : ie.css(r, 'display'))));
    for (a = 0; a < s; a++)r = e[a], r.style &&
    (t && 'none' !== r.style.display && '' !== r.style.display ||
    (r.style.display = t ? o[a] || '' : 'none'));
    return e
  }

  function N (e, t, n) {
    var r = ut.exec(t)
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || 'px') : t
  }

  function j (e, t, n, r, i) {
    for (var o = n === (r ? 'border' : 'content')
      ? 4
      : 'width' === t
        ? 1
        : 0, a = 0; o < 4; o += 2)'margin' === n &&
    (a += ie.css(e, n + ke[o], !0, i)), r ? ('content' === n &&
    (a -= ie.css(e, 'padding' + ke[o], !0, i)), 'margin' !== n &&
    (a -= ie.css(e, 'border' + ke[o] + 'Width', !0, i))) : (a += ie.css(e,
      'padding' + ke[o], !0, i), 'padding' !== n &&
    (a += ie.css(e, 'border' + ke[o] + 'Width', !0, i)));
    return a
  }

  function D (e, t, n) {
    var r = !0, i = 'width' === t ? e.offsetWidth : e.offsetHeight, o = et(e),
      a = ne.boxSizing && 'border-box' === ie.css(e, 'boxSizing', !1, o)
    if (i <= 0 || null == i) {
      if (i = tt(e, t, o), (i < 0 || null == i) && (i = e.style[t]), rt.test(
          i))return i
      r = a && (ne.boxSizingReliable() || i === e.style[t]), i = parseFloat(
          i) || 0
    }
    return i + j(e, t, n || (a ? 'border' : 'content'), r, o) + 'px'
  }

  function O (e, t, n, r, i) {return new O.prototype.init(e, t, n, r, i)}

  function M () {return setTimeout(function () {ht = void 0}), ht = ie.now()}

  function L (e, t) {
    var n, r = {height: e}, i = 0
    for (t = t ? 1 : 0; i < 4; i += 2 - t)n = ke[i], r['margin' +
    n] = r['padding' + n] = e;
    return t && (r.opacity = r.width = e), r
  }

  function P (e, t, n) {
    for (var r, i = (yt[t] || []).concat(yt['*']), o = 0, a = i.length; o <
    a; o++)if (r = i[o].call(n, t, e))return r
  }

  function _ (e, t, n) {
    var r, i, o, a, s, u, c, l, f = this, p = {}, h = e.style,
      d = e.nodeType && Ae(e), v = ie._data(e, 'fxshow')
    n.queue || (s = ie._queueHooks(e, 'fx'), null == s.unqueued &&
    (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function () {
      s.unqueued || u()
    }), s.unqueued++, f.always(function () {
      f.always(
        function () {s.unqueued--, ie.queue(e, 'fx').length || s.empty.fire()})
    })), 1 === e.nodeType && ('height' in t || 'width' in t) &&
    (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = ie.css(e,
      'display'), l = 'none' === c
      ? ie._data(e, 'olddisplay') || S(e.nodeName)
      : c, 'inline' === l && 'none' === ie.css(e, 'float') &&
    (ne.inlineBlockNeedsLayout && 'inline' !== S(e.nodeName)
      ? h.zoom = 1
      : h.display = 'inline-block')), n.overflow &&
    (h.overflow = 'hidden', ne.shrinkWrapBlocks() || f.always(
      function () {h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]}))
    for (r in t)if (i = t[r], vt.exec(i)) {
      if (delete t[r], o = o || 'toggle' === i, i === (d ? 'hide' : 'show')) {
        if ('show' !== i || !v || void 0 === v[r])continue
        d = !0
      }
      p[r] = v && v[r] || ie.style(e, r)
    } else c = void 0
    if (ie.isEmptyObject(p)) 'inline' === ('none' === c ? S(e.nodeName) : c) &&
    (h.display = c) else {
      v ? 'hidden' in v && (d = v.hidden) : v = ie._data(e, 'fxshow', {}), o &&
      (v.hidden = !d), d ? ie(e).show() : f.done(
        function () {ie(e).hide()}), f.done(function () {
        var t
        ie._removeData(e, 'fxshow')
        for (t in p)ie.style(e, t, p[t])
      })
      for (r in p)a = P(d ? v[r] : 0, r, f), r in v || (v[r] = a.start, d &&
      (a.end = a.start, a.start = 'width' === r || 'height' === r ? 1 : 0))
    }
  }

  function H (e, t) {
    var n, r, i, o, a
    for (n in e)if (r = ie.camelCase(n), i = t[r], o = e[n], ie.isArray(o) &&
      (i = o[1], o = e[n] = o[0]), n !== r &&
      (e[r] = o, delete e[n]), a = ie.cssHooks[r], a && 'expand' in a) {
      o = a.expand(o), delete e[r]
      for (n in o)n in e || (e[n] = o[n], t[n] = i)
    } else t[r] = i
  }

  function q (e, t, n) {
    var r, i, o = 0, a = $t.length,
      s = ie.Deferred().always(function () {delete u.elem}), u = function () {
        if (i)return !1
        for (var t = ht || M(), n = Math.max(0,
          c.startTime + c.duration - t), r = n / c.duration || 0, o = 1 -
          r, a = 0, u = c.tweens.length; a < u; a++)c.tweens[a].run(o);
        return s.notifyWith(e, [c, o, n]), o < 1 && u ? n : (s.resolveWith(e,
          [c]), !1)
      }, c = s.promise({
        elem: e,
        props: ie.extend({}, t),
        opts: ie.extend(!0, {specialEasing: {}}, n),
        originalProperties: t,
        originalOptions: n,
        startTime: ht || M(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = ie.Tween(e, c.opts, t, n,
            c.opts.specialEasing[t] || c.opts.easing)
          return c.tweens.push(r), r
        },
        stop: function (t) {
          var n = 0, r = t ? c.tweens.length : 0
          if (i)return this
          for (i = !0; n < r; n++)c.tweens[n].run(1);
          return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
        },
      }), l = c.props
    for (H(l, c.opts.specialEasing); o < a; o++)if (r = $t[o].call(c, e, l,
        c.opts))return r
    return ie.map(l, P, c), ie.isFunction(c.opts.start) &&
    c.opts.start.call(e, c), ie.fx.timer(
      ie.extend(u, {elem: e, anim: c, queue: c.opts.queue})), c.progress(
      c.opts.progress).
      done(c.opts.done, c.opts.complete).
      fail(c.opts.fail).
      always(c.opts.always)
  }

  function R (e) {
    return function (t, n) {
      'string' != typeof t && (n = t, t = '*')
      var r, i = 0, o = t.toLowerCase().match(ye) || []
      if (ie.isFunction(n))for (; r = o[i++];)'+' === r.charAt(0)
        ? (r = r.slice(1) || '*', (e[r] = e[r] || []).unshift(n))
        : (e[r] = e[r] || []).push(n)
    }
  }

  function F (e, t, n, r) {
    function i (s) {
      var u
      return o[s] = !0, ie.each(e[s] || [], function (e, s) {
        var c = s(t, n, r)
        return 'string' != typeof c || a || o[c]
          ? a
            ? !(u = c)
            : void 0
          : (t.dataTypes.unshift(c), i(c), !1)
      }), u
    }

    var o = {}, a = e === Ut
    return i(t.dataTypes[0]) || !o['*'] && i('*')
  }

  function I (e, t) {
    var n, r, i = ie.ajaxSettings.flatOptions || {}
    for (r in t)void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
    return n && ie.extend(!0, e, n), e
  }

  function B (
    e, t, n) {
    for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" ===
    u[0];)u.shift(), void 0 === i &&
    (i = e.mimeType || t.getResponseHeader('Content-Type'));
    if (i)for (a in s)if (s[a] && s[a].test(i)) {
      u.unshift(a)
      break
    }
    if (u[0] in n) o = u[0] else {
      for (a in n) {
        if (!u[0] || e.converters[a + ' ' + u[0]]) {
          o = a
          break
        }
        r || (r = a)
      }
      o = o || r
    }
    if (o)return o !== u[0] && u.unshift(o), n[o]
  }

  function U (e, t, n, r) {
    var i, o, a, s, u, c = {}, l = e.dataTypes.slice()
    if (l[1])for (a in e.converters)c[a.toLowerCase()] = e.converters[a];
    for (o = l.shift(); o;)if (e.responseFields[o] &&
      (n[e.responseFields[o]] = t), !u && r && e.dataFilter &&
      (t = e.dataFilter(t, e.dataType)), u = o, o = l.shift())if ('*' ===
      o) o = u else if ('*' !== u && u !== o) {
      if (a = c[u + ' ' + o] || c['* ' + o], !a)for (i in c)if (s = i.split(
          ' '), s[1] === o && (a = c[u + ' ' + s[0]] || c['* ' + s[0]])) {
        a === !0 ? a = c[i] : c[i] !== !0 && (o = s[0], l.unshift(s[1]))
        break
      }
      if (a !== !0)if (a && e['throws']) t = a(t) else try {
        t = a(t)
      } catch (f) {
        return {
          state: 'parsererror',
          error: a ? f : 'No conversion from ' + u + ' to ' + o,
        }
      }
    }
    return {state: 'success', data: t}
  }

  function V (e, t, n, r) {
    var i
    if (ie.isArray(t)) ie.each(t, function (t, i) {
      n || Xt.test(e) ? r(e, i) : V(
        e + '[' + ('object' == typeof i ? t : '') + ']', i, n, r)
    }) else if (n || 'object' !== ie.type(t)) r(e, t) else for (i in t)V(
      e + '[' + i + ']', t[i], n, r)
  }

  function W () {try {return new e.XMLHttpRequest} catch (t) {}}

  function z () {
    try {
      return new e.ActiveXObject('Microsoft.XMLHTTP')
    } catch (t) {}
  }

  function X (e) {
    return ie.isWindow(e) ? e : 9 === e.nodeType &&
      (e.defaultView || e.parentWindow)
  }

  var Q = [], J = Q.slice, G = Q.concat, Y = Q.push, K = Q.indexOf, Z = {},
    ee = Z.toString, te = Z.hasOwnProperty, ne = {}, re = '1.11.1',
    ie = function (e, t) {return new ie.fn.init(e, t)},
    oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ae = /^-ms-/,
    se = /-([\da-z])/gi, ue = function (e, t) {return t.toUpperCase()}
  ie.fn = ie.prototype = {
    jquery: re,
    constructor: ie,
    selector: '',
    length: 0,
    toArray: function () {return J.call(this)},
    get: function (e) {
      return null != e
        ? e < 0
          ? this[e + this.length]
          : this[e]
        : J.call(this)
    },
    pushStack: function (e) {
      var t = ie.merge(this.constructor(), e)
      return t.prevObject = this, t.context = this.context, t
    },
    each: function (e, t) {return ie.each(this, e, t)},
    map: function (e) {
      return this.pushStack(
        ie.map(this, function (t, n) {return e.call(t, n, t)}))
    },
    slice: function () {return this.pushStack(J.apply(this, arguments))},
    first: function () {return this.eq(0)},
    last: function () {return this.eq(-1)},
    eq: function (e) {
      var t = this.length, n = +e + (e < 0 ? t : 0)
      return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
    },
    end: function () {return this.prevObject || this.constructor(null)},
    push: Y,
    sort: Q.sort,
    splice: Q.splice,
  }, ie.extend = ie.fn.extend = function () {
    var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length,
      c = !1
    for ('boolean' == typeof a &&
         (c = a, a = arguments[s] || {}, s++), 'object' == typeof a ||
    ie.isFunction(a) || (a = {}), s === u && (a = this, s--); s <
         u; s++)if (null !=
      (i = arguments[s]))for (r in i)e = a[r], n = i[r], a !== n &&
    (c && n && (ie.isPlainObject(n) || (t = ie.isArray(n)))
      ? (t
        ? (t = !1, o = e && ie.isArray(e) ? e : [])
        : o = e && ie.isPlainObject(e) ? e : {}, a[r] = ie.extend(c, o, n))
      : void 0 !== n && (a[r] = n));
    return a
  }, ie.extend({
    expando: 'jQuery' + (re + Math.random()).replace(/\D/g, ''),
    isReady: !0,
    error: function (e) {throw new Error(e)},
    noop: function () {},
    isFunction: function (e) {return 'function' === ie.type(e)},
    isArray: Array.isArray || function (e) {return 'array' === ie.type(e)},
    isWindow: function (e) {return null != e && e == e.window},
    isNumeric: function (e) {return !ie.isArray(e) && e - parseFloat(e) >= 0},
    isEmptyObject: function (e) {
      var t
      for (t in e)return !1;
      return !0
    },
    isPlainObject: function (e) {
      var t
      if (!e || 'object' !== ie.type(e) || e.nodeType ||
        ie.isWindow(e))return !1
      try {
        if (e.constructor && !te.call(e, 'constructor') &&
          !te.call(e.constructor.prototype, 'isPrototypeOf'))return !1
      } catch (n) {return !1}
      if (ne.ownLast)for (t in e)return te.call(e, t);
      for (t in e);
      return void 0 === t || te.call(e, t)
    },
    type: function (e) {
      return null == e
        ? e + ''
        : 'object' == typeof e || 'function' == typeof e
          ? Z[ee.call(e)] || 'object'
          : typeof e
    },
    globalEval: function (t) {
      t && ie.trim(t) && (e.execScript || function (t) {e.eval.call(e, t)})(t)
    },
    camelCase: function (e) {return e.replace(ae, 'ms-').replace(se, ue)},
    nodeName: function (e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    },
    each: function (e, t, r) {
      var i, o = 0, a = e.length, s = n(e)
      if (r) {
        if (s)for (; o < a && (i = t.apply(e[o], r), i !==
        !1); o++); else for (o in e)if (i = t.apply(e[o], r), i === !1)break
      } else if (s)for (; o < a && (i = t.call(e[o], o, e[o]), i !==
      !1); o++); else for (o in e)if (i = t.call(e[o], o, e[o]), i === !1)break
      return e
    },
    trim: function (e) {return null == e ? '' : (e + '').replace(oe, '')},
    makeArray: function (e, t) {
      var r = t || []
      return null != e &&
      (n(Object(e)) ? ie.merge(r, 'string' == typeof e ? [e] : e) : Y.call(r,
        e)), r
    },
    inArray: function (e, t, n) {
      var r
      if (t) {
        if (K)return K.call(t, e, n)
        for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n <
        r; n++)if (n in t && t[n] === e)return n
      }
      return -1
    },
    merge: function (e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n;)e[i++] = t[r++];
      if (n !== n)for (; void 0 !== t[r];)e[i++] = t[r++];
      return e.length = i, e
    },
    grep: function (e, t, n) {
      for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)r = !t(e[o],
        o), r !== s && i.push(e[o]);
      return i
    },
    map: function (e, t, r) {
      var i, o = 0, a = e.length, s = n(e), u = []
      if (s)for (; o < a; o++)i = t(e[o], o, r), null != i &&
      u.push(i); else for (o in e)i = t(e[o], o, r), null != i && u.push(i);
      return G.apply([], u)
    },
    guid: 1,
    proxy: function (e, t) {
      var n, r, i
      if ('string' == typeof t && (i = e[t], t = e, e = i), ie.isFunction(
          e))return n = J.call(arguments, 2), r = function () {
        return e.apply(t || this, n.concat(J.call(arguments)))
      }, r.guid = e.guid = e.guid || ie.guid++, r
    },
    now: function () {return +new Date},
    support: ne,
  }), ie.each(
    'Boolean Number String Function Array Date RegExp Object Error'.split(' '),
    function (e, t) {Z['[object ' + t + ']'] = t.toLowerCase()})
  var ce = function (e) {
    function t (e, t, n, r) {
      var i, o, a, s, u, c, f, h, d, v
      if ((t ? t.ownerDocument || t : F) !== O && D(t), t = t || O, n = n ||
          [], !e || 'string' != typeof e)return n
      if (1 !== (s = t.nodeType) && 9 !== s)return []
      if (L && !r) {
        if (i = $e.exec(e))if (a = i[1]) {
          if (9 === s) {
            if (o = t.getElementById(a), !o || !o.parentNode)return n
            if (o.id === a)return n.push(o), n
          } else if (t.ownerDocument &&
            (o = t.ownerDocument.getElementById(a)) && q(t, o) &&
            o.id === a)return n.push(o), n
        } else {
          if (i[2])return Z.apply(n, t.getElementsByTagName(e)), n
          if ((a = i[3]) && x.getElementsByClassName &&
            t.getElementsByClassName)return Z.apply(n,
            t.getElementsByClassName(a)), n
        }
        if (x.qsa && (!P || !P.test(e))) {
          if (h = f = R, d = t, v = 9 === s && e, 1 === s &&
            'object' !== t.nodeName.toLowerCase()) {
            for (c = S(e), (f = t.getAttribute('id'))
              ? h = f.replace(be, '\\$&')
              : t.setAttribute('id', h), h = '[id=\'' + h +
              '\'] ', u = c.length; u--;)c[u] = h + p(c[u]);
            d = ye.test(e) && l(t.parentNode) || t, v = c.join(',')
          }
          if (v)try {
            return Z.apply(n, d.querySelectorAll(v)), n
          } catch (g) {} finally {f || t.removeAttribute('id')}
        }
      }
      return k(e.replace(ue, '$1'), t, n, r)
    }

    function n () {
      function e (n, r) {
        return t.push(n + ' ') > w.cacheLength && delete e[t.shift()], e[n +
        ' '] = r
      }

      var t = []
      return e
    }

    function r (e) {return e[R] = !0, e}

    function i (e) {
      var t = O.createElement('div')
      try {return !!e(t)} catch (n) {return !1} finally {
        t.parentNode && t.parentNode.removeChild(t), t = null
      }
    }

    function o (e, t) {
      for (var n = e.split('|'), r = e.length; r--;)w.attrHandle[n[r]] = t
    }

    function a (e, t) {
      var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType &&
        (~t.sourceIndex || Q) - (~e.sourceIndex || Q)
      if (r)return r
      if (n)for (; n = n.nextSibling;)if (n === t)return -1
      return e ? 1 : -1
    }

    function s (e) {
      return function (t) {
        var n = t.nodeName.toLowerCase()
        return 'input' === n && t.type === e
      }
    }

    function u (e) {
      return function (t) {
        var n = t.nodeName.toLowerCase()
        return ('input' === n || 'button' === n) && t.type === e
      }
    }

    function c (e) {
      return r(function (t) {
        return t = +t, r(function (n, r) {
          for (var i, o = e([], n.length, t), a = o.length; a--;)n[i = o[a]] &&
          (n[i] = !(r[i] = n[i]))
        })
      })
    }

    function l (e) {return e && typeof e.getElementsByTagName !== X && e}

    function f () {}

    function p (e) {
      for (var t = 0, n = e.length, r = ''; t < n; t++)r += e[t].value;
      return r
    }

    function h (e, t, n) {
      var r = t.dir, i = n && 'parentNode' === r, o = B++
      return t.first ? function (t, n, o) {
        for (; t = t[r];)if (1 === t.nodeType || i)return e(t, n, o)
      } : function (t, n, a) {
        var s, u, c = [I, o]
        if (a) {
          for (; t = t[r];)if ((1 === t.nodeType || i) && e(t, n, a))return !0
        } else for (; t = t[r];)if (1 === t.nodeType || i) {
          if (u = t[R] || (t[R] = {}), (s = u[r]) && s[0] === I &&
            s[1] === o)return c[2] = s[2]
          if (u[r] = c, c[2] = e(t, n, a))return !0
        }
      }
    }

    function d (e) {
      return e.length > 1 ? function (
        t, n, r) {
        for (var i = e.length; i--;)if (!e[i](t, n, r))return !1
        return !0
      } : e[0]
    }

    function v (e, n, r) {
      for (var i = 0, o = n.length; i < o; i++)t(e, n[i], r);
      return r
    }

    function g (
      e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, c = null != t; s <
      u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), c && t.push(s)));
      return a
    }

    function m (e, t, n, i, o, a) {
      return i && !i[R] && (i = m(i)), o && !o[R] && (o = m(o, a)), r(
        function (r, a, s, u) {
          var c, l, f, p = [], h = [], d = a.length,
            m = r || v(t || '*', s.nodeType ? [s] : s, []),
            $ = !e || !r && t ? m : g(m, p, e, s, u),
            y = n ? o || (r ? e : d || i) ? [] : a : $
          if (n && n($, y, s, u), i)for (c = g(y, h), i(c, [], s,
            u), l = c.length; l--;)(f = c[l]) && (y[h[l]] = !($[h[l]] = f));
          if (r) {
            if (o || e) {
              if (o) {
                for (c = [], l = y.length; l--;)(f = y[l]) && c.push($[l] = f);
                o(null, y = [], c, u)
              }
              for (l = y.length; l--;)(f = y[l]) &&
              (c = o ? te.call(r, f) : p[l]) > -1 && (r[c] = !(a[c] = f))
            }
          } else y = g(y === a ? y.splice(d, y.length) : y), o
            ? o(null, a, y, u)
            : Z.apply(a, y)
        })
    }

    function $ (e) {
      for (var t, n, r, i = e.length, o = w.relative[e[0].type], a = o ||
        w.relative[' '], s = o ? 1 : 0, u = h(function (e) {return e === t}, a,
        !0), c = h(function (e) {return te.call(t, e) > -1}, a, !0), l = [
        function (e, n, r) {
          return !o && (r || n !== A) ||
            ((t = n).nodeType ? u(e, n, r) : c(e, n, r))
        }]; s < i; s++)if (n = w.relative[e[s].type]) l = [
        h(d(l), n)] else {
        if (n = w.filter[e[s].type].apply(null, e[s].matches), n[R]) {
          for (r = ++s; r < i && !w.relative[e[r].type]; r++);
          return m(s > 1 && d(l), s > 1 && p(e.slice(0, s - 1).
              concat({value: ' ' === e[s - 2].type ? '*' : ''})).
              replace(ue, '$1'), n, s < r && $(e.slice(s, r)),
            r < i && $(e = e.slice(r)), r < i && p(e))
        }
        l.push(n)
      }
      return d(l)
    }

    function y (e, n) {
      var i = n.length > 0, o = e.length > 0, a = function (r, a, s, u, c) {
        var l, f, p, h = 0, d = '0', v = r && [], m = [], $ = A,
          y = r || o && w.find.TAG('*', c),
          b = I += null == $ ? 1 : Math.random() || .1, x = y.length
        for (c && (A = a !== O && a); d !== x && null != (l = y[d]); d++) {
          if (o && l) {
            for (f = 0; p = e[f++];)if (p(l, a, s)) {
              u.push(l)
              break
            }
            c && (I = b)
          }
          i && ((l = !p && l) && h--, r && v.push(l))
        }
        if (h += d, i && d !== h) {
          for (f = 0; p = n[f++];)p(v, m, a, s);
          if (r) {
            if (h > 0)for (; d--;)v[d] || m[d] || (m[d] = Y.call(u));
            m = g(m)
          }
          Z.apply(u, m), c && !r && m.length > 0 && h + n.length > 1 &&
          t.uniqueSort(u)
        }
        return c && (I = b, A = $), v
      }
      return i ? r(a) : a
    }

    var b, x, w, C, T, S, E, k, A, N, j, D, O, M, L, P, _, H, q,
      R = 'sizzle' + -new Date, F = e.document, I = 0, B = 0, U = n(), V = n(),
      W = n(), z = function (e, t) {return e === t && (j = !0), 0},
      X = 'undefined', Q = 1 << 31, J = {}.hasOwnProperty, G = [], Y = G.pop,
      K = G.push, Z = G.push, ee = G.slice, te = G.indexOf || function (e) {
          for (var t = 0, n = this.length; t < n; t++)if (this[t] === e)return t
          return -1
        },
      ne = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      re = '[\\x20\\t\\r\\n\\f]', ie = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+',
      oe = ie.replace('w', 'w#'),
      ae = '\\[' + re + '*(' + ie + ')(?:' + re + '*([*^$|!~]?=)' + re +
        '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' + oe +
        '))|)' + re + '*\\]', se = ':(' + ie +
        ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
        ae + ')*)|.*)\\)|)',
      ue = new RegExp('^' + re + '+|((?:^|[^\\\\])(?:\\\\.)*)' + re + '+$',
        'g'), ce = new RegExp('^' + re + '*,' + re + '*'),
      le = new RegExp('^' + re + '*([>+~]|' + re + ')' + re + '*'),
      fe = new RegExp('=' + re + '*([^\\]\'"]*?)' + re + '*\\]', 'g'),
      pe = new RegExp(se), he = new RegExp('^' + oe + '$'), de = {
        ID: new RegExp('^#(' + ie + ')'),
        CLASS: new RegExp('^\\.(' + ie + ')'),
        TAG: new RegExp('^(' + ie.replace('w', 'w*') + ')'),
        ATTR: new RegExp('^' + ae),
        PSEUDO: new RegExp('^' + se),
        CHILD: new RegExp(
          '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + re +
          '*(even|odd|(([+-]|)(\\d*)n|)' + re + '*(?:([+-]|)' + re +
          '*(\\d+)|))' + re + '*\\)|)', 'i'),
        bool: new RegExp('^(?:' + ne + ')$', 'i'),
        needsContext: new RegExp(
          '^' + re + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + re +
          '*((?:-\\d)?\\d*)' + re + '*\\)|)(?=[^-]|$)', 'i'),
      }, ve = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i,
      me = /^[^{]+\{\s*\[native \w/, $e = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ye = /[+~]/, be = /'|\\/g,
      xe = new RegExp('\\\\([\\da-f]{1,6}' + re + '?|(' + re + ')|.)', 'ig'),
      we = function (e, t, n) {
        var r = '0x' + t - 65536
        return r !== r || n
          ? t
          : r < 0
            ? String.fromCharCode(r + 65536)
            : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
      }
    try {
      Z.apply(G = ee.call(F.childNodes),
        F.childNodes), G[F.childNodes.length].nodeType
    } catch (Ce) {
      Z = {
        apply: G.length ? function (e, t) {
          K.apply(e, ee.call(t))
        } : function (e, t) {
          for (var n = e.length, r = 0; e[n++] = t[r++];);
          e.length = n - 1
        },
      }
    }
    x = t.support = {}, T = t.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement
      return !!t && 'HTML' !== t.nodeName
    }, D = t.setDocument = function (e) {
      var t, n = e ? e.ownerDocument || e : F, r = n.defaultView
      return n !== O && 9 === n.nodeType && n.documentElement
        ? (O = n, M = n.documentElement, L = !T(n), r && r !== r.top &&
        (r.addEventListener ? r.addEventListener('unload', function () {D()},
          !1) : r.attachEvent &&
          r.attachEvent('onunload', function () {D()})), x.attributes = i(
          function (e) {
            return e.className = 'i', !e.getAttribute('className')
          }), x.getElementsByTagName = i(function (e) {
          return e.appendChild(n.createComment('')), !e.getElementsByTagName(
            '*').length
        }), x.getElementsByClassName = me.test(n.getElementsByClassName) &&
          i(function (e) {
            return e.innerHTML = '<div class=\'a\'></div><div class=\'a i\'></div>', e.firstChild.className = 'i', 2 ===
            e.getElementsByClassName('i').length
          }), x.getById = i(function (e) {
          return M.appendChild(e).id = R, !n.getElementsByName ||
          !n.getElementsByName(R).length
        }), x.getById ? (w.find.ID = function (
          e, t) {
          if (typeof t.getElementById !== X && L) {
            var n = t.getElementById(e)
            return n && n.parentNode ? [n] : []
          }
        }, w.filter.ID = function (e) {
          var t = e.replace(xe, we)
          return function (e) {return e.getAttribute('id') === t}
        }) : (delete w.find.ID, w.filter.ID = function (e) {
          var t = e.replace(xe, we)
          return function (e) {
            var n = typeof e.getAttributeNode !== X && e.getAttributeNode('id')
            return n && n.value === t
          }
        }), w.find.TAG = x.getElementsByTagName ? function (
          e, t) {
          if (typeof t.getElementsByTagName !== X)return t.getElementsByTagName(
            e)
        } : function (e, t) {
          var n, r = [], i = 0, o = t.getElementsByTagName(e)
          if ('*' === e) {
            for (; n = o[i++];)1 === n.nodeType && r.push(n);
            return r
          }
          return o
        }, w.find.CLASS = x.getElementsByClassName && function (e, t) {
            if (typeof t.getElementsByClassName !== X &&
              L)return t.getElementsByClassName(e)
          }, _ = [], P = [], (x.qsa = me.test(n.querySelectorAll)) && (i(
          function (e) {
            e.innerHTML = '<select msallowclip=\'\'><option selected=\'\'></option></select>', e.querySelectorAll(
              '[msallowclip^=\'\']').length &&
            P.push('[*^$]=' + re + '*(?:\'\'|"")'), e.querySelectorAll(
              '[selected]').length ||
            P.push('\\[' + re + '*(?:value|' + ne + ')'), e.querySelectorAll(
              ':checked').length || P.push(':checked')
          }), i(function (e) {
          var t = n.createElement('input')
          t.setAttribute('type', 'hidden'), e.appendChild(t).
            setAttribute('name', 'D'), e.querySelectorAll('[name=d]').length &&
          P.push('name' + re + '*[*^$|!~]?='), e.querySelectorAll(
            ':enabled').length ||
          P.push(':enabled', ':disabled'), e.querySelectorAll('*,:x'), P.push(
            ',.*:')
        })), (x.matchesSelector = me.test(
          H = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector ||
            M.oMatchesSelector || M.msMatchesSelector)) && i(function (e) {
          x.disconnectedMatch = H.call(e, 'div'), H.call(e,
            '[s!=\'\']:x'), _.push('!=', se)
        }), P = P.length && new RegExp(P.join('|')), _ = _.length &&
          new RegExp(_.join('|')), t = me.test(
          M.compareDocumentPosition), q = t || me.test(M.contains)
          ? function (e, t) {
            var n = 9 === e.nodeType ? e.documentElement : e,
              r = t && t.parentNode
            return e === r || !(!r || 1 !== r.nodeType ||
              !(n.contains ? n.contains(r) : e.compareDocumentPosition &&
                16 & e.compareDocumentPosition(r)))
          }
          : function (e, t) {
            if (t)for (; t = t.parentNode;)if (t === e)return !0
            return !1
          }, z = t ? function (e, t) {
          if (e === t)return j = !0, 0
          var r = !e.compareDocumentPosition - !t.compareDocumentPosition
          return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t)
            ? e.compareDocumentPosition(t)
            : 1, 1 & r || !x.sortDetached && t.compareDocumentPosition(e) === r
            ? e === n || e.ownerDocument === F && q(F, e)
              ? -1
              : t === n || t.ownerDocument === F && q(F, t)
                ? 1
                : N
                  ? te.call(N, e) - te.call(N, t)
                  : 0
            : 4 & r
              ? -1
              : 1)
        } : function (e, t) {
          if (e === t)return j = !0, 0
          var r, i = 0, o = e.parentNode, s = t.parentNode, u = [e], c = [t]
          if (!o || !s)return e === n
            ? -1
            : t === n
              ? 1
              : o
                ? -1
                : s
                  ? 1
                  : N
                    ? te.call(N, e) - te.call(N, t)
                    : 0
          if (o === s)return a(e, t)
          for (r = e; r = r.parentNode;)u.unshift(r);
          for (r = t; r = r.parentNode;)c.unshift(r);
          for (; u[i] === c[i];)i++;
          return i ? a(u[i], c[i]) : u[i] === F ? -1 : c[i] === F ? 1 : 0
        }, n)
        : O
    }, t.matches = function (e, n) {
      return t(e, null, null, n)
    }, t.matchesSelector = function (e, n) {
      if ((e.ownerDocument || e) !== O && D(e), n = n.replace(fe,
          '=\'$1\']'), x.matchesSelector && L && (!_ || !_.test(n)) &&
        (!P || !P.test(n)))try {
        var r = H.call(e, n)
        if (r || x.disconnectedMatch ||
          e.document && 11 !== e.document.nodeType)return r
      } catch (i) {}
      return t(n, O, null, [e]).length > 0
    }, t.contains = function (e, t) {
      return (e.ownerDocument || e) !== O && D(e), q(e, t)
    }, t.attr = function (e, t) {
      (e.ownerDocument || e) !== O && D(e)
      var n = w.attrHandle[t.toLowerCase()],
        r = n && J.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0
      return void 0 !== r
        ? r
        : x.attributes || !L
          ? e.getAttribute(t)
          : (r = e.getAttributeNode(t)) && r.specified
            ? r.value
            : null
    }, t.error = function (e) {
      throw new Error('Syntax error, unrecognized expression: ' + e)
    }, t.uniqueSort = function (e) {
      var t, n = [], r = 0, i = 0
      if (j = !x.detectDuplicates, N = !x.sortStable && e.slice(0), e.sort(
          z), j) {
        for (; t = e[i++];)t === e[i] && (r = n.push(i));
        for (; r--;)e.splice(n[r], 1)
      }
      return N = null, e
    }, C = t.getText = function (e) {
      var t, n = '', r = 0, i = e.nodeType
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ('string' == typeof e.textContent)return e.textContent
          for (e = e.firstChild; e; e = e.nextSibling)n += C(e)
        } else if (3 === i || 4 === i)return e.nodeValue
      } else for (; t = e[r++];)n += C(t);
      return n
    }, w = t.selectors = {
      cacheLength: 50,
      createPseudo: r,
      match: de,
      attrHandle: {},
      find: {},
      relative: {
        '>': {dir: 'parentNode', first: !0},
        ' ': {dir: 'parentNode'},
        '+': {dir: 'previousSibling', first: !0},
        '~': {dir: 'previousSibling'},
      },
      preFilter: {
        ATTR: function (e) {
          return e[1] = e[1].replace(xe, we), e[3] = (e[3] || e[4] || e[5] ||
          '').replace(xe, we), '~=' === e[2] &&
          (e[3] = ' ' + e[3] + ' '), e.slice(0, 4)
        },
        CHILD: function (e) {
          return e[1] = e[1].toLowerCase(), 'nth' === e[1].slice(0, 3)
            ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 *
              ('even' === e[3] || 'odd' === e[3])), e[5] = +(e[7] + e[8] ||
            'odd' === e[3]))
            : e[3] && t.error(e[0]), e
        },
        PSEUDO: function (e) {
          var t, n = !e[6] && e[2]
          return de.CHILD.test(e[0]) ? null : (e[3]
            ? e[2] = e[4] || e[5] || ''
            : n && pe.test(n) && (t = S(n, !0)) &&
            (t = n.indexOf(')', n.length - t) - n.length) &&
            (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
        },
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(xe, we).toLowerCase()
          return '*' === e
            ? function () {return !0}
            : function (e) {return e.nodeName && e.nodeName.toLowerCase() === t}
        },
        CLASS: function (e) {
          var t = U[e + ' ']
          return t ||
            (t = new RegExp('(^|' + re + ')' + e + '(' + re + '|$)')) &&
            U(e, function (e) {
              return t.test('string' == typeof e.className && e.className ||
                typeof e.getAttribute !== X && e.getAttribute('class') || '')
            })
        },
        ATTR: function (e, n, r) {
          return function (i) {
            var o = t.attr(i, e)
            return null == o ? '!=' === n : !n || (o += '', '=' === n
                ? o === r
                : '!=' === n
                  ? o !== r
                  : '^=' === n
                    ? r && 0 === o.indexOf(r)
                    : '*=' === n
                      ? r && o.indexOf(r) > -1
                      : '$=' === n
                        ? r && o.slice(-r.length) === r
                        : '~=' === n
                          ? (' ' + o + ' ').indexOf(r) > -1
                          : '|=' === n &&
                          (o === r || o.slice(0, r.length + 1) === r + '-'))
          }
        },
        CHILD: function (e, t, n, r, i) {
          var o = 'nth' !== e.slice(0, 3), a = 'last' !== e.slice(-4),
            s = 'of-type' === t
          return 1 === r && 0 === i
            ? function (e) {return !!e.parentNode}
            : function (t, n, u) {
              var c, l, f, p, h, d,
                v = o !== a ? 'nextSibling' : 'previousSibling',
                g = t.parentNode, m = s && t.nodeName.toLowerCase(),
                $ = !u && !s
              if (g) {
                if (o) {
                  for (; v;) {
                    for (f = t; f = f[v];)if (s
                        ? f.nodeName.toLowerCase() === m
                        : 1 === f.nodeType)return !1
                    d = v = 'only' === e && !d && 'nextSibling'
                  }
                  return !0
                }
                if (d = [a ? g.firstChild : g.lastChild], a && $) {
                  for (l = g[R] || (g[R] = {}), c = l[e] || [], h = c[0] ===
                    I && c[1], p = c[0] === I && c[2], f = h &&
                    g.childNodes[h]; f = ++h && f && f[v] || (p = h = 0) ||
                    d.pop();)if (1 === f.nodeType && ++p && f === t) {
                    l[e] = [
                      I,
                      h,
                      p]
                    break
                  }
                } else if ($ && (c = (t[R] || (t[R] = {}))[e]) &&
                  c[0] === I) p = c[1] else for (; (f = ++h && f && f[v] ||
                  (p = h = 0) || d.pop()) && ((s
                  ? f.nodeName.toLowerCase() !== m
                  : 1 !== f.nodeType) || !++p ||
                ($ && ((f[R] || (f[R] = {}))[e] = [I, p]), f !== t)););
                return p -= i, p === r || p % r === 0 && p / r >= 0
              }
            }
        },
        PSEUDO: function (e, n) {
          var i, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] ||
            t.error('unsupported pseudo: ' + e)
          return o[R] ? o(n) : o.length > 1 ? (i = [
            e,
            e,
            '',
            n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? r(
            function (e, t) {
              for (var r, i = o(e, n), a = i.length; a--;)r = te.call(e,
                i[a]), e[r] = !(t[r] = i[a])
            }) : function (e) {return o(e, 0, i)}) : o
        },
      },
      pseudos: {
        not: r(function (e) {
          var t = [], n = [], i = E(e.replace(ue, '$1'))
          return i[R] ? r(function (e, t, n, r) {
            for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) &&
            (e[s] = !(t[s] = o))
          }) : function (e, r, o) {return t[0] = e, i(t, null, o, n), !n.pop()}
        }),
        has: r(function (e) {return function (n) {return t(e, n).length > 0}}),
        contains: r(function (e) {
          return function (t) {
            return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
          }
        }),
        lang: r(function (e) {
          return he.test(e || '') ||
          t.error('unsupported lang: ' + e), e = e.replace(xe, we).
            toLowerCase(), function (t) {
            var n
            do if (n = L ? t.lang : t.getAttribute('xml:lang') ||
                t.getAttribute('lang'))return n = n.toLowerCase(), n === e ||
            0 === n.indexOf(e + '-') while ((t = t.parentNode) &&
            1 === t.nodeType)
            return !1
          }
        }),
        target: function (t) {
          var n = e.location && e.location.hash
          return n && n.slice(1) === t.id
        },
        root: function (e) {return e === M},
        focus: function (e) {
          return e === O.activeElement && (!O.hasFocus || O.hasFocus()) &&
            !!(e.type || e.href || ~e.tabIndex)
        },
        enabled: function (e) {return e.disabled === !1},
        disabled: function (e) {return e.disabled === !0},
        checked: function (e) {
          var t = e.nodeName.toLowerCase()
          return 'input' === t && !!e.checked || 'option' === t && !!e.selected
        },
        selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
        },
        empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType <
            6)return !1
          return !0
        },
        parent: function (e) {return !w.pseudos.empty(e)},
        header: function (e) {return ge.test(e.nodeName)},
        input: function (e) {return ve.test(e.nodeName)},
        button: function (e) {
          var t = e.nodeName.toLowerCase()
          return 'input' === t && 'button' === e.type || 'button' === t
        },
        text: function (e) {
          var t
          return 'input' === e.nodeName.toLowerCase() && 'text' === e.type &&
            (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase())
        },
        first: c(function () {return [0]}),
        last: c(function (e, t) {return [t - 1]}),
        eq: c(function (e, t, n) {return [n < 0 ? n + t : n]}),
        even: c(function (e, t) {
          for (var n = 0; n < t; n += 2)e.push(n);
          return e
        }),
        odd: c(function (e, t) {
          for (var n = 1; n < t; n += 2)e.push(n);
          return e
        }),
        lt: c(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; --r >= 0;)e.push(r);
          return e
        }),
        gt: c(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;)e.push(r);
          return e
        }),
      },
    }, w.pseudos.nth = w.pseudos.eq
    for (b in{
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    })w.pseudos[b] = s(b);
    for (b in{submit: !0, reset: !0})w.pseudos[b] = u(b);
    return f.prototype = w.filters = w.pseudos, w.setFilters = new f, S = t.tokenize = function (
      e, n) {
      var r, i, o, a, s, u, c, l = V[e + ' ']
      if (l)return n ? 0 : l.slice(0)
      for (s = e, u = [], c = w.preFilter; s;) {
        r && !(i = ce.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(
          o = [])), r = !1, (i = le.exec(s)) && (r = i.shift(), o.push(
          {value: r, type: i[0].replace(ue, ' ')}), s = s.slice(r.length))
        for (a in w.filter)!(i = de[a].exec(s)) || c[a] && !(i = c[a](i)) ||
        (r = i.shift(), o.push({value: r, type: a, matches: i}), s = s.slice(
          r.length));
        if (!r)break
      }
      return n ? s.length : s ? t.error(e) : V(e, u).slice(0)
    }, E = t.compile = function (e, t) {
      var n, r = [], i = [], o = W[e + ' ']
      if (!o) {
        for (t || (t = S(e)), n = t.length; n--;)o = $(t[n]), o[R]
          ? r.push(o)
          : i.push(o);
        o = W(e, y(i, r)), o.selector = e
      }
      return o
    }, k = t.select = function (e, t, n, r) {
      var i, o, a, s, u, c = 'function' == typeof e && e,
        f = !r && S(e = c.selector || e)
      if (n = n || [], 1 === f.length) {
        if (o = f[0] = f[0].slice(0), o.length > 2 &&
          'ID' === (a = o[0]).type && x.getById && 9 === t.nodeType && L &&
          w.relative[o[1].type]) {
          if (t = (w.find.ID(a.matches[0].replace(xe, we), t) ||
            [])[0], !t)return n
          c && (t = t.parentNode), e = e.slice(o.shift().value.length)
        }
        for (i = de.needsContext.test(e) ? 0 : o.length; i-- &&
        (a = o[i], !w.relative[s = a.type]);)if ((u = w.find[s]) &&
          (r = u(a.matches[0].replace(xe, we),
            ye.test(o[0].type) && l(t.parentNode) || t))) {
          if (o.splice(i, 1), e = r.length && p(o), !e)return Z.apply(n, r), n
          break
        }
      }
      return (c || E(e, f))(r, t, !L, n, ye.test(e) && l(t.parentNode) || t), n
    }, x.sortStable = R.split('').sort(z).join('') ===
      R, x.detectDuplicates = !!j, D(), x.sortDetached = i(function (e) {
      return 1 & e.compareDocumentPosition(O.createElement('div'))
    }), i(function (e) {
      return e.innerHTML = '<a href=\'#\'></a>', '#' ===
      e.firstChild.getAttribute('href')
    }) || o('type|href|height|width', function (e, t, n) {
      if (!n)return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2)
    }), x.attributes && i(function (e) {
      return e.innerHTML = '<input/>', e.firstChild.setAttribute('value',
        ''), '' === e.firstChild.getAttribute('value')
    }) || o('value', function (e, t, n) {
      if (!n && 'input' === e.nodeName.toLowerCase())return e.defaultValue
    }), i(function (e) {return null == e.getAttribute('disabled')}) ||
    o(ne, function (e, t, n) {
      var r
      if (!n)return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(
        t)) && r.specified ? r.value : null
    }), t
  }(e)
  ie.find = ce, ie.expr = ce.selectors, ie.expr[':'] = ie.expr.pseudos, ie.unique = ce.uniqueSort, ie.text = ce.getText, ie.isXMLDoc = ce.isXML, ie.contains = ce.contains
  var le = ie.expr.match.needsContext, fe = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    pe = /^.[^:#\[\.,]*$/
  ie.filter = function (e, t, n) {
    var r = t[0]
    return n && (e = ':not(' + e + ')'), 1 === t.length && 1 === r.nodeType
      ? ie.find.matchesSelector(r, e)
        ? [r]
        : []
      : ie.find.matches(e, ie.grep(t, function (e) {return 1 === e.nodeType}))
  }, ie.fn.extend({
    find: function (e) {
      var t, n = [], r = this, i = r.length
      if ('string' != typeof e)return this.pushStack(ie(e).
        filter(function () {
          for (t = 0; t < i; t++)if (ie.contains(r[t], this))return !0
        }))
      for (t = 0; t < i; t++)ie.find(e, r[t], n);
      return n = this.pushStack(
        i > 1 ? ie.unique(n) : n), n.selector = this.selector ? this.selector +
        ' ' + e : e, n
    },
    filter: function (e) {return this.pushStack(r(this, e || [], !1))},
    not: function (e) {return this.pushStack(r(this, e || [], !0))},
    is: function (e) {
      return !!r(this, 'string' == typeof e && le.test(e) ? ie(e) : e || [],
        !1).length
    },
  })
  var he, de = e.document, ve = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    ge = ie.fn.init = function (e, t) {
      var n, r
      if (!e)return this
      if ('string' == typeof e) {
        if (n = '<' === e.charAt(0) && '>' === e.charAt(e.length - 1) &&
          e.length >= 3
            ? [
              null,
              e,
              null]
            : ve.exec(e), !n || !n[1] && t)return !t || t.jquery ? (t ||
        he).find(e) : this.constructor(t).find(e)
        if (n[1]) {
          if (t = t instanceof ie ? t[0] : t, ie.merge(this,
              ie.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : de,
                !0)), fe.test(n[1]) &&
            ie.isPlainObject(t))for (n in t)ie.isFunction(this[n])
            ? this[n](t[n])
            : this.attr(n, t[n]);
          return this
        }
        if (r = de.getElementById(n[2]), r && r.parentNode) {
          if (r.id !== n[2])return he.find(e)
          this.length = 1, this[0] = r
        }
        return this.context = de, this.selector = e, this
      }
      return e.nodeType
        ? (this.context = this[0] = e, this.length = 1, this)
        : ie.isFunction(e)
          ? 'undefined' != typeof he.ready
            ? he.ready(e)
            : e(ie)
          : (void 0 !== e.selector &&
          (this.selector = e.selector, this.context = e.context), ie.makeArray(
            e, this))
    }
  ge.prototype = ie.fn, he = ie(de)
  var me = /^(?:parents|prev(?:Until|All))/,
    $e = {children: !0, contents: !0, next: !0, prev: !0}
  ie.extend({
    dir: function (e, t, n) {
      for (var r = [], i = e[t]; i && 9 !== i.nodeType &&
      (void 0 === n || 1 !== i.nodeType || !ie(i).is(n));)1 === i.nodeType &&
      r.push(i), i = i[t];
      return r
    },
    sibling: function (e, t) {
      for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t &&
      n.push(e);
      return n
    },
  }), ie.fn.extend({
    has: function (e) {
      var t, n = ie(e, this), r = n.length
      return this.filter(function () {
        for (t = 0; t < r; t++)if (ie.contains(this, n[t]))return !0
      })
    },
    closest: function (e, t) {
      for (var n, r = 0, i = this.length, o = [], a = le.test(e) ||
      'string' != typeof e ? ie(e, t || this.context) : 0; r <
           i; r++)for (n = this[r]; n &&
      n !== t; n = n.parentNode)if (n.nodeType < 11 &&
        (a ? a.index(n) > -1 : 1 === n.nodeType &&
          ie.find.matchesSelector(n, e))) {
        o.push(n)
        break
      }
      return this.pushStack(o.length > 1 ? ie.unique(o) : o)
    },
    index: function (e) {
      return e
        ? 'string' == typeof e
          ? ie.inArray(this[0], ie(e))
          : ie.inArray(e.jquery ? e[0] : e, this)
        : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1
    },
    add: function (e, t) {
      return this.pushStack(ie.unique(ie.merge(this.get(), ie(e, t))))
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    },
  }), ie.each({
    parent: function (e) {
      var t = e.parentNode
      return t && 11 !== t.nodeType ? t : null
    },
    parents: function (e) {return ie.dir(e, 'parentNode')},
    parentsUntil: function (e, t, n) {return ie.dir(e, 'parentNode', n)},
    next: function (e) {return i(e, 'nextSibling')},
    prev: function (e) {return i(e, 'previousSibling')},
    nextAll: function (e) {return ie.dir(e, 'nextSibling')},
    prevAll: function (e) {return ie.dir(e, 'previousSibling')},
    nextUntil: function (e, t, n) {return ie.dir(e, 'nextSibling', n)},
    prevUntil: function (e, t, n) {return ie.dir(e, 'previousSibling', n)},
    siblings: function (e) {
      return ie.sibling((e.parentNode || {}).firstChild, e)
    },
    children: function (e) {return ie.sibling(e.firstChild)},
    contents: function (e) {
      return ie.nodeName(e, 'iframe')
        ? e.contentDocument || e.contentWindow.document
        : ie.merge([], e.childNodes)
    },
  }, function (e, t) {
    ie.fn[e] = function (n, r) {
      var i = ie.map(this, t, n)
      return 'Until' !== e.slice(-5) && (r = n), r && 'string' == typeof r &&
      (i = ie.filter(r, i)), this.length > 1 &&
      ($e[e] || (i = ie.unique(i)), me.test(e) &&
      (i = i.reverse())), this.pushStack(i)
    }
  })
  var ye = /\S+/g, be = {}
  ie.Callbacks = function (e) {
    e = 'string' == typeof e
      ? be[e] || o(e)
      : ie.extend({}, e)
    var t, n, r, i, a, s, u = [], c = !e.once && [], l = function (o) {
      for (n = e.memory && o, r = !0, a = s ||
        0, s = 0, i = u.length, t = !0; u && a < i; a++)if (u[a].apply(o[0],
          o[1]) === !1 && e.stopOnFalse) {
        n = !1
        break
      }
      t = !1, u && (c ? c.length && l(c.shift()) : n ? u = [] : f.disable())
    }, f = {
      add: function () {
        if (u) {
          var r = u.length
          !function o (t) {
            ie.each(t, function (t, n) {
              var r = ie.type(n)
              'function' === r ? e.unique && f.has(n) || u.push(n) : n &&
                n.length && 'string' !== r && o(n)
            })
          }(arguments), t ? i = u.length : n && (s = r, l(n))
        }
        return this
      },
      remove: function () {
        return u && ie.each(arguments, function (e, n) {
          for (var r; (r = ie.inArray(n, u, r)) > -1;)u.splice(r, 1), t &&
          (r <= i && i--, r <= a && a--)
        }), this
      },
      has: function (e) {return e ? ie.inArray(e, u) > -1 : !(!u || !u.length)},
      empty: function () {return u = [], i = 0, this},
      disable: function () {return u = c = n = void 0, this},
      disabled: function () {return !u},
      lock: function () {return c = void 0, n || f.disable(), this},
      locked: function () {return !c},
      fireWith: function (e, n) {
        return !u || r && !c ||
        (n = n || [], n = [e, n.slice ? n.slice() : n], t ? c.push(n) : l(
          n)), this
      },
      fire: function () {return f.fireWith(this, arguments), this},
      fired: function () {return !!r},
    }
    return f
  }, ie.extend({
    Deferred: function (e) {
      var t = [
        [
          'resolve',
          'done',
          ie.Callbacks('once memory'),
          'resolved'],
        [
          'reject',
          'fail',
          ie.Callbacks('once memory'),
          'rejected'],
        [
          'notify',
          'progress',
          ie.Callbacks('memory')]], n = 'pending', r = {
        state: function () {return n},
        always: function () {return i.done(arguments).fail(arguments), this},
        then: function () {
          var e = arguments
          return ie.Deferred(function (n) {
            ie.each(t, function (t, o) {
              var a = ie.isFunction(e[t]) && e[t]
              i[o[1]](function () {
                var e = a && a.apply(this, arguments)
                e && ie.isFunction(e.promise) ? e.promise().
                  done(n.resolve).
                  fail(n.reject).
                  progress(n.notify) : n[o[0] + 'With'](
                  this === r ? n.promise() : this, a ? [e] : arguments)
              })
            }), e = null
          }).promise()
        },
        promise: function (e) {return null != e ? ie.extend(e, r) : r},
      }, i = {}
      return r.pipe = r.then, ie.each(t, function (e, o) {
        var a = o[2], s = o[3]
        r[o[1]] = a.add, s && a.add(function () {n = s}, t[1 ^ e][2].disable,
          t[2][2].lock), i[o[0]] = function () {
          return i[o[0] + 'With'](this === i ? r : this, arguments), this
        }, i[o[0] + 'With'] = a.fireWith
      }), r.promise(i), e && e.call(i, i), i
    },
    when: function (e) {
      var t, n, r, i = 0, o = J.call(arguments), a = o.length,
        s = 1 !== a || e && ie.isFunction(e.promise) ? a : 0,
        u = 1 === s ? e : ie.Deferred(), c = function (e, n, r) {
          return function (i) {
            n[e] = this, r[e] = arguments.length > 1
              ? J.call(arguments)
              : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
          }
        }
      if (a > 1)for (t = new Array(a), n = new Array(a), r = new Array(a); i <
      a; i++)o[i] && ie.isFunction(o[i].promise) ? o[i].promise().
        done(c(i, r, o)).
        fail(u.reject).
        progress(c(i, n, t)) : --s;
      return s || u.resolveWith(r, o), u.promise()
    },
  })
  var xe
  ie.fn.ready = function (e) {
    return ie.ready.promise().
      done(e), this
  }, ie.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function (e) {e ? ie.readyWait++ : ie.ready(!0)},
    ready: function (e) {
      if (e === !0
          ? !--ie.readyWait
          : !ie.isReady) {
        if (!de.body)return setTimeout(ie.ready)
        ie.isReady = !0, e !== !0 && --ie.readyWait > 0 ||
        (xe.resolveWith(de, [ie]), ie.fn.triggerHandler &&
        (ie(de).triggerHandler('ready'), ie(de).off('ready')))
      }
    },
  }), ie.ready.promise = function (t) {
    if (!xe)if (xe = ie.Deferred(), 'complete' === de.readyState) setTimeout(
      ie.ready) else if (de.addEventListener) de.addEventListener(
      'DOMContentLoaded', s, !1), e.addEventListener('load', s, !1) else {
      de.attachEvent('onreadystatechange', s), e.attachEvent('onload', s)
      var n = !1
      try {n = null == e.frameElement && de.documentElement} catch (r) {}
      n && n.doScroll && !function i () {
        if (!ie.isReady) {
          try {
            n.doScroll('left')
          } catch (e) {return setTimeout(i, 50)}
          a(), ie.ready()
        }
      }()
    }
    return xe.promise(t)
  }
  var we, Ce = 'undefined'
  for (we in ie(ne))break;
  ne.ownLast = '0' !== we, ne.inlineBlockNeedsLayout = !1, ie(function () {
    var e, t, n, r
    n = de.getElementsByTagName('body')[0], n && n.style &&
    (t = de.createElement('div'), r = de.createElement(
      'div'), r.style.cssText = 'position:absolute;border:0;width:0;height:0;top:0;left:-9999px', n.appendChild(
      r).appendChild(t), typeof t.style.zoom !== Ce &&
    (t.style.cssText = 'display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1', ne.inlineBlockNeedsLayout = e = 3 ===
      t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
  }), function () {
    var e = de.createElement('div')
    if (null == ne.deleteExpando) {
      ne.deleteExpando = !0
      try {delete e.test} catch (t) {ne.deleteExpando = !1}
    }
    e = null
  }(), ie.acceptData = function (e) {
    var t = ie.noData[(e.nodeName + ' ').toLowerCase()], n = +e.nodeType || 1
    return (1 === n || 9 === n) &&
      (!t || t !== !0 && e.getAttribute('classid') === t)
  }
  var Te = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Se = /([A-Z])/g
  ie.extend({
    cache: {},
    noData: {
      'applet ': !0,
      'embed ': !0,
      'object ': 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000',
    },
    hasData: function (e) {
      return e = e.nodeType
        ? ie.cache[e[ie.expando]]
        : e[ie.expando], !!e && !c(e)
    },
    data: function (e, t, n) {return l(e, t, n)},
    removeData: function (e, t) {return f(e, t)},
    _data: function (e, t, n) {return l(e, t, n, !0)},
    _removeData: function (e, t) {return f(e, t, !0)},
  }), ie.fn.extend({
    data: function (e, t) {
      var n, r, i, o = this[0], a = o && o.attributes
      if (void 0 === e) {
        if (this.length && (i = ie.data(o), 1 === o.nodeType &&
          !ie._data(o, 'parsedAttrs'))) {
          for (n = a.length; n--;)a[n] &&
          (r = a[n].name, 0 === r.indexOf('data-') &&
          (r = ie.camelCase(r.slice(5)), u(o, r, i[r])));
          ie._data(o, 'parsedAttrs', !0)
        }
        return i
      }
      return 'object' == typeof e
        ? this.each(function () {ie.data(this, e)})
        : arguments.length > 1
          ? this.each(function () {ie.data(this, e, t)})
          : o
            ? u(o, e, ie.data(o, e))
            : void 0
    },
    removeData: function (e) {
      return this.each(function () {ie.removeData(this, e)})
    },
  }), ie.extend({
    queue: function (e, t, n) {
      var r
      if (e)return t = (t || 'fx') + 'queue', r = ie._data(e, t), n &&
      (!r || ie.isArray(n) ? r = ie._data(e, t, ie.makeArray(n)) : r.push(
        n)), r || []
    }, dequeue: function (e, t) {
      t = t || 'fx'
      var n = ie.queue(e, t), r = n.length, i = n.shift(),
        o = ie._queueHooks(e, t), a = function () {ie.dequeue(e, t)}
      'inprogress' === i && (i = n.shift(), r--), i &&
      ('fx' === t && n.unshift('inprogress'), delete o.stop, i.call(e, a,
        o)), !r && o && o.empty.fire()
    }, _queueHooks: function (e, t) {
      var n = t + 'queueHooks'
      return ie._data(e, n) || ie._data(e, n, {
          empty: ie.Callbacks('once memory').
            add(function () {
              ie._removeData(e, t + 'queue'), ie._removeData(e, n)
            }),
        })
    },
  }), ie.fn.extend({
    queue: function (e, t) {
      var n = 2
      return 'string' != typeof e && (t = e, e = 'fx', n--), arguments.length <
      n
        ? ie.queue(this[0], e)
        : void 0 === t
          ? this
          : this.each(function () {
            var n = ie.queue(this, e, t)
            ie._queueHooks(this, e), 'fx' === e && 'inprogress' !== n[0] &&
            ie.dequeue(this, e)
          })
    },
    dequeue: function (e) {return this.each(function () {ie.dequeue(this, e)})},
    clearQueue: function (e) {return this.queue(e || 'fx', [])},
    promise: function (e, t) {
      var n, r = 1, i = ie.Deferred(), o = this, a = this.length,
        s = function () {--r || i.resolveWith(o, [o])}
      for ('string' != typeof e && (t = e, e = void 0), e = e ||
        'fx'; a--;)n = ie._data(o[a], e + 'queueHooks'), n && n.empty &&
      (r++, n.empty.add(s));
      return s(), i.promise(t)
    },
  })
  var Ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ke = ['Top', 'Right', 'Bottom', 'Left'], Ae = function (e, t) {
      return e = t || e, 'none' === ie.css(e, 'display') ||
      !ie.contains(e.ownerDocument, e)
    }, Ne = ie.access = function (e, t, n, r, i, o, a) {
      var s = 0, u = e.length, c = null == n
      if ('object' === ie.type(n)) {
        i = !0
        for (s in n)ie.access(e, t, s, n[s], !0, o, a)
      } else if (void 0 !== r && (i = !0, ie.isFunction(r) || (a = !0), c &&
        (a ? (t.call(e, r), t = null) : (c = t, t = function (e, t, n) {
          return c.call(ie(e), n)
        })), t))for (; s < u; s++)t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : c ? t.call(e) : u ? t(e[0], n) : o
    }, je = /^(?:checkbox|radio)$/i
  !function () {
    var e = de.createElement('input'), t = de.createElement('div'),
      n = de.createDocumentFragment()
    if (t.innerHTML = '  <link/><table></table><a href=\'/a\'>a</a><input type=\'checkbox\'/>', ne.leadingWhitespace = 3 ===
        t.firstChild.nodeType, ne.tbody = !t.getElementsByTagName(
        'tbody').length, ne.htmlSerialize = !!t.getElementsByTagName(
        'link').length, ne.html5Clone = '<:nav></:nav>' !==
        de.createElement('nav').
          cloneNode(
            !0).outerHTML, e.type = 'checkbox', e.checked = !0, n.appendChild(
        e), ne.appendChecked = e.checked, t.innerHTML = '<textarea>x</textarea>', ne.noCloneChecked = !!t.cloneNode(
        !0).lastChild.defaultValue, n.appendChild(
        t), t.innerHTML = '<input type=\'radio\' checked=\'checked\' name=\'t\'/>', ne.checkClone = t.cloneNode(
        !0).
        cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, t.attachEvent &&
      (t.attachEvent('onclick',
        function () {ne.noCloneEvent = !1}), t.cloneNode(!0).click()), null ==
      ne.deleteExpando) {
      ne.deleteExpando = !0
      try {delete t.test} catch (r) {ne.deleteExpando = !1}
    }
  }(), function () {
    var t, n, r = de.createElement('div')
    for (t in{submit: !0, change: !0, focusin: !0})n = 'on' + t, (ne[t +
    'Bubbles'] = n in e) ||
    (r.setAttribute(n, 't'), ne[t + 'Bubbles'] = r.attributes[n].expando ===
      !1);
    r = null
  }()
  var De = /^(?:input|select|textarea)$/i, Oe = /^key/,
    Me = /^(?:mouse|pointer|contextmenu)|click/,
    Le = /^(?:focusinfocus|focusoutblur)$/, Pe = /^([^.]*)(?:\.(.+)|)$/
  ie.event = {
    global: {},
    add: function (e, t, n, r, i) {
      var o, a, s, u, c, l, f, p, h, d, v, g = ie._data(e)
      if (g) {
        for (n.handler && (u = n, n = u.handler, i = u.selector), n.guid ||
        (n.guid = ie.guid++), (a = g.events) ||
        (a = g.events = {}), (l = g.handle) || (l = g.handle = function (e) {
          return typeof ie === Ce || e && ie.event.triggered === e.type
            ? void 0
            : ie.event.dispatch.apply(l.elem, arguments)
        }, l.elem = e), t = (t || '').match(ye) ||
          [''], s = t.length; s--;)o = Pe.exec(t[s]) ||
          [], h = v = o[1], d = (o[2] || '').split('.').sort(), h &&
        (c = ie.event.special[h] || {}, h = (i ? c.delegateType : c.bindType) ||
          h, c = ie.event.special[h] || {}, f = ie.extend({
          type: h,
          origType: v,
          data: r,
          handler: n,
          guid: n.guid,
          selector: i,
          needsContext: i && ie.expr.match.needsContext.test(i),
          namespace: d.join('.'),
        }, u), (p = a[h]) || (p = a[h] = [], p.delegateCount = 0, c.setup &&
        c.setup.call(e, r, d, l) !== !1 ||
        (e.addEventListener ? e.addEventListener(h, l, !1) : e.attachEvent &&
          e.attachEvent('on' + h, l))), c.add &&
        (c.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)), i
          ? p.splice(p.delegateCount++, 0, f)
          : p.push(f), ie.event.global[h] = !0);
        e = null
      }
    },
    remove: function (e, t, n, r, i) {
      var o, a, s, u, c, l, f, p, h, d, v, g = ie.hasData(e) && ie._data(e)
      if (g && (l = g.events)) {
        for (t = (t || '').match(ye) ||
          [''], c = t.length; c--;)if (s = Pe.exec(t[c]) ||
            [], h = v = s[1], d = (s[2] || '').split('.').
            sort(), h) {
          for (f = ie.event.special[h] || {}, h = (r
              ? f.delegateType
              : f.bindType) || h, p = l[h] || [], s = s[2] && new RegExp(
              '(^|\\.)' + d.join('\\.(?:.*\\.|)') +
              '(\\.|$)'), u = o = p.length; o--;)a = p[o], !i &&
          v !== a.origType || n && n.guid !== a.guid ||
          s && !s.test(a.namespace) ||
          r && r !== a.selector && ('**' !== r || !a.selector) ||
          (p.splice(o, 1), a.selector && p.delegateCount--, f.remove &&
          f.remove.call(e, a));
          u && !p.length &&
          (f.teardown && f.teardown.call(e, d, g.handle) !== !1 ||
          ie.removeEvent(e, h, g.handle), delete l[h])
        } else for (h in l)ie.event.remove(e, h + t[c], n, r, !0);
        ie.isEmptyObject(l) && (delete g.handle, ie._removeData(e, 'events'))
      }
    },
    trigger: function (t, n, r, i) {
      var o, a, s, u, c, l, f, p = [r || de],
        h = te.call(t, 'type') ? t.type : t,
        d = te.call(t, 'namespace') ? t.namespace.split('.') : []
      if (s = l = r = r || de, 3 !== r.nodeType && 8 !== r.nodeType &&
        !Le.test(h + ie.event.triggered) && (h.indexOf('.') >= 0 &&
        (d = h.split('.'), h = d.shift(), d.sort()), a = h.indexOf(':') < 0 &&
          'on' + h, t = t[ie.expando] ? t : new ie.Event(h,
          'object' == typeof t && t), t.isTrigger = i
          ? 2
          : 3, t.namespace = d.join('.'), t.namespace_re = t.namespace
          ? new RegExp('(^|\\.)' + d.join('\\.(?:.*\\.|)') + '(\\.|$)')
          : null, t.result = void 0, t.target || (t.target = r), n = null == n
          ? [t]
          : ie.makeArray(n, [t]), c = ie.event.special[h] || {}, i ||
        !c.trigger || c.trigger.apply(r, n) !== !1)) {
        if (!i && !c.noBubble && !ie.isWindow(r)) {
          for (u = c.delegateType || h, Le.test(u + h) ||
          (s = s.parentNode); s; s = s.parentNode)p.push(s), l = s;
          l === (r.ownerDocument || de) &&
          p.push(l.defaultView || l.parentWindow || e)
        }
        for (f = 0; (s = p[f++]) && !t.isPropagationStopped();)t.type = f > 1
          ? u
          : c.bindType || h, o = (ie._data(s, 'events') || {})[t.type] &&
          ie._data(s, 'handle'), o && o.apply(s, n), o = a && s[a], o &&
        o.apply && ie.acceptData(s) &&
        (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
        if (t.type = h, !i && !t.isDefaultPrevented() &&
          (!c._default || c._default.apply(p.pop(), n) === !1) &&
          ie.acceptData(r) && a && r[h] && !ie.isWindow(r)) {
          l = r[a], l && (r[a] = null), ie.event.triggered = h
          try {r[h]()} catch (v) {}
          ie.event.triggered = void 0, l && (r[a] = l)
        }
        return t.result
      }
    },
    dispatch: function (e) {
      e = ie.event.fix(e)
      var t, n, r, i, o, a = [], s = J.call(arguments),
        u = (ie._data(this, 'events') || {})[e.type] || [],
        c = ie.event.special[e.type] || {}
      if (s[0] = e, e.delegateTarget = this, !c.preDispatch ||
        c.preDispatch.call(this, e) !== !1) {
        for (a = ie.event.handlers.call(this, e, u), t = 0; (i = a[t++]) &&
        !e.isPropagationStopped();)for (e.currentTarget = i.elem, o = 0; (r = i.handlers[o++]) &&
        !e.isImmediatePropagationStopped();)e.namespace_re &&
        !e.namespace_re.test(r.namespace) ||
        (e.handleObj = r, e.data = r.data, n = ((ie.event.special[r.origType] ||
        {}).handle || r.handler).apply(i.elem, s), void 0 !== n &&
        (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()))
        return c.postDispatch && c.postDispatch.call(this, e), e.result
      }
    },
    handlers: function (e, t) {
      var n, r, i, o, a = [], s = t.delegateCount, u = e.target
      if (s && u.nodeType && (!e.button || 'click' !== e.type))for (; u !=
                                                                      this; u = u.parentNode ||
        this)if (1 === u.nodeType &&
        (u.disabled !== !0 || 'click' !== e.type)) {
        for (i = [], o = 0; o < s; o++)r = t[o], n = r.selector +
          ' ', void 0 === i[n] &&
        (i[n] = r.needsContext ? ie(n, this).index(u) >= 0 : ie.find(n, this,
          null, [u]).length), i[n] && i.push(r);
        i.length && a.push({elem: u, handlers: i})
      }
      return s < t.length && a.push({elem: this, handlers: t.slice(s)}), a
    },
    fix: function (e) {
      if (e[ie.expando])return e
      var t, n, r, i = e.type, o = e, a = this.fixHooks[i]
      for (a || (this.fixHooks[i] = a = Me.test(i)
        ? this.mouseHooks
        : Oe.test(i)
          ? this.keyHooks
          : {}), r = a.props
        ? this.props.concat(a.props)
        : this.props, e = new ie.Event(
        o), t = r.length; t--;)n = r[t], e[n] = o[n];
      return e.target || (e.target = o.srcElement || de), 3 ===
      e.target.nodeType &&
      (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter
        ? a.filter(e, o)
        : e
    },
    props: 'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(
      ' '),
    fixHooks: {},
    keyHooks: {
      props: 'char charCode key keyCode'.split(' '),
      filter: function (e, t) {
        return null == e.which &&
        (e.which = null != t.charCode ? t.charCode : t.keyCode), e
      },
    },
    mouseHooks: {
      props: 'button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(
        ' '),
      filter: function (e, t) {
        var n, r, i, o = t.button, a = t.fromElement
        return null == e.pageX && null != t.clientX &&
        (r = e.target.ownerDocument ||
          de, i = r.documentElement, n = r.body, e.pageX = t.clientX +
          (i && i.scrollLeft || n && n.scrollLeft || 0) -
          (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY +
          (i && i.scrollTop || n && n.scrollTop || 0) -
          (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a &&
        (e.relatedTarget = a === e.target ? t.toElement : a), e.which ||
        void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
      },
    },
    special: {
      load: {noBubble: !0},
      focus: {
        trigger: function () {
          if (this !== d() &&
            this.focus)try {return this.focus(), !1} catch (e) {}
        }, delegateType: 'focusin',
      },
      blur: {
        trigger: function () {
          if (this === d() && this.blur)return this.blur(), !1
        }, delegateType: 'focusout',
      },
      click: {
        trigger: function () {
          if (ie.nodeName(this, 'input') && 'checkbox' === this.type &&
            this.click)return this.click(), !1
        }, _default: function (e) {return ie.nodeName(e.target, 'a')},
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent &&
          (e.originalEvent.returnValue = e.result)
        },
      },
    },
    simulate: function (e, t, n, r) {
      var i = ie.extend(new ie.Event, n,
        {type: e, isSimulated: !0, originalEvent: {}})
      r ? ie.event.trigger(i, null, t) : ie.event.dispatch.call(t,
        i), i.isDefaultPrevented() && n.preventDefault()
    },
  }, ie.removeEvent = de.removeEventListener ? function (
    e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1)
  } : function (e, t, n) {
    var r = 'on' + t
    e.detachEvent && (typeof e[r] === Ce && (e[r] = null), e.detachEvent(r, n))
  }, ie.Event = function (e, t) {
    return this instanceof ie.Event ? (e && e.type
      ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented ||
      void 0 === e.defaultPrevented && e.returnValue === !1 ? p : h)
      : this.type = e, t && ie.extend(this, t), this.timeStamp = e &&
      e.timeStamp || ie.now(), void(this[ie.expando] = !0)) : new ie.Event(e, t)
  }, ie.Event.prototype = {
    isDefaultPrevented: h,
    isPropagationStopped: h,
    isImmediatePropagationStopped: h,
    preventDefault: function () {
      var e = this.originalEvent
      this.isDefaultPrevented = p, e &&
      (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
    },
    stopPropagation: function () {
      var e = this.originalEvent
      this.isPropagationStopped = p, e &&
      (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
    },
    stopImmediatePropagation: function () {
      var e = this.originalEvent
      this.isImmediatePropagationStopped = p, e && e.stopImmediatePropagation &&
      e.stopImmediatePropagation(), this.stopPropagation()
    },
  }, ie.each({
    mouseenter: 'mouseover',
    mouseleave: 'mouseout',
    pointerenter: 'pointerover',
    pointerleave: 'pointerout',
  }, function (e, t) {
    ie.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function (e) {
        var n, r = this, i = e.relatedTarget, o = e.handleObj
        return i && (i === r || ie.contains(r, i)) ||
        (e.type = o.origType, n = o.handler.apply(this,
          arguments), e.type = t), n
      },
    }
  }), ne.submitBubbles || (ie.event.special.submit = {
    setup: function () {
      return !ie.nodeName(this, 'form') &&
        void ie.event.add(this, 'click._submit keypress._submit', function (e) {
          var t = e.target,
            n = ie.nodeName(t, 'input') || ie.nodeName(t, 'button')
              ? t.form
              : void 0
          n && !ie._data(n, 'submitBubbles') &&
          (ie.event.add(n, 'submit._submit',
            function (e) {e._submit_bubble = !0}), ie._data(n, 'submitBubbles',
            !0))
        })
    },
    postDispatch: function (e) {
      e._submit_bubble &&
      (delete e._submit_bubble, this.parentNode && !e.isTrigger &&
      ie.event.simulate('submit', this.parentNode, e, !0))
    },
    teardown: function () {
      return !ie.nodeName(this, 'form') &&
        void ie.event.remove(this, '._submit')
    },
  }), ne.changeBubbles || (ie.event.special.change = {
    setup: function () {
      return De.test(this.nodeName)
        ? ('checkbox' !== this.type && 'radio' !== this.type ||
        (ie.event.add(this, 'propertychange._change', function (e) {
          'checked' === e.originalEvent.propertyName &&
          (this._just_changed = !0)
        }), ie.event.add(this, 'click._change', function (e) {
          this._just_changed && !e.isTrigger &&
          (this._just_changed = !1), ie.event.simulate('change', this, e, !0)
        })), !1)
        : void ie.event.add(this, 'beforeactivate._change', function (e) {
          var t = e.target
          De.test(t.nodeName) && !ie._data(t, 'changeBubbles') &&
          (ie.event.add(t, 'change._change', function (e) {
            !this.parentNode || e.isSimulated || e.isTrigger ||
            ie.event.simulate('change', this.parentNode, e, !0)
          }), ie._data(t, 'changeBubbles', !0))
        })
    },
    handle: function (e) {
      var t = e.target
      if (this !== t || e.isSimulated || e.isTrigger || 'radio' !== t.type &&
        'checkbox' !== t.type)return e.handleObj.handler.apply(this, arguments)
    },
    teardown: function () {
      return ie.event.remove(this, '._change'), !De.test(this.nodeName)
    },
  }), ne.focusinBubbles || ie.each({focus: 'focusin', blur: 'focusout'},
    function (e, t) {
      var n = function (e) {
        ie.event.simulate(t, e.target, ie.event.fix(e), !0)
      }
      ie.event.special[t] = {
        setup: function () {
          var r = this.ownerDocument || this, i = ie._data(r, t)
          i || r.addEventListener(e, n, !0), ie._data(r, t, (i || 0) + 1)
        },
        teardown: function () {
          var r = this.ownerDocument || this, i = ie._data(r, t) - 1
          i ? ie._data(r, t, i) : (r.removeEventListener(e, n,
            !0), ie._removeData(r, t))
        },
      }
    }), ie.fn.extend({
    on: function (e, t, n, r, i) {
      var o, a
      if ('object' == typeof e) {
        'string' != typeof t && (n = n || t, t = void 0)
        for (o in e)this.on(o, t, n, e[o], i);
        return this
      }
      if (null == n && null == r ? (r = t, n = t = void 0) : null == r &&
          ('string' == typeof t
            ? (r = n, n = void 0)
            : (r = n, n = t, t = void 0)), r ===
        !1) r = h else if (!r)return this
      return 1 === i && (a = r, r = function (e) {
        return ie().off(e), a.apply(this, arguments)
      }, r.guid = a.guid || (a.guid = ie.guid++)), this.each(
        function () {ie.event.add(this, e, r, n, t)})
    },
    one: function (e, t, n, r) {return this.on(e, t, n, r, 1)},
    off: function (e, t, n) {
      var r, i
      if (e && e.preventDefault && e.handleObj)return r = e.handleObj, ie(
        e.delegateTarget).
        off(r.namespace ? r.origType + '.' + r.namespace : r.origType,
          r.selector, r.handler), this
      if ('object' == typeof e) {
        for (i in e)this.off(i, t, e[i]);
        return this
      }
      return t !== !1 && 'function' != typeof t || (n = t, t = void 0), n ===
      !1 && (n = h), this.each(function () {ie.event.remove(this, e, n, t)})
    },
    trigger: function (e, t) {
      return this.each(function () {ie.event.trigger(e, t, this)})
    },
    triggerHandler: function (e, t) {
      var n = this[0]
      if (n)return ie.event.trigger(e, t, n, !0)
    },
  })
  var _e = 'abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video',
    He = / jQuery\d+="(?:null|\d+)"/g,
    qe = new RegExp('<(?:' + _e + ')[\\s/>]', 'i'), Re = /^\s+/,
    Fe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Ie = /<([\w:]+)/, Be = /<tbody/i, Ue = /<|&#?\w+;/,
    Ve = /<(?:script|style|link)/i, We = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ze = /^$|\/(?:java|ecma)script/i, Xe = /^true\/(.*)/,
    Qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Je = {
      option: [1, '<select multiple=\'multiple\'>', '</select>'],
      legend: [1, '<fieldset>', '</fieldset>'],
      area: [1, '<map>', '</map>'],
      param: [1, '<object>', '</object>'],
      thead: [1, '<table>', '</table>'],
      tr: [2, '<table><tbody>', '</tbody></table>'],
      col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
      td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
      _default: ne.htmlSerialize ? [0, '', ''] : [1, 'X<div>', '</div>'],
    }, Ge = v(de), Ye = Ge.appendChild(de.createElement('div'))
  Je.optgroup = Je.option, Je.tbody = Je.tfoot = Je.colgroup = Je.caption = Je.thead, Je.th = Je.td, ie.extend(
    {
      clone: function (e, t, n) {
        var r, i, o, a, s, u = ie.contains(e.ownerDocument, e)
        if (ne.html5Clone || ie.isXMLDoc(e) || !qe.test('<' + e.nodeName + '>')
            ? o = e.cloneNode(!0)
            : (Ye.innerHTML = e.outerHTML, Ye.removeChild(
              o = Ye.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked ||
          1 !== e.nodeType && 11 !== e.nodeType || ie.isXMLDoc(e)))for (r = g(
          o), s = g(e), a = 0; null != (i = s[a]); ++a)r[a] && C(i, r[a]);
        if (t)if (n)for (s = s || g(e), r = r || g(o), a = 0; null !=
        (i = s[a]); a++)w(i, r[a]); else w(e, o)
        return r = g(o, 'script'), r.length > 0 &&
        x(r, !u && g(e, 'script')), r = s = i = null, o
      },
      buildFragment: function (e, t, n, r) {
        for (var i, o, a, s, u, c, l, f = e.length, p = v(t), h = [], d = 0; d <
        f; d++)if (o = e[d], o || 0 === o)if ('object' === ie.type(o)) ie.merge(
          h, o.nodeType ? [o] : o) else if (Ue.test(o)) {
          for (s = s || p.appendChild(t.createElement('div')), u = (Ie.exec(
            o) || ['', ''])[1].toLowerCase(), l = Je[u] ||
            Je._default, s.innerHTML = l[1] + o.replace(Fe, '<$1></$2>') +
            l[2], i = l[0]; i--;)s = s.lastChild;
          if (!ne.leadingWhitespace && Re.test(o) && h.push(
              t.createTextNode(Re.exec(o)[0])), !ne.tbody)for (o = 'table' !==
          u || Be.test(o)
            ? '<table>' !== l[1] || Be.test(o)
              ? 0
              : s
            : s.firstChild, i = o && o.childNodes.length; i--;)ie.nodeName(
            c = o.childNodes[i], 'tbody') && !c.childNodes.length &&
          o.removeChild(c);
          for (ie.merge(h,
            s.childNodes), s.textContent = ''; s.firstChild;)s.removeChild(
            s.firstChild);
          s = p.lastChild
        } else h.push(t.createTextNode(o))
        for (s && p.removeChild(s), ne.appendChecked ||
        ie.grep(g(h, 'input'), m), d = 0; o = h[d++];)if ((!r ||
          ie.inArray(o, r) === -1) &&
          (a = ie.contains(o.ownerDocument, o), s = g(p.appendChild(o),
            'script'), a && x(s), n))for (i = 0; o = s[i++];)ze.test(
          o.type || '') && n.push(o);
        return s = null, p
      },
      cleanData: function (e, t) {
        for (var n, r, i, o, a = 0, s = ie.expando, u = ie.cache, c = ne.deleteExpando, l = ie.event.special; null !=
        (n = e[a]); a++)if ((t || ie.acceptData(n)) &&
          (i = n[s], o = i && u[i])) {
          if (o.events)for (r in o.events)l[r]
            ? ie.event.remove(n, r)
            : ie.removeEvent(n, r, o.handle);
          u[i] && (delete u[i], c
            ? delete n[s]
            : typeof n.removeAttribute !== Ce
              ? n.removeAttribute(s)
              : n[s] = null, Q.push(i))
        }
      },
    }), ie.fn.extend({
    text: function (e) {
      return Ne(this, function (e) {
        return void 0 === e ? ie.text(this) : this.empty().
          append((this[0] && this[0].ownerDocument || de).createTextNode(e))
      }, null, e, arguments.length)
    },
    append: function () {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType ||
          9 === this.nodeType) {
          var t = $(this, e)
          t.appendChild(e)
        }
      })
    },
    prepend: function () {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType ||
          9 === this.nodeType) {
          var t = $(this, e)
          t.insertBefore(e, t.firstChild)
        }
      })
    },
    before: function () {
      return this.domManip(arguments,
        function (e) {this.parentNode && this.parentNode.insertBefore(e, this)})
    },
    after: function () {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    },
    remove: function (e, t) {
      for (var n, r = e
        ? ie.filter(e, this)
        : this, i = 0; null != (n = r[i]); i++)t || 1 !== n.nodeType ||
      ie.cleanData(g(n)), n.parentNode &&
      (t && ie.contains(n.ownerDocument, n) &&
      x(g(n, 'script')), n.parentNode.removeChild(n));
      return this
    },
    empty: function () {
      for (var e, t = 0; null != (e = this[t]); t++) {
        for (1 === e.nodeType && ie.cleanData(g(e,
          !1)); e.firstChild;)e.removeChild(e.firstChild);
        e.options && ie.nodeName(e, 'select') && (e.options.length = 0)
      }
      return this
    },
    clone: function (e, t) {
      return e = null != e && e, t = null == t
        ? e
        : t, this.map(function () {return ie.clone(this, e, t)})
    },
    html: function (e) {
      return Ne(this, function (e) {
        var t = this[0] || {}, n = 0, r = this.length
        if (void 0 === e)return 1 === t.nodeType
          ? t.innerHTML.replace(He, '')
          : void 0
        if ('string' == typeof e && !Ve.test(e) &&
          (ne.htmlSerialize || !qe.test(e)) &&
          (ne.leadingWhitespace || !Re.test(e)) &&
          !Je[(Ie.exec(e) || ['', ''])[1].toLowerCase()]) {
          e = e.replace(Fe, '<$1></$2>')
          try {
            for (; n < r; n++)t = this[n] || {}, 1 === t.nodeType &&
            (ie.cleanData(g(t, !1)), t.innerHTML = e);
            t = 0
          } catch (i) {}
        }
        t && this.empty().append(e)
      }, null, e, arguments.length)
    },
    replaceWith: function () {
      var e = arguments[0]
      return this.domManip(arguments, function (t) {
        e = this.parentNode, ie.cleanData(g(this)), e && e.replaceChild(t, this)
      }), e && (e.length || e.nodeType) ? this : this.remove()
    },
    detach: function (e) {return this.remove(e, !0)},
    domManip: function (e, t) {
      e = G.apply([], e)
      var n, r, i, o, a, s, u = 0, c = this.length, l = this, f = c - 1,
        p = e[0], h = ie.isFunction(p)
      if (h || c > 1 && 'string' == typeof p && !ne.checkClone &&
        We.test(p))return this.each(function (n) {
        var r = l.eq(n)
        h && (e[0] = p.call(this, n, r.html())), r.domManip(e, t)
      })
      if (c && (s = ie.buildFragment(e, this[0].ownerDocument, !1,
          this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
        for (o = ie.map(g(s, 'script'), y), i = o.length; u <
        c; u++)r = s, u !== f &&
        (r = ie.clone(r, !0, !0), i && ie.merge(o, g(r, 'script'))), t.call(
          this[u], r, u);
        if (i)for (a = o[o.length - 1].ownerDocument, ie.map(o, b), u = 0; u <
        i; u++)r = o[u], ze.test(r.type || '') && !ie._data(r, 'globalEval') &&
        ie.contains(a, r) &&
        (r.src ? ie._evalUrl && ie._evalUrl(r.src) : ie.globalEval(
          (r.text || r.textContent || r.innerHTML || '').replace(Qe, '')));
        s = n = null
      }
      return this
    },
  }), ie.each({
    appendTo: 'append',
    prependTo: 'prepend',
    insertBefore: 'before',
    insertAfter: 'after',
    replaceAll: 'replaceWith',
  }, function (e, t) {
    ie.fn[e] = function (e) {
      for (var n, r = 0, i = [], o = ie(e), a = o.length - 1; r <=
      a; r++)n = r === a ? this : this.clone(!0), ie(o[r])[t](n), Y.apply(i,
        n.get());
      return this.pushStack(i)
    }
  })
  var Ke, Ze = {}
  !function () {
    var e
    ne.shrinkWrapBlocks = function () {
      if (null != e)return e
      e = !1
      var t, n, r
      return n = de.getElementsByTagName('body')[0], n && n.style
        ? (t = de.createElement('div'), r = de.createElement(
          'div'), r.style.cssText = 'position:absolute;border:0;width:0;height:0;top:0;left:-9999px', n.appendChild(
          r).appendChild(t), typeof t.style.zoom !== Ce &&
        (t.style.cssText = '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1', t.appendChild(
          de.createElement('div')).style.width = '5px', e = 3 !==
          t.offsetWidth), n.removeChild(r), e)
        : void 0
    }
  }()
  var et, tt, nt = /^margin/,
    rt = new RegExp('^(' + Ee + ')(?!px)[a-z%]+$', 'i'),
    it = /^(top|right|bottom|left)$/
  e.getComputedStyle
    ? (et = function (e) {
    return e.ownerDocument.defaultView.getComputedStyle(e, null)
  }, tt = function (e, t, n) {
    var r, i, o, a, s = e.style
    return n = n || et(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n &&
    ('' !== a || ie.contains(e.ownerDocument, e) ||
    (a = ie.style(e, t)), rt.test(a) && nt.test(t) &&
    (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 ===
    a ? a : a + ''
  })
    : de.documentElement.currentStyle && (et = function (e) {
      return e.currentStyle
    }, tt = function (e, t, n) {
      var r, i, o, a, s = e.style
      return n = n || et(e), a = n ? n[t] : void 0, null == a && s && s[t] &&
      (a = s[t]), rt.test(a) && !it.test(t) &&
      (r = s.left, i = e.runtimeStyle, o = i && i.left, o &&
      (i.left = e.currentStyle.left), s.left = 'fontSize' === t
        ? '1em'
        : a, a = s.pixelLeft + 'px', s.left = r, o && (i.left = o)), void 0 ===
      a ? a : a + '' || 'auto'
    }), function () {
    function t () {
      var t, n, r, i
      n = de.getElementsByTagName('body')[0], n && n.style &&
      (t = de.createElement('div'), r = de.createElement(
        'div'), r.style.cssText = 'position:absolute;border:0;width:0;height:0;top:0;left:-9999px', n.appendChild(
        r).
        appendChild(
          t), t.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute', o = a = !1, u = !0, e.getComputedStyle &&
      (o = '1%' !== (e.getComputedStyle(t, null) || {}).top, a = '4px' ===
        (e.getComputedStyle(t, null) ||
        {width: '4px'}).width, i = t.appendChild(de.createElement(
        'div')), i.style.cssText = t.style.cssText = '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0', i.style.marginRight = i.style.width = '0', t.style.width = '1px', u = !parseFloat(
        (e.getComputedStyle(i, null) ||
        {}).marginRight)), t.innerHTML = '<table><tr><td></td><td>t</td></tr></table>', i = t.getElementsByTagName(
        'td'), i[0].style.cssText = 'margin:0;border:0;padding:0;display:none', s = 0 ===
        i[0].offsetHeight, s &&
      (i[0].style.display = '', i[1].style.display = 'none', s = 0 ===
        i[0].offsetHeight), n.removeChild(r))
    }

    var n, r, i, o, a, s, u
    n = de.createElement(
      'div'), n.innerHTML = '  <link/><table></table><a href=\'/a\'>a</a><input type=\'checkbox\'/>', i = n.getElementsByTagName(
      'a')[0], r = i && i.style, r &&
    (r.cssText = 'float:left;opacity:.5', ne.opacity = '0.5' ===
      r.opacity, ne.cssFloat = !!r.cssFloat, n.style.backgroundClip = 'content-box', n.cloneNode(
      !0).style.backgroundClip = '', ne.clearCloneStyle = 'content-box' ===
      n.style.backgroundClip, ne.boxSizing = '' === r.boxSizing ||
      '' === r.MozBoxSizing || '' === r.WebkitBoxSizing, ie.extend(ne, {
      reliableHiddenOffsets: function () {return null == s && t(), s},
      boxSizingReliable: function () {return null == a && t(), a},
      pixelPosition: function () {return null == o && t(), o},
      reliableMarginRight: function () {return null == u && t(), u},
    }))
  }(), ie.swap = function (e, t, n, r) {
    var i, o, a = {}
    for (o in t)a[o] = e.style[o], e.style[o] = t[o];
    i = n.apply(e, r || [])
    for (o in t)e.style[o] = a[o];
    return i
  }
  var ot = /alpha\([^)]*\)/i, at = /opacity\s*=\s*([^)]*)/,
    st = /^(none|table(?!-c[ea]).+)/,
    ut = new RegExp('^(' + Ee + ')(.*)$', 'i'),
    ct = new RegExp('^([+-])=(' + Ee + ')', 'i'),
    lt = {position: 'absolute', visibility: 'hidden', display: 'block'},
    ft = {letterSpacing: '0', fontWeight: '400'},
    pt = ['Webkit', 'O', 'Moz', 'ms']
  ie.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = tt(e, 'opacity')
            return '' === n ? '1' : n
          }
        },
      },
    },
    cssNumber: {
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
      zoom: !0,
    },
    cssProps: {'float': ne.cssFloat ? 'cssFloat' : 'styleFloat'},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i, o, a, s = ie.camelCase(t), u = e.style
        if (t = ie.cssProps[s] ||
            (ie.cssProps[s] = k(u, s)), a = ie.cssHooks[t] ||
            ie.cssHooks[s], void 0 === n)return a && 'get' in a &&
        void 0 !== (i = a.get(e, !1, r)) ? i : u[t]
        if (o = typeof n, 'string' === o && (i = ct.exec(n)) &&
          (n = (i[1] + 1) * i[2] +
            parseFloat(ie.css(e, t)), o = 'number'), null != n && n === n &&
          ('number' !== o || ie.cssNumber[s] ||
          (n += 'px'), ne.clearCloneStyle || '' !== n ||
          0 !== t.indexOf('background') || (u[t] = 'inherit'), !(a &&
          'set' in a &&
          void 0 === (n = a.set(e, n, r)))))try {u[t] = n} catch (c) {}
      }
    },
    css: function (e, t, n, r) {
      var i, o, a, s = ie.camelCase(t)
      return t = ie.cssProps[s] ||
        (ie.cssProps[s] = k(e.style, s)), a = ie.cssHooks[t] ||
        ie.cssHooks[s], a && 'get' in a && (o = a.get(e, !0, n)), void 0 ===
      o && (o = tt(e, t, r)), 'normal' === o && t in ft && (o = ft[t]), '' ===
      n || n ? (i = parseFloat(o), n === !0 || ie.isNumeric(i) ? i || 0 : o) : o
    },
  }), ie.each(['height', 'width'], function (e, t) {
    ie.cssHooks[t] = {
      get: function (e, n, r) {
        if (n)return st.test(ie.css(e, 'display')) && 0 === e.offsetWidth
          ? ie.swap(e, lt, function () {return D(e, t, r)})
          : D(e, t, r)
      }, set: function (e, n, r) {
        var i = r && et(e)
        return N(e, n, r
          ? j(e, t, r,
            ne.boxSizing && 'border-box' === ie.css(e, 'boxSizing', !1, i), i)
          : 0)
      },
    }
  }), ne.opacity || (ie.cssHooks.opacity = {
    get: function (e, t) {
      return at.test(
        (t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || '')
        ? .01 * parseFloat(RegExp.$1) + ''
        : t
          ? '1'
          : ''
    },
    set: function (e, t) {
      var n = e.style, r = e.currentStyle,
        i = ie.isNumeric(t) ? 'alpha(opacity=' + 100 * t + ')' : '',
        o = r && r.filter || n.filter || ''
      n.zoom = 1, (t >= 1 || '' === t) && '' === ie.trim(o.replace(ot, '')) &&
      n.removeAttribute &&
      (n.removeAttribute('filter'), '' === t || r && !r.filter) ||
      (n.filter = ot.test(o) ? o.replace(ot, i) : o + ' ' + i)
    },
  }), ie.cssHooks.marginRight = E(ne.reliableMarginRight, function (e, t) {
    if (t)return ie.swap(e, {display: 'inline-block'}, tt, [e, 'marginRight'])
  }), ie.each({margin: '', padding: '', border: 'Width'}, function (e, t) {
    ie.cssHooks[e + t] = {
      expand: function (n) {
        for (var r = 0, i = {}, o = 'string' == typeof n
          ? n.split(' ')
          : [n]; r < 4; r++)i[e + ke[r] + t] = o[r] || o[r - 2] || o[0];
        return i
      },
    }, nt.test(e) || (ie.cssHooks[e + t].set = N)
  }), ie.fn.extend({
    css: function (e, t) {
      return Ne(this, function (e, t, n) {
        var r, i, o = {}, a = 0
        if (ie.isArray(t)) {
          for (r = et(e), i = t.length; a < i; a++)o[t[a]] = ie.css(e, t[a], !1,
            r);
          return o
        }
        return void 0 !== n ? ie.style(e, t, n) : ie.css(e, t)
      }, e, t, arguments.length > 1)
    },
    show: function () {return A(this, !0)},
    hide: function () {return A(this)},
    toggle: function (e) {
      return 'boolean' == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {Ae(this) ? ie(this).show() : ie(this).hide()})
    },
  }), ie.Tween = O, O.prototype = {
    constructor: O,
    init: function (e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i ||
        'swing', this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o ||
        (ie.cssNumber[n] ? '' : 'px')
    },
    cur: function () {
      var e = O.propHooks[this.prop]
      return e && e.get ? e.get(this) : O.propHooks._default.get(this)
    },
    run: function (e) {
      var t, n = O.propHooks[this.prop]
      return this.options.duration
        ? this.pos = t = ie.easing[this.easing](e, this.options.duration * e, 0,
          1, this.options.duration)
        : this.pos = t = e, this.now = (this.end - this.start) * t +
        this.start, this.options.step &&
      this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(
        this) : O.propHooks._default.set(this), this
    },
  }, O.prototype.init.prototype = O.prototype, O.propHooks = {
    _default: {
      get: function (e) {
        var t
        return null == e.elem[e.prop] ||
        e.elem.style && null != e.elem.style[e.prop] ? (t = ie.css(e.elem,
          e.prop, ''), t && 'auto' !== t ? t : 0) : e.elem[e.prop]
      },
      set: function (e) {
        ie.fx.step[e.prop]
          ? ie.fx.step[e.prop](e)
          : e.elem.style &&
        (null != e.elem.style[ie.cssProps[e.prop]] || ie.cssHooks[e.prop])
          ? ie.style(e.elem, e.prop, e.now + e.unit)
          : e.elem[e.prop] = e.now
      },
    },
  }, O.propHooks.scrollTop = O.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    },
  }, ie.easing = {
    linear: function (e) {return e},
    swing: function (e) {return .5 - Math.cos(e * Math.PI) / 2},
  }, ie.fx = O.prototype.init, ie.fx.step = {}
  var ht, dt, vt = /^(?:toggle|show|hide)$/,
    gt = new RegExp('^(?:([+-])=|)(' + Ee + ')([a-z%]*)$', 'i'),
    mt = /queueHooks$/, $t = [_], yt = {
      '*': [
        function (e, t) {
          var n = this.createTween(e, t), r = n.cur(), i = gt.exec(t),
            o = i && i[3] || (ie.cssNumber[e] ? '' : 'px'),
            a = (ie.cssNumber[e] || 'px' !== o && +r) &&
              gt.exec(ie.css(n.elem, e)), s = 1, u = 20
          if (a && a[3] !== o) {
            o = o || a[3], i = i || [], a = +r || 1
            do s = s || '.5', a /= s, ie.style(n.elem, e, a + o) while (s !==
            (s = n.cur() / r) && 1 !== s && --u)
          }
          return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a +
            (i[1] + 1) * i[2] : +i[2]), n
        }],
    }
  ie.Animation = ie.extend(q, {
    tweener: function (e, t) {
      ie.isFunction(e)
        ? (t = e, e = ['*'])
        : e = e.split(' ')
      for (var n, r = 0, i = e.length; r < i; r++)n = e[r], yt[n] = yt[n] ||
        [], yt[n].unshift(t)
    }, prefilter: function (e, t) {t ? $t.unshift(e) : $t.push(e)},
  }), ie.speed = function (e, t, n) {
    var r = e && 'object' == typeof e
      ? ie.extend({}, e)
      : {
        complete: n || !n && t || ie.isFunction(e) && e,
        duration: e,
        easing: n && t || t && !ie.isFunction(t) && t,
      }
    return r.duration = ie.fx.off
      ? 0
      : 'number' == typeof r.duration
        ? r.duration
        : r.duration in ie.fx.speeds
          ? ie.fx.speeds[r.duration]
          : ie.fx.speeds._default, null != r.queue && r.queue !== !0 ||
    (r.queue = 'fx'), r.old = r.complete, r.complete = function () {
      ie.isFunction(r.old) && r.old.call(this), r.queue &&
      ie.dequeue(this, r.queue)
    }, r
  }, ie.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter(Ae).
        css('opacity', 0).
        show().
        end().
        animate({opacity: t}, e, n, r)
    },
    animate: function (e, t, n, r) {
      var i = ie.isEmptyObject(e), o = ie.speed(t, n, r), a = function () {
        var t = q(this, ie.extend({}, e), o);
        (i || ie._data(this, 'finish')) && t.stop(!0)
      }
      return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(
        o.queue, a)
    },
    stop: function (e, t, n) {
      var r = function (e) {
        var t = e.stop
        delete e.stop, t(n)
      }
      return 'string' != typeof e && (n = t, t = e, e = void 0), t &&
      e !== !1 && this.queue(e || 'fx', []), this.each(function () {
        var t = !0, i = null != e && e + 'queueHooks', o = ie.timers,
          a = ie._data(this)
        if (i) a[i] && a[i].stop && r(a[i]) else for (i in a)a[i] &&
        a[i].stop && mt.test(i) && r(a[i]);
        for (i = o.length; i--;)o[i].elem !== this ||
        null != e && o[i].queue !== e ||
        (o[i].anim.stop(n), t = !1, o.splice(i, 1));
        !t && n || ie.dequeue(this, e)
      })
    },
    finish: function (e) {
      return e !== !1 && (e = e || 'fx'), this.each(function () {
        var t, n = ie._data(this), r = n[e + 'queue'], i = n[e + 'queueHooks'],
          o = ie.timers, a = r ? r.length : 0
        for (n.finish = !0, ie.queue(this, e, []), i && i.stop &&
        i.stop.call(this, !0), t = o.length; t--;)o[t].elem === this &&
        o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        for (t = 0; t < a; t++)r[t] && r[t].finish && r[t].finish.call(this);
        delete n.finish
      })
    },
  }), ie.each(['toggle', 'show', 'hide'], function (e, t) {
    var n = ie.fn[t]
    ie.fn[t] = function (e, r, i) {
      return null == e || 'boolean' == typeof e
        ? n.apply(this, arguments)
        : this.animate(L(t, !0), e, r, i)
    }
  }), ie.each({
    slideDown: L('show'),
    slideUp: L('hide'),
    slideToggle: L('toggle'),
    fadeIn: {opacity: 'show'},
    fadeOut: {opacity: 'hide'},
    fadeToggle: {opacity: 'toggle'},
  }, function (e, t) {
    ie.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r)
    }
  }), ie.timers = [], ie.fx.tick = function () {
    var e, t = ie.timers, n = 0
    for (ht = ie.now(); n < t.length; n++)e = t[n], e() || t[n] !== e ||
    t.splice(n--, 1);
    t.length || ie.fx.stop(), ht = void 0
  }, ie.fx.timer = function (e) {
    ie.timers.push(e), e()
      ? ie.fx.start()
      : ie.timers.pop()
  }, ie.fx.interval = 13, ie.fx.start = function () {
    dt || (dt = setInterval(ie.fx.tick, ie.fx.interval))
  }, ie.fx.stop = function () {
    clearInterval(dt), dt = null
  }, ie.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400,
  }, ie.fn.delay = function (e, t) {
    return e = ie.fx
      ? ie.fx.speeds[e] || e
      : e, t = t || 'fx', this.queue(t, function (t, n) {
      var r = setTimeout(t, e)
      n.stop = function () {clearTimeout(r)}
    })
  }, function () {
    var e, t, n, r, i
    t = de.createElement('div'), t.setAttribute('className',
      't'), t.innerHTML = '  <link/><table></table><a href=\'/a\'>a</a><input type=\'checkbox\'/>', r = t.getElementsByTagName(
      'a')[0], n = de.createElement('select'), i = n.appendChild(
      de.createElement('option')), e = t.getElementsByTagName(
      'input')[0], r.style.cssText = 'top:1px', ne.getSetAttribute = 't' !==
      t.className, ne.style = /top/.test(
      r.getAttribute('style')), ne.hrefNormalized = '/a' === r.getAttribute(
        'href'), ne.checkOn = !!e.value, ne.optSelected = i.selected, ne.enctype = !!de.createElement(
      'form').enctype, n.disabled = !0, ne.optDisabled = !i.disabled, e = de.createElement(
      'input'), e.setAttribute('value', ''), ne.input = '' ===
      e.getAttribute('value'), e.value = 't', e.setAttribute('type',
      'radio'), ne.radioValue = 't' === e.value
  }()
  var bt = /\r/g
  ie.fn.extend({
    val: function (e) {
      var t, n, r, i = this[0]
      {
        if (arguments.length)return r = ie.isFunction(e), this.each(
          function (n) {
            var i
            1 === this.nodeType &&
            (i = r ? e.call(this, n, ie(this).val()) : e, null == i
              ? i = ''
              : 'number' == typeof i
                ? i += ''
                : ie.isArray(i) && (i = ie.map(i, function (e) {
                  return null == e ? '' : e + ''
                })), t = ie.valHooks[this.type] ||
              ie.valHooks[this.nodeName.toLowerCase()], t && 'set' in t &&
            void 0 !== t.set(this, i, 'value') || (this.value = i))
          })
        if (i)return t = ie.valHooks[i.type] ||
          ie.valHooks[i.nodeName.toLowerCase()], t && 'get' in t &&
        void 0 !== (n = t.get(i, 'value')) ? n : (n = i.value, 'string' ==
        typeof n ? n.replace(bt, '') : null == n ? '' : n)
      }
    },
  }), ie.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = ie.find.attr(e, 'value')
          return null != t ? t : ie.trim(ie.text(e))
        },
      },
      select: {
        get: function (e) {
          for (var t, n, r = e.options, i = e.selectedIndex, o = 'select-one' ===
            e.type || i < 0, a = o ? null : [], s = o
            ? i + 1
            : r.length, u = i < 0 ? s : o ? i : 0; u <
               s; u++)if (n = r[u], (n.selected || u === i) &&
            (ne.optDisabled ? !n.disabled : null ===
              n.getAttribute('disabled')) && (!n.parentNode.disabled ||
            !ie.nodeName(n.parentNode, 'optgroup'))) {
            if (t = ie(n).
                val(), o)return t
            a.push(t)
          }
          return a
        },
        set: function (e, t) {
          for (var n, r, i = e.options, o = ie.makeArray(
            t), a = i.length; a--;)if (r = i[a], ie.inArray(
              ie.valHooks.option.get(r), o) >=
            0)try {r.selected = n = !0} catch (s) {r.scrollHeight} else r.selected = !1
          return n || (e.selectedIndex = -1), i
        },
      },
    },
  }), ie.each(['radio', 'checkbox'], function () {
    ie.valHooks[this] = {
      set: function (e, t) {
        if (ie.isArray(t))return e.checked = ie.inArray(ie(e).val(), t) >= 0
      },
    }, ne.checkOn || (ie.valHooks[this].get = function (e) {
      return null === e.getAttribute('value') ? 'on' : e.value
    })
  })
  var xt, wt, Ct = ie.expr.attrHandle, Tt = /^(?:checked|selected)$/i,
    St = ne.getSetAttribute, Et = ne.input
  ie.fn.extend({
    attr: function (e, t) {
      return Ne(this, ie.attr, e, t, arguments.length > 1)
    },
    removeAttr: function (e) {
      return this.each(function () {ie.removeAttr(this, e)})
    },
  }), ie.extend({
    attr: function (e, t, n) {
      var r, i, o = e.nodeType
      if (e && 3 !== o && 8 !== o && 2 !== o)return typeof e.getAttribute === Ce
        ? ie.prop(e, t, n)
        : (1 === o && ie.isXMLDoc(e) ||
        (t = t.toLowerCase(), r = ie.attrHooks[t] ||
          (ie.expr.match.bool.test(t) ? wt : xt)), void 0 === n
          ? r && 'get' in r && null !== (i = r.get(e, t))
            ? i
            : (i = ie.find.attr(e, t), null == i ? void 0 : i)
          : null !== n
            ? r && 'set' in r && void 0 !== (i = r.set(e, n, t))
              ? i
              : (e.setAttribute(t, n + ''), n)
            : void ie.removeAttr(e, t))
    },
    removeAttr: function (e, t) {
      var n, r, i = 0, o = t && t.match(ye)
      if (o && 1 === e.nodeType)for (; n = o[i++];)r = ie.propFix[n] ||
        n, ie.expr.match.bool.test(n)
        ? Et && St || !Tt.test(n)
          ? e[r] = !1
          : e[ie.camelCase('default-' + n)] = e[r] = !1
        : ie.attr(e, n, ''), e.removeAttribute(St ? n : r)
    },
    attrHooks: {
      type: {
        set: function (e, t) {
          if (!ne.radioValue && 'radio' === t && ie.nodeName(e, 'input')) {
            var n = e.value
            return e.setAttribute('type', t), n && (e.value = n), t
          }
        },
      },
    },
  }), wt = {
    set: function (e, t, n) {
      return t === !1
        ? ie.removeAttr(e, n)
        : Et && St || !Tt.test(n)
          ? e.setAttribute(!St && ie.propFix[n] || n, n)
          : e[ie.camelCase('default-' + n)] = e[n] = !0, n
    },
  }, ie.each(ie.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = Ct[t] || ie.find.attr
    Ct[t] = Et && St || !Tt.test(t) ? function (e, t, r) {
      var i, o
      return r || (o = Ct[t], Ct[t] = i, i = null != n(e, t, r)
        ? t.toLowerCase()
        : null, Ct[t] = o), i
    } : function (e, t, n) {
      if (!n)return e[ie.camelCase('default-' + t)]
        ? t.toLowerCase()
        : null
    }
  }), Et && St || (ie.attrHooks.value = {
    set: function (e, t, n) {
      return ie.nodeName(e, 'input')
        ? void(e.defaultValue = t)
        : xt && xt.set(e, t, n)
    },
  }), St || (xt = {
    set: function (e, t, n) {
      var r = e.getAttributeNode(n)
      if (r || e.setAttributeNode(r = e.ownerDocument.createAttribute(
          n)), r.value = t += '', 'value' === n ||
        t === e.getAttribute(n))return t
    },
  }, Ct.id = Ct.name = Ct.coords = function (e, t, n) {
    var r
    if (!n)return (r = e.getAttributeNode(t)) && '' !== r.value ? r.value : null
  }, ie.valHooks.button = {
    get: function (e, t) {
      var n = e.getAttributeNode(t)
      if (n && n.specified)return n.value
    }, set: xt.set,
  }, ie.attrHooks.contenteditable = {
    set: function (e, t, n) {
      xt.set(e, '' !== t && t, n)
    },
  }, ie.each(['width', 'height'], function (e, t) {
    ie.attrHooks[t] = {
      set: function (e, n) {
        if ('' === n)return e.setAttribute(t, 'auto'), n
      },
    }
  })), ne.style || (ie.attrHooks.style = {
    get: function (e) {return e.style.cssText || void 0},
    set: function (e, t) {return e.style.cssText = t + ''},
  })
  var kt = /^(?:input|select|textarea|button|object)$/i, At = /^(?:a|area)$/i
  ie.fn.extend({
    prop: function (e, t) {
      return Ne(this, ie.prop, e, t, arguments.length > 1)
    },
    removeProp: function (e) {
      return e = ie.propFix[e] || e, this.each(
        function () {try {this[e] = void 0, delete this[e]} catch (t) {}})
    },
  }), ie.extend({
    propFix: {'for': 'htmlFor', 'class': 'className'},
    prop: function (e, t, n) {
      var r, i, o, a = e.nodeType
      if (e && 3 !== a && 8 !== a && 2 !== a)return o = 1 !== a ||
        !ie.isXMLDoc(e), o &&
      (t = ie.propFix[t] || t, i = ie.propHooks[t]), void 0 !== n ? i &&
      'set' in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i &&
      'get' in i && null !== (r = i.get(e, t)) ? r : e[t]
    },
    propHooks: {
      tabIndex: {
        get: function (e) {
          var t = ie.find.attr(e, 'tabindex')
          return t ? parseInt(t, 10) : kt.test(e.nodeName) ||
          At.test(e.nodeName) && e.href ? 0 : -1
        },
      },
    },
  }), ne.hrefNormalized || ie.each(['href', 'src'], function (e, t) {
    ie.propHooks[t] = {
      get: function (e) {
        return e.getAttribute(t, 4)
      },
    }
  }), ne.optSelected || (ie.propHooks.selected = {
    get: function (e) {
      var t = e.parentNode
      return t &&
      (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
    },
  }), ie.each([
      'tabIndex',
      'readOnly',
      'maxLength',
      'cellSpacing',
      'cellPadding',
      'rowSpan',
      'colSpan',
      'useMap',
      'frameBorder',
      'contentEditable'],
    function () {ie.propFix[this.toLowerCase()] = this}), ne.enctype ||
  (ie.propFix.enctype = 'encoding')
  var Nt = /[\t\r\n\f]/g
  ie.fn.extend({
    addClass: function (e) {
      var t, n, r, i, o, a, s = 0, u = this.length,
        c = 'string' == typeof e && e
      if (ie.isFunction(e))return this.each(
        function (t) {ie(this).addClass(e.call(this, t, this.className))})
      if (c)for (t = (e || '').match(ye) || []; s <
      u; s++)if (n = this[s], r = 1 === n.nodeType && (n.className
            ? (' ' + n.className + ' ').replace(Nt, ' ')
            : ' ')) {
        for (o = 0; i = t[o++];)r.indexOf(' ' + i + ' ') < 0 && (r += i + ' ');
        a = ie.trim(r), n.className !== a && (n.className = a)
      }
      return this
    },
    removeClass: function (e) {
      var t, n, r, i, o, a, s = 0, u = this.length,
        c = 0 === arguments.length || 'string' == typeof e && e
      if (ie.isFunction(e))return this.each(
        function (t) {ie(this).removeClass(e.call(this, t, this.className))})
      if (c)for (t = (e || '').match(ye) || []; s <
      u; s++)if (n = this[s], r = 1 === n.nodeType && (n.className
            ? (' ' + n.className + ' ').replace(Nt, ' ')
            : '')) {
        for (o = 0; i = t[o++];)for (; r.indexOf(' ' + i + ' ') >=
                                       0;)r = r.replace(' ' + i + ' ', ' ')
        a = e ? ie.trim(r) : '', n.className !== a && (n.className = a)
      }
      return this
    },
    toggleClass: function (e, t) {
      var n = typeof e
      return 'boolean' == typeof t && 'string' === n
        ? t
          ? this.addClass(e)
          : this.removeClass(e)
        : ie.isFunction(e)
          ? this.each(function (n) {
            ie(this).
              toggleClass(e.call(this, n, this.className, t), t)
          })
          : this.each(function () {
            if ('string' === n)for (var t, r = 0, i = ie(this), o = e.match(
                ye) || []; t = o[r++];)i.hasClass(t)
              ? i.removeClass(t)
              : i.addClass(t); else n !== Ce && 'boolean' !== n ||
            (this.className && ie._data(this, '__className__',
              this.className), this.className = this.className || e === !1
              ? ''
              : ie._data(this, '__className__') || '')
          })
    },
    hasClass: function (e) {
      for (var t = ' ' + e + ' ', n = 0, r = this.length; n < r; n++)if (1 ===
        this[n].nodeType &&
        (' ' + this[n].className + ' ').replace(Nt, ' ').indexOf(t) >=
        0)return !0
      return !1
    },
  }), ie.each(
    'blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(
      ' '), function (e, t) {
      ie.fn[t] = function (e, n) {
        return arguments.length > 0
          ? this.on(t, null, e, n)
          : this.trigger(t)
      }
    }), ie.fn.extend({
    hover: function (e, t) {return this.mouseenter(e).mouseleave(t || e)},
    bind: function (e, t, n) {return this.on(e, null, t, n)},
    unbind: function (e, t) {return this.off(e, null, t)},
    delegate: function (e, t, n, r) {return this.on(t, e, n, r)},
    undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**',
        n)
    },
  })
  var jt = ie.now(), Dt = /\?/,
    Ot = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g
  ie.parseJSON = function (t) {
    if (e.JSON && e.JSON.parse)return e.JSON.parse(t + '')
    var n, r = null, i = ie.trim(t + '')
    return i && !ie.trim(i.replace(Ot, function (e, t, i, o) {
      return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !o - !i, '')
    })) ? Function('return ' + i)() : ie.error('Invalid JSON: ' + t)
  }, ie.parseXML = function (t) {
    var n, r
    if (!t || 'string' != typeof t)return null
    try {
      e.DOMParser
        ? (r = new DOMParser, n = r.parseFromString(t, 'text/xml'))
        : (n = new ActiveXObject(
        'Microsoft.XMLDOM'), n.async = 'false', n.loadXML(t))
    } catch (i) {n = void 0}
    return n && n.documentElement &&
    !n.getElementsByTagName('parsererror').length ||
    ie.error('Invalid XML: ' + t), n
  }
  var Mt, Lt, Pt = /#.*$/, _t = /([?&])_=[^&]*/,
    Ht = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    qt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Rt = /^(?:GET|HEAD)$/, Ft = /^\/\//,
    It = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Bt = {},
    Ut = {}, Vt = '*/'.concat('*')
  try {Lt = location.href} catch (Wt) {
    Lt = de.createElement('a'), Lt.href = '', Lt = Lt.href
  }
  Mt = It.exec(Lt.toLowerCase()) || [], ie.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Lt,
      type: 'GET',
      isLocal: qt.test(Mt[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      accepts: {
        '*': Vt,
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript',
      },
      contents: {xml: /xml/, html: /html/, json: /json/},
      responseFields: {
        xml: 'responseXML',
        text: 'responseText',
        json: 'responseJSON',
      },
      converters: {
        '* text': String,
        'text html': !0,
        'text json': ie.parseJSON,
        'text xml': ie.parseXML,
      },
      flatOptions: {url: !0, context: !0},
    },
    ajaxSetup: function (e, t) {
      return t ? I(I(e, ie.ajaxSettings), t) : I(ie.ajaxSettings, e)
    },
    ajaxPrefilter: R(Bt),
    ajaxTransport: R(Ut),
    ajax: function (e, t) {
      function n (e, t, n, r) {
        var i, l, m, $, b, w = t
        2 !== y && (y = 2, s && clearTimeout(s), c = void 0, a = r ||
          '', x.readyState = e > 0 ? 4 : 0, i = e >= 200 && e < 300 ||
          304 === e, n && ($ = B(f, x, n)), $ = U(f, $, x, i), i
          ? (f.ifModified && (b = x.getResponseHeader('Last-Modified'), b &&
          (ie.lastModified[o] = b), b = x.getResponseHeader('etag'), b &&
          (ie.etag[o] = b)), 204 === e || 'HEAD' === f.type
            ? w = 'nocontent'
            : 304 === e
              ? w = 'notmodified'
              : (w = $.state, l = $.data, m = $.error, i = !m))
          : (m = w, !e && w ||
          (w = 'error', e < 0 && (e = 0))), x.status = e, x.statusText = (t ||
          w) + '', i ? d.resolveWith(p, [l, w, x]) : d.rejectWith(p,
          [x, w, m]), x.statusCode(g), g = void 0, u &&
        h.trigger(i ? 'ajaxSuccess' : 'ajaxError',
          [x, f, i ? l : m]), v.fireWith(p, [x, w]), u &&
        (h.trigger('ajaxComplete', [x, f]), --ie.active ||
        ie.event.trigger('ajaxStop')))
      }

      'object' == typeof e && (t = e, e = void 0), t = t || {}
      var r, i, o, a, s, u, c, l, f = ie.ajaxSetup({}, t), p = f.context || f,
        h = f.context && (p.nodeType || p.jquery) ? ie(p) : ie.event,
        d = ie.Deferred(), v = ie.Callbacks('once memory'),
        g = f.statusCode || {}, m = {}, $ = {}, y = 0, b = 'canceled', x = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t
            if (2 === y) {
              if (!l)for (l = {}; t = Ht.exec(a);)l[t[1].toLowerCase()] = t[2];
              t = l[e.toLowerCase()]
            }
            return null == t ? null : t
          },
          getAllResponseHeaders: function () {return 2 === y ? a : null},
          setRequestHeader: function (e, t) {
            var n = e.toLowerCase()
            return y || (e = $[n] = $[n] || e, m[e] = t), this
          },
          overrideMimeType: function (e) {return y || (f.mimeType = e), this},
          statusCode: function (e) {
            var t
            if (e)if (y < 2)for (t in e)g[t] = [g[t], e[t]]; else x.always(
              e[x.status])
            return this
          },
          abort: function (e) {
            var t = e || b
            return c && c.abort(t), n(0, t), this
          },
        }
      if (d.promise(
          x).complete = v.add, x.success = x.done, x.error = x.fail, f.url = ((e ||
        f.url || Lt) + '').replace(Pt, '').
          replace(Ft, Mt[1] + '//'), f.type = t.method || t.type || f.method ||
          f.type, f.dataTypes = ie.trim(f.dataType || '*').
            toLowerCase().
            match(ye) || [''], null == f.crossDomain &&
        (r = It.exec(f.url.toLowerCase()), f.crossDomain = !(!r ||
        r[1] === Mt[1] && r[2] === Mt[2] &&
        (r[3] || ('http:' === r[1] ? '80' : '443')) ===
        (Mt[3] || ('http:' === Mt[1] ? '80' : '443')))), f.data &&
        f.processData && 'string' != typeof f.data &&
        (f.data = ie.param(f.data, f.traditional)), F(Bt, f, t, x), 2 ===
        y)return x
      u = f.global, u && 0 === ie.active++ && ie.event.trigger(
        'ajaxStart'), f.type = f.type.toUpperCase(), f.hasContent = !Rt.test(
        f.type), o = f.url, f.hasContent || (f.data &&
      (o = f.url += (Dt.test(o) ? '&' : '?') +
        f.data, delete f.data), f.cache === !1 &&
      (f.url = _t.test(o) ? o.replace(_t, '$1_=' + jt++) : o +
        (Dt.test(o) ? '&' : '?') + '_=' + jt++)), f.ifModified &&
      (ie.lastModified[o] &&
      x.setRequestHeader('If-Modified-Since', ie.lastModified[o]), ie.etag[o] &&
      x.setRequestHeader('If-None-Match', ie.etag[o])), (f.data &&
      f.hasContent && f.contentType !== !1 || t.contentType) &&
      x.setRequestHeader('Content-Type', f.contentType), x.setRequestHeader(
        'Accept', f.dataTypes[0] && f.accepts[f.dataTypes[0]]
          ? f.accepts[f.dataTypes[0]] +
          ('*' !== f.dataTypes[0] ? ', ' + Vt + '; q=0.01' : '')
          : f.accepts['*'])
      for (i in f.headers)x.setRequestHeader(i, f.headers[i]);
      if (f.beforeSend &&
        (f.beforeSend.call(p, x, f) === !1 || 2 === y))return x.abort()
      b = 'abort'
      for (i in{success: 1, error: 1, complete: 1})x[i](f[i]);
      if (c = F(Ut, f, t, x)) {
        x.readyState = 1, u && h.trigger('ajaxSend', [x, f]), f.async &&
        f.timeout > 0 &&
        (s = setTimeout(function () {x.abort('timeout')}, f.timeout))
        try {y = 1, c.send(m, n)} catch (w) {
          if (!(y < 2))throw w
          n(-1, w)
        }
      } else n(-1, 'No Transport')
      return x
    },
    getJSON: function (e, t, n) {return ie.get(e, t, n, 'json')},
    getScript: function (e, t) {return ie.get(e, void 0, t, 'script')},
  }), ie.each(['get', 'post'], function (e, t) {
    ie[t] = function (e, n, r, i) {
      return ie.isFunction(n) && (i = i || r, r = n, n = void 0), ie.ajax(
        {url: e, type: t, dataType: i, data: n, success: r})
    }
  }), ie.each([
    'ajaxStart',
    'ajaxStop',
    'ajaxComplete',
    'ajaxError',
    'ajaxSuccess',
    'ajaxSend'], function (e, t) {
    ie.fn[t] = function (e) {
      return this.on(t, e)
    }
  }), ie._evalUrl = function (e) {
    return ie.ajax({
      url: e,
      type: 'GET',
      dataType: 'script',
      async: !1,
      global: !1,
      'throws': !0,
    })
  }, ie.fn.extend({
    wrapAll: function (e) {
      if (ie.isFunction(e))return this.each(
        function (t) {ie(this).wrapAll(e.call(this, t))})
      if (this[0]) {
        var t = ie(e, this[0].ownerDocument).eq(0).clone(!0)
        this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
          for (var e = this; e.firstChild &&
          1 === e.firstChild.nodeType;)e = e.firstChild;
          return e
        }).append(this)
      }
      return this
    },
    wrapInner: function (e) {
      return ie.isFunction(e) ? this.each(
        function (t) {ie(this).wrapInner(e.call(this, t))}) : this.each(
        function () {
          var t = ie(this), n = t.contents()
          n.length ? n.wrapAll(e) : t.append(e)
        })
    },
    wrap: function (e) {
      var t = ie.isFunction(e)
      return this.each(function (n) {ie(this).wrapAll(t ? e.call(this, n) : e)})
    },
    unwrap: function () {
      return this.parent().
        each(function () {
          ie.nodeName(this, 'body') || ie(this).replaceWith(this.childNodes)
        }).
        end()
    },
  }), ie.expr.filters.hidden = function (e) {
    return e.offsetWidth <= 0 && e.offsetHeight <= 0 ||
      !ne.reliableHiddenOffsets() &&
      'none' === (e.style && e.style.display || ie.css(e, 'display'))
  }, ie.expr.filters.visible = function (e) {return !ie.expr.filters.hidden(e)}
  var zt = /%20/g, Xt = /\[\]$/, Qt = /\r?\n/g,
    Jt = /^(?:submit|button|image|reset|file)$/i,
    Gt = /^(?:input|select|textarea|keygen)/i
  ie.param = function (e, t) {
    var n, r = [], i = function (e, t) {
      t = ie.isFunction(t)
        ? t()
        : null == t
          ? ''
          : t, r[r.length] = encodeURIComponent(e) + '=' + encodeURIComponent(t)
    }
    if (void 0 === t &&
      (t = ie.ajaxSettings && ie.ajaxSettings.traditional), ie.isArray(e) ||
      e.jquery && !ie.isPlainObject(e)) ie.each(e,
      function () {i(this.name, this.value)}) else for (n in e)V(n, e[n], t,
      i);
    return r.join('&').replace(zt, '+')
  }, ie.fn.extend({
    serialize: function () {return ie.param(this.serializeArray())},
    serializeArray: function () {
      return this.map(function () {
        var e = ie.prop(this, 'elements')
        return e ? ie.makeArray(e) : this
      }).filter(function () {
        var e = this.type
        return this.name && !ie(this).is(':disabled') &&
          Gt.test(this.nodeName) && !Jt.test(e) && (this.checked || !je.test(e))
      }).map(function (e, t) {
        var n = ie(this).val()
        return null == n
          ? null
          : ie.isArray(n)
            ? ie.map(n, function (e) {
              return {
                name: t.name,
                value: e.replace(Qt, '\r\n'),
              }
            })
            : {
              name: t.name,
              value: n.replace(Qt, '\r\n'),
            }
      }).get()
    },
  }), ie.ajaxSettings.xhr = void 0 !== e.ActiveXObject
    ? function () {
      return !this.isLocal &&
        /^(get|post|head|put|delete|options)$/i.test(this.type) && W() || z()
    }
    : W
  var Yt = 0, Kt = {}, Zt = ie.ajaxSettings.xhr()
  e.ActiveXObject && ie(e).
    on('unload',
      function () {for (var e in Kt)Kt[e](void 0, !0)}), ne.cors = !!Zt &&
    'withCredentials' in Zt, Zt = ne.ajax = !!Zt, Zt &&
  ie.ajaxTransport(function (e) {
    if (!e.crossDomain || ne.cors) {
      var t
      return {
        send: function (n, r) {
          var i, o = e.xhr(), a = ++Yt
          if (o.open(e.type, e.url, e.async, e.username,
              e.password), e.xhrFields)for (i in e.xhrFields)o[i] = e.xhrFields[i];
          e.mimeType && o.overrideMimeType &&
          o.overrideMimeType(e.mimeType), e.crossDomain ||
          n['X-Requested-With'] || (n['X-Requested-With'] = 'XMLHttpRequest')
          for (i in n)void 0 !== n[i] && o.setRequestHeader(i, n[i] + '');
          o.send(e.hasContent && e.data || null), t = function (n, i) {
            var s, u, c
            if (t && (i || 4 ===
              o.readyState))if (delete Kt[a], t = void 0, o.onreadystatechange = ie.noop, i) 4 !==
            o.readyState && o.abort() else {
              c = {}, s = o.status, 'string' == typeof o.responseText &&
              (c.text = o.responseText)
              try {u = o.statusText} catch (l) {u = ''}
              s || !e.isLocal || e.crossDomain
                ? 1223 === s && (s = 204)
                : s = c.text ? 200 : 404
            }
            c && r(s, u, c, o.getAllResponseHeaders())
          }, e.async
            ? 4 === o.readyState
              ? setTimeout(t)
              : o.onreadystatechange = Kt[a] = t
            : t()
        }, abort: function () {t && t(void 0, !0)},
      }
    }
  }), ie.ajaxSetup({
    accepts: {script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'},
    contents: {script: /(?:java|ecma)script/},
    converters: {'text script': function (e) {return ie.globalEval(e), e}},
  }), ie.ajaxPrefilter('script', function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain &&
    (e.type = 'GET', e.global = !1)
  }), ie.ajaxTransport('script', function (e) {
    if (e.crossDomain) {
      var t, n = de.head || ie('head')[0] || de.documentElement
      return {
        send: function (r, i) {
          t = de.createElement('script'), t.async = !0, e.scriptCharset &&
          (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (
            e, n) {
            (n || !t.readyState || /loaded|complete/.test(t.readyState)) &&
            (t.onload = t.onreadystatechange = null, t.parentNode &&
            t.parentNode.removeChild(t), t = null, n || i(200, 'success'))
          }, n.insertBefore(t, n.firstChild)
        }, abort: function () {t && t.onload(void 0, !0)},
      }
    }
  })
  var en = [], tn = /(=)\?(?=&|$)|\?\?/
  ie.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var e = en.pop() || ie.expando + '_' + jt++
      return this[e] = !0, e
    },
  }), ie.ajaxPrefilter('json jsonp', function (t, n, r) {
    var i, o, a, s = t.jsonp !== !1 &&
      (tn.test(t.url) ? 'url' : 'string' == typeof t.data &&
        !(t.contentType || '').indexOf('application/x-www-form-urlencoded') &&
        tn.test(t.data) && 'data')
    if (s ||
      'jsonp' === t.dataTypes[0])return i = t.jsonpCallback = ie.isFunction(
      t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s
      ? t[s] = t[s].replace(tn, '$1' + i)
      : t.jsonp !== !1 &&
      (t.url += (Dt.test(t.url) ? '&' : '?') + t.jsonp + '=' +
        i), t.converters['script json'] = function () {
      return a || ie.error(i + ' was not called'), a[0]
    }, t.dataTypes[0] = 'json', o = e[i], e[i] = function () {a = arguments}, r.always(
      function () {
        e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, en.push(i)), a &&
        ie.isFunction(o) && o(a[0]), a = o = void 0
      }), 'script'
  }), ie.parseHTML = function (e, t, n) {
    if (!e || 'string' != typeof e)return null
    'boolean' == typeof t && (n = t, t = !1), t = t || de
    var r = fe.exec(e), i = !n && []
    return r ? [t.createElement(r[1])] : (r = ie.buildFragment([e], t, i), i &&
    i.length && ie(i).remove(), ie.merge([], r.childNodes))
  }
  var nn = ie.fn.load
  ie.fn.load = function (e, t, n) {
    if ('string' != typeof e && nn)return nn.apply(this, arguments)
    var r, i, o, a = this, s = e.indexOf(' ')
    return s >= 0 &&
    (r = ie.trim(e.slice(s, e.length)), e = e.slice(0, s)), ie.isFunction(t)
      ? (n = t, t = void 0)
      : t && 'object' == typeof t && (o = 'POST'), a.length > 0 &&
    ie.ajax({url: e, type: o, dataType: 'html', data: t}).
      done(function (e) {
        i = arguments, a.html(
          r ? ie('<div>').append(ie.parseHTML(e)).find(r) : e)
      }).
      complete(
        n && function (e, t) {a.each(n, i || [e.responseText, t, e])}), this
  }, ie.expr.filters.animated = function (e) {
    return ie.grep(ie.timers, function (t) {return e === t.elem}).length
  }
  var rn = e.document.documentElement
  ie.offset = {
    setOffset: function (e, t, n) {
      var r, i, o, a, s, u, c, l = ie.css(e, 'position'), f = ie(e), p = {}
      'static' === l &&
      (e.style.position = 'relative'), s = f.offset(), o = ie.css(e,
        'top'), u = ie.css(e, 'left'), c = ('absolute' === l ||
        'fixed' === l) && ie.inArray('auto', [o, u]) > -1, c
        ? (r = f.position(), a = r.top, i = r.left)
        : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), ie.isFunction(t) &&
      (t = t.call(e, n, s)), null != t.top &&
      (p.top = t.top - s.top + a), null != t.left &&
      (p.left = t.left - s.left + i), 'using' in t
        ? t.using.call(e, p)
        : f.css(p)
    },
  }, ie.fn.extend({
    offset: function (e) {
      if (arguments.length)return void 0 === e
        ? this
        : this.each(function (t) {ie.offset.setOffset(this, e, t)})
      var t, n, r = {top: 0, left: 0}, i = this[0], o = i && i.ownerDocument
      if (o)return t = o.documentElement, ie.contains(t, i)
        ? (typeof i.getBoundingClientRect !== Ce &&
        (r = i.getBoundingClientRect()), n = X(o), {
          top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
          left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0),
        })
        : r
    },
    position: function () {
      if (this[0]) {
        var e, t, n = {top: 0, left: 0}, r = this[0]
        return 'fixed' === ie.css(r, 'position')
          ? t = r.getBoundingClientRect()
          : (e = this.offsetParent(), t = this.offset(), ie.nodeName(e[0],
            'html') || (n = e.offset()), n.top += ie.css(e[0], 'borderTopWidth',
            !0), n.left += ie.css(e[0], 'borderLeftWidth', !0)), {
          top: t.top - n.top - ie.css(r, 'marginTop', !0),
          left: t.left - n.left - ie.css(r, 'marginLeft', !0),
        }
      }
    },
    offsetParent: function () {
      return this.map(function () {
        for (var e = this.offsetParent || rn; e && !ie.nodeName(e, "html") &&
        "static" === ie.css(e, "position");)e = e.offsetParent;
        return e || rn
      })
    },
  }), ie.each({scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset'},
    function (e, t) {
      var n = /Y/.test(t)
      ie.fn[e] = function (r) {
        return Ne(this, function (e, r, i) {
          var o = X(e)
          return void 0 === i
            ? o
              ? t in o
                ? o[t]
                : o.document.documentElement[r]
              : e[r]
            : void(o ? o.scrollTo(n ? ie(o).scrollLeft() : i,
              n ? i : ie(o).scrollTop()) : e[r] = i)
        }, e, r, arguments.length, null)
      }
    }), ie.each(['top', 'left'], function (e, t) {
    ie.cssHooks[t] = E(ne.pixelPosition, function (e, n) {
      if (n)return n = tt(e, t), rt.test(n) ? ie(e).
          position()[t] + 'px' : n
    })
  }), ie.each({Height: 'height', Width: 'width'}, function (e, t) {
    ie.each({padding: 'inner' + e, content: t, '': 'outer' + e},
      function (n, r) {
        ie.fn[r] = function (r, i) {
          var o = arguments.length && (n || 'boolean' != typeof r),
            a = n || (r === !0 || i === !0 ? 'margin' : 'border')
          return Ne(this, function (t, n, r) {
            var i
            return ie.isWindow(t)
              ? t.document.documentElement['client' + e]
              : 9 === t.nodeType
                ? (i = t.documentElement, Math.max(t.body['scroll' + e],
                  i['scroll' + e], t.body['offset' + e], i['offset' + e],
                  i['client' + e]))
                : void 0 === r
                  ? ie.css(t, n, a)
                  : ie.style(t, n, r, a)
          }, t, o ? r : void 0, o, null)
        }
      })
  }), ie.fn.size = function () {return this.length}, ie.fn.andSelf = ie.fn.addBack, 'function' ==
  typeof define && define.amd && define('jquery', [], function () {return ie})
  var on = e.jQuery, an = e.$
  return ie.noConflict = function (t) {
    return e.$ === ie && (e.$ = an), t && e.jQuery === ie && (e.jQuery = on), ie
  }, typeof t === Ce && (e.jQuery = e.$ = ie), ie
}), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
  def: 'easeOutQuad',
  easeOutQuart: function (e, t, n, r, i) {
    return -r * ((t = t / i - 1) * t * t * t - 1) + n
  },
}), function (e, t, n) {
  'use strict'
  function r (e) {
    return function () {
      var t, n, r = arguments[0], i = '[' + (e ? e + ':' : '') + r + '] ',
        o = arguments[1], a = arguments, s = function (e) {
          return 'function' == typeof e
            ? e.toString().
              replace(/ \{[\s\S]*$/, '')
            : 'undefined' == typeof e
              ? 'undefined'
              : 'string' != typeof e
                ? JSON.stringify(e)
                : e
        }
      for (t = i + o.replace(/\{\d+\}/g, function (e) {
          var t, n = +e.slice(1, -1)
          return n + 2 < a.length ? (t = a[n + 2], 'function' == typeof t
            ? t.toString().replace(/ ?\{[\s\S]*$/, '')
            : 'undefined' == typeof t
              ? 'undefined'
              : 'string' != typeof t
                ? B(t)
                : t) : e
        }), t = t + '\nhttp://errors.angularjs.org/1.2.20/' +
        (e ? e + '/' : '') + r, n = 2; n < arguments.length; n++)t = t +
        (2 == n ? '?' : '&') + 'p' + (n - 2) + '=' +
        encodeURIComponent(s(arguments[n]));
      return new Error(t)
    }
  }

  function i (e) {
    if (null == e || S(e))return !1
    var t = e.length
    return !(1 !== e.nodeType || !t) ||
      (b(e) || Nn(e) || 0 === t || 'number' == typeof t && t > 0 && t - 1 in e)
  }

  function o (e, t, n) {
    var r
    if (e)if (C(e))for (r in e)'prototype' == r || 'length' == r ||
    'name' == r || e.hasOwnProperty && !e.hasOwnProperty(r) ||
    t.call(n, e[r], r); else if (e.forEach && e.forEach !== o) e.forEach(t,
      n) else if (i(e))for (r = 0; r < e.length; r++)t.call(n, e[r],
      r); else for (r in e)e.hasOwnProperty(r) && t.call(n, e[r], r);
    return e
  }

  function a (e) {
    var t = []
    for (var n in e)e.hasOwnProperty(n) && t.push(n);
    return t.sort()
  }

  function s (e, t, n) {
    for (var r = a(e), i = 0; i < r.length; i++)t.call(n, e[r[i]], r[i]);
    return r
  }

  function u (e) {return function (t, n) {e(n, t)}}

  function c () {
    for (var e, t = An.length; t;) {
      if (t--, e = An[t].charCodeAt(0), 57 == e)return An[t] = 'A', An.join('')
      if (90 != e)return An[t] = String.fromCharCode(e + 1), An.join('')
      An[t] = '0'
    }
    return An.unshift('0'), An.join('')
  }

  function l (e, t) {t ? e.$$hashKey = t : delete e.$$hashKey}

  function f (e) {
    var t = e.$$hashKey
    return o(arguments,
      function (t) {t !== e && o(t, function (t, n) {e[n] = t})}), l(e, t), e
  }

  function p (e) {return parseInt(e, 10)}

  function h (e, t) {return f(new (f(function () {}, {prototype: e})), t)}

  function d () {}

  function v (e) {return e}

  function g (e) {return function () {return e}}

  function m (e) {return 'undefined' == typeof e}

  function $ (e) {return 'undefined' != typeof e}

  function y (e) {return null != e && 'object' == typeof e}

  function b (e) {return 'string' == typeof e}

  function x (e) {return 'number' == typeof e}

  function w (e) {return '[object Date]' === Sn.call(e)}

  function C (e) {return 'function' == typeof e}

  function T (e) {return '[object RegExp]' === Sn.call(e)}

  function S (e) {
    return e && e.document && e.location && e.alert && e.setInterval
  }

  function E (e) {return e && e.$evalAsync && e.$watch}

  function k (e) {return '[object File]' === Sn.call(e)}

  function A (e) {return '[object Blob]' === Sn.call(e)}

  function N (e) {return !(!e || !(e.nodeName || e.prop && e.attr && e.find))}

  function j (e, t, n) {
    var r = []
    return o(e, function (e, i, o) {r.push(t.call(n, e, i, o))}), r
  }

  function D (e, t) {return O(e, t) != -1}

  function O (e, t) {
    if (e.indexOf)return e.indexOf(t)
    for (var n = 0; n < e.length; n++)if (t === e[n])return n
    return -1
  }

  function M (e, t) {
    var n = O(e, t)
    return n >= 0 && e.splice(n, 1), t
  }

  function L (e, t, n, r) {
    if (S(e) || E(e))throw En('cpws',
      'Can\'t copy! Making copies of Window or Scope instances is not supported.')
    if (t) {
      if (e === t)throw En('cpi',
        'Can\'t copy! Source and destination are identical.')
      if (n = n || [], r = r || [], y(e)) {
        var i = O(n, e)
        if (i !== -1)return r[i]
        n.push(e), r.push(t)
      }
      var a
      if (Nn(e)) {
        t.length = 0
        for (var s = 0; s < e.length; s++)a = L(e[s], null, n, r), y(e[s]) &&
        (n.push(e[s]), r.push(a)), t.push(a)
      } else {
        var u = t.$$hashKey
        o(t, function (e, n) {delete t[n]})
        for (var c in e)a = L(e[c], null, n, r), y(e[c]) &&
        (n.push(e[c]), r.push(a)), t[c] = a;
        l(t, u)
      }
    } else t = e, e && (Nn(e)
      ? t = L(e, [], n, r)
      : w(e)
        ? t = new Date(e.getTime())
        : T(e)
          ? t = new RegExp(e.source)
          : y(e) && (t = L(e, {}, n, r)))
    return t
  }

  function P (e, t) {
    if (Nn(e)) {
      t = t || []
      for (var n = 0; n < e.length; n++)t[n] = e[n]
    } else if (y(e)) {
      t = t || {}
      for (var r in e)!dn.call(e, r) ||
      '$' === r.charAt(0) && '$' === r.charAt(1) || (t[r] = e[r])
    }
    return t || e
  }

  function _ (e, t) {
    if (e === t)return !0
    if (null === e || null === t)return !1
    if (e !== e && t !== t)return !0
    var r, i, o, a = typeof e, s = typeof t
    if (a == s && 'object' == a) {
      if (!Nn(e)) {
        if (w(e))return w(t) && e.getTime() == t.getTime()
        if (T(e) && T(t))return e.toString() == t.toString()
        if (E(e) || E(t) || S(e) || S(t) || Nn(t))return !1
        o = {}
        for (i in e)if ('$' !== i.charAt(0) && !C(e[i])) {
          if (!_(e[i], t[i]))return !1
          o[i] = !0
        }
        for (i in t)if (!o.hasOwnProperty(i) && '$' !== i.charAt(0) &&
          t[i] !== n && !C(t[i]))return !1
        return !0
      }
      if (!Nn(t))return !1
      if ((r = e.length) == t.length) {
        for (i = 0; i < r; i++)if (!_(e[i], t[i]))return !1
        return !0
      }
    }
    return !1
  }

  function H () {
    return t.securityPolicy && t.securityPolicy.isActive || t.querySelector &&
      !(!t.querySelector('[ng-csp]') && !t.querySelector('[data-ng-csp]'))
  }

  function q (e, t, n) {return e.concat(Cn.call(t, n))}

  function R (e, t) {return Cn.call(e, t || 0)}

  function F (e, t) {
    var n = arguments.length > 2 ? R(arguments, 2) : []
    return !C(t) || t instanceof RegExp
      ? t
      : n.length
        ? function () {
          return arguments.length
            ? t.apply(e, n.concat(Cn.call(arguments, 0)))
            : t.apply(e, n)
        }
        : function () {
          return arguments.length ? t.apply(e, arguments) : t.call(e)
        }
  }

  function I (e, r) {
    var i = r
    return 'string' == typeof e && '$' === e.charAt(0)
      ? i = n
      : S(r)
        ? i = '$WINDOW'
        : r && t === r
          ? i = '$DOCUMENT'
          : E(r) && (i = '$SCOPE'), i
  }

  function B (e, t) {
    return 'undefined' == typeof e ? n : JSON.stringify(e, I, t ? '  ' : null)
  }

  function U (e) {return b(e) ? JSON.parse(e) : e}

  function V (e) {
    if ('function' == typeof e) e = !0 else if (e && 0 !== e.length) {
      var t = hn('' + e)
      e = !('f' == t || '0' == t || 'false' == t || 'no' == t || 'n' == t ||
      '[]' == t)
    } else e = !1
    return e
  }

  function W (e) {
    e = yn(e).clone()
    try {e.empty()} catch (t) {}
    var n = 3, r = yn('<div>').append(e).html()
    try {
      return e[0].nodeType === n ? hn(r) : r.match(/^(<[^>]+>)/)[1].replace(
        /^<([\w\-]+)/, function (e, t) {return '<' + hn(t)})
    } catch (t) {return hn(r)}
  }

  function z (e) {try {return decodeURIComponent(e)} catch (t) {}}

  function X (e) {
    var t, n, r = {}
    return o((e || '').split('&'), function (e) {
      if (e && (t = e.split('='), n = z(t[0]), $(n))) {
        var i = !$(t[1]) || z(t[1])
        dn.call(r, n) ? Nn(r[n]) ? r[n].push(i) : r[n] = [r[n], i] : r[n] = i
      }
    }), r
  }

  function Q (e) {
    var t = []
    return o(e, function (e, n) {
      Nn(e)
        ? o(e,
        function (e) {t.push(G(n, !0) + (e === !0 ? '' : '=' + G(e, !0)))})
        : t.push(G(n, !0) + (e === !0 ? '' : '=' + G(e, !0)))
    }), t.length ? t.join('&') : ''
  }

  function J (e) {
    return G(e, !0).
      replace(/%26/gi, '&').
      replace(/%3D/gi, '=').
      replace(/%2B/gi, '+')
  }

  function G (e, t) {
    return encodeURIComponent(e).
      replace(/%40/gi, '@').
      replace(/%3A/gi, ':').
      replace(/%24/g, '$').
      replace(/%2C/gi, ',').
      replace(/%20/g, t ? '%20' : '+')
  }

  function Y (e, n) {
    function r (e) {e && s.push(e)}

    var i, a, s = [e], u = ['ng:app', 'ng-app', 'x-ng-app', 'data-ng-app'],
      c = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/
    o(u, function (n) {
      u[n] = !0, r(t.getElementById(n)), n = n.replace(':',
        '\\:'), e.querySelectorAll &&
      (o(e.querySelectorAll('.' + n), r), o(e.querySelectorAll('.' + n + '\\:'),
        r), o(e.querySelectorAll('[' + n + ']'), r))
    }), o(s, function (e) {
      if (!i) {
        var t = ' ' + e.className + ' ', n = c.exec(t)
        n ? (i = e, a = (n[2] || '').replace(/\s+/g, ',')) : o(e.attributes,
          function (t) {!i && u[t.name] && (i = e, a = t.value)})
      }
    }), i && n(i, a ? [a] : [])
  }

  function K (n, r) {
    var i = function () {
      if (n = yn(n), n.injector()) {
        var e = n[0] === t ? 'document' : W(n)
        throw En('btstrpd', 'App Already Bootstrapped with this Element \'{0}\'',
          e)
      }
      r = r || [], r.unshift(
        ['$provide', function (e) {e.value('$rootElement', n)}]), r.unshift(
        'ng')
      var i = Me(r)
      return i.invoke([
        '$rootScope',
        '$rootElement',
        '$compile',
        '$injector',
        '$animate',
        function (e, t, n, r, i) {
          e.$apply(function () {t.data('$injector', r), n(t)(e)})
        }]), i
    }, a = /^NG_DEFER_BOOTSTRAP!/
    return e && !a.test(e.name) ? i() : (e.name = e.name.replace(a,
      ''), void(kn.resumeBootstrap = function (e) {
      o(e, function (e) {r.push(e)}), i()
    }))
  }

  function Z (e, t) {
    return t = t || '_', e.replace(Dn,
      function (e, n) {return (n ? t : '') + e.toLowerCase()})
  }

  function ee () {
    bn = e.jQuery, bn && bn.fn.on
      ? (yn = bn, f(bn.fn, {
        scope: Wn.scope,
        isolateScope: Wn.isolateScope,
        controller: Wn.controller,
        injector: Wn.injector,
        inheritedData: Wn.inheritedData,
      }), le('remove', !0, !0, !1), le('empty', !1, !1, !1), le('html', !1, !1,
        !0))
      : yn = de, kn.element = yn
  }

  function te (e, t, n) {
    if (!e)throw En('areq', 'Argument \'{0}\' is {1}', t || '?', n || 'required')
    return e
  }

  function ne (e, t, n) {
    return n && Nn(e) && (e = e[e.length - 1]), te(C(e), t,
      'not a function, got ' + (e && 'object' == typeof e
        ? e.constructor.name || 'Object'
        : typeof e)), e
  }

  function re (e, t) {
    if ('hasOwnProperty' === e)throw En('badname',
      'hasOwnProperty is not a valid {0} name', t)
  }

  function ie (e, t, n) {
    if (!t)return e
    for (var r, i = t.split('.'), o = e, a = i.length, s = 0; s <
    a; s++)r = i[s], e && (e = (o = e)[r]);
    return !n && C(e) ? F(o, e) : e
  }

  function oe (e) {
    var t = e[0], n = e[e.length - 1]
    if (t === n)return yn(t)
    var r = t, i = [r]
    do {
      if (r = r.nextSibling, !r)break
      i.push(r)
    } while (r !== n)
    return yn(i)
  }

  function ae (e) {
    function t (e, t, n) {return e[t] || (e[t] = n())}

    var n = r('$injector'), i = r('ng'), o = t(e, 'angular', Object)
    return o.$$minErr = o.$$minErr || r, t(o, 'module', function () {
      var e = {}
      return function (r, o, a) {
        var s = function (
          e, t) {
          if ('hasOwnProperty' === e)throw i('badname',
            'hasOwnProperty is not a valid {0} name', t)
        }
        return s(r, 'module'), o && e.hasOwnProperty(r) && (e[r] = null), t(e,
          r, function () {
            function e (e, n, r) {
              return function () {
                return t[r || 'push']([e, n, arguments]), u
              }
            }

            if (!o)throw n('nomod',
              'Module \'{0}\' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.',
              r)
            var t = [], i = [], s = e('$injector', 'invoke'), u = {
              _invokeQueue: t,
              _runBlocks: i,
              requires: o,
              name: r,
              provider: e('$provide', 'provider'),
              factory: e('$provide', 'factory'),
              service: e('$provide', 'service'),
              value: e('$provide', 'value'),
              constant: e('$provide', 'constant', 'unshift'),
              animation: e('$animateProvider', 'register'),
              filter: e('$filterProvider', 'register'),
              controller: e('$controllerProvider', 'register'),
              directive: e('$compileProvider', 'directive'),
              config: s,
              run: function (e) {return i.push(e), this},
            }
            return a && s(a), u
          })
      }
    })
  }

  function se (t) {
    f(t, {
      bootstrap: K,
      copy: L,
      extend: f,
      equals: _,
      element: yn,
      forEach: o,
      injector: Me,
      noop: d,
      bind: F,
      toJson: B,
      fromJson: U,
      identity: v,
      isUndefined: m,
      isDefined: $,
      isString: b,
      isFunction: C,
      isObject: y,
      isNumber: x,
      isElement: N,
      isArray: Nn,
      version: On,
      isDate: w,
      lowercase: hn,
      uppercase: vn,
      callbacks: {counter: 0},
      $$minErr: r,
      $$csp: H,
    }), xn = ae(e)
    try {xn('ngLocale')} catch (n) {xn('ngLocale', []).provider('$locale', nt)}
    xn('ng', ['ngLocale'], [
      '$provide',
      function (e) {
        e.provider({$$sanitizeUri: At}), e.provider('$compile', Fe).
          directive({
            a: Ar,
            input: Rr,
            textarea: Rr,
            form: Or,
            script: bi,
            select: Ci,
            style: Si,
            option: Ti,
            ngBind: Yr,
            ngBindHtml: Zr,
            ngBindTemplate: Kr,
            ngClass: ei,
            ngClassEven: ni,
            ngClassOdd: ti,
            ngCloak: ri,
            ngController: ii,
            ngForm: Mr,
            ngHide: di,
            ngIf: ai,
            ngInclude: si,
            ngInit: ci,
            ngNonBindable: li,
            ngPluralize: fi,
            ngRepeat: pi,
            ngShow: hi,
            ngStyle: vi,
            ngSwitch: gi,
            ngSwitchWhen: mi,
            ngSwitchDefault: $i,
            ngOptions: wi,
            ngTransclude: yi,
            ngModel: Wr,
            ngList: Qr,
            ngChange: zr,
            required: Xr,
            ngRequired: Xr,
            ngValue: Gr,
          }).
          directive({ngInclude: ui}).
          directive(Nr).
          directive(oi), e.provider({
          $anchorScroll: Le,
          $animate: er,
          $browser: He,
          $cacheFactory: qe,
          $controller: Ue,
          $document: Ve,
          $exceptionHandler: We,
          $filter: Rt,
          $interpolate: et,
          $interval: tt,
          $http: Ge,
          $httpBackend: Ke,
          $location: vt,
          $log: gt,
          $parse: Ct,
          $rootScope: kt,
          $q: Tt,
          $sce: Mt,
          $sceDelegate: Ot,
          $sniffer: Lt,
          $templateCache: Re,
          $timeout: Pt,
          $window: qt,
          $$rAF: Et,
          $$asyncCallback: Pe,
        })
      }])
  }

  function ue () {return ++Ln}

  function ce (e) {
    return e.replace(Hn,
      function (e, t, n, r) {return r ? n.toUpperCase() : n}).
      replace(qn, 'Moz$1')
  }

  function le (e, t, n, r) {
    function i (e) {
      var i, a, s, u, c, l, f, p = n && e ? [this.filter(e)] : [this], h = t
      if (!r ||
        null != e)for (; p.length;)for (i = p.shift(), a = 0, s = i.length; a <
      s; a++)for (u = yn(i[a]), h
        ? u.triggerHandler('$destroy')
        : h = !h, c = 0, l = (f = u.children()).length; c < l; c++)p.push(
        bn(f[c]));
      return o.apply(this, arguments)
    }

    var o = bn.fn[e]
    o = o.$original || o, i.$original = o, bn.fn[e] = i
  }

  function fe (e) {return !In.test(e)}

  function pe (e, t) {
    var n, r, i, o, a, s, u = t.createDocumentFragment(), c = []
    if (fe(e)) c.push(t.createTextNode(e)) else {
      for (n = u.appendChild(t.createElement('div')), r = (Bn.exec(e) ||
      ['', ''])[1].toLowerCase(), i = Vn[r] ||
        Vn._default, n.innerHTML = '<div>&#160;</div>' + i[1] +
        e.replace(Un, '<$1></$2>') + i[2], n.removeChild(
        n.firstChild), o = i[0]; o--;)n = n.lastChild;
      for (a = 0, s = n.childNodes.length; a < s; ++a)c.push(n.childNodes[a]);
      n = u.firstChild, n.textContent = ''
    }
    return u.textContent = '', u.innerHTML = '', c
  }

  function he (e, n) {
    n = n || t
    var r
    return (r = Fn.exec(e)) ? [n.createElement(r[1])] : pe(e, n)
  }

  function de (e) {
    if (e instanceof de)return e
    if (b(e) && (e = jn(e)), !(this instanceof de)) {
      if (b(e) && '<' != e.charAt(0))throw Rn('nosel',
        'Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element')
      return new de(e)
    }
    if (b(e)) {
      Te(this, he(e))
      var n = yn(t.createDocumentFragment())
      n.append(this)
    } else Te(this, e)
  }

  function ve (e) {return e.cloneNode(!0)}

  function ge (e) {
    $e(e)
    for (var t = 0, n = e.childNodes || []; t < n.length; t++)ge(n[t])
  }

  function me (e, t, n, r) {
    if ($(r))throw Rn('offargs',
      'jqLite#off() does not support the `selector` argument')
    var i = ye(e, 'events'), a = ye(e, 'handle')
    a &&
    (m(t) ? o(i, function (t, n) {_n(e, n, t), delete i[n]}) : o(t.split(' '),
      function (t) {m(n) ? (_n(e, t, i[t]), delete i[t]) : M(i[t] || [], n)}))
  }

  function $e (e, t) {
    var r = e.ng339, i = Mn[r]
    if (i) {
      if (t)return void delete Mn[r].data[t]
      i.handle && (i.events.$destroy && i.handle({}, '$destroy'), me(
        e)), delete Mn[r], e.ng339 = n
    }
  }

  function ye (e, t, n) {
    var r = e.ng339, i = Mn[r || -1]
    return $(n)
      ? (i || (e.ng339 = r = ue(), i = Mn[r] = {}), void(i[t] = n))
      : i && i[t]
  }

  function be (e, t, n) {
    var r = ye(e, 'data'), i = $(n), o = !i && $(t), a = o && !y(t)
    if (r || a || ye(e, 'data', r = {}), i) r[t] = n else {
      if (!o)return r
      if (a)return r && r[t]
      f(r, t)
    }
  }

  function xe (e, t) {
    return !!e.getAttribute &&
      (' ' + (e.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ').
        indexOf(' ' + t + ' ') > -1
  }

  function we (e, t) {
    t && e.setAttribute && o(t.split(' '), function (t) {
      e.setAttribute('class', jn(
        (' ' + (e.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ').
          replace(' ' + jn(t) + ' ', ' ')))
    })
  }

  function Ce (e, t) {
    if (t && e.setAttribute) {
      var n = (' ' + (e.getAttribute('class') || '') + ' ').replace(/[\n\t]/g,
        ' ')
      o(t.split(' '), function (e) {
        e = jn(e), n.indexOf(' ' + e + ' ') === -1 && (n += e + ' ')
      }), e.setAttribute('class', jn(n))
    }
  }

  function Te (e, t) {
    if (t) {
      t = t.nodeName || !$(t.length) || S(t) ? [t] : t
      for (var n = 0; n < t.length; n++)e.push(t[n])
    }
  }

  function Se (e, t) {return Ee(e, '$' + (t || 'ngController') + 'Controller')}

  function Ee (e, t, r) {
    e = yn(e), 9 == e[0].nodeType && (e = e.find('html'))
    for (var i = Nn(t)
      ? t
      : [t]; e.length;) {
      for (var o = e[0], a = 0, s = i.length; a < s; a++)if ((r = e.data(
          i[a])) !== n)return r
      e = yn(o.parentNode || 11 === o.nodeType && o.host)
    }
  }

  function ke (e) {
    for (var t = 0, n = e.childNodes; t < n.length; t++)ge(n[t]);
    for (; e.firstChild;)e.removeChild(e.firstChild)
  }

  function Ae (e, t) {
    var n = zn[t.toLowerCase()]
    return n && Xn[e.nodeName] && n
  }

  function Ne (e, n) {
    var r = function (r, i) {
      if (r.preventDefault ||
        (r.preventDefault = function () {r.returnValue = !1}), r.stopPropagation ||
        (r.stopPropagation = function () {r.cancelBubble = !0}), r.target ||
        (r.target = r.srcElement || t), m(r.defaultPrevented)) {
        var a = r.preventDefault
        r.preventDefault = function () {
          r.defaultPrevented = !0, a.call(r)
        }, r.defaultPrevented = !1
      }
      r.isDefaultPrevented = function () {
        return r.defaultPrevented || r.returnValue === !1
      }
      var s = P(n[i || r.type] || [])
      o(s, function (t) {t.call(e, r)}), $n <= 8
        ? (r.preventDefault = null, r.stopPropagation = null, r.isDefaultPrevented = null)
        : (delete r.preventDefault, delete r.stopPropagation, delete r.isDefaultPrevented)
    }
    return r.elem = e, r
  }

  function je (e, t) {
    var r, i = typeof e
    return 'function' == i || 'object' == i && null !== e ? 'function' ==
    typeof(r = e.$$hashKey) ? r = e.$$hashKey() : r === n &&
      (r = e.$$hashKey = (t || c)()) : r = e, i + ':' + r
  }

  function De (e, t) {
    if (t) {
      var n = 0
      this.nextUid = function () {return ++n}
    }
    o(e, this.put, this)
  }

  function Oe (e) {
    var t, n, r, i
    return 'function' == typeof e ? (t = e.$inject) || (t = [], e.length &&
      (n = e.toString().replace(Yn, ''), r = n.match(Qn), o(r[1].split(Jn),
        function (e) {
          e.replace(Gn, function (e, n, r) {t.push(r)})
        })), e.$inject = t) : Nn(e) ? (i = e.length - 1, ne(e[i],
      'fn'), t = e.slice(0, i)) : ne(e, 'fn', !0), t
  }

  function Me (e) {
    function t (e) {
      return function (t, n) {
        return y(t) ? void o(t, u(e)) : e(t, n)
      }
    }

    function n (e, t) {
      if (re(e, 'service'), (C(t) || Nn(t)) &&
        (t = x.instantiate(t)), !t.$get)throw Kn('pget',
        'Provider \'{0}\' must define $get factory method.', e)
      return $[e + h] = t
    }

    function r (e, t) {return n(e, {$get: t})}

    function i (e, t) {
      return r(e, ['$injector', function (e) {return e.instantiate(t)}])
    }

    function a (e, t) {return r(e, g(t))}

    function s (e, t) {re(e, 'constant'), $[e] = t, w[e] = t}

    function c (e, t) {
      var n = x.get(e + h), r = n.$get
      n.$get = function () {
        var e = T.invoke(r, n)
        return T.invoke(t, null, {$delegate: e})
      }
    }

    function l (e) {
      var t, n, r, i, a = []
      return o(e, function (e) {
        if (!m.get(e)) {
          m.put(e, !0)
          try {
            if (b(e))for (t = xn(e), a = a.concat(l(t.requires)).
              concat(t._runBlocks), n = t._invokeQueue, r = 0, i = n.length; r <
                          i; r++) {
              var o = n[r], s = x.get(o[0])
              s[o[1]].apply(s, o[2])
            } else C(e)
              ? a.push(x.invoke(e))
              : Nn(e)
                ? a.push(x.invoke(e))
                : ne(e, 'module')
          } catch (u) {
            throw Nn(e) && (e = e[e.length - 1]), u.message && u.stack &&
            u.stack.indexOf(u.message) == -1 &&
            (u = u.message + '\n' + u.stack), Kn('modulerr',
              'Failed to instantiate module {0} due to:\n{1}', e,
              u.stack || u.message || u)
          }
        }
      }), a
    }

    function f (e, t) {
      function n (n) {
        if (e.hasOwnProperty(n)) {
          if (e[n] === p)throw Kn('cdep', 'Circular dependency found: {0}',
            n + ' <- ' + v.join(' <- '))
          return e[n]
        }
        try {return v.unshift(n), e[n] = p, e[n] = t(n)} catch (r) {
          throw e[n] === p && delete e[n], r
        } finally {v.shift()}
      }

      function r (e, t, r) {
        var i, o, a, s = [], u = Oe(e)
        for (o = 0, i = u.length; o < i; o++) {
          if (a = u[o], 'string' != typeof a)throw Kn('itkn',
            'Incorrect injection token! Expected service name as string, got {0}',
            a)
          s.push(r && r.hasOwnProperty(a) ? r[a] : n(a))
        }
        return Nn(e) && (e = e[i]), e.apply(t, s)
      }

      function i (e, t) {
        var n, i, o = function () {}
        return o.prototype = (Nn(e)
          ? e[e.length - 1]
          : e).prototype, n = new o, i = r(e, n, t), y(i) || C(i) ? i : n
      }

      return {
        invoke: r,
        instantiate: i,
        get: n,
        annotate: Oe,
        has: function (t) {
          return $.hasOwnProperty(t + h) || e.hasOwnProperty(t)
        },
      }
    }

    var p = {}, h = 'Provider', v = [], m = new De([], (!0)), $ = {
        $provide: {
          provider: t(n),
          factory: t(r),
          service: t(i),
          value: t(a),
          constant: t(s),
          decorator: c,
        },
      }, x = $.$injector = f($,
      function () {throw Kn('unpr', 'Unknown provider: {0}', v.join(' <- '))}),
      w = {}, T = w.$injector = f(w, function (e) {
        var t = x.get(e + h)
        return T.invoke(t.$get, t)
      })
    return o(l(e), function (e) {T.invoke(e || d)}), T
  }

  function Le () {
    var e = !0
    this.disableAutoScrolling = function () {e = !1}, this.$get = [
      '$window',
      '$location',
      '$rootScope',
      function (t, n, r) {
        function i (e) {
          var t = null
          return o(e, function (e) {t || 'a' !== hn(e.nodeName) || (t = e)}), t
        }

        function a () {
          var e, r = n.hash()
          r ? (e = s.getElementById(r)) ? e.scrollIntoView() : (e = i(
            s.getElementsByName(r))) ? e.scrollIntoView() : 'top' === r &&
            t.scrollTo(0, 0) : t.scrollTo(0, 0)
        }

        var s = t.document
        return e && r.$watch(function () {return n.hash()},
          function () {r.$evalAsync(a)}), a
      }]
  }

  function Pe () {
    this.$get = [
      '$$rAF',
      '$timeout',
      function (e, t) {
        return e.supported
          ? function (t) {return e(t)}
          : function (e) {return t(e, 0, !1)}
      }]
  }

  function _e (e, t, r, i) {
    function a (e) {
      try {
        e.apply(null, R(arguments, 1))
      } finally {
        if ($--, 0 === $)for (; y.length;)try {y.pop()()} catch (t) {r.error(t)}
      }
    }

    function s (e, t) {!function n () {o(w, function (e) {e()}), x = t(n, e)}()}

    function u () {
      S = null, C != c.url() && (C = c.url(), o(E, function (e) {e(c.url())}))
    }

    var c = this, l = t[0], f = e.location, p = e.history, h = e.setTimeout,
      v = e.clearTimeout, g = {}
    c.isMock = !1
    var $ = 0, y = []
    c.$$completeOutstandingRequest = a, c.$$incOutstandingRequestCount = function () {$++}, c.notifyWhenNoOutstandingRequests = function (e) {
      o(w, function (e) {e()}), 0 === $ ? e() : y.push(e)
    }
    var x, w = []
    c.addPollFn = function (e) {return m(x) && s(100, h), w.push(e), e}
    var C = f.href, T = t.find('base'), S = null
    c.url = function (t, n) {
      if (f !== e.location && (f = e.location), p !== e.history &&
        (p = e.history), t) {
        if (C == t)return
        return C = t, i.history
          ? n
            ? p.replaceState(null, '', t)
            : (p.pushState(null, '', t), T.attr('href', T.attr('href')))
          : (S = t, n
            ? f.replace(t)
            : f.href = t), c
      }
      return S || f.href.replace(/%27/g, '\'')
    }
    var E = [], k = !1
    c.onUrlChange = function (t) {
      return k || (i.history && yn(e).on('popstate', u), i.hashchange ? yn(e).
        on('hashchange', u) : c.addPollFn(u), k = !0), E.push(t), t
    }, c.baseHref = function () {
      var e = T.attr('href')
      return e ? e.replace(/^(https?\:)?\/\/[^\/]*/, '') : ''
    }
    var A = {}, N = '', j = c.baseHref()
    c.cookies = function (e, t) {
      var i, o, a, s, u
      if (!e) {
        if (l.cookie !== N)for (N = l.cookie, o = N.split(
          '; '), A = {}, s = 0; s < o.length; s++)a = o[s], u = a.indexOf(
          '='), u > 0 && (e = unescape(a.substring(0, u)), A[e] === n &&
        (A[e] = unescape(a.substring(u + 1))));
        return A
      }
      t === n ? l.cookie = escape(e) + '=;path=' + j +
        ';expires=Thu, 01 Jan 1970 00:00:00 GMT' : b(t) &&
        (i = (l.cookie = escape(e) + '=' + escape(t) + ';path=' + j).length +
          1, i > 4096 && r.warn('Cookie \'' + e +
          '\' possibly not set or overflowed because it was too large (' + i +
          ' > 4096 bytes)!'))
    }, c.defer = function (e, t) {
      var n
      return $++, n = h(function () {delete g[n], a(e)}, t || 0), g[n] = !0, n
    }, c.defer.cancel = function (e) {
      return !!g[e] && (delete g[e], v(e), a(d), !0)
    }
  }

  function He () {
    this.$get = [
      '$window',
      '$log',
      '$sniffer',
      '$document',
      function (e, t, n, r) {return new _e(e, r, t, n)}]
  }

  function qe () {
    this.$get = function () {
      function e (
        e, n) {
        function i (e) {
          e != p && (h ? h == e && (h = e.n) : h = e, o(e.n, e.p), o(e,
            p), p = e, p.n = null)
        }

        function o (e, t) {e != t && (e && (e.p = t), t && (t.n = e))}

        if (e in t)throw r('$cacheFactory')('iid',
          'CacheId \'{0}\' is already taken!', e)
        var a = 0, s = f({}, n, {id: e}), u = {},
          c = n && n.capacity || Number.MAX_VALUE, l = {}, p = null, h = null
        return t[e] = {
          put: function (e, t) {
            if (c < Number.MAX_VALUE) {
              var n = l[e] || (l[e] = {key: e})
              i(n)
            }
            if (!m(t))return e in u || a++, u[e] = t, a > c &&
            this.remove(h.key), t
          },
          get: function (e) {
            if (c < Number.MAX_VALUE) {
              var t = l[e]
              if (!t)return
              i(t)
            }
            return u[e]
          },
          remove: function (e) {
            if (c < Number.MAX_VALUE) {
              var t = l[e]
              if (!t)return
              t == p && (p = t.p), t == h && (h = t.n), o(t.n, t.p), delete l[e]
            }
            delete u[e], a--
          },
          removeAll: function () {u = {}, a = 0, l = {}, p = h = null},
          destroy: function () {u = null, s = null, l = null, delete t[e]},
          info: function () {return f({}, s, {size: a})},
        }
      }

      var t = {}
      return e.info = function () {
        var e = {}
        return o(t, function (t, n) {e[n] = t.info()}), e
      }, e.get = function (e) {return t[e]}, e
    }
  }

  function Re () {
    this.$get = [
      '$cacheFactory',
      function (e) {return e('templates')}]
  }

  function Fe (e, r) {
    var i = {}, a = 'Directive', s = /^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,
      c = /(([\d\w_\-]+)(?:\:([^;]+))?;?)/, l = /^(on[a-z]+|formaction)$/
    this.directive = function p (t, n) {
      return re(t, 'directive'), b(t) ? (te(n,
        'directiveFactory'), i.hasOwnProperty(t) || (i[t] = [], e.factory(t + a,
        [
          '$injector', '$exceptionHandler', function (e, n) {
          var r = []
          return o(i[t], function (i, o) {
            try {
              var a = e.invoke(i)
              C(a) ? a = {compile: g(a)} : !a.compile && a.link &&
                (a.compile = g(a.link)), a.priority = a.priority ||
                0, a.index = o, a.name = a.name || t, a.require = a.require ||
                a.controller && a.name, a.restrict = a.restrict || 'A', r.push(
                a)
            } catch (s) {n(s)}
          }), r
        }])), i[t].push(n)) : o(t, u(p)), this
    }, this.aHrefSanitizationWhitelist = function (e) {
      return $(e)
        ? (r.aHrefSanitizationWhitelist(e), this)
        : r.aHrefSanitizationWhitelist()
    }, this.imgSrcSanitizationWhitelist = function (e) {
      return $(e)
        ? (r.imgSrcSanitizationWhitelist(e), this)
        : r.imgSrcSanitizationWhitelist()
    }, this.$get = [
      '$injector',
      '$interpolate',
      '$exceptionHandler',
      '$http',
      '$templateCache',
      '$parse',
      '$controller',
      '$rootScope',
      '$document',
      '$sce',
      '$animate',
      '$$sanitizeUri',
      function (e, r, u, p, d, g, m, $, x, w, T, S) {
        function E (e, t, n, r, i) {
          e instanceof yn || (e = yn(e)), o(e, function (t, n) {
            3 == t.nodeType && t.nodeValue.match(/\S+/) &&
            (e[n] = t = yn(t).wrap('<span></span>').parent()[0])
          })
          var a = A(e, t, e, n, r, i)
          return k(e, 'ng-scope'), function (t, n, r, i) {
            te(t, 'scope')
            var s = n ? Wn.clone.call(e) : e
            o(r, function (e, t) {s.data('$' + t + 'Controller', e)})
            for (var u = 0, c = s.length; u < c; u++) {
              var l = s[u], f = l.nodeType
              1 !== f && 9 !== f || s.eq(u).data('$scope', t)
            }
            return n && n(s, t), a && a(t, s, s, i), s
          }
        }

        function k (e, t) {try {e.addClass(t)} catch (n) {}}

        function A (e, t, r, i, o, a) {
          function s (e, r, i, o) {
            var a, s, u, c, l, f, p, h, v, g = r.length, m = new Array(g)
            for (f = 0; f < g; f++)m[f] = r[f];
            for (f = 0, h = 0, p = d.length; f <
            p; h++)u = m[h], a = d[f++], s = d[f++], c = yn(u), a ? (a.scope
              ? (l = e.$new(), c.data('$scope', l))
              : l = e, v = a.transcludeOnThisElement
              ? N(e, a.transclude, o)
              : !a.templateOnThisElement && o
                ? o
                : !o && t
                  ? N(e, t)
                  : null, a(s, l, u, i, v)) : s && s(e, u.childNodes, n, o)
          }

          for (var u, c, l, f, p, h, d = [], v = 0; v <
          e.length; v++)u = new J, c = j(e[v], [], u, 0 === v ? i : n,
            o), l = c.length ? M(c, e[v], u, t, r, null, [], [], a) : null, l &&
          l.scope && k(yn(e[v]), 'ng-scope'), p = l && l.terminal ||
          !(f = e[v].childNodes) || !f.length ? null : A(f,
            l ? (l.transcludeOnThisElement || !l.templateOnThisElement) &&
              l.transclude : t), d.push(l, p), h = h || l || p, a = null;
          return h ? s : null
        }

        function N (e, t, n) {
          var r = function (r, i, o) {
            var a = !1
            r || (r = e.$new(), r.$$transcluded = !0, a = !0)
            var s = t(r, i, o, n)
            return a && s.on('$destroy', function () {r.$destroy()}), s
          }
          return r
        }

        function j (e, t, n, r, i) {
          var o, a, u = e.nodeType, l = n.$attr
          switch (u) {
            case 1:
              H(t, Ie(wn(e).toLowerCase()), 'E', r, i)
              for (var f, p, h, d, v, g, m = e.attributes, $ = 0, y = m &&
                m.length; $ < y; $++) {
                var x = !1, w = !1
                if (f = m[$], !$n || $n >= 8 || f.specified) {
                  p = f.name, v = jn(f.value), d = Ie(p), (g = ee.test(d)) &&
                  (p = Z(d.substr(6), '-'))
                  var C = d.replace(/(Start|End)$/, '')
                  d === C + 'Start' &&
                  (x = p, w = p.substr(0, p.length - 5) + 'end', p = p.substr(0,
                    p.length - 6)), h = Ie(p.toLowerCase()), l[h] = p, !g &&
                  n.hasOwnProperty(h) || (n[h] = v, Ae(e, h) && (n[h] = !0)), z(
                    e, t, v, h), H(t, h, 'A', r, i, x, w)
                }
              }
              if (a = e.className, b(a) && '' !== a)for (; o = c.exec(
                a);)h = Ie(o[2]), H(t, h, 'C', r, i) &&
              (n[h] = jn(o[3])), a = a.substr(o.index + o[0].length);
              break
            case 3:
              U(t, e.nodeValue)
              break
            case 8:
              try {
                o = s.exec(e.nodeValue), o &&
                (h = Ie(o[1]), H(t, h, 'M', r, i) && (n[h] = jn(o[2])))
              } catch (T) {}
          }
          return t.sort(I), t
        }

        function D (e, t, n) {
          var r = [], i = 0
          if (t && e.hasAttribute && e.hasAttribute(t)) {
            do {
              if (!e)throw tr('uterdir',
                'Unterminated attribute, found \'{0}\' but no matching \'{1}\' found.',
                t, n)
              1 == e.nodeType &&
              (e.hasAttribute(t) && i++, e.hasAttribute(n) && i--), r.push(
                e), e = e.nextSibling
            } while (i > 0)
          } else r.push(e)
          return yn(r)
        }

        function O (e, t, n) {
          return function (r, i, o, a, s) {
            return i = D(i[0], t, n), e(r, i, o, a, s)
          }
        }

        function M (e, i, a, s, c, l, f, p, h) {
          function d (e, t, n, r) {
            e && (n &&
            (e = O(e, n, r)), e.require = w.require, e.directiveName = T, (I ===
            w || w.$$isolateScope) && (e = Q(e, {isolateScope: !0})), f.push(
              e)), t && (n &&
            (t = O(t, n, r)), t.require = w.require, t.directiveName = T, (I ===
            w || w.$$isolateScope) && (t = Q(t, {isolateScope: !0})), p.push(t))
          }

          function v (e, t, n, r) {
            var i, a = 'data', s = !1
            if (b(t)) {
              for (; "^" == (i = t.charAt(0)) || "?" == i;)t = t.substr(
                1), '^' == i && (a = 'inheritedData'), s = s || '?' == i;
              if (i = null, r && 'data' === a && (i = r[t]), i = i ||
                  n[a]('$' + t + 'Controller'), !i && !s)throw tr('ctreq',
                'Controller \'{0}\', required by directive \'{1}\', can\'t be found!',
                t, e)
              return i
            }
            return Nn(t) &&
            (i = [], o(t, function (t) {i.push(v(e, t, n, r))})), i
          }

          function $ (e, t, s, c, l) {
            function h (e, t) {
              var r
              return arguments.length < 2 && (t = e, e = n), Y && (r = S), l(e,
                t, r)
            }

            var d, $, y, b, x, w, C, T, S = {}
            if (d = i === s ? a : P(a, new J(yn(s),
                a.$attr)), $ = d.$$element, I) {
              var E = /^\s*([@=&])(\??)\s*(\w*)\s*$/, A = yn(s)
              C = t.$new(!0), !U || U !== I && U !== I.$$originalDirective
                ? A.data('$isolateScopeNoTemplate', C)
                : A.data('$isolateScope', C), k(A, 'ng-isolate-scope'), o(
                I.scope, function (e, n) {
                  var i, o, a, s, u = e.match(E) || [], c = u[3] || n,
                    l = '?' == u[2], f = u[1]
                  switch (C.$$isolateBindings[n] = f + c, f) {
                    case'@':
                      d.$observe(c,
                        function (e) {C[n] = e}), d.$$observers[c].$$scope = t, d[c] &&
                      (C[n] = r(d[c])(t))
                      break
                    case'=':
                      if (l && !d[c])return
                      o = g(d[c]), s = o.literal ? _ : function (
                        e, t) {
                        return e === t
                      }, a = o.assign || function () {
                          throw i = C[n] = o(t), tr('nonassign',
                            'Expression \'{0}\' used with directive \'{1}\' is non-assignable!',
                            d[c], I.name)
                        }, i = C[n] = o(t), C.$watch(function () {
                        var e = o(t)
                        return s(e, C[n]) ||
                        (s(e, i) ? a(t, e = C[n]) : C[n] = e), i = e
                      }, null, o.literal)
                      break
                    case'&':
                      o = g(d[c]), C[n] = function (e) {return o(t, e)}
                      break
                    default:
                      throw tr('iscp',
                        'Invalid isolate scope definition for directive \'{0}\'. Definition: {... {1}: \'{2}\' ...}',
                        I.name, n, e)
                  }
                })
            }
            for (T = l && h, H && o(H, function (e) {
              var n, r = {
                $scope: e === I || e.$$isolateScope ? C : t,
                $element: $,
                $attrs: d,
                $transclude: T,
              }
              w = e.controller, '@' == w && (w = d[e.name]), n = m(w,
                r), S[e.name] = n, Y ||
              $.data('$' + e.name + 'Controller', n), e.controllerAs &&
              (r.$scope[e.controllerAs] = n)
            }), y = 0, b = f.length; y < b; y++)try {
              x = f[y], x(x.isolateScope ? C : t, $, d,
                x.require && v(x.directiveName, x.require, $, S), T)
            } catch (N) {u(N, W($))}
            var j = t
            for (I && (I.template || null === I.templateUrl) && (j = C), e &&
            e(j, s.childNodes, n, l), y = p.length - 1; y >= 0; y--)try {
              x = p[y], x(x.isolateScope ? C : t, $, d,
                x.require && v(x.directiveName, x.require, $, S), T)
            } catch (N) {u(N, W($))}
          }

          h = h || {}
          for (var x, w, T, S, A, N, M = -Number.MAX_VALUE, H = h.controllerDirectives, I = h.newIsolateScopeDirective, U = h.templateDirective, V = h.nonTlbTranscludeDirective, z = !1, G = !1, Y = h.hasElementTranscludeDirective, Z = a.$$element = yn(
            i), ee = l, te = s, ne = 0, re = e.length; ne < re; ne++) {
            w = e[ne]
            var ie = w.$$start, oe = w.$$end
            if (ie && (Z = D(i, ie, oe)), S = n, M > w.priority)break
            if ((N = w.scope) && (x = x || w, w.templateUrl ||
              (B('new/isolated scope', I, w, Z), y(N) &&
              (I = w))), T = w.name, !w.templateUrl && w.controller &&
              (N = w.controller, H = H || {}, B('\'' + T + '\' controller', H[T],
                w, Z), H[T] = w), (N = w.transclude) && (z = !0, w.$$tlb ||
              (B('transclusion', V, w, Z), V = w), 'element' == N
                ? (Y = !0, M = w.priority, S = D(i, ie,
                  oe), Z = a.$$element = yn(
                  t.createComment(' ' + T + ': ' + a[T] + ' ')), i = Z[0], X(c,
                  yn(R(S)), i), te = E(S, s, M, ee && ee.name,
                  {nonTlbTranscludeDirective: V}))
                : (S = yn(ve(i)).contents(), Z.empty(), te = E(S,
                  s))), w.template)if (G = !0, B('template', U, w,
                Z), U = w, N = C(w.template)
                ? w.template(Z, a)
                : w.template, N = K(N), w.replace) {
              if (ee = w, S = fe(N)
                  ? []
                  : yn(jn(N)), i = S[0], 1 != S.length ||
                1 !== i.nodeType)throw tr('tplrt',
                'Template for directive \'{0}\' must have exactly one root element. {1}',
                T, '')
              X(c, Z, i)
              var ae = {$attr: {}}, se = j(i, [], ae),
                ue = e.splice(ne + 1, e.length - (ne + 1))
              I && L(se), e = e.concat(se).concat(ue), q(a, ae), re = e.length
            } else Z.html(N)
            if (w.templateUrl) G = !0, B('template', U, w,
              Z), U = w, w.replace && (ee = w), $ = F(
              e.splice(ne, e.length - ne), Z, a, c, z && te, f, p, {
                controllerDirectives: H,
                newIsolateScopeDirective: I,
                templateDirective: U,
                nonTlbTranscludeDirective: V,
              }), re = e.length else if (w.compile)try {
              A = w.compile(Z, a, te), C(A) ? d(null, A, ie, oe) : A &&
                d(A.pre, A.post, ie, oe)
            } catch (ce) {u(ce, W(Z))}
            w.terminal && ($.terminal = !0, M = Math.max(M, w.priority))
          }
          return $.scope = x && x.scope ===
            !0, $.transcludeOnThisElement = z, $.templateOnThisElement = G, $.transclude = te, h.hasElementTranscludeDirective = Y, $
        }

        function L (e) {
          for (var t = 0, n = e.length; t < n; t++)e[t] = h(e[t],
            {$$isolateScope: !0})
        }

        function H (t, r, o, s, c, l, f) {
          if (r === c)return null
          var p = null
          if (i.hasOwnProperty(r))for (var d, v = e.get(
            r + a), g = 0, m = v.length; g < m; g++)try {
            d = v[g], (s === n || s > d.priority) &&
            d.restrict.indexOf(o) != -1 &&
            (l && (d = h(d, {$$start: l, $$end: f})), t.push(d), p = d)
          } catch ($) {u($)}
          return p
        }

        function q (e, t) {
          var n = t.$attr, r = e.$attr, i = e.$$element
          o(e, function (r, i) {
            '$' != i.charAt(0) && (t[i] && t[i] !== r &&
            (r += ('style' === i ? ';' : ' ') + t[i]), e.$set(i, r, !0, n[i]))
          }), o(t, function (t, o) {
            'class' == o ? (k(i, t), e['class'] = (e['class']
                ? e['class'] + ' '
                : '') + t) : 'style' == o ? (i.attr('style',
              i.attr('style') + ';' + t), e.style = (e.style
                ? e.style + ';'
                : '') + t) : '$' == o.charAt(0) || e.hasOwnProperty(o) ||
              (e[o] = t, r[o] = n[o])
          })
        }

        function F (e, t, n, r, i, a, s, u) {
          var c, l, h = [], v = t[0], g = e.shift(), m = f({}, g, {
            templateUrl: null,
            transclude: null,
            replace: null,
            $$originalDirective: g,
          }), $ = C(g.templateUrl) ? g.templateUrl(t, n) : g.templateUrl
          return t.empty(), p.get(w.getTrustedResourceUrl($), {cache: d}).
            success(function (f) {
              var p, d, b, x
              if (f = K(f), g.replace) {
                if (b = fe(f) ? [] : yn(jn(f)), p = b[0], 1 != b.length ||
                  1 !== p.nodeType)throw tr('tplrt',
                  'Template for directive \'{0}\' must have exactly one root element. {1}',
                  g.name, $)
                d = {$attr: {}}, X(r, t, p)
                var w = j(p, [], d)
                y(g.scope) && L(w), e = w.concat(e), q(n, d)
              } else p = v, t.html(f)
              for (e.unshift(m), c = M(e, p, n, i, t, g, a, s, u), o(r,
                function (e, n) {e == p && (r[n] = t[0])}), l = A(
                t[0].childNodes, i); h.length;) {
                var C = h.shift(), T = h.shift(), S = h.shift(), E = h.shift(),
                  D = t[0]
                if (T !== v) {
                  var O = T.className
                  u.hasElementTranscludeDirective && g.replace ||
                  (D = ve(p)), X(S, yn(T), D), k(yn(D), O)
                }
                x = c.transcludeOnThisElement ? N(C, c.transclude, E) : E, c(l,
                  C, D, r, x)
              }
              h = null
            }).
            error(function (e, t, n, r) {
              throw tr('tpload', 'Failed to load template: {0}', r.url)
            }), function (e, t, n, r, i) {
            var o = i
            h
              ? (h.push(t), h.push(n), h.push(r), h.push(o))
              : (c.transcludeOnThisElement && (o = N(t, c.transclude, i)), c(l,
              t, n, r, o))
          }
        }

        function I (e, t) {
          var n = t.priority - e.priority
          return 0 !== n
            ? n
            : e.name !== t.name
              ? e.name < t.name
                ? -1
                : 1
              : e.index - t.index
        }

        function B (e, t, n, r) {
          if (t)throw tr('multidir',
            'Multiple directives [{0}, {1}] asking for {2} on: {3}', t.name,
            n.name, e, W(r))
        }

        function U (e, t) {
          var n = r(t, !0)
          n && e.push({
            priority: 0,
            compile: function (e) {
              var t = e.parent(), r = t.length
              return r && k(e.parent(), 'ng-binding'), function (
                e, t) {
                var i = t.parent(), o = i.data('$binding') || []
                o.push(n), i.data('$binding', o), r ||
                k(i, 'ng-binding'), e.$watch(n,
                  function (e) {t[0].nodeValue = e})
              }
            },
          })
        }

        function V (e, t) {
          if ('srcdoc' == t)return w.HTML
          var n = wn(e)
          return 'xlinkHref' == t || 'FORM' == n && 'action' == t ||
          'IMG' != n && ('src' == t || 'ngSrc' == t) ? w.RESOURCE_URL : void 0
        }

        function z (e, t, n, i) {
          var o = r(n, !0)
          if (o) {
            if ('multiple' === i && 'SELECT' === wn(e))throw tr('selmulti',
              'Binding to the \'multiple\' attribute is not supported. Element: {0}',
              W(e))
            t.push({
              priority: 100, compile: function () {
                return {
                  pre: function (t, n, a) {
                    var s = a.$$observers || (a.$$observers = {})
                    if (l.test(i))throw tr('nodomevents',
                      'Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.')
                    o = r(a[i], !0, V(e, i)), o && (a[i] = o(t), (s[i] ||
                    (s[i] = [])).$$inter = !0, (a.$$observers &&
                    a.$$observers[i].$$scope || t).$watch(o, function (e, t) {
                      'class' === i && e != t ? a.$updateClass(e, t) : a.$set(i,
                        e)
                    }))
                  },
                }
              },
            })
          }
        }

        function X (e, n, r) {
          var i, o, a = n[0], s = n.length, u = a.parentNode
          if (e)for (i = 0, o = e.length; i < o; i++)if (e[i] == a) {
            e[i++] = r
            for (var c = i, l = c + s - 1, f = e.length; c < f; c++, l++)l < f
              ? e[c] = e[l]
              : delete e[c];
            e.length -= s - 1
            break
          }
          u && u.replaceChild(r, a)
          var p = t.createDocumentFragment()
          p.appendChild(a), r[yn.expando] = a[yn.expando]
          for (var h = 1, d = n.length; h < d; h++) {
            var v = n[h]
            yn(v).remove(), p.appendChild(v), delete n[h]
          }
          n[0] = r, n.length = 1
        }

        function Q (e, t) {
          return f(function () {return e.apply(null, arguments)}, e, t)
        }

        var J = function (e, t) {this.$$element = e, this.$attr = t || {}}
        J.prototype = {
          $normalize: Ie,
          $addClass: function (e) {
            e && e.length > 0 && T.addClass(this.$$element, e)
          },
          $removeClass: function (e) {
            e && e.length > 0 && T.removeClass(this.$$element, e)
          },
          $updateClass: function (e, t) {
            var n = Be(e, t), r = Be(t, e)
            0 === n.length
              ? T.removeClass(this.$$element, r)
              : 0 === r.length
              ? T.addClass(this.$$element, n)
              : T.setClass(this.$$element, n, r)
          },
          $set: function (e, t, r, i) {
            var a, s = Ae(this.$$element[0], e)
            s && (this.$$element.prop(e, t), i = s), this[e] = t, i
              ? this.$attr[e] = i
              : (i = this.$attr[e], i ||
              (this.$attr[e] = i = Z(e, '-'))), a = wn(this.$$element), ('A' ===
            a && 'href' === e || 'IMG' === a && 'src' === e) &&
            (this[e] = t = S(t, 'src' === e)), r !== !1 &&
            (null === t || t === n
              ? this.$$element.removeAttr(i)
              : this.$$element.attr(i, t))
            var c = this.$$observers
            c && o(c[e], function (e) {try {e(t)} catch (n) {u(n)}})
          },
          $observe: function (e, t) {
            var n = this, r = n.$$observers || (n.$$observers = {}),
              i = r[e] || (r[e] = [])
            return i.push(t), $.$evalAsync(
              function () {i.$$inter || t(n[e])}), t
          },
        }
        var G = r.startSymbol(), Y = r.endSymbol(),
          K = '{{' == G || '}}' == Y ? v : function (e) {
            return e.replace(/\{\{/g, G).replace(/}}/g, Y)
          }, ee = /^ngAttr[A-Z]/
        return E
      }]
  }

  function Ie (e) {return ce(e.replace(nr, ''))}

  function Be (e, t) {
    var n = '', r = e.split(/\s+/), i = t.split(/\s+/)
    e:for (var o = 0; o < r.length; o++) {
      for (var a = r[o], s = 0; s < i.length; s++)if (a == i[s])continue e
      n += (n.length > 0 ? ' ' : '') + a
    }
    return n
  }

  function Ue () {
    var e = {}, t = /^(\S+)(\s+as\s+(\w+))?$/
    this.register = function (t, n) {
      re(t, 'controller'), y(t)
        ? f(e, t)
        : e[t] = n
    }, this.$get = [
      '$injector',
      '$window',
      function (n, i) {
        return function (o, a) {
          var s, u, c, l
          if (b(o) &&
            (u = o.match(t), c = u[1], l = u[3], o = e.hasOwnProperty(c)
              ? e[c]
              : ie(a.$scope, c, !0) || ie(i, c, !0), ne(o, c,
              !0)), s = n.instantiate(o, a), l) {
            if (!a || 'object' != typeof a.$scope)throw r('$controller')(
              'noscp',
              'Cannot export controller \'{0}\' as \'{1}\'! No $scope object provided via `locals`.',
              c || o.name, l)
            a.$scope[l] = s
          }
          return s
        }
      }]
  }

  function Ve () {this.$get = ['$window', function (e) {return yn(e.document)}]}

  function We () {
    this.$get = [
      '$log',
      function (e) {return function (t, n) {e.error.apply(e, arguments)}}]
  }

  function ze (e) {
    var t, n, r, i = {}
    return e ? (o(e.split('\n'), function (e) {
      r = e.indexOf(':'), t = hn(jn(e.substr(0, r))), n = jn(
        e.substr(r + 1)), t && (i[t] ? i[t] += ', ' + n : i[t] = n)
    }), i) : i
  }

  function Xe (e) {
    var t = y(e) ? e : n
    return function (n) {return t || (t = ze(e)), n ? t[hn(n)] || null : t}
  }

  function Qe (e, t, n) {
    return C(n) ? n(e, t) : (o(n, function (n) {e = n(e, t)}), e)
  }

  function Je (e) {return 200 <= e && e < 300}

  function Ge () {
    var e = /^\s*(\[|\{[^\{])/, t = /[\}\]]\s*$/, r = /^\)\]\}',?\n/,
      i = {'Content-Type': 'application/json;charset=utf-8'},
      a = this.defaults = {
        transformResponse: [
          function (n) {
            return b(n) &&
            (n = n.replace(r, ''), e.test(n) && t.test(n) && (n = U(n))), n
          }],
        transformRequest: [
          function (e) {
            return !y(e) || k(e) || A(e) ? e : B(e)
          }],
        headers: {
          common: {Accept: 'application/json, text/plain, */*'},
          post: P(i),
          put: P(i),
          patch: P(i),
        },
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
      }, u = this.interceptors = [], c = this.responseInterceptors = []
    this.$get = [
      '$httpBackend',
      '$browser',
      '$cacheFactory',
      '$rootScope',
      '$q',
      '$injector',
      function (e, t, r, i, l, p) {
        function h (e) {
          function t (e) {
            var t = f({}, e,
              {data: Qe(e.data, e.headers, i.transformResponse)})
            return Je(e.status) ? t : l.reject(t)
          }

          function r (e) {
            function t (e) {
              var t
              o(e, function (n, r) {
                C(n) && (t = n(), null != t ? e[r] = t : delete e[r])
              })
            }

            var n, r, i, s = a.headers, u = f({}, e.headers)
            s = f({}, s.common, s[hn(e.method)])
            e:for (n in s) {
              r = hn(n)
              for (i in u)if (hn(i) === r)continue e
              u[n] = s[n]
            }
            return t(u), u
          }

          var i = {
            method: 'get',
            transformRequest: a.transformRequest,
            transformResponse: a.transformResponse,
          }, s = r(e)
          f(i, e), i.headers = s, i.method = vn(i.method)
          var u = function (e) {
            s = e.headers
            var n = Qe(e.data, Xe(s), e.transformRequest)
            return m(n) &&
            o(s, function (e, t) {'content-type' === hn(t) && delete s[t]}), m(
              e.withCredentials) && !m(a.withCredentials) &&
            (e.withCredentials = a.withCredentials), g(e, n, s).then(t, t)
          }, c = [u, n], p = l.when(i)
          for (o(T, function (e) {
            (e.request || e.requestError) &&
            c.unshift(e.request, e.requestError), (e.response ||
            e.responseError) && c.push(e.response, e.responseError)
          }); c.length;) {
            var h = c.shift(), d = c.shift()
            p = p.then(h, d)
          }
          return p.success = function (e) {
            return p.then(function (t) {e(t.data, t.status, t.headers, i)}), p
          }, p.error = function (e) {
            return p.then(null,
              function (t) {e(t.data, t.status, t.headers, i)}), p
          }, p
        }

        function d (e) {
          o(arguments, function (e) {
            h[e] = function (t, n) {
              return h(f(n || {}, {method: e, url: t}))
            }
          })
        }

        function v (e) {
          o(arguments, function (e) {
            h[e] = function (t, n, r) {
              return h(f(r || {}, {method: e, url: t, data: n}))
            }
          })
        }

        function g (r, o, s) {
          function u (e, t, n, r) {
            p && (Je(e) ? p.put(b, [e, t, ze(n), r]) : p.remove(b)), c(t, e, n,
              r), i.$$phase || i.$apply()
          }

          function c (e, t, n, i) {
            t = Math.max(t, 0), (Je(t)
              ? v.resolve
              : v.reject)(
              {data: e, status: t, headers: Xe(n), config: r, statusText: i})
          }

          function f () {
            var e = O(h.pendingRequests, r)
            e !== -1 && h.pendingRequests.splice(e, 1)
          }

          var p, d, v = l.defer(), g = v.promise, b = x(r.url, r.params)
          if (h.pendingRequests.push(r), g.then(f, f), (r.cache || a.cache) &&
            r.cache !== !1 && 'GET' == r.method && (p = y(r.cache)
              ? r.cache
              : y(a.cache)
                ? a.cache
                : w), p)if (d = p.get(b), $(d)) {
            if (d.then)return d.then(f, f), d
            Nn(d) ? c(d[1], d[0], P(d[2]), d[3]) : c(d, 200, {}, 'OK')
          } else p.put(b, g)
          if (m(d)) {
            var C = Ht(r.url) ? t.cookies()[r.xsrfCookieName ||
            a.xsrfCookieName] : n
            C && (s[r.xsrfHeaderName || a.xsrfHeaderName] = C), e(r.method, b,
              o, u, s, r.timeout, r.withCredentials, r.responseType)
          }
          return g
        }

        function x (e, t) {
          if (!t)return e
          var n = []
          return s(t, function (e, t) {
            null === e || m(e) || (Nn(e) || (e = [e]), o(e,
              function (e) {y(e) && (e = B(e)), n.push(G(t) + '=' + G(e))}))
          }), n.length > 0 &&
          (e += (e.indexOf('?') == -1 ? '?' : '&') + n.join('&')), e
        }

        var w = r('$http'), T = []
        return o(u, function (e) {T.unshift(b(e) ? p.get(e) : p.invoke(e))}), o(
          c, function (e, t) {
            var n = b(e) ? p.get(e) : p.invoke(e)
            T.splice(t, 0, {
              response: function (e) {return n(l.when(e))},
              responseError: function (e) {return n(l.reject(e))},
            })
          }), h.pendingRequests = [], d('get', 'delete', 'head', 'jsonp'), v(
          'post', 'put'), h.defaults = a, h
      }]
  }

  function Ye (t) {
    if ($n <= 8 && (!t.match(/^(get|post|head|put|delete|options)$/i) ||
      !e.XMLHttpRequest))return new e.ActiveXObject('Microsoft.XMLHTTP')
    if (e.XMLHttpRequest)return new e.XMLHttpRequest
    throw r('$httpBackend')('noxhr',
      'This browser does not support XMLHttpRequest.')
  }

  function Ke () {
    this.$get = [
      '$browser',
      '$window',
      '$document',
      function (e, t, n) {return Ze(e, Ye, e.defer, t.angular.callbacks, n[0])}]
  }

  function Ze (e, t, n, r, i) {
    function a (e, t, n) {
      var o = i.createElement('script'), a = null
      return o.type = 'text/javascript', o.src = e, o.async = !0, a = function (e) {
        _n(o, 'load', a), _n(o, 'error', a), i.body.removeChild(o), o = null
        var s = -1, u = 'unknown'
        e && ('load' !== e.type || r[t].called ||
        (e = {type: 'error'}), u = e.type, s = 'error' === e.type
          ? 404
          : 200), n && n(s, u)
      }, Pn(o, 'load', a), Pn(o, 'error', a), $n <= 8 &&
      (o.onreadystatechange = function () {
        b(o.readyState) && /loaded|complete/.test(o.readyState) &&
        (o.onreadystatechange = null, a({type: 'load'}))
      }), i.body.appendChild(o), a
    }

    var s = -1
    return function (i, u, c, l, f, p, h, v) {
      function g () {
        y = s, x && x(), w && w.abort()
      }

      function m (t, r, i, o, a) {
        T && n.cancel(T), x = w = null, 0 === r &&
        (r = i ? 200 : 'file' == _t(u).protocol ? 404 : 0), r = 1223 === r
          ? 204
          : r, a = a || '', t(r, i, o, a), e.$$completeOutstandingRequest(d)
      }

      var y
      if (e.$$incOutstandingRequestCount(), u = u || e.url(), 'jsonp' ==
        hn(i)) {
        var b = '_' + (r.counter++).toString(36)
        r[b] = function (e) {r[b].data = e, r[b].called = !0}
        var x = a(u.replace('JSON_CALLBACK', 'angular.callbacks.' + b), b,
          function (e, t) {m(l, e, r[b].data, '', t), r[b] = d})
      } else {
        var w = t(i)
        if (w.open(i, u, !0), o(f, function (e, t) {
            $(e) && w.setRequestHeader(t, e)
          }), w.onreadystatechange = function () {
            if (w && 4 == w.readyState) {
              var e = null, t = null, n = ''
              y !== s && (e = w.getAllResponseHeaders(), t = 'response' in w
                ? w.response
                : w.responseText), y === s && $n < 10 || (n = w.statusText), m(
                l, y || w.status, t, e, n)
            }
          }, h &&
          (w.withCredentials = !0), v)try {w.responseType = v} catch (C) {
          if ('json' !== v)throw C
        }
        w.send(c || null)
      }
      if (p > 0)var T = n(g, p) else p && p.then && p.then(g)
    }
  }

  function et () {
    var e = '{{', t = '}}'
    this.startSymbol = function (t) {
      return t
        ? (e = t, this)
        : e
    }, this.endSymbol = function (e) {
      return e
        ? (t = e, this)
        : t
    }, this.$get = [
      '$parse',
      '$exceptionHandler',
      '$sce',
      function (n, r, i) {
        function o (o, u, c) {
          for (var l, f, p, h, d = 0, v = [], g = o.length, m = !1, $ = []; d <
          g;)(l = o.indexOf(e, d)) != -1 && (f = o.indexOf(t, l + a)) != -1
            ? (d != l && v.push(o.substring(d, l)), v.push(
              p = n(h = o.substring(l + a, f))), p.exp = h, d = f + s, m = !0)
            : (d != g && v.push(o.substring(d)), d = g);
          if ((g = v.length) || (v.push(''), g = 1), c && v.length > 1)throw rr(
            'noconcat',
            'Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce',
            o)
          if (!u || m)return $.length = g, p = function (e) {
            try {
              for (var t, n = 0, a = g; n < a; n++) {
                if ('function' == typeof(t = v[n]))if (t = t(e), t = c
                    ? i.getTrusted(c, t)
                    : i.valueOf(t), null == t) t = '' else switch (typeof t) {
                  case'string':
                    break
                  case'number':
                    t = '' + t
                    break
                  default:
                    t = B(t)
                }
                $[n] = t
              }
              return $.join('')
            } catch (s) {
              var u = rr('interr', 'Can\'t interpolate: {0}\n{1}', o,
                s.toString())
              r(u)
            }
          }, p.exp = o, p.parts = v, p
        }

        var a = e.length, s = t.length
        return o.startSymbol = function () {return e}, o.endSymbol = function () {return t}, o
      }]
  }

  function tt () {
    this.$get = [
      '$rootScope',
      '$window',
      '$q',
      function (e, t, n) {
        function r (r, o, a, s) {
          var u = t.setInterval, c = t.clearInterval, l = n.defer(),
            f = l.promise, p = 0, h = $(s) && !s
          return a = $(a) ? a : 0, f.then(null, null, r), f.$$intervalId = u(
            function () {
              l.notify(p++), a > 0 && p >= a &&
              (l.resolve(p), c(f.$$intervalId), delete i[f.$$intervalId]), h ||
              e.$apply()
            }, o), i[f.$$intervalId] = l, f
        }

        var i = {}
        return r.cancel = function (e) {
          return !!(e && e.$$intervalId in i) &&
            (i[e.$$intervalId].reject('canceled'), t.clearInterval(
              e.$$intervalId), delete i[e.$$intervalId], !0)
        }, r
      }]
  }

  function nt () {
    this.$get = function () {
      return {
        id: 'en-us',
        NUMBER_FORMATS: {
          DECIMAL_SEP: '.',
          GROUP_SEP: ',',
          PATTERNS: [
            {
              minInt: 1,
              minFrac: 0,
              maxFrac: 3,
              posPre: '',
              posSuf: '',
              negPre: '-',
              negSuf: '',
              gSize: 3,
              lgSize: 3,
            },
            {
              minInt: 1,
              minFrac: 2,
              maxFrac: 2,
              posPre: '¤',
              posSuf: '',
              negPre: '(¤',
              negSuf: ')',
              gSize: 3,
              lgSize: 3,
            }],
          CURRENCY_SYM: '$',
        },
        DATETIME_FORMATS: {
          MONTH: 'January,February,March,April,May,June,July,August,September,October,November,December'.split(
            ','),
          SHORTMONTH: 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'.split(
            ','),
          DAY: 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday'.split(
            ','),
          SHORTDAY: 'Sun,Mon,Tue,Wed,Thu,Fri,Sat'.split(','),
          AMPMS: ['AM', 'PM'],
          medium: 'MMM d, y h:mm:ss a',
          'short': 'M/d/yy h:mm a',
          fullDate: 'EEEE, MMMM d, y',
          longDate: 'MMMM d, y',
          mediumDate: 'MMM d, y',
          shortDate: 'M/d/yy',
          mediumTime: 'h:mm:ss a',
          shortTime: 'h:mm a',
        },
        pluralCat: function (e) {return 1 === e ? 'one' : 'other'},
      }
    }
  }

  function rt (e) {
    for (var t = e.split('/'), n = t.length; n--;)t[n] = J(t[n]);
    return t.join('/')
  }

  function it (e, t, n) {
    var r = _t(e, n)
    t.$$protocol = r.protocol, t.$$host = r.hostname, t.$$port = p(r.port) ||
      or[r.protocol] || null
  }

  function ot (e, t, n) {
    var r = '/' !== e.charAt(0)
    r && (e = '/' + e)
    var i = _t(e, n)
    t.$$path = decodeURIComponent(r && '/' === i.pathname.charAt(0)
      ? i.pathname.substring(1)
      : i.pathname), t.$$search = X(i.search), t.$$hash = decodeURIComponent(
      i.hash), t.$$path && '/' != t.$$path.charAt(0) &&
    (t.$$path = '/' + t.$$path)
  }

  function at (e, t) {if (0 === t.indexOf(e))return t.substr(e.length)}

  function st (e) {
    var t = e.indexOf('#')
    return t == -1 ? e : e.substr(0, t)
  }

  function ut (e) {return e.substr(0, st(e).lastIndexOf('/') + 1)}

  function ct (e) {return e.substring(0, e.indexOf('/', e.indexOf('//') + 2))}

  function lt (e, t) {
    this.$$html5 = !0, t = t || ''
    var r = ut(e)
    it(e, this, e), this.$$parse = function (t) {
      var n = at(r, t)
      if (!b(n))throw ar('ipthprfx',
        'Invalid url "{0}", missing path prefix "{1}".', t, r)
      ot(n, this, e), this.$$path || (this.$$path = '/'), this.$$compose()
    }, this.$$compose = function () {
      var e = Q(this.$$search), t = this.$$hash ? '#' + J(this.$$hash) : ''
      this.$$url = rt(this.$$path) + (e ? '?' + e : '') + t, this.$$absUrl = r +
        this.$$url.substr(1)
    }, this.$$rewrite = function (i) {
      var o, a
      return (o = at(e, i)) !== n
        ? (a = o, (o = at(t, o)) !== n ? r + (at('/', o) || o) : e + a)
        : (o = at(r, i)) !== n
          ? r + o
          : r == i + '/'
            ? r
            : void 0
    }
  }

  function ft (e, t) {
    var n = ut(e)
    it(e, this, e), this.$$parse = function (r) {
      function i (e, t, n) {
        var r, i = /^\/[A-Z]:(\/.*)/
        return 0 === t.indexOf(n) && (t = t.replace(n, '')), i.exec(t)
          ? e
          : (r = i.exec(e), r ? r[1] : e)
      }

      var o = at(e, r) || at(n, r),
        a = '#' == o.charAt(0) ? at(t, o) : this.$$html5 ? o : ''
      if (!b(a))throw ar('ihshprfx',
        'Invalid url "{0}", missing hash prefix "{1}".', r, t)
      ot(a, this, e), this.$$path = i(this.$$path, a, e), this.$$compose()
    }, this.$$compose = function () {
      var n = Q(this.$$search), r = this.$$hash ? '#' + J(this.$$hash) : ''
      this.$$url = rt(this.$$path) + (n ? '?' + n : '') + r, this.$$absUrl = e +
        (this.$$url ? t + this.$$url : '')
    }, this.$$rewrite = function (t) {if (st(e) == st(t))return t}
  }

  function pt (e, t) {
    this.$$html5 = !0, ft.apply(this, arguments)
    var n = ut(e)
    this.$$rewrite = function (r) {
      var i
      return e == st(r)
        ? r
        : (i = at(n, r))
          ? e + t + i
          : n === r + '/'
            ? n
            : void 0
    }, this.$$compose = function () {
      var n = Q(this.$$search), r = this.$$hash ? '#' + J(this.$$hash) : ''
      this.$$url = rt(this.$$path) + (n ? '?' + n : '') + r, this.$$absUrl = e +
        t + this.$$url
    }
  }

  function ht (e) {return function () {return this[e]}}

  function dt (e, t) {
    return function (n) {
      return m(n) ? this[e] : (this[e] = t(n), this.$$compose(), this)
    }
  }

  function vt () {
    var t = '', n = !1
    this.hashPrefix = function (e) {
      return $(e)
        ? (t = e, this)
        : t
    }, this.html5Mode = function (e) {
      return $(e)
        ? (n = e, this)
        : n
    }, this.$get = [
      '$rootScope',
      '$browser',
      '$sniffer',
      '$rootElement',
      function (r, i, o, a) {
        function s (e) {
          r.$broadcast('$locationChangeSuccess', u.absUrl(), e)
        }

        var u, c, l, f = i.baseHref(), p = i.url()
        n ? (l = ct(p) + (f || '/'), c = o.history ? lt : pt) : (l = st(
          p), c = ft), u = new c(l, '#' + t), u.$$parse(u.$$rewrite(p)), a.on(
          'click', function (n) {
            if (!n.ctrlKey && !n.metaKey && 2 != n.which) {
              for (var o = yn(n.target); "a" !== hn(o[0].nodeName);)if (o[0] ===
                a[0] || !(o = o.parent())[0])return
              var s = o.prop('href')
              if (y(s) && '[object SVGAnimatedString]' === s.toString() &&
                (s = _t(s.animVal).href), c === pt) {
                var f = o.attr('href') || o.attr('xlink:href')
                if (f.indexOf('://') < 0) {
                  var p = '#' + t
                  if ('/' == f[0]) s = l + p + f else if ('#' == f[0]) s = l +
                    p + (u.path() || '/') + f else {
                    for (var h = u.path().
                      split('/'), d = f.split('/'), v = 0; v <
                         d.length; v++)'.' != d[v] &&
                    ('..' == d[v] ? h.pop() : d[v].length && h.push(d[v]));
                    s = l + p + h.join('/')
                  }
                }
              }
              var g = u.$$rewrite(s)
              s && !o.attr('target') && g && !n.isDefaultPrevented() &&
              (n.preventDefault(), g != i.url() && (u.$$parse(
                g), r.$apply(), e.angular['ff-684208-preventDefault'] = !0))
            }
          }), u.absUrl() != p && i.url(u.absUrl(), !0), i.onUrlChange(
          function (e) {
            u.absUrl() != e && (r.$evalAsync(function () {
              var t = u.absUrl()
              u.$$parse(e), r.$broadcast('$locationChangeStart', e,
                t).defaultPrevented ? (u.$$parse(t), i.url(t)) : s(t)
            }), r.$$phase || r.$digest())
          })
        var h = 0
        return r.$watch(function () {
          var e = i.url(), t = u.$$replace
          return h && e == u.absUrl() || (h++, r.$evalAsync(function () {
            r.$broadcast('$locationChangeStart', u.absUrl(), e).defaultPrevented
              ? u.$$parse(e)
              : (i.url(u.absUrl(), t), s(e))
          })), u.$$replace = !1, h
        }), u
      }]
  }

  function gt () {
    var e = !0, t = this
    this.debugEnabled = function (t) {
      return $(t)
        ? (e = t, this)
        : e
    }, this.$get = [
      '$window',
      function (n) {
        function r (e) {
          return e instanceof Error &&
          (e.stack ? e = e.message && e.stack.indexOf(e.message) === -1
            ? 'Error: ' + e.message + '\n' + e.stack
            : e.stack : e.sourceURL &&
            (e = e.message + '\n' + e.sourceURL + ':' + e.line)), e
        }

        function i (e) {
          var t = n.console || {}, i = t[e] || t.log || d, a = !1
          try {a = !!i.apply} catch (s) {}
          return a ? function () {
            var e = []
            return o(arguments, function (t) {e.push(r(t))}), i.apply(t, e)
          } : function (e, t) {i(e, null == t ? '' : t)}
        }

        return {
          log: i('log'),
          info: i('info'),
          warn: i('warn'),
          error: i('error'),
          debug: function () {
            var n = i('debug')
            return function () {e && n.apply(t, arguments)}
          }(),
        }
      }]
  }

  function mt (e, t) {
    if ('__defineGetter__' === e || '__defineSetter__' === e ||
      '__lookupGetter__' === e || '__lookupSetter__' === e ||
      '__proto__' === e)throw ur('isecfld',
      'Attempting to access a disallowed field in Angular expressions! Expression: {0}',
      t)
    return e
  }

  function $t (e, t) {
    if (e) {
      if (e.constructor === e)throw ur('isecfn',
        'Referencing Function in Angular expressions is disallowed! Expression: {0}',
        t)
      if (e.document && e.location && e.alert && e.setInterval)throw ur(
        'isecwindow',
        'Referencing the Window in Angular expressions is disallowed! Expression: {0}',
        t)
      if (e.children && (e.nodeName || e.prop && e.attr && e.find))throw ur(
        'isecdom',
        'Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}',
        t)
      if (e === Object)throw ur('isecobj',
        'Referencing Object in Angular expressions is disallowed! Expression: {0}',
        t)
    }
    return e
  }

  function yt (e, t) {
    if (e) {
      if (e.constructor === e)throw ur('isecfn',
        'Referencing Function in Angular expressions is disallowed! Expression: {0}',
        t)
      if (e === lr || e === fr || pr && e === pr)throw ur('isecff',
        'Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}',
        t)
    }
  }

  function bt (e, t, r, i, o) {
    o = o || {}
    for (var a, s = t.split('.'), u = 0; s.length > 1; u++) {
      a = mt(s.shift(), i)
      var c = e[a]
      c || (c = {}, e[a] = c), e = c, e.then && o.unwrapPromises &&
      (sr(i), '$$v' in e ||
      !function (e) {e.then(function (t) {e.$$v = t})}(e), e.$$v === n &&
      (e.$$v = {}), e = e.$$v)
    }
    return a = mt(s.shift(), i), $t(e, i), $t(e[a], i), e[a] = r, r
  }

  function xt (e, t, r, i, o, a, s) {
    return mt(e, a), mt(t, a), mt(r, a), mt(i, a), mt(o, a), s.unwrapPromises
      ? function (s, u) {
        var c, l = u && u.hasOwnProperty(e) ? u : s
        return null == l ? l : (l = l[e], l && l.then && (sr(a), '$$v' in l ||
        (c = l, c.$$v = n, c.then(function (e) {c.$$v = e})), l = l.$$v), t
          ? null == l
            ? n
            : (l = l[t], l && l.then && (sr(a), '$$v' in l ||
            (c = l, c.$$v = n, c.then(function (e) {c.$$v = e})), l = l.$$v), r
              ? null == l
                ? n
                : (l = l[r], l && l.then && (sr(a), '$$v' in l ||
                (c = l, c.$$v = n, c.then(
                  function (e) {c.$$v = e})), l = l.$$v), i
                  ? null == l
                    ? n
                    : (l = l[i], l && l.then && (sr(a), '$$v' in l ||
                    (c = l, c.$$v = n, c.then(
                      function (e) {c.$$v = e})), l = l.$$v), o
                      ? null == l
                        ? n
                        : (l = l[o], l && l.then && (sr(a), '$$v' in l ||
                        (c = l, c.$$v = n, c.then(
                          function (e) {c.$$v = e})), l = l.$$v), l)
                      : l)
                  : l)
              : l)
          : l)
      }
      : function (a, s) {
        var u = s && s.hasOwnProperty(e) ? s : a
        return null == u ? u : (u = u[e], t ? null == u ? n : (u = u[t], r
          ? null == u
            ? n
            : (u = u[r], i ? null == u ? n : (u = u[i], o
              ? null == u
                ? n
                : u = u[o]
              : u) : u)
          : u) : u)
      }
  }

  function wt (e, t, r) {
    if (mr.hasOwnProperty(e))return mr[e]
    var i, a = e.split('.'), s = a.length
    if (t.csp) i = s < 6 ? xt(a[0], a[1], a[2], a[3], a[4], r, t) : function (
      e, i) {
      var o, u = 0
      do o = xt(a[u++], a[u++], a[u++], a[u++], a[u++], r, t)(e,
        i), i = n, e = o while (u < s)
      return o
    } else {
      var u = 'var p;\n'
      o(a, function (e, n) {
        mt(e, r), u += 'if(s == null) return undefined;\ns=' +
          (n ? 's' : '((k&&k.hasOwnProperty("' + e + '"))?k:s)') + '["' + e +
          '"];\n' + (t.unwrapPromises
            ? 'if (s && s.then) {\n pw("' + r.replace(/(["\r\n])/g, '\\$1') +
            '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n'
            : '')
      }), u += 'return s;'
      var c = new Function('s', 'k', 'pw', u)
      c.toString = g(u), i = t.unwrapPromises ? function (e, t) {
        return c(e, t, sr)
      } : c
    }
    return 'hasOwnProperty' !== e && (mr[e] = i), i
  }

  function Ct () {
    var e = {}, t = {csp: !1, unwrapPromises: !1, logPromiseWarnings: !0}
    this.unwrapPromises = function (e) {
      return $(e)
        ? (t.unwrapPromises = !!e, this)
        : t.unwrapPromises
    }, this.logPromiseWarnings = function (e) {
      return $(e)
        ? (t.logPromiseWarnings = e, this)
        : t.logPromiseWarnings
    }, this.$get = [
      '$filter',
      '$sniffer',
      '$log',
      function (n, r, i) {
        return t.csp = r.csp, sr = function (e) {
          t.logPromiseWarnings && !cr.hasOwnProperty(e) && (cr[e] = !0, i.warn(
            '[$parse] Promise found in the expression `' + e +
            '`. Automatic unwrapping of promises in Angular expressions is deprecated.'))
        }, function (r) {
          var i
          switch (typeof r) {
            case'string':
              if (e.hasOwnProperty(r))return e[r]
              var o = new vr(t), a = new gr(o, n, t)
              return i = a.parse(r), 'hasOwnProperty' !== r && (e[r] = i), i
            case'function':
              return r
            default:
              return d
          }
        }
      }]
  }

  function Tt () {
    this.$get = [
      '$rootScope',
      '$exceptionHandler',
      function (e, t) {return St(function (t) {e.$evalAsync(t)}, t)}]
  }

  function St (e, t) {
    function r (e) {return e}

    function i (e) {return c(e)}

    function a (e) {
      var t = s(), n = 0, r = Nn(e) ? [] : {}
      return o(e, function (e, i) {
        n++, u(e).
          then(function (e) {
            r.hasOwnProperty(i) || (r[i] = e, --n || t.resolve(r))
          }, function (e) {r.hasOwnProperty(i) || t.reject(e)})
      }), 0 === n && t.resolve(r), t.promise
    }

    var s = function () {
      var o, a, c = []
      return a = {
        resolve: function (t) {
          if (c) {
            var r = c
            c = n, o = u(t), r.length && e(function () {
              for (var e, t = 0, n = r.length; t < n; t++)e = r[t], o.then(e[0],
                e[1], e[2])
            })
          }
        },
        reject: function (e) {a.resolve(l(e))},
        notify: function (t) {
          if (c) {
            var n = c
            c.length && e(function () {
              for (var e, r = 0, i = n.length; r < i; r++)e = n[r], e[2](t)
            })
          }
        },
        promise: {
          then: function (e, n, a) {
            var u = s(), l = function (n) {
              try {
                u.resolve((C(e) ? e : r)(n))
              } catch (i) {u.reject(i), t(i)}
            }, f = function (e) {
              try {
                u.resolve((C(n) ? n : i)(e))
              } catch (r) {u.reject(r), t(r)}
            }, p = function (e) {
              try {u.notify((C(a) ? a : r)(e))} catch (n) {
                t(n)
              }
            }
            return c ? c.push([l, f, p]) : o.then(l, f, p), u.promise
          },
          'catch': function (e) {return this.then(null, e)},
          'finally': function (e) {
            function t (e, t) {
              var n = s()
              return t ? n.resolve(e) : n.reject(e), n.promise
            }

            function n (n, i) {
              var o = null
              try {o = (e || r)()} catch (a) {return t(a, !1)}
              return o && C(o.then) ? o.then(function () {return t(n, i)},
                function (e) {return t(e, !1)}) : t(n, i)
            }

            return this.then(function (e) {return n(e, !0)},
              function (e) {return n(e, !1)})
          },
        },
      }
    }, u = function (t) {
      return t && C(t.then)
        ? t
        : {
          then: function (n) {
            var r = s()
            return e(function () {r.resolve(n(t))}), r.promise
          },
        }
    }, c = function (e) {
      var t = s()
      return t.reject(e), t.promise
    }, l = function (n) {
      return {
        then: function (r, o) {
          var a = s()
          return e(function () {
            try {a.resolve((C(o) ? o : i)(n))} catch (e) {
              a.reject(e), t(e)
            }
          }), a.promise
        },
      }
    }, f = function (n, o, a, l) {
      var f, p = s(), h = function (e) {
        try {return (C(o) ? o : r)(e)} catch (n) {
          return t(n), c(n)
        }
      }, d = function (e) {
        try {return (C(a) ? a : i)(e)} catch (n) {
          return t(n), c(n)
        }
      }, v = function (e) {try {return (C(l) ? l : r)(e)} catch (n) {t(n)}}
      return e(function () {
        u(n).
          then(function (e) {f || (f = !0, p.resolve(u(e).then(h, d, v)))},
            function (e) {f || (f = !0, p.resolve(d(e)))},
            function (e) {f || p.notify(v(e))})
      }), p.promise
    }
    return {defer: s, reject: c, when: f, all: a}
  }

  function Et () {
    this.$get = [
      '$window',
      '$timeout',
      function (e, t) {
        var n = e.requestAnimationFrame || e.webkitRequestAnimationFrame ||
            e.mozRequestAnimationFrame,
          r = e.cancelAnimationFrame || e.webkitCancelAnimationFrame ||
            e.mozCancelAnimationFrame || e.webkitCancelRequestAnimationFrame,
          i = !!n, o = i ? function (e) {
            var t = n(e)
            return function () {r(t)}
          } : function (e) {
            var n = t(e, 16.66, !1)
            return function () {t.cancel(n)}
          }
        return o.supported = i, o
      }]
  }

  function kt () {
    var e = 10, t = r('$rootScope'), n = null
    this.digestTtl = function (t) {
      return arguments.length && (e = t), e
    }, this.$get = [
      '$injector',
      '$exceptionHandler',
      '$parse',
      '$browser',
      function (r, a, s, u) {
        function l () {this.$id = c(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this['this'] = this.$root = this, this.$$destroyed = !1, this.$$asyncQueue = [], this.$$postDigestQueue = [], this.$$listeners = {}, this.$$listenerCount = {}, this.$$isolateBindings = {}}

        function f (e) {
          if (m.$$phase)throw t('inprog', '{0} already in progress', m.$$phase)
          m.$$phase = e
        }

        function p () {m.$$phase = null}

        function h (e, t) {
          var n = s(e)
          return ne(n, t), n
        }

        function v (e, t, n) {
          do e.$$listenerCount[n] -= t, 0 === e.$$listenerCount[n] &&
          delete e.$$listenerCount[n] while (e = e.$parent)
        }

        function g () {}

        l.prototype = {
          constructor: l,
          $new: function (e) {
            var t
            return e
              ? (t = new l, t.$root = this.$root, t.$$asyncQueue = this.$$asyncQueue, t.$$postDigestQueue = this.$$postDigestQueue)
              : (this.$$childScopeClass ||
              (this.$$childScopeClass = function () {this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$id = c(), this.$$childScopeClass = null}, this.$$childScopeClass.prototype = this), t = new this.$$childScopeClass), t['this'] = t, t.$parent = this, t.$$prevSibling = this.$$childTail, this.$$childHead
              ? (this.$$childTail.$$nextSibling = t, this.$$childTail = t)
              : this.$$childHead = this.$$childTail = t, t
          },
          $watch: function (e, t, r) {
            var i = this, o = h(e, 'watch'), a = i.$$watchers,
              s = {fn: t, last: g, get: o, exp: e, eq: !!r}
            if (n = null, !C(t)) {
              var u = h(t || d, 'listener')
              s.fn = function (e, t, n) {u(n)}
            }
            if ('string' == typeof e && o.constant) {
              var c = s.fn
              s.fn = function (e, t, n) {c.call(this, e, t, n), M(a, s)}
            }
            return a || (a = i.$$watchers = []), a.unshift(s), function () {
              M(a, s), n = null
            }
          },
          $watchCollection: function (e, t) {
            function n () {
              o = p(c)
              var e, t
              if (y(o))if (i(o)) {
                a !== h && (a = h, g = a.length = 0, f++), e = o.length, g !==
                e && (f++, a.length = g = e)
                for (var n = 0; n < e; n++) {
                  var r = a[n] !== a[n] && o[n] !== o[n]
                  r || a[n] === o[n] || (f++, a[n] = o[n])
                }
              } else {
                a !== d && (a = d = {}, g = 0, f++), e = 0
                for (t in o)o.hasOwnProperty(t) && (e++, a.hasOwnProperty(t)
                  ? a[t] !== o[t] && (f++, a[t] = o[t])
                  : (g++, a[t] = o[t], f++));
                if (g > e) {
                  f++
                  for (t in a)a.hasOwnProperty(t) && !o.hasOwnProperty(t) &&
                  (g--, delete a[t])
                }
              } else a !== o && (a = o, f++)
              return f
            }

            function r () {
              if (v ? (v = !1, t(o, o, c)) : t(o, u, c), l)if (y(o))if (i(o)) {
                u = new Array(o.length)
                for (var e = 0; e < o.length; e++)u[e] = o[e]
              } else {
                u = {}
                for (var n in o)dn.call(o, n) && (u[n] = o[n])
              } else u = o
            }

            var o, a, u, c = this, l = t.length > 1, f = 0, p = s(e), h = [],
              d = {}, v = !0, g = 0
            return this.$watch(n, r)
          },
          $digest: function () {
            var r, i, o, s, u, c, l, h, d, v, m, $ = this.$$asyncQueue,
              y = this.$$postDigestQueue, b = e, x = this, w = []
            f('$digest'), n = null
            do {
              for (c = !1, h = x; $.length;) {
                try {
                  m = $.shift(), m.scope.$eval(m.expression)
                } catch (T) {p(), a(T)}
                n = null
              }
              e:do {
                if (s = h.$$watchers)for (u = s.length; u--;)try {
                  if (r = s[u])if ((i = r.get(h)) === (o = r.last) ||
                    (r.eq ? _(i, o) : 'number' == typeof i &&
                      'number' == typeof o && isNaN(i) && isNaN(o))) {
                    if (r === n) {
                      c = !1
                      break e
                    }
                  } else c = !0, n = r, r.last = r.eq ? L(i, null) : i, r.fn(i,
                    o === g ? i : o, h), b < 5 &&
                  (d = 4 - b, w[d] || (w[d] = []), v = C(r.exp)
                    ? 'fn: ' + (r.exp.name || r.exp.toString())
                    : r.exp, v += '; newVal: ' + B(i) + '; oldVal: ' +
                    B(o), w[d].push(v))
                } catch (T) {p(), a(T)}
                if (!(l = h.$$childHead ||
                    h !== x && h.$$nextSibling))for (; h !== x &&
                                                       !(l = h.$$nextSibling);)h = h.$parent
              } while (h = l)
              if ((c || $.length) && !b--)throw p(), t('infdig',
                '{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}',
                e, B(w))
            } while (c || $.length)
            for (p(); y.length;)try {y.shift()()} catch (T) {a(T)}
          },
          $destroy: function () {
            if (!this.$$destroyed) {
              var e = this.$parent
              this.$broadcast('$destroy'), this.$$destroyed = !0, this !== m &&
              (o(this.$$listenerCount, F(null, v, this)), e.$$childHead ==
              this && (e.$$childHead = this.$$nextSibling), e.$$childTail ==
              this &&
              (e.$$childTail = this.$$prevSibling), this.$$prevSibling &&
              (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling &&
              (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = null, this.$$listeners = {}, this.$$watchers = this.$$asyncQueue = this.$$postDigestQueue = [], this.$destroy = this.$digest = this.$apply = d, this.$on = this.$watch = function () {return d})
            }
          },
          $eval: function (e, t) {return s(e)(this, t)},
          $evalAsync: function (e) {
            m.$$phase || m.$$asyncQueue.length || u.defer(function () {
              m.$$asyncQueue.length && m.$digest()
            }), this.$$asyncQueue.push({scope: this, expression: e})
          },
          $$postDigest: function (e) {this.$$postDigestQueue.push(e)},
          $apply: function (e) {
            try {
              return f('$apply'), this.$eval(e)
            } catch (t) {a(t)} finally {
              p()
              try {m.$digest()} catch (t) {throw a(t), t}
            }
          },
          $on: function (e, t) {
            var n = this.$$listeners[e]
            n || (this.$$listeners[e] = n = []), n.push(t)
            var r = this
            do r.$$listenerCount[e] ||
            (r.$$listenerCount[e] = 0), r.$$listenerCount[e]++ while (r = r.$parent)
            var i = this
            return function () {n[O(n, t)] = null, v(i, 1, e)}
          },
          $emit: function (e, t) {
            var n, r, i, o = [], s = this, u = !1, c = {
              name: e,
              targetScope: s,
              stopPropagation: function () {u = !0},
              preventDefault: function () {c.defaultPrevented = !0},
              defaultPrevented: !1,
            }, l = q([c], arguments, 1)
            do {
              for (n = s.$$listeners[e] ||
                o, c.currentScope = s, r = 0, i = n.length; r <
                   i; r++)if (n[r])try {n[r].apply(null, l)} catch (f) {
                a(f)
              } else n.splice(r, 1), r--, i--
              if (u)return c
              s = s.$parent
            } while (s)
            return c
          },
          $broadcast: function (e, t) {
            for (var n, r, i, o = this, s = o, u = o, c = {
              name: e,
              targetScope: o,
              preventDefault: function () {c.defaultPrevented = !0},
              defaultPrevented: !1,
            }, l = q([c], arguments, 1); s = u;) {
              for (c.currentScope = s, n = s.$$listeners[e] ||
                [], r = 0, i = n.length; r < i; r++)if (n[r])try {
                n[r].apply(null, l)
              } catch (f) {a(f)} else n.splice(r, 1), r--, i--
              if (!(u = s.$$listenerCount[e] && s.$$childHead ||
                  s !== o && s.$$nextSibling))for (; s !== o &&
                                                     !(u = s.$$nextSibling);)s = s.$parent
            }
            return c
          },
        }
        var m = new l
        return m
      }]
  }

  function At () {
    var e = /^\s*(https?|ftp|mailto|tel|file):/,
      t = /^\s*(https?|ftp|file):|data:image\//
    this.aHrefSanitizationWhitelist = function (t) {
      return $(t)
        ? (e = t, this)
        : e
    }, this.imgSrcSanitizationWhitelist = function (e) {
      return $(e)
        ? (t = e, this)
        : t
    }, this.$get = function () {
      return function (n, r) {
        var i, o = r ? t : e
        return $n && !($n >= 8) || (i = _t(n).href, '' === i || i.match(o))
          ? n
          : 'unsafe:' + i
      }
    }
  }

  function Nt (e) {
    return e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1').
      replace(/\x08/g, '\\x08')
  }

  function jt (e) {
    if ('self' === e)return e
    if (b(e)) {
      if (e.indexOf('***') > -1)throw $r('iwcard',
        'Illegal sequence *** in string matcher.  String: {0}', e)
      return e = Nt(e).
        replace('\\*\\*', '.*').
        replace('\\*', '[^:/.?&;]*'), new RegExp('^' + e + '$')
    }
    if (T(e))return new RegExp('^' + e.source + '$')
    throw $r('imatcher',
      'Matchers may only be "self", string patterns or RegExp objects')
  }

  function Dt (e) {
    var t = []
    return $(e) && o(e, function (e) {t.push(jt(e))}), t
  }

  function Ot () {
    this.SCE_CONTEXTS = yr
    var e = ['self'], t = []
    this.resourceUrlWhitelist = function (t) {
      return arguments.length && (e = Dt(t)), e
    }, this.resourceUrlBlacklist = function (e) {
      return arguments.length && (t = Dt(e)), t
    }, this.$get = [
      '$injector',
      function (r) {
        function i (e, t) {
          return 'self' === e ? Ht(t) : !!e.exec(t.href)
        }

        function o (n) {
          var r, o, a = _t(n.toString()), s = !1
          for (r = 0, o = e.length; r < o; r++)if (i(e[r], a)) {
            s = !0
            break
          }
          if (s)for (r = 0, o = t.length; r < o; r++)if (i(t[r], a)) {
            s = !1
            break
          }
          return s
        }

        function a (e) {
          var t = function (e) {this.$$unwrapTrustedValue = function () {return e}}
          return e &&
          (t.prototype = new e), t.prototype.valueOf = function () {return this.$$unwrapTrustedValue()}, t.prototype.toString = function () {
            return this.$$unwrapTrustedValue().
              toString()
          }, t
        }

        function s (e, t) {
          var r = p.hasOwnProperty(e) ? p[e] : null
          if (!r)throw $r('icontext',
            'Attempted to trust a value in invalid context. Context: {0}; Value: {1}',
            e, t)
          if (null === t || t === n || '' === t)return t
          if ('string' != typeof t)throw $r('itype',
            'Attempted to trust a non-string value in a content requiring a string: Context: {0}',
            e)
          return new r(t)
        }

        function u (e) {return e instanceof f ? e.$$unwrapTrustedValue() : e}

        function c (e, t) {
          if (null === t || t === n || '' === t)return t
          var r = p.hasOwnProperty(e) ? p[e] : null
          if (r && t instanceof r)return t.$$unwrapTrustedValue()
          if (e === yr.RESOURCE_URL) {
            if (o(t))return t
            throw $r('insecurl',
              'Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}',
              t.toString())
          }
          if (e === yr.HTML)return l(t)
          throw $r('unsafe',
            'Attempting to use an unsafe value in a safe context.')
        }

        var l = function (e) {
          throw $r('unsafe',
            'Attempting to use an unsafe value in a safe context.')
        }
        r.has('$sanitize') && (l = r.get('$sanitize'))
        var f = a(), p = {}
        return p[yr.HTML] = a(f), p[yr.CSS] = a(f), p[yr.URL] = a(
          f), p[yr.JS] = a(f), p[yr.RESOURCE_URL] = a(p[yr.URL]), {
          trustAs: s,
          getTrusted: c,
          valueOf: u,
        }
      }]
  }

  function Mt () {
    var e = !0
    this.enabled = function (t) {
      return arguments.length && (e = !!t), e
    }, this.$get = [
      '$parse',
      '$sniffer',
      '$sceDelegate',
      function (t, n, r) {
        if (e && n.msie && n.msieDocumentMode < 8)throw $r('iequirks',
          'Strict Contextual Escaping does not support Internet Explorer version < 9 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.')
        var i = P(yr)
        i.isEnabled = function () {return e}, i.trustAs = r.trustAs, i.getTrusted = r.getTrusted, i.valueOf = r.valueOf, e ||
        (i.trustAs = i.getTrusted = function (e,
                                              t) {return t}, i.valueOf = v), i.parseAs = function (
          e, n) {
          var r = t(n)
          return r.literal && r.constant ? r : function (
            t, n) {
            return i.getTrusted(e, r(t, n))
          }
        }
        var a = i.parseAs, s = i.getTrusted, u = i.trustAs
        return o(yr, function (e, t) {
          var n = hn(t)
          i[ce('parse_as_' + n)] = function (t) {return a(e, t)}, i[ce(
            'get_trusted_' + n)] = function (t) {return s(e, t)}, i[ce(
            'trust_as_' + n)] = function (t) {return u(e, t)}
        }), i
      }]
  }

  function Lt () {
    this.$get = [
      '$window',
      '$document',
      function (e, t) {
        var n, r, i = {}, o = p(
          (/android (\d+)/.exec(hn((e.navigator || {}).userAgent)) || [])[1]),
          a = /Boxee/i.test((e.navigator || {}).userAgent), s = t[0] || {},
          u = s.documentMode, c = /^(Moz|webkit|O|ms)(?=[A-Z])/,
          l = s.body && s.body.style, f = !1, h = !1
        if (l) {
          for (var d in l)if (r = c.exec(d)) {
            n = r[0], n = n.substr(0, 1).
                toUpperCase() + n.substr(1)
            break
          }
          n || (n = 'WebkitOpacity' in l && 'webkit'), f = !!('transition' in
          l || n + 'Transition' in l), h = !!('animation' in l ||
          n + 'Animation' in l), !o || f && h ||
          (f = b(s.body.style.webkitTransition), h = b(
            s.body.style.webkitAnimation))
        }
        return {
          history: !(!e.history || !e.history.pushState || o < 4 || a),
          hashchange: 'onhashchange' in e && (!u || u > 7),
          hasEvent: function (e) {
            if ('input' == e && 9 == $n)return !1
            if (m(i[e])) {
              var t = s.createElement('div')
              i[e] = 'on' + e in t
            }
            return i[e]
          },
          csp: H(),
          vendorPrefix: n,
          transitions: f,
          animations: h,
          android: o,
          msie: $n,
          msieDocumentMode: u,
        }
      }]
  }

  function Pt () {
    this.$get = [
      '$rootScope',
      '$browser',
      '$q',
      '$exceptionHandler',
      function (e, t, n, r) {
        function i (i, a, s) {
          var u, c = n.defer(), l = c.promise, f = $(s) && !s
          return u = t.defer(function () {
            try {c.resolve(i())} catch (t) {
              c.reject(t), r(t)
            } finally {delete o[l.$$timeoutId]}
            f || e.$apply()
          }, a), l.$$timeoutId = u, o[u] = c, l
        }

        var o = {}
        return i.cancel = function (e) {
          return !!(e && e.$$timeoutId in o) && (o[e.$$timeoutId].reject(
              'canceled'), delete o[e.$$timeoutId], t.defer.cancel(
              e.$$timeoutId))
        }, i
      }]
  }

  function _t (e, t) {
    var n = e
    return $n && (br.setAttribute('href', n), n = br.href), br.setAttribute(
      'href', n), {
      href: br.href,
      protocol: br.protocol ? br.protocol.replace(/:$/, '') : '',
      host: br.host,
      search: br.search ? br.search.replace(/^\?/, '') : '',
      hash: br.hash ? br.hash.replace(/^#/, '') : '',
      hostname: br.hostname,
      port: br.port,
      pathname: '/' === br.pathname.charAt(0) ? br.pathname : '/' + br.pathname,
    }
  }

  function Ht (e) {
    var t = b(e) ? _t(e) : e
    return t.protocol === xr.protocol && t.host === xr.host
  }

  function qt () {this.$get = g(e)}

  function Rt (e) {
    function t (r, i) {
      if (y(r)) {
        var a = {}
        return o(r, function (e, n) {a[n] = t(n, e)}), a
      }
      return e.factory(r + n, i)
    }

    var n = 'Filter'
    this.register = t, this.$get = [
      '$injector',
      function (e) {return function (t) {return e.get(t + n)}}], t('currency',
      It), t('date', Jt), t('filter', Ft), t('json', Gt), t('limitTo', Yt), t(
      'lowercase', Er), t('number', Bt), t('orderBy', Kt), t('uppercase', kr)
  }

  function Ft () {
    return function (e, t, n) {
      if (!Nn(e))return e
      var r = typeof n, i = []
      i.check = function (e) {
        for (var t = 0; t < i.length; t++)if (!i[t](e))return !1
        return !0
      }, 'function' !== r && (n = 'boolean' === r && n
        ? function (e, t) {return kn.equals(e, t)}
        : function (e, t) {
          if (e && t && 'object' == typeof e && 'object' == typeof t) {
            for (var r in e)if ('$' !== r.charAt(0) && dn.call(e, r) &&
              n(e[r], t[r]))return !0
            return !1
          }
          return t = ('' + t).toLowerCase(), ('' + e).toLowerCase().indexOf(t) >
          -1
        })
      var o = function (e, t) {
        if ('string' == typeof t && '!' === t.charAt(0))return !o(e,
          t.substr(1))
        switch (typeof e) {
          case'boolean':
          case'number':
          case'string':
            return n(e, t)
          case'object':
            switch (typeof t) {
              case'object':
                return n(e, t)
              default:
                for (var r in e)if ('$' !== r.charAt(0) && o(e[r], t))return !0
            }
            return !1
          case'array':
            for (var i = 0; i < e.length; i++)if (o(e[i], t))return !0
            return !1
          default:
            return !1
        }
      }
      switch (typeof t) {
        case'boolean':
        case'number':
        case'string':
          t = {$: t}
        case'object':
          for (var a in t)!function (e) {
            'undefined' != typeof t[e] &&
            i.push(function (n) {return o('$' == e ? n : n && n[e], t[e])})
          }(a);
          break
        case'function':
          i.push(t)
          break
        default:
          return e
      }
      for (var s = [], u = 0; u < e.length; u++) {
        var c = e[u]
        i.check(c) && s.push(c)
      }
      return s
    }
  }

  function It (e) {
    var t = e.NUMBER_FORMATS
    return function (e, n) {
      return m(n) && (n = t.CURRENCY_SYM), Ut(e, t.PATTERNS[1], t.GROUP_SEP,
        t.DECIMAL_SEP, 2).replace(/\u00A4/g, n)
    }
  }

  function Bt (e) {
    var t = e.NUMBER_FORMATS
    return function (e, n) {
      return Ut(e, t.PATTERNS[0], t.GROUP_SEP, t.DECIMAL_SEP, n)
    }
  }

  function Ut (e, t, n, r, i) {
    if (null == e || !isFinite(e) || y(e))return ''
    var o = e < 0
    e = Math.abs(e)
    var a = e + '', s = '', u = [], c = !1
    if (a.indexOf('e') !== -1) {
      var l = a.match(/([\d\.]+)e(-?)(\d+)/)
      l && '-' == l[2] && l[3] > i + 1 ? (a = '0', e = 0) : (s = a, c = !0)
    }
    if (c) i > 0 && e > -1 && e < 1 && (s = e.toFixed(i)) else {
      var f = (a.split(wr)[1] || '').length
      m(i) &&
      (i = Math.min(Math.max(t.minFrac, f), t.maxFrac)), e = +(Math.round(
        +(e.toString() + 'e' + i)).toString() + 'e' + -i)
      var p = ('' + e).split(wr), h = p[0]
      p = p[1] || ''
      var d, v = 0, g = t.lgSize, $ = t.gSize
      if (h.length >= g + $)for (v = h.length - g, d = 0; d < v; d++)(v - d) %
      $ === 0 && 0 !== d && (s += n), s += h.charAt(d);
      for (d = v; d < h.length; d++)(h.length - d) % g === 0 && 0 !== d &&
      (s += n), s += h.charAt(d);
      for (; p.length < i;)p += '0';
      i && '0' !== i && (s += r + p.substr(0, i))
    }
    return u.push(o ? t.negPre : t.posPre), u.push(s), u.push(
      o ? t.negSuf : t.posSuf), u.join('')
  }

  function Vt (e, t, n) {
    var r = ''
    for (e < 0 && (r = '-', e = -e), e = '' + e; e.length < t;)e = '0' + e;
    return n && (e = e.substr(e.length - t)), r + e
  }

  function Wt (e, t, n, r) {
    return n = n || 0, function (i) {
      var o = i['get' + e]()
      return (n > 0 || o > -n) && (o += n), 0 === o && n == -12 && (o = 12), Vt(
        o, t, r)
    }
  }

  function zt (e, t) {
    return function (n, r) {
      var i = n['get' + e](), o = vn(t ? 'SHORT' + e : e)
      return r[o][i]
    }
  }

  function Xt (e) {
    var t = -1 * e.getTimezoneOffset(), n = t >= 0 ? '+' : ''
    return n += Vt(Math[t > 0 ? 'floor' : 'ceil'](t / 60), 2) +
      Vt(Math.abs(t % 60), 2)
  }

  function Qt (e, t) {return e.getHours() < 12 ? t.AMPMS[0] : t.AMPMS[1]}

  function Jt (e) {
    function t (e) {
      var t
      if (t = e.match(n)) {
        var r = new Date(0), i = 0, o = 0,
          a = t[8] ? r.setUTCFullYear : r.setFullYear,
          s = t[8] ? r.setUTCHours : r.setHours
        t[9] && (i = p(t[9] + t[10]), o = p(t[9] + t[11])), a.call(r, p(t[1]),
          p(t[2]) - 1, p(t[3]))
        var u = p(t[4] || 0) - i, c = p(t[5] || 0) - o, l = p(t[6] || 0),
          f = Math.round(1e3 * parseFloat('0.' + (t[7] || 0)))
        return s.call(r, u, c, l, f), r
      }
      return e
    }

    var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/
    return function (n, r) {
      var i, a, s = '', u = []
      if (r = r || 'mediumDate', r = e.DATETIME_FORMATS[r] || r, b(n) &&
        (n = Sr.test(n) ? p(n) : t(n)), x(n) && (n = new Date(n)), !w(
          n))return n
      for (; r;)a = Tr.exec(r), a ? (u = q(u, a, 1), r = u.pop()) : (u.push(
        r), r = null);
      return o(u, function (t) {
        i = Cr[t], s += i ? i(n, e.DATETIME_FORMATS) : t.replace(/(^'|'$)/g,
          '').replace(/''/g, '\'')
      }), s
    }
  }

  function Gt () {return function (e) {return B(e, !0)}}

  function Yt () {
    return function (e, t) {
      if (!Nn(e) && !b(e))return e
      if (t = Math.abs(Number(t)) === 1 / 0 ? Number(t) : p(t), b(e))return t
        ? t >= 0
          ? e.slice(0, t)
          : e.slice(t, e.length)
        : ''
      var n, r, i = []
      for (t > e.length ? t = e.length : t < -e.length && (t = -e.length), t > 0
        ? (n = 0, r = t)
        : (n = e.length + t, r = e.length); n < r; n++)i.push(e[n]);
      return i
    }
  }

  function Kt (e) {
    return function (t, n, r) {
      function i (
        e, t) {
        for (var r = 0; r < n.length; r++) {
          var i = n[r](e, t)
          if (0 !== i)return i
        }
        return 0
      }

      function o (e, t) {return V(t) ? function (t, n) {return e(n, t)} : e}

      function a (e, t) {
        var n = typeof e, r = typeof t
        return n == r
          ? ('string' == n && (e = e.toLowerCase(), t = t.toLowerCase()), e ===
          t
            ? 0
            : e < t
              ? -1
              : 1)
          : n < r
            ? -1
            : 1
      }

      if (!Nn(t))return t
      if (!n)return t
      n = Nn(n) ? n : [n], n = j(n, function (t) {
        var n = !1, r = t || v
        if (b(t) && ('+' != t.charAt(0) && '-' != t.charAt(0) ||
          (n = '-' == t.charAt(0), t = t.substring(1)), r = e(t), r.constant)) {
          var i = r()
          return o(function (e, t) {return a(e[i], t[i])}, n)
        }
        return o(function (e, t) {return a(r(e), r(t))}, n)
      })
      for (var s = [], u = 0; u < t.length; u++)s.push(t[u]);
      return s.sort(o(i, r))
    }
  }

  function Zt (e) {
    return C(e) && (e = {link: e}), e.restrict = e.restrict || 'AC', g(e)
  }

  function en (e, t, n, r) {
    function i (t, n) {
      n = n
        ? '-' + Z(n, '-')
        : '', r.removeClass(e, (t ? Ir : Fr) + n), r.addClass(e,
        (t ? Fr : Ir) + n)
    }

    var a = this, s = e.parent().controller('form') || jr, u = 0,
      c = a.$error = {}, l = []
    a.$name = t.name ||
      t.ngForm, a.$dirty = !1, a.$pristine = !0, a.$valid = !0, a.$invalid = !1, s.$addControl(
      a), e.addClass(Br), i(!0), a.$addControl = function (e) {
      re(e.$name, 'input'), l.push(e), e.$name && (a[e.$name] = e)
    }, a.$removeControl = function (e) {
      e.$name && a[e.$name] === e && delete a[e.$name], o(c,
        function (t, n) {a.$setValidity(n, !0, e)}), M(l, e)
    }, a.$setValidity = function (e, t, n) {
      var r = c[e]
      if (t) r && (M(r, n), r.length ||
      (u--, u || (i(t), a.$valid = !0, a.$invalid = !1), c[e] = !1, i(!0,
        e), s.$setValidity(e, !0, a))) else {
        if (u || i(t), r) {
          if (D(r, n))return
        } else c[e] = r = [], u++, i(!1, e), s.$setValidity(e, !1, a)
        r.push(n), a.$valid = !1, a.$invalid = !0
      }
    }, a.$setDirty = function () {
      r.removeClass(e, Br), r.addClass(e,
        Ur), a.$dirty = !0, a.$pristine = !1, s.$setDirty()
    }, a.$setPristine = function () {
      r.removeClass(e, Ur), r.addClass(e,
        Br), a.$dirty = !1, a.$pristine = !0, o(l,
        function (e) {e.$setPristine()})
    }
  }

  function tn (e, t, r, i) {return e.$setValidity(t, r), r ? i : n}

  function nn (e, t) {
    var n, r
    if (t)for (n = 0; n < t.length; ++n)if (r = t[n], e[r])return !0
    return !1
  }

  function rn (e, t, n, r, i) {
    if (y(i)) {
      e.$$hasNativeValidators = !0
      var o = function (o) {
        return e.$error[t] || nn(i, r) || !nn(i, n)
          ? o
          : void e.$setValidity(t, !1)
      }
      e.$parsers.push(o)
    }
  }

  function on (e, t, n, i, o, a) {
    var s = t.prop(pn), u = t[0].placeholder, c = {}
    if (i.$$validityState = s, !o.android) {
      var l = !1
      t.on('compositionstart', function (e) {l = !0}), t.on('compositionend',
        function () {l = !1, f()})
    }
    var f = function (r) {
      if (!l) {
        var o = t.val()
        if ($n && 'input' === (r || c).type &&
          t[0].placeholder !== u)return void(u = t[0].placeholder)
        V(n.ngTrim || 'T') && (o = jn(o))
        var a = s && i.$$hasNativeValidators;
        (i.$viewValue !== o || '' === o && a) &&
        (e.$$phase ? i.$setViewValue(o) : e.$apply(
          function () {i.$setViewValue(o)}))
      }
    }
    if (o.hasEvent('input')) t.on('input', f) else {
      var h, d = function () {h || (h = a.defer(function () {f(), h = null}))}
      t.on('keydown', function (e) {
        var t = e.keyCode
        91 === t || 15 < t && t < 19 || 37 <= t && t <= 40 || d()
      }), o.hasEvent('paste') && t.on('paste cut', d)
    }
    t.on('change', f), i.$render = function () {
      t.val(i.$isEmpty(i.$viewValue) ? '' : i.$viewValue)
    }
    var v, g, m = n.ngPattern
    if (m) {
      var $ = function (e, t) {
        return tn(i, 'pattern', i.$isEmpty(t) || e.test(t), t)
      }
      g = m.match(/^\/(.*)\/([gim]*)$/), g
        ? (m = new RegExp(g[1], g[2]), v = function (e) {return $(m, e)})
        : v = function (n) {
          var i = e.$eval(m)
          if (!i || !i.test)throw r('ngPattern')('noregexp',
            'Expected {0} to be a RegExp but was {1}. Element: {2}', m, i,
            W(t))
          return $(i, n)
        }, i.$formatters.push(v), i.$parsers.push(v)
    }
    if (n.ngMinlength) {
      var y = p(n.ngMinlength), b = function (e) {
        return tn(i, 'minlength', i.$isEmpty(e) || e.length >= y, e)
      }
      i.$parsers.push(b), i.$formatters.push(b)
    }
    if (n.ngMaxlength) {
      var x = p(n.ngMaxlength), w = function (e) {
        return tn(i, 'maxlength', i.$isEmpty(e) || e.length <= x, e)
      }
      i.$parsers.push(w), i.$formatters.push(w)
    }
  }

  function an (e, t, r, i, o, a) {
    if (on(e, t, r, i, o, a), i.$parsers.push(function (e) {
        var t = i.$isEmpty(e)
        return t || _r.test(e) ? (i.$setValidity('number', !0), '' === e
          ? null
          : t
            ? e
            : parseFloat(e)) : (i.$setValidity('number', !1), n)
      }), rn(i, 'number', qr, null, i.$$validityState), i.$formatters.push(
        function (e) {
          return i.$isEmpty(e) ? '' : '' + e
        }), r.min) {
      var s = function (e) {
        var t = parseFloat(r.min)
        return tn(i, 'min', i.$isEmpty(e) || e >= t, e)
      }
      i.$parsers.push(s), i.$formatters.push(s)
    }
    if (r.max) {
      var u = function (e) {
        var t = parseFloat(r.max)
        return tn(i, 'max', i.$isEmpty(e) || e <= t, e)
      }
      i.$parsers.push(u), i.$formatters.push(u)
    }
    i.$formatters.push(
      function (e) {return tn(i, 'number', i.$isEmpty(e) || x(e), e)})
  }

  function sn (e, t, n, r, i, o) {
    on(e, t, n, r, i, o)
    var a = function (e) {return tn(r, 'url', r.$isEmpty(e) || Lr.test(e), e)}
    r.$formatters.push(a), r.$parsers.push(a)
  }

  function un (e, t, n, r, i, o) {
    on(e, t, n, r, i, o)
    var a = function (e) {
      return tn(r, 'email', r.$isEmpty(e) || Pr.test(e), e)
    }
    r.$formatters.push(a), r.$parsers.push(a)
  }

  function cn (e, t, n, r) {
    m(n.name) && t.attr('name', c()), t.on('click', function () {
      t[0].checked && e.$apply(function () {r.$setViewValue(n.value)})
    }), r.$render = function () {
      var e = n.value
      t[0].checked = e == r.$viewValue
    }, n.$observe('value', r.$render)
  }

  function ln (e, t, n, r) {
    var i = n.ngTrueValue, o = n.ngFalseValue
    b(i) || (i = !0), b(o) || (o = !1), t.on('click', function () {
      e.$apply(function () {r.$setViewValue(t[0].checked)})
    }), r.$render = function () {t[0].checked = r.$viewValue}, r.$isEmpty = function (e) {
      return e !== i
    }, r.$formatters.push(function (e) {return e === i}), r.$parsers.push(
      function (e) {return e ? i : o})
  }

  function fn (e, t) {
    return e = 'ngClass' + e, [
      '$animate',
      function (n) {
        function r (e, t) {
          var n = []
          e:for (var r = 0; r < e.length; r++) {
            for (var i = e[r], o = 0; o < t.length; o++)if (i ==
              t[o])continue e
            n.push(i)
          }
          return n
        }

        function i (e) {
          if (Nn(e))return e
          if (b(e))return e.split(' ')
          if (y(e)) {
            var t = []
            return o(e, function (e, n) {e && (t = t.concat(n.split(' ')))}), t
          }
          return e
        }

        return {
          restrict: 'AC',
          link: function (a, s, u) {
            function c (e) {
              var t = f(e, 1)
              u.$addClass(t)
            }

            function l (e) {
              var t = f(e, -1)
              u.$removeClass(t)
            }

            function f (e, t) {
              var n = s.data('$classCounts') || {}, r = []
              return o(e, function (e) {
                (t > 0 || n[e]) &&
                (n[e] = (n[e] || 0) + t, n[e] === +(t > 0) && r.push(e))
              }), s.data('$classCounts', n), r.join(' ')
            }

            function p (e, t) {
              var i = r(t, e), o = r(e, t)
              o = f(o, -1), i = f(i, 1), 0 === i.length
                ? n.removeClass(s, o)
                : 0 === o.length
                  ? n.addClass(s, i)
                  : n.setClass(s, i, o)
            }

            function h (e) {
              if (t === !0 || a.$index % 2 === t) {
                var n = i(e || [])
                if (d) {
                  if (!_(e, d)) {
                    var r = i(d)
                    p(r, n)
                  }
                } else c(n)
              }
              d = P(e)
            }

            var d
            a.$watch(u[e], h, !0), u.$observe('class',
              function (t) {h(a.$eval(u[e]))}), 'ngClass' !== e &&
            a.$watch('$index', function (n, r) {
              var o = 1 & n
              if (o !== (1 & r)) {
                var s = i(a.$eval(u[e]))
                o === t ? c(s) : l(s)
              }
            })
          },
        }
      }]
  }

  var pn = 'validity', hn = function (e) {return b(e) ? e.toLowerCase() : e},
    dn = Object.prototype.hasOwnProperty,
    vn = function (e) {return b(e) ? e.toUpperCase() : e}, gn = function (e) {
      return b(e) ? e.replace(/[A-Z]/g,
        function (e) {return String.fromCharCode(32 | e.charCodeAt(0))}) : e
    }, mn = function (e) {
      return b(e) ? e.replace(/[a-z]/g,
        function (e) {return String.fromCharCode(e.charCodeAt(0) & -33)}) : e
    }
  'i' !== 'I'.toLowerCase() && (hn = gn, vn = mn)
  var $n, yn, bn, xn, wn, Cn = [].slice, Tn = [].push,
    Sn = Object.prototype.toString, En = r('ng'),
    kn = e.angular || (e.angular = {}), An = ['0', '0', '0']
  $n = p((/msie (\d+)/.exec(hn(navigator.userAgent)) || [])[1]), isNaN($n) &&
  ($n = p((/trident\/.*; rv:(\d+)/.exec(hn(navigator.userAgent)) ||
  [])[1])), d.$inject = [], v.$inject = []
  var Nn = function () {
    return C(Array.isArray)
      ? Array.isArray
      : function (e) {return '[object Array]' === Sn.call(e)}
  }(), jn = function () {
    return String.prototype.trim ? function (e) {
      return b(e)
        ? e.trim()
        : e
    } : function (e) {
      return b(e) ? e.replace(/^\s\s*/, '').
        replace(/\s\s*$/, '') : e
    }
  }()
  wn = $n < 9 ? function (e) {
    return e = e.nodeName ? e : e[0], e.scopeName && 'HTML' != e.scopeName ? vn(
      e.scopeName + ':' + e.nodeName) : e.nodeName
  } : function (e) {return e.nodeName ? e.nodeName : e[0].nodeName}
  var Dn = /[A-Z]/g, On = {
    full: '1.2.20',
    major: 1,
    minor: 2,
    dot: 20,
    codeName: 'accidental-beautification',
  }
  de.expando = 'ng339'
  var Mn = de.cache = {}, Ln = 1,
    Pn = e.document.addEventListener ? function (e, t, n) {
      e.addEventListener(t, n, !1)
    } : function (e, t, n) {e.attachEvent('on' + t, n)},
    _n = e.document.removeEventListener ? function (e, t, n) {
      e.removeEventListener(t, n, !1)
    } : function (
      e, t, n) {
      e.detachEvent('on' + t, n)
    }, Hn = (de._data = function (e) {
      return this.cache[e[this.expando]] || {}
    }, /([\:\-\_]+(.))/g), qn = /^moz([A-Z])/, Rn = r('jqLite'),
    Fn = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, In = /<|&#?\w+;/, Bn = /<([\w:]+)/,
    Un = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Vn = {
      option: [1, '<select multiple="multiple">', '</select>'],
      thead: [1, '<table>', '</table>'],
      col: [2, '<table><colgroup>', '</colgroup></table>'],
      tr: [2, '<table><tbody>', '</tbody></table>'],
      td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
      _default: [0, '', ''],
    }
  Vn.optgroup = Vn.option, Vn.tbody = Vn.tfoot = Vn.colgroup = Vn.caption = Vn.thead, Vn.th = Vn.td
  var Wn = de.prototype = {
    ready: function (n) {
      function r () {
        i || (i = !0, n())
      }

      var i = !1
      'complete' === t.readyState ? setTimeout(r) : (this.on('DOMContentLoaded',
        r), de(e).on('load', r))
    },
    toString: function () {
      var e = []
      return o(this, function (t) {e.push('' + t)}), '[' + e.join(', ') + ']'
    },
    eq: function (e) {return yn(e >= 0 ? this[e] : this[this.length + e])},
    length: 0,
    push: Tn,
    sort: [].sort,
    splice: [].splice,
  }, zn = {}
  o('multiple,selected,checked,disabled,readOnly,required,open'.split(','),
    function (e) {zn[hn(e)] = e})
  var Xn = {}
  o('input,select,option,textarea,button,form,details'.split(','),
    function (e) {Xn[vn(e)] = !0}), o({
    data: be,
    inheritedData: Ee,
    scope: function (e) {
      return yn(e).data('$scope') ||
        Ee(e.parentNode || e, ['$isolateScope', '$scope'])
    },
    isolateScope: function (e) {
      return yn(e).data('$isolateScope') ||
        yn(e).data('$isolateScopeNoTemplate')
    },
    controller: Se,
    injector: function (e) {return Ee(e, '$injector')},
    removeAttr: function (e, t) {e.removeAttribute(t)},
    hasClass: xe,
    css: function (e, t, r) {
      if (t = ce(t), !$(r)) {
        var i
        return $n <= 8 && (i = e.currentStyle && e.currentStyle[t], '' === i &&
        (i = 'auto')), i = i || e.style[t], $n <= 8 && (i = '' === i ? n : i), i
      }
      e.style[t] = r
    },
    attr: function (e, t, r) {
      var i = hn(t)
      if (zn[i]) {
        if (!$(r))return e[t] || (e.attributes.getNamedItem(t) || d).specified
          ? i
          : n
        r ? (e[t] = !0, e.setAttribute(t, i)) : (e[t] = !1, e.removeAttribute(
          i))
      } else if ($(r)) e.setAttribute(t, r) else if (e.getAttribute) {
        var o = e.getAttribute(t, 2)
        return null === o ? n : o
      }
    },
    prop: function (e, t, n) {return $(n) ? void(e[t] = n) : e[t]},
    text: function () {
      function e (e, n) {
        var r = t[e.nodeType]
        return m(n) ? r ? e[r] : '' : void(e[r] = n)
      }

      var t = []
      return $n < 9
        ? (t[1] = 'innerText', t[3] = 'nodeValue')
        : t[1] = t[3] = 'textContent', e.$dv = '', e
    }(),
    val: function (e, t) {
      if (m(t)) {
        if ('SELECT' === wn(e) && e.multiple) {
          var n = []
          return o(e.options,
            function (e) {e.selected && n.push(e.value || e.text)}), 0 ===
          n.length ? null : n
        }
        return e.value
      }
      e.value = t
    },
    html: function (e, t) {
      if (m(t))return e.innerHTML
      for (var n = 0, r = e.childNodes; n < r.length; n++)ge(r[n]);
      e.innerHTML = t
    },
    empty: ke,
  }, function (e, t) {
    de.prototype[t] = function (t, r) {
      var i, o, a = this.length
      if (e !== ke && (2 == e.length && e !== xe && e !== Se ? t : r) === n) {
        if (y(t)) {
          for (i = 0; i < a; i++)if (e === be) e(this[i],
            t) else for (o in t)e(this[i], o, t[o]);
          return this
        }
        for (var s = e.$dv, u = s === n ? Math.min(a, 1) : a, c = 0; c <
        u; c++) {
          var l = e(this[c], t, r)
          s = s ? s + l : l
        }
        return s
      }
      for (i = 0; i < a; i++)e(this[i], t, r);
      return this
    }
  }), o({
    removeData: $e,
    dealoc: ge,
    on: function Ei (e, n, r, i) {
      if ($(i))throw Rn('onargs',
        'jqLite#on() does not support the `selector` or `eventData` parameters')
      var a = ye(e, 'events'), s = ye(e, 'handle')
      a || ye(e, 'events', a = {}), s || ye(e, 'handle', s = Ne(e, a)), o(
        n.split(' '), function (n) {
          var i = a[n]
          if (!i) {
            if ('mouseenter' == n || 'mouseleave' == n) {
              var o = t.body.contains || t.body.compareDocumentPosition
                ? function (e, t) {
                  var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode
                  return e === r || !(!r || 1 !== r.nodeType ||
                    !(n.contains ? n.contains(r) : e.compareDocumentPosition &&
                      16 & e.compareDocumentPosition(r)))
                }
                : function (e, t) {
                  if (t)for (; t = t.parentNode;)if (t === e)return !0
                  return !1
                }
              a[n] = []
              var u = {mouseleave: 'mouseout', mouseenter: 'mouseover'}
              Ei(e, u[n], function (e) {
                var t = this, r = e.relatedTarget
                r && (r === t || o(t, r)) || s(e, n)
              })
            } else Pn(e, n, s), a[n] = []
            i = a[n]
          }
          i.push(r)
        })
    },
    off: me,
    one: function (e, t, n) {
      e = yn(e), e.on(t, function r () {e.off(t, n), e.off(t, r)}), e.on(t, n)
    },
    replaceWith: function (e, t) {
      var n, r = e.parentNode
      ge(e), o(new de(t), function (t) {
        n ? r.insertBefore(t, n.nextSibling) : r.replaceChild(t, e), n = t
      })
    },
    children: function (e) {
      var t = []
      return o(e.childNodes, function (e) {1 === e.nodeType && t.push(e)}), t
    },
    contents: function (e) {return e.contentDocument || e.childNodes || []},
    append: function (e, t) {
      o(new de(t), function (t) {
        1 !== e.nodeType && 11 !== e.nodeType || e.appendChild(t)
      })
    },
    prepend: function (e, t) {
      if (1 === e.nodeType) {
        var n = e.firstChild
        o(new de(t), function (t) {e.insertBefore(t, n)})
      }
    },
    wrap: function (e, t) {
      t = yn(t)[0]
      var n = e.parentNode
      n && n.replaceChild(t, e), t.appendChild(e)
    },
    remove: function (e) {
      ge(e)
      var t = e.parentNode
      t && t.removeChild(e)
    },
    after: function (e, t) {
      var n = e, r = e.parentNode
      o(new de(t), function (e) {r.insertBefore(e, n.nextSibling), n = e})
    },
    addClass: Ce,
    removeClass: we,
    toggleClass: function (e, t, n) {
      t && o(t.split(' '), function (t) {
        var r = n
        m(r) && (r = !xe(e, t)), (r ? Ce : we)(e, t)
      })
    },
    parent: function (e) {
      var t = e.parentNode
      return t && 11 !== t.nodeType ? t : null
    },
    next: function (e) {
      if (e.nextElementSibling)return e.nextElementSibling
      for (var t = e.nextSibling; null != t &&
      1 !== t.nodeType;)t = t.nextSibling;
      return t
    },
    find: function (e, t) {
      return e.getElementsByTagName
        ? e.getElementsByTagName(t)
        : []
    },
    clone: ve,
    triggerHandler: function (e, t, n) {
      var r = (ye(e, 'events') || {})[t]
      n = n || []
      var i = [{preventDefault: d, stopPropagation: d}]
      o(r, function (t) {t.apply(e, i.concat(n))})
    },
  }, function (e, t) {
    de.prototype[t] = function (t, n, r) {
      for (var i, o = 0; o < this.length; o++)m(i) ? (i = e(this[o], t, n,
        r), $(i) && (i = yn(i))) : Te(i, e(this[o], t, n, r));
      return $(i) ? i : this
    }, de.prototype.bind = de.prototype.on, de.prototype.unbind = de.prototype.off
  }), De.prototype = {
    put: function (e, t) {this[je(e, this.nextUid)] = t},
    get: function (e) {return this[je(e, this.nextUid)]},
    remove: function (e) {
      var t = this[e = je(e, this.nextUid)]
      return delete this[e], t
    },
  }
  var Qn = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, Jn = /,/,
    Gn = /^\s*(_?)(\S+?)\1\s*$/, Yn = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
    Kn = r('$injector'), Zn = r('$animate'), er = [
      '$provide',
      function (e) {
        this.$$selectors = {}, this.register = function (
          t, n) {
          var r = t + '-animation'
          if (t && '.' != t.charAt(0))throw Zn('notcsel',
            'Expecting class selector starting with \'.\' got \'{0}\'.', t)
          this.$$selectors[t.substr(1)] = r, e.factory(r, n)
        }, this.classNameFilter = function (e) {
          return 1 === arguments.length &&
          (this.$$classNameFilter = e instanceof RegExp
            ? e
            : null), this.$$classNameFilter
        }, this.$get = [
          '$timeout',
          '$$asyncCallback',
          function (e, t) {
            function n (e) {e && t(e)}

            return {
              enter: function (e, t, r, i) {
                r ? r.after(e) : (t && t[0] || (t = r.parent()), t.append(e)), n(
                  i)
              },
              leave: function (e, t) {e.remove(), n(t)},
              move: function (e, t, n, r) {this.enter(e, t, n, r)},
              addClass: function (e, t, r) {
                t = b(t)
                  ? t
                  : Nn(t)
                    ? t.join(' ')
                    : '', o(e, function (e) {Ce(e, t)}), n(r)
              },
              removeClass: function (e, t, r) {
                t = b(t)
                  ? t
                  : Nn(t)
                    ? t.join(' ')
                    : '', o(e, function (e) {we(e, t)}), n(r)
              },
              setClass: function (e, t, r, i) {
                o(e, function (e) {Ce(e, t), we(e, r)}), n(i)
              },
              enabled: d,
            }
          }]
      }], tr = r('$compile')
  Fe.$inject = ['$provide', '$$sanitizeUriProvider']
  var nr = /^(x[\:\-_]|data[\:\-_])/i, rr = r('$interpolate'),
    ir = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
    or = {http: 80, https: 443, ftp: 21}, ar = r('$location')
  pt.prototype = ft.prototype = lt.prototype = {
    $$html5: !1,
    $$replace: !1,
    absUrl: ht('$$absUrl'),
    url: function (e, t) {
      if (m(e))return this.$$url
      var n = ir.exec(e)
      return n[1] && this.path(decodeURIComponent(n[1])), (n[2] || n[1]) &&
      this.search(n[3] || ''), this.hash(n[5] || '', t), this
    },
    protocol: ht('$$protocol'),
    host: ht('$$host'),
    port: ht('$$port'),
    path: dt('$$path', function (e) {return '/' == e.charAt(0) ? e : '/' + e}),
    search: function (e, t) {
      switch (arguments.length) {
        case 0:
          return this.$$search
        case 1:
          if (b(e)) this.$$search = X(e) else {
            if (!y(e))throw ar('isrcharg',
              'The first argument of the `$location#search()` call must be a string or an object.')
            o(e, function (t, n) {null == t && delete e[n]}), this.$$search = e
          }
          break
        default:
          m(t) || null === t ? delete this.$$search[e] : this.$$search[e] = t
      }
      return this.$$compose(), this
    },
    hash: dt('$$hash', v),
    replace: function () {return this.$$replace = !0, this},
  }
  var sr, ur = r('$parse'), cr = {}, lr = Function.prototype.call,
    fr = Function.prototype.apply, pr = Function.prototype.bind, hr = {
      'null': function () {return null},
      'true': function () {return !0},
      'false': function () {return !1},
      undefined: d,
      '+': function (e, t, r, i) {
        return r = r(e, t), i = i(e, t), $(r)
          ? $(i)
            ? r + i
            : r
          : $(i)
            ? i
            : n
      },
      '-': function (e, t, n, r) {
        return n = n(e, t), r = r(e, t), ($(n)
          ? n
          : 0) - ($(r) ? r : 0)
      },
      '*': function (e, t, n, r) {return n(e, t) * r(e, t)},
      '/': function (e, t, n, r) {return n(e, t) / r(e, t)},
      '%': function (e, t, n, r) {return n(e, t) % r(e, t)},
      '^': function (e, t, n, r) {return n(e, t) ^ r(e, t)},
      '=': d,
      '===': function (e, t, n, r) {return n(e, t) === r(e, t)},
      '!==': function (e, t, n, r) {return n(e, t) !== r(e, t)},
      '==': function (e, t, n, r) {return n(e, t) == r(e, t)},
      '!=': function (e, t, n, r) {return n(e, t) != r(e, t)},
      '<': function (e, t, n, r) {return n(e, t) < r(e, t)},
      '>': function (e, t, n, r) {return n(e, t) > r(e, t)},
      '<=': function (e, t, n, r) {return n(e, t) <= r(e, t)},
      '>=': function (e, t, n, r) {return n(e, t) >= r(e, t)},
      '&&': function (e, t, n, r) {return n(e, t) && r(e, t)},
      '||': function (e, t, n, r) {return n(e, t) || r(e, t)},
      '&': function (e, t, n, r) {return n(e, t) & r(e, t)},
      '|': function (e, t, n, r) {return r(e, t)(e, t, n(e, t))},
      '!': function (e, t, n) {return !n(e, t)},
    }, dr = {n: '\n', f: '\f', r: '\r', t: '\t', v: '\x0B', '\'': '\'', '"': '"'},
    vr = function (e) {this.options = e}
  vr.prototype = {
    constructor: vr,
    lex: function (e) {
      for (this.text = e, this.index = 0, this.ch = n, this.lastCh = ':', this.tokens = []; this.index <
      this.text.length;) {
        if (this.ch = this.text.charAt(this.index), this.is(
            '"\'')) this.readString(this.ch) else if (this.isNumber(this.ch) ||
          this.is('.') &&
          this.isNumber(this.peek())) this.readNumber() else if (this.isIdent(
            this.ch)) this.readIdent() else if (this.is(
            '(){}[].,;:?')) this.tokens.push({
          index: this.index,
          text: this.ch,
        }), this.index++ else {
          if (this.isWhitespace(this.ch)) {
            this.index++
            continue
          }
          var t = this.ch + this.peek(), r = t + this.peek(2), i = hr[this.ch],
            o = hr[t], a = hr[r]
          a
            ? (this.tokens.push(
            {index: this.index, text: r, fn: a}), this.index += 3)
            : o
            ? (this.tokens.push(
              {index: this.index, text: t, fn: o}), this.index += 2)
            : i
              ? (this.tokens.push(
                {index: this.index, text: this.ch, fn: i}), this.index += 1)
              : this.throwError('Unexpected next character ', this.index,
                this.index + 1)
        }
        this.lastCh = this.ch
      }
      return this.tokens
    },
    is: function (e) {return e.indexOf(this.ch) !== -1},
    was: function (e) {return e.indexOf(this.lastCh) !== -1},
    peek: function (e) {
      var t = e || 1
      return this.index + t < this.text.length &&
        this.text.charAt(this.index + t)
    },
    isNumber: function (e) {return '0' <= e && e <= '9'},
    isWhitespace: function (e) {
      return ' ' === e || '\r' === e || '\t' === e || '\n' === e ||
        '\x0B' === e || ' ' === e
    },
    isIdent: function (e) {
      return 'a' <= e && e <= 'z' || 'A' <= e && e <= 'Z' || '_' === e ||
        '$' === e
    },
    isExpOperator: function (e) {
      return '-' === e || '+' === e || this.isNumber(e)
    },
    throwError: function (e, t, n) {
      n = n || this.index
      var r = $(t) ? 's ' + t + '-' + this.index + ' [' +
        this.text.substring(t, n) + ']' : ' ' + n
      throw ur('lexerr', 'Lexer Error: {0} at column{1} in expression [{2}].',
        e, r, this.text)
    },
    readNumber: function () {
      for (var e = '', t = this.index; this.index < this.text.length;) {
        var n = hn(this.text.charAt(this.index))
        if ('.' == n || this.isNumber(n)) e += n else {
          var r = this.peek()
          if ('e' == n &&
            this.isExpOperator(r)) e += n else if (this.isExpOperator(n) &&
            r && this.isNumber(r) && 'e' ==
            e.charAt(e.length - 1)) e += n else {
            if (!this.isExpOperator(n) || r && this.isNumber(r) ||
              'e' != e.charAt(e.length - 1))break
            this.throwError('Invalid exponent')
          }
        }
        this.index++
      }
      e = 1 * e, this.tokens.push({
        index: t,
        text: e,
        literal: !0,
        constant: !0,
        fn: function () {return e},
      })
    },
    readIdent: function () {
      for (var e, t, n, r, i = this, o = '', a = this.index; this.index <
      this.text.length &&
      (r = this.text.charAt(this.index), "." === r || this.isIdent(r) ||
      this.isNumber(r));)'.' === r && (e = this.index), o += r, this.index++;
      if (e)for (t = this.index; t < this.text.length;) {
        if (r = this.text.charAt(t), '(' === r) {
          n = o.substr(e - a + 1), o = o.substr(0, e - a), this.index = t
          break
        }
        if (!this.isWhitespace(r))break
        t++
      }
      var s = {index: a, text: o}
      if (hr.hasOwnProperty(
          o)) s.fn = hr[o], s.literal = !0, s.constant = !0 else {
        var u = wt(o, this.options, this.text)
        s.fn = f(function (e, t) {return u(e, t)},
          {assign: function (e, t) {return bt(e, o, t, i.text, i.options)}})
      }
      this.tokens.push(s), n &&
      (this.tokens.push({index: e, text: '.'}), this.tokens.push(
        {index: e + 1, text: n}))
    },
    readString: function (e) {
      var t = this.index
      this.index++
      for (var n = '', r = e, i = !1; this.index < this.text.length;) {
        var o = this.text.charAt(this.index)
        if (r += o, i) {
          if ('u' === o) {
            var a = this.text.substring(this.index + 1, this.index + 5)
            a.match(/[\da-f]{4}/i) || this.throwError(
              'Invalid unicode escape [\\u' + a +
              ']'), this.index += 4, n += String.fromCharCode(parseInt(a, 16))
          } else {
            var s = dr[o]
            n += s ? s : o
          }
          i = !1
        } else if ('\\' === o) i = !0 else {
          if (o === e)return this.index++, void this.tokens.push({
            index: t,
            text: r,
            string: n,
            literal: !0,
            constant: !0,
            fn: function () {return n},
          })
          n += o
        }
        this.index++
      }
      this.throwError('Unterminated quote', t)
    },
  }
  var gr = function (
    e, t, n) {this.lexer = e, this.$filter = t, this.options = n}
  gr.ZERO = f(function () {return 0}, {constant: !0}), gr.prototype = {
    constructor: gr,
    parse: function (e) {
      this.text = e, this.tokens = this.lexer.lex(e)
      var t = this.statements()
      return 0 !== this.tokens.length &&
      this.throwError('is an unexpected token',
        this.tokens[0]), t.literal = !!t.literal, t.constant = !!t.constant, t
    },
    primary: function () {
      var e
      if (this.expect('(')) e = this.filterChain(), this.consume(
        ')') else if (this.expect(
          '[')) e = this.arrayDeclaration() else if (this.expect(
          '{')) e = this.object() else {
        var t = this.expect()
        e = t.fn, e || this.throwError('not a primary expression',
          t), e.literal = !!t.literal, e.constant = !!t.constant
      }
      for (var n, r; n = this.expect("(", "[", ".");)'(' === n.text
        ? (e = this.functionCall(e, r), r = null)
        : '[' === n.text
          ? (r = e, e = this.objectIndex(e))
          : '.' === n.text
            ? (r = e, e = this.fieldAccess(e))
            : this.throwError('IMPOSSIBLE');
      return e
    },
    throwError: function (e, t) {
      throw ur('syntax',
        'Syntax Error: Token \'{0}\' {1} at column {2} of the expression [{3}] starting at [{4}].',
        t.text, e, t.index + 1, this.text, this.text.substring(t.index))
    },
    peekToken: function () {
      if (0 === this.tokens.length)throw ur('ueoe',
        'Unexpected end of expression: {0}', this.text)
      return this.tokens[0]
    },
    peek: function (e, t, n, r) {
      if (this.tokens.length > 0) {
        var i = this.tokens[0], o = i.text
        if (o === e || o === t || o === n || o === r ||
          !e && !t && !n && !r)return i
      }
      return !1
    },
    expect: function (e, t, n, r) {
      var i = this.peek(e, t, n, r)
      return !!i && (this.tokens.shift(), i)
    },
    consume: function (e) {
      this.expect(e) ||
      this.throwError('is unexpected, expecting [' + e + ']', this.peek())
    },
    unaryFn: function (e, t) {
      return f(function (n, r) {return e(n, r, t)}, {constant: t.constant})
    },
    ternaryFn: function (e, t, n) {
      return f(function (r, i) {return e(r, i) ? t(r, i) : n(r, i)},
        {constant: e.constant && t.constant && n.constant})
    },
    binaryFn: function (e, t, n) {
      return f(function (r, i) {return t(r, i, e, n)},
        {constant: e.constant && n.constant})
    },
    statements: function () {
      for (var e = []; ;)if (this.tokens.length > 0 &&
        !this.peek('}', ')', ';', ']') &&
        e.push(this.filterChain()), !this.expect(';'))return 1 === e.length
        ? e[0]
        : function (t, n) {
          for (var r, i = 0; i < e.length; i++) {
            var o = e[i]
            o && (r = o(t, n))
          }
          return r
        }
    },
    filterChain: function () {
      for (var e, t = this.expression(); ;) {
        if (!(e = this.expect('|')))return t
        t = this.binaryFn(t, e.fn, this.filter())
      }
    },
    filter: function () {
      for (var e = this.expect(), t = this.$filter(e.text), n = []; ;) {
        if (!(e = this.expect(':'))) {
          var r = function (
            e, r, i) {
            for (var o = [i], a = 0; a < n.length; a++)o.push(n[a](e, r));
            return t.apply(e, o)
          }
          return function () {return r}
        }
        n.push(this.expression())
      }
    },
    expression: function () {return this.assignment()},
    assignment: function () {
      var e, t, n = this.ternary()
      return (t = this.expect('=')) ? (n.assign || this.throwError(
        'implies assignment but [' + this.text.substring(0, t.index) +
        '] can not be assigned to', t), e = this.ternary(), function (
        t, r) {
        return n.assign(t, e(t, r), r)
      }) : n
    },
    ternary: function () {
      var e, t, n = this.logicalOR()
      return (t = this.expect('?')) ? (e = this.ternary(), (t = this.expect(
        ':')) ? this.ternaryFn(n, e, this.ternary()) : void this.throwError(
        'expected :', t)) : n
    },
    logicalOR: function () {
      for (var e, t = this.logicalAND(); ;) {
        if (!(e = this.expect('||')))return t
        t = this.binaryFn(t, e.fn, this.logicalAND())
      }
    },
    logicalAND: function () {
      var e, t = this.equality()
      return (e = this.expect('&&')) &&
      (t = this.binaryFn(t, e.fn, this.logicalAND())), t
    },
    equality: function () {
      var e, t = this.relational()
      return (e = this.expect('==', '!=', '===', '!==')) &&
      (t = this.binaryFn(t, e.fn, this.equality())), t
    },
    relational: function () {
      var e, t = this.additive()
      return (e = this.expect('<', '>', '<=', '>=')) &&
      (t = this.binaryFn(t, e.fn, this.relational())), t
    },
    additive: function () {
      for (var e, t = this.multiplicative(); e = this.expect("+",
        "-");)t = this.binaryFn(t, e.fn, this.multiplicative());
      return t
    },
    multiplicative: function () {
      for (var e, t = this.unary(); e = this.expect("*", "/",
        "%");)t = this.binaryFn(t, e.fn, this.unary());
      return t
    },
    unary: function () {
      var e
      return this.expect('+')
        ? this.primary()
        : (e = this.expect('-'))
          ? this.binaryFn(gr.ZERO, e.fn, this.unary())
          : (e = this.expect('!'))
            ? this.unaryFn(e.fn, this.unary())
            : this.primary()
    },
    fieldAccess: function (e) {
      var t = this, n = this.expect().text, r = wt(n, this.options, this.text)
      return f(function (t, n, i) {return r(i || e(t, n))}, {
        assign: function (r, i, o) {
          return bt(e(r, o), n, i, t.text, t.options)
        },
      })
    },
    objectIndex: function (e) {
      var t = this, r = this.expression()
      return this.consume(']'), f(function (i, o) {
        var a, s, u = e(i, o), c = r(i, o)
        return mt(c, t.text), u ? (a = $t(u[c], t.text), a && a.then &&
        t.options.unwrapPromises && (s = a, '$$v' in a ||
        (s.$$v = n, s.then(function (e) {s.$$v = e})), a = a.$$v), a) : n
      }, {
        assign: function (n, i, o) {
          var a = r(n, o), s = $t(e(n, o), t.text)
          return s[a] = i
        },
      })
    },
    functionCall: function (e, t) {
      var n = []
      if (')' !== this.peekToken().text)do n.push(
        this.expression()) while (this.expect(','))
      this.consume(')')
      var r = this
      return function (i, o) {
        for (var a = [], s = t ? t(i, o) : i, u = 0; u < n.length; u++)a.push(
          n[u](i, o));
        var c = e(i, o, s) || d
        $t(s, r.text), yt(c, r.text)
        var l = c.apply ? c.apply(s, a) : c(a[0], a[1], a[2], a[3], a[4])
        return $t(l, r.text)
      }
    },
    arrayDeclaration: function () {
      var e = [], t = !0
      if (']' !== this.peekToken().text)do {
        if (this.peek(']'))break
        var n = this.expression()
        e.push(n), n.constant || (t = !1)
      } while (this.expect(','))
      return this.consume(']'), f(function (t, n) {
        for (var r = [], i = 0; i < e.length; i++)r.push(e[i](t, n));
        return r
      }, {literal: !0, constant: t})
    },
    object: function () {
      var e = [], t = !0
      if ('}' !== this.peekToken().text)do {
        if (this.peek('}'))break
        var n = this.expect(), r = n.string || n.text
        this.consume(':')
        var i = this.expression()
        e.push({key: r, value: i}), i.constant || (t = !1)
      } while (this.expect(','))
      return this.consume('}'), f(function (t, n) {
        for (var r = {}, i = 0; i < e.length; i++) {
          var o = e[i]
          r[o.key] = o.value(t, n)
        }
        return r
      }, {literal: !0, constant: t})
    },
  }
  var mr = {}, $r = r('$sce'), yr = {
    HTML: 'html',
    CSS: 'css',
    URL: 'url',
    RESOURCE_URL: 'resourceUrl',
    JS: 'js',
  }, br = t.createElement('a'), xr = _t(e.location.href, !0)
  Rt.$inject = ['$provide'], It.$inject = ['$locale'], Bt.$inject = ['$locale']
  var wr = '.', Cr = {
      yyyy: Wt('FullYear', 4),
      yy: Wt('FullYear', 2, 0, !0),
      y: Wt('FullYear', 1),
      MMMM: zt('Month'),
      MMM: zt('Month', !0),
      MM: Wt('Month', 2, 1),
      M: Wt('Month', 1, 1),
      dd: Wt('Date', 2),
      d: Wt('Date', 1),
      HH: Wt('Hours', 2),
      H: Wt('Hours', 1),
      hh: Wt('Hours', 2, -12),
      h: Wt('Hours', 1, -12),
      mm: Wt('Minutes', 2),
      m: Wt('Minutes', 1),
      ss: Wt('Seconds', 2),
      s: Wt('Seconds', 1),
      sss: Wt('Milliseconds', 3),
      EEEE: zt('Day'),
      EEE: zt('Day', !0),
      a: Qt,
      Z: Xt,
    },
    Tr = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
    Sr = /^\-?\d+$/
  Jt.$inject = ['$locale']
  var Er = g(hn), kr = g(vn)
  Kt.$inject = ['$parse']
  var Ar = g({
    restrict: 'E',
    compile: function (e, n) {
      if ($n <= 8 && (n.href || n.name || n.$set('href', ''), e.append(
          t.createComment('IE fix'))), !n.href && !n.xlinkHref &&
        !n.name)return function (e, t) {
        var n = '[object SVGAnimatedString]' === Sn.call(t.prop('href'))
          ? 'xlink:href'
          : 'href'
        t.on('click', function (e) {t.attr(n) || e.preventDefault()})
      }
    },
  }), Nr = {}
  o(zn, function (e, t) {
    if ('multiple' != e) {
      var n = Ie('ng-' + t)
      Nr[n] = function () {
        return {
          priority: 100,
          link: function (e, r, i) {
            e.$watch(i[n], function (e) {i.$set(t, !!e)})
          },
        }
      }
    }
  }), o(['src', 'srcset', 'href'], function (e) {
    var t = Ie('ng-' + e)
    Nr[t] = function () {
      return {
        priority: 99, link: function (n, r, i) {
          var o = e, a = e
          'href' === e &&
          '[object SVGAnimatedString]' === Sn.call(r.prop('href')) &&
          (a = 'xlinkHref', i.$attr[a] = 'xlink:href', o = null), i.$observe(t,
            function (e) {
              e && (i.$set(a, e), $n && o && r.prop(o, i[a]))
            })
        },
      }
    }
  })
  var jr = {
    $addControl: d,
    $removeControl: d,
    $setValidity: d,
    $setDirty: d,
    $setPristine: d,
  }
  en.$inject = ['$element', '$attrs', '$scope', '$animate']
  var Dr = function (e) {
      return [
        '$timeout',
        function (t) {
          var r = {
            name: 'form',
            restrict: e ? 'EAC' : 'E',
            controller: en,
            compile: function () {
              return {
                pre: function (e, r, i, o) {
                  if (!i.action) {
                    var a = function (e) {
                      e.preventDefault
                        ? e.preventDefault()
                        : e.returnValue = !1
                    }
                    Pn(r[0], 'submit', a), r.on('$destroy',
                      function () {t(function () {_n(r[0], 'submit', a)}, 0, !1)})
                  }
                  var s = r.parent().controller('form'), u = i.name || i.ngForm
                  u && bt(e, u, o, u), s && r.on('$destroy', function () {
                    s.$removeControl(o), u && bt(e, u, n, u), f(o, jr)
                  })
                },
              }
            },
          }
          return r
        }]
    }, Or = Dr(), Mr = Dr(!0),
    Lr = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
    Pr = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
    _r = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, Hr = {
      text: on,
      number: an,
      url: sn,
      email: un,
      radio: cn,
      checkbox: ln,
      hidden: d,
      button: d,
      submit: d,
      reset: d,
      file: d,
    }, qr = ['badInput'], Rr = [
      '$browser',
      '$sniffer',
      function (e, t) {
        return {
          restrict: 'E',
          require: '?ngModel',
          link: function (n, r, i, o) {
            o && (Hr[hn(i.type)] || Hr.text)(n, r, i, o, t, e)
          },
        }
      }], Fr = 'ng-valid', Ir = 'ng-invalid', Br = 'ng-pristine', Ur = 'ng-dirty',
    Vr = [
      '$scope',
      '$exceptionHandler',
      '$attrs',
      '$element',
      '$parse',
      '$animate',
      function (e, t, n, i, a, s) {
        function u (e, t) {
          t = t
            ? '-' + Z(t, '-')
            : '', s.removeClass(i, (e ? Ir : Fr) + t), s.addClass(i,
            (e ? Fr : Ir) + t)
        }

        this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$name = n.name
        var c = a(n.ngModel), l = c.assign
        if (!l)throw r('ngModel')('nonassign',
          'Expression \'{0}\' is non-assignable. Element: {1}', n.ngModel, W(i))
        this.$render = d, this.$isEmpty = function (e) {
          return m(e) || '' === e || null === e || e !== e
        }
        var f = i.inheritedData('$formController') || jr, p = 0,
          h = this.$error = {}
        i.addClass(Br), u(!0), this.$setValidity = function (e, t) {
          h[e] !== !t && (t
            ? (h[e] && p--, p || (u(!0), this.$valid = !0, this.$invalid = !1))
            : (u(!1), this.$invalid = !0, this.$valid = !1, p++), h[e] = !t, u(
            t, e), f.$setValidity(e, t, this))
        }, this.$setPristine = function () {
          this.$dirty = !1, this.$pristine = !0, s.removeClass(i,
            Ur), s.addClass(i, Br)
        }, this.$setViewValue = function (n) {
          this.$viewValue = n, this.$pristine &&
          (this.$dirty = !0, this.$pristine = !1, s.removeClass(i,
            Br), s.addClass(i, Ur), f.$setDirty()), o(this.$parsers,
            function (e) {n = e(n)}), this.$modelValue !== n &&
          (this.$modelValue = n, l(e, n), o(this.$viewChangeListeners,
            function (e) {try {e()} catch (n) {t(n)}}))
        }
        var v = this
        e.$watch(function () {
          var t = c(e)
          if (v.$modelValue !== t) {
            var n = v.$formatters, r = n.length
            for (v.$modelValue = t; r--;)t = n[r](t);
            v.$viewValue !== t && (v.$viewValue = t, v.$render())
          }
          return t
        })
      }], Wr = function () {
      return {
        require: ['ngModel', '^?form'],
        controller: Vr,
        link: function (e, t, n, r) {
          var i = r[0], o = r[1] || jr
          o.$addControl(i), e.$on('$destroy', function () {o.$removeControl(i)})
        },
      }
    }, zr = g({
      require: 'ngModel',
      link: function (e, t, n, r) {
        r.$viewChangeListeners.push(function () {e.$eval(n.ngChange)})
      },
    }), Xr = function () {
      return {
        require: '?ngModel',
        link: function (e, t, n, r) {
          if (r) {
            n.required = !0
            var i = function (e) {
              return n.required && r.$isEmpty(e)
                ? void r.$setValidity('required', !1)
                : (r.$setValidity('required', !0), e)
            }
            r.$formatters.push(i), r.$parsers.unshift(i), n.$observe('required',
              function () {i(r.$viewValue)})
          }
        },
      }
    }, Qr = function () {
      return {
        require: 'ngModel',
        link: function (e, t, r, i) {
          var a = /\/(.*)\//.exec(r.ngList),
            s = a && new RegExp(a[1]) || r.ngList || ',', u = function (e) {
              if (!m(e)) {
                var t = []
                return e && o(e.split(s), function (e) {e && t.push(jn(e))}), t
              }
            }
          i.$parsers.push(u), i.$formatters.push(function (e) {
            return Nn(e)
              ? e.join(', ')
              : n
          }), i.$isEmpty = function (e) {return !e || !e.length}
        },
      }
    }, Jr = /^(true|false|\d+)$/, Gr = function () {
      return {
        priority: 100,
        compile: function (e, t) {
          return Jr.test(t.ngValue) ? function (
            e, t, n) {
            n.$set('value', e.$eval(n.ngValue))
          } : function (e, t, n) {
            e.$watch(n.ngValue, function (e) {n.$set('value', e)})
          }
        },
      }
    }, Yr = Zt({
      compile: function (e) {
        return e.addClass('ng-binding'), function (e, t, r) {
          t.data('$binding', r.ngBind), e.$watch(r.ngBind,
            function (e) {t.text(e == n ? '' : e)})
        }
      },
    }), Kr = [
      '$interpolate',
      function (e) {
        return function (t, n, r) {
          var i = e(n.attr(r.$attr.ngBindTemplate))
          n.addClass('ng-binding').data('$binding', i), r.$observe(
            'ngBindTemplate', function (e) {n.text(e)})
        }
      }], Zr = [
      '$sce',
      '$parse',
      function (e, t) {
        return function (n, r, i) {
          function o () {
            return (a(n) || '').toString()
          }

          r.addClass('ng-binding').data('$binding', i.ngBindHtml)
          var a = t(i.ngBindHtml)
          n.$watch(o, function (t) {r.html(e.getTrustedHtml(a(n)) || '')})
        }
      }], ei = fn('', !0), ti = fn('Odd', 0), ni = fn('Even', 1), ri = Zt({
      compile: function (e, t) {
        t.$set('ngCloak', n), e.removeClass('ng-cloak')
      },
    }), ii = [function () {return {scope: !0, controller: '@', priority: 500}}],
    oi = {}
  o('click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste'.split(
    ' '), function (e) {
    var t = Ie('ng-' + e)
    oi[t] = [
      '$parse',
      function (n) {
        return {
          compile: function (r, i) {
            var o = n(i[t])
            return function (t, n) {
              n.on(hn(e),
                function (e) {t.$apply(function () {o(t, {$event: e})})})
            }
          },
        }
      }]
  })
  var ai = [
    '$animate',
    function (e) {
      return {
        transclude: 'element',
        priority: 600,
        terminal: !0,
        restrict: 'A',
        $$tlb: !0,
        link: function (n, r, i, o, a) {
          var s, u, c
          n.$watch(i.ngIf, function (o) {
            V(o) ? u || (u = n.$new(), a(u, function (n) {
                n[n.length++] = t.createComment(
                  ' end ngIf: ' + i.ngIf + ' '), s = {clone: n}, e.enter(n,
                  r.parent(), r)
              })) : (c && (c.remove(), c = null), u &&
            (u.$destroy(), u = null), s &&
            (c = oe(s.clone), e.leave(c, function () {c = null}), s = null))
          })
        },
      }
    }], si = [
    '$http',
    '$templateCache',
    '$anchorScroll',
    '$animate',
    '$sce',
    function (e, t, n, r, i) {
      return {
        restrict: 'ECA',
        priority: 400,
        terminal: !0,
        transclude: 'element',
        controller: kn.noop,
        compile: function (o, a) {
          var s = a.ngInclude || a.src, u = a.onload || '', c = a.autoscroll
          return function (o, a, l, f, p) {
            var h, d, v, g = 0, m = function () {
              d && (d.remove(), d = null), h && (h.$destroy(), h = null), v &&
              (r.leave(v, function () {d = null}), d = v, v = null)
            }
            o.$watch(i.parseAsResourceUrl(s), function (i) {
              var s = function () {
                !$(c) || c && !o.$eval(c) || n()
              }, l = ++g
              i ? (e.get(i, {cache: t}).
                success(function (e) {
                  if (l === g) {
                    var t = o.$new()
                    f.template = e
                    var n = p(t, function (e) {m(), r.enter(e, null, a, s)})
                    h = t, v = n, h.$emit('$includeContentLoaded'), o.$eval(u)
                  }
                }).
                error(function () {l === g && m()}), o.$emit(
                '$includeContentRequested')) : (m(), f.template = null)
            })
          }
        },
      }
    }], ui = [
    '$compile',
    function (e) {
      return {
        restrict: 'ECA',
        priority: -400,
        require: 'ngInclude',
        link: function (t, n, r, i) {n.html(i.template), e(n.contents())(t)},
      }
    }], ci = Zt({
    priority: 450,
    compile: function () {return {pre: function (e, t, n) {e.$eval(n.ngInit)}}},
  }), li = Zt({terminal: !0, priority: 1e3}), fi = [
    '$locale', '$interpolate', function (e, t) {
      var n = /{}/g
      return {
        restrict: 'EA',
        link: function (r, i, a) {
          var s = a.count, u = a.$attr.when && i.attr(a.$attr.when),
            c = a.offset || 0, l = r.$eval(u) || {}, f = {},
            p = t.startSymbol(), h = t.endSymbol(), d = /^when(Minus)?(.+)$/
          o(a, function (e, t) {
            d.test(t) &&
            (l[hn(t.replace('when', '').replace('Minus', '-'))] = i.attr(
              a.$attr[t]))
          }), o(l, function (e, r) {
            f[r] = t(e.replace(n, p + s + '-' + c + h))
          }), r.$watch(function () {
            var t = parseFloat(r.$eval(s))
            return isNaN(t) ? '' : (t in l || (t = e.pluralCat(t - c)), f[t](r,
              i, !0))
          }, function (e) {i.text(e)})
        },
      }
    }], pi = [
    '$parse',
    '$animate',
    function (e, n) {
      function a (e) {return e.clone[0]}

      function s (e) {return e.clone[e.clone.length - 1]}

      var u = '$$NG_REMOVED', c = r('ngRepeat')
      return {
        transclude: 'element',
        priority: 1e3,
        terminal: !0,
        $$tlb: !0,
        link: function (r, l, f, p, h) {
          var d, v, g, m, $, y, b, x, w, C = f.ngRepeat, T = C.match(
            /^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),
            S = {$id: je}
          if (!T)throw c('iexp',
            'Expected expression in form of \'_item_ in _collection_[ track by _id_]\' but got \'{0}\'.',
            C)
          if (y = T[1], b = T[2], d = T[3], d ? (v = e(d), g = function (
              e, t, n) {
              return w && (S[w] = e), S[x] = t, S.$index = n, v(r, S)
            }) : (m = function (e, t) {
              return je(t)
            }, $ = function (e) {return e}), T = y.match(
              /^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/), !T)throw c(
            'iidexp',
            '\'_item_\' in \'_item_ in _collection_\' should be an identifier or \'(_key_, _value_)\' expression, but got \'{0}\'.',
            y)
          x = T[3] || T[1], w = T[2]
          var E = {}
          r.$watchCollection(b, function (e) {
            var f, p, d, v, y, b, T, S, k, A, N, j, D = l[0], O = {}, M = []
            if (i(e)) A = e, k = g || m else {
              k = g || $, A = []
              for (b in e)e.hasOwnProperty(b) && '$' != b.charAt(0) &&
              A.push(b);
              A.sort()
            }
            for (v = A.length, p = M.length = A.length, f = 0; f <
            p; f++)if (b = e === A ? f : A[f], T = e[b], S = k(b, T, f), re(S,
                '`track by` id'), E.hasOwnProperty(
                S)) N = E[S], delete E[S], O[S] = N, M[f] = N else {
              if (O.hasOwnProperty(S))throw o(M,
                function (e) {e && e.scope && (E[e.id] = e)}), c('dupes',
                'Duplicates in a repeater are not allowed. Use \'track by\' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}',
                C, S)
              M[f] = {id: S}, O[S] = !1
            }
            for (b in E)E.hasOwnProperty(b) &&
            (N = E[b], j = oe(N.clone), n.leave(j), o(j,
              function (e) {e[u] = !0}), N.scope.$destroy());
            for (f = 0, p = A.length; f < p; f++) {
              if (b = e === A
                  ? f
                  : A[f], T = e[b], N = M[f], M[f - 1] &&
                (D = s(M[f - 1])), N.scope) {
                y = N.scope, d = D
                do d = d.nextSibling while (d && d[u])
                a(N) != d && n.move(oe(N.clone), null, yn(D)), D = s(N)
              } else y = r.$new()
              y[x] = T, w && (y[w] = b), y.$index = f, y.$first = 0 ===
                f, y.$last = f === v - 1, y.$middle = !(y.$first ||
              y.$last), y.$odd = !(y.$even = 0 === (1 & f)), N.scope || h(y,
                function (e) {
                  e[e.length++] = t.createComment(
                    ' end ngRepeat: ' + C + ' '), n.enter(e, null,
                    yn(D)), D = e, N.scope = y, N.clone = e, O[N.id] = N
                })
            }
            E = O
          })
        },
      }
    }], hi = [
    '$animate',
    function (e) {
      return function (t, n, r) {
        t.$watch(r.ngShow,
          function (t) {e[V(t) ? 'removeClass' : 'addClass'](n, 'ng-hide')})
      }
    }], di = [
    '$animate',
    function (e) {
      return function (t, n, r) {
        t.$watch(r.ngHide,
          function (t) {e[V(t) ? 'addClass' : 'removeClass'](n, 'ng-hide')})
      }
    }], vi = Zt(function (e, t, n) {
    e.$watch(n.ngStyle, function (e, n) {
      n && e !== n && o(n, function (e, n) {t.css(n, '')}), e && t.css(e)
    }, !0)
  }), gi = [
    '$animate',
    function (e) {
      return {
        restrict: 'EA',
        require: 'ngSwitch',
        controller: ['$scope', function () {this.cases = {}}],
        link: function (t, n, r, i) {
          var a = r.ngSwitch || r.on, s = [], u = [], c = [], l = []
          t.$watch(a, function (n) {
            var a, f
            for (a = 0, f = c.length; a < f; ++a)c[a].remove();
            for (c.length = 0, a = 0, f = l.length; a < f; ++a) {
              var p = u[a]
              l[a].$destroy(), c[a] = p, e.leave(p,
                function () {c.splice(a, 1)})
            }
            u.length = 0, l.length = 0, (s = i.cases['!' + n] ||
              i.cases['?']) && (t.$eval(r.change), o(s, function (n) {
              var r = t.$new()
              l.push(r), n.transclude(r, function (t) {
                var r = n.element
                u.push(t), e.enter(t, r.parent(), r)
              })
            }))
          })
        },
      }
    }], mi = Zt({
    transclude: 'element',
    priority: 800,
    require: '^ngSwitch',
    link: function (e, t, n, r, i) {
      r.cases['!' + n.ngSwitchWhen] = r.cases['!' + n.ngSwitchWhen] ||
        [], r.cases['!' + n.ngSwitchWhen].push({transclude: i, element: t})
    },
  }), $i = Zt({
    transclude: 'element',
    priority: 800,
    require: '^ngSwitch',
    link: function (e, t, n, r, i) {
      r.cases['?'] = r.cases['?'] || [], r.cases['?'].push(
        {transclude: i, element: t})
    },
  }), yi = Zt({
    link: function (e, t, n, i, o) {
      if (!o)throw r('ngTransclude')('orphan',
        'Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}',
        W(t))
      o(function (e) {t.empty(), t.append(e)})
    },
  }), bi = [
    '$templateCache',
    function (e) {
      return {
        restrict: 'E',
        terminal: !0,
        compile: function (t, n) {
          if ('text/ng-template' == n.type) {
            var r = n.id, i = t[0].text
            e.put(r, i)
          }
        },
      }
    }], xi = r('ngOptions'), wi = g({terminal: !0}), Ci = [
    '$compile',
    '$parse',
    function (e, r) {
      var i = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
        s = {$setViewValue: d}
      return {
        restrict: 'E',
        require: ['select', '?ngModel'],
        controller: [
          '$element',
          '$scope',
          '$attrs',
          function (e, t, n) {
            var r, i, o = this, a = {}, u = s
            o.databound = n.ngModel, o.init = function (
              e, t, n) {u = e, r = t, i = n}, o.addOption = function (t) {
              re(t, '"option value"'), a[t] = !0, u.$viewValue == t &&
              (e.val(t), i.parent() && i.remove())
            }, o.removeOption = function (e) {
              this.hasOption(e) &&
              (delete a[e], u.$viewValue == e && this.renderUnknownOption(e))
            }, o.renderUnknownOption = function (t) {
              var n = '? ' + je(t) + ' ?'
              i.val(n), e.prepend(i), e.val(n), i.prop('selected', !0)
            }, o.hasOption = function (e) {return a.hasOwnProperty(e)}, t.$on(
              '$destroy', function () {o.renderUnknownOption = d})
          }],
        link: function (s, u, c, l) {
          function f (e, t, n, r) {
            n.$render = function () {
              var e = n.$viewValue
              r.hasOption(e)
                ? (T.parent() && T.remove(), t.val(e), '' === e &&
              d.prop('selected', !0))
                : m(e) && d
                ? t.val('')
                : r.renderUnknownOption(e)
            }, t.on('change', function () {
              e.$apply(function () {
                T.parent() && T.remove(), n.$setViewValue(t.val())
              })
            })
          }

          function p (e, t, n) {
            var r
            n.$render = function () {
              var e = new De(n.$viewValue)
              o(t.find('option'), function (t) {t.selected = $(e.get(t.value))})
            }, e.$watch(function () {
              _(r, n.$viewValue) || (r = P(n.$viewValue), n.$render())
            }), t.on('change', function () {
              e.$apply(function () {
                var e = []
                o(t.find('option'), function (t) {
                  t.selected && e.push(t.value)
                }), n.$setViewValue(e)
              })
            })
          }

          function h (t, o, s) {
            function u () {
              var e, n, r, i, u, c, g, b, S, E, k, A, N, j, D, O = {'': []},
                M = [''], L = s.$modelValue, P = v(t) || [], _ = p ? a(P) : P,
                H = {}, q = !1
              if (y)if (m && Nn(L)) {
                q = new De([])
                for (var R = 0; R < L.length; R++)H[f] = L[R], q.put(m(t, H),
                  L[R])
              } else q = new De(L)
              for (k = 0; S = _.length, k < S; k++) {
                if (g = k, p) {
                  if (g = _[k], '$' === g.charAt(0))continue
                  H[p] = g
                }
                if (H[f] = P[g], e = h(t, H) || '', (n = O[e]) ||
                  (n = O[e] = [], M.push(e)), y) A = $(
                  q.remove(m ? m(t, H) : d(t, H))) else {
                  if (m) {
                    var F = {}
                    F[f] = L, A = m(t, F) === m(t, H)
                  } else A = L === d(t, H)
                  q = q || A
                }
                D = l(t, H), D = $(D) ? D : '', n.push(
                  {id: m ? m(t, H) : p ? _[k] : k, label: D, selected: A})
              }
              for (y || (x || null === L ? O[''].unshift(
                {id: '', label: '', selected: !q}) : q || O[''].unshift(
                  {id: '?', label: '', selected: !0})), E = 0, b = M.length; E <
                   b; E++) {
                for (e = M[E], n = O[e], T.length <= E
                  ? (i = {
                    element: C.clone().attr('label', e),
                    label: n.label,
                  }, u = [i], T.push(u), o.append(i.element))
                  : (u = T[E], i = u[0], i.label != e && i.element.attr('label',
                    i.label = e)), N = null, k = 0, S = n.length; k <
                     S; k++)r = n[k], (c = u[k + 1])
                  ? (N = c.element, c.label !== r.label &&
                  N.text(c.label = r.label), c.id !== r.id &&
                  N.val(c.id = r.id), c.selected !== r.selected &&
                  N.prop('selected', c.selected = r.selected))
                  : ('' === r.id && x ? j = x : (j = w.clone()).val(r.id).
                    prop('selected', r.selected).
                    text(r.label), u.push(c = {
                    element: j,
                    label: r.label,
                    id: r.id,
                    selected: r.selected,
                  }), N ? N.after(j) : i.element.append(j), N = j);
                for (k++; u.length > k;)u.pop().element.remove()
              }
              for (; T.length > E;)T.pop()[0].element.remove()
            }

            var c
            if (!(c = b.match(i)))throw xi('iexp',
              'Expected expression in form of \'_select_ (as _label_)? for (_key_,)?_value_ in _collection_\' but got \'{0}\'. Element: {1}',
              b, W(o))
            var l = r(c[2] || c[1]), f = c[4] || c[6], p = c[5],
              h = r(c[3] || ''), d = r(c[2] ? c[1] : f), v = r(c[7]), g = c[8],
              m = g ? r(c[8]) : null, T = [[{element: o, label: ''}]]
            x &&
            (e(x)(t), x.removeClass('ng-scope'), x.remove()), o.empty(), o.on(
              'change', function () {
                t.$apply(function () {
                  var e, r, i, a, u, c, l, h, g, $ = v(t) || [], b = {}
                  if (y) {
                    for (i = [], c = 0, h = T.length; c <
                    h; c++)for (e = T[c], u = 1, l = e.length; u <
                    l; u++)if ((a = e[u].element)[0].selected) {
                      if (r = a.val(), p && (b[p] = r), m)for (g = 0; g <
                      $.length &&
                      (b[f] = $[g], m(t, b) != r); g++); else b[f] = $[r]
                      i.push(d(t, b))
                    }
                  } else {
                    if (r = o.val(), '?' == r) i = n else if ('' ===
                      r) i = null else if (m) {
                      for (g = 0; g < $.length; g++)if (b[f] = $[g], m(t, b) ==
                        r) {
                        i = d(t, b)
                        break
                      }
                    } else b[f] = $[r], p && (b[p] = r), i = d(t, b)
                    T[0].length > 1 && T[0][1].id !== r &&
                    (T[0][1].selected = !1)
                  }
                  s.$setViewValue(i)
                })
              }), s.$render = u, t.$watch(u)
          }

          if (l[1]) {
            for (var d, v = l[0], g = l[1], y = c.multiple, b = c.ngOptions, x = !1, w = yn(
              t.createElement('option')), C = yn(t.createElement(
              'optgroup')), T = w.clone(), S = 0, E = u.children(), k = E.length; S <
                 k; S++)if ('' === E[S].value) {
              d = x = E.eq(S)
              break
            }
            v.init(g, x, T), y &&
            (g.$isEmpty = function (e) {return !e || 0 === e.length}), b ? h(s,
              u, g) : y ? p(s, u, g) : f(s, u, g, v)
          }
        },
      }
    }], Ti = [
    '$interpolate', function (e) {
      var t = {addOption: d, removeOption: d}
      return {
        restrict: 'E',
        priority: 100,
        compile: function (n, r) {
          if (m(r.value)) {
            var i = e(n.text(), !0)
            i || r.$set('value', n.text())
          }
          return function (e, n, r) {
            var o = '$selectController', a = n.parent(),
              s = a.data(o) || a.parent().data(o)
            s && s.databound ? n.prop('selected', !1) : s = t, i ? e.$watch(i,
              function (e, t) {
                r.$set('value', e), e !== t && s.removeOption(t), s.addOption(e)
              }) : s.addOption(r.value), n.on('$destroy',
              function () {s.removeOption(r.value)})
          }
        },
      }
    }], Si = g({restrict: 'E', terminal: !0})
  return e.angular.bootstrap ? void console.log(
    'WARNING: Tried to load angular more than once.') : (ee(), se(kn), void yn(
    t).ready(function () {Y(t, K)}))
}(window, document), !window.angular.$$csp() &&
window.angular.element(document).
  find('head').
  prepend(
    '<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>'), function (
  e, t, n) {
  'use strict'
  function r () {
    function e (e, n) {
      return t.extend(new (t.extend(function () {}, {prototype: e})), n)
    }

    function n (e, t) {
      var n = t.caseInsensitiveMatch, r = {originalPath: e, regexp: e},
        i = r.keys = []
      return e = e.replace(/([().])/g, '\\$1').
        replace(/(\/)?:(\w+)([\?\*])?/g, function (e, t, n, r) {
          var o = '?' === r ? r : null, a = '*' === r ? r : null
          return i.push({name: n, optional: !!o}), t = t || '', '' +
          (o ? '' : t) + '(?:' + (o ? t : '') + (a && '(.+?)' || '([^/]+)') +
          (o || '') + ')' + (o || '')
        }).
        replace(/([\/$\*])/g, '\\$1'), r.regexp = new RegExp('^' + e + '$',
        n ? 'i' : ''), r
    }

    var r = {}
    this.when = function (e, i) {
      if (r[e] = t.extend({reloadOnSearch: !0}, i, e && n(e, i)), e) {
        var o = '/' == e[e.length - 1] ? e.substr(0, e.length - 1) : e + '/'
        r[o] = t.extend({redirectTo: e}, n(o, i))
      }
      return this
    }, this.otherwise = function (e) {
      return this.when(null, e), this
    }, this.$get = [
      '$rootScope',
      '$location',
      '$routeParams',
      '$q',
      '$injector',
      '$http',
      '$templateCache',
      '$sce',
      function (n, i, o, a, s, u, c, l) {
        function f (e, t) {
          var n = t.keys, r = {}
          if (!t.regexp)return null
          var i = t.regexp.exec(e)
          if (!i)return null
          for (var o = 1, a = i.length; o < a; ++o) {
            var s = n[o - 1],
              u = 'string' == typeof i[o] ? decodeURIComponent(i[o]) : i[o]
            s && u && (r[s.name] = u)
          }
          return r
        }

        function p () {
          var e = h(), r = g.current
          e && r && e.$$route === r.$$route &&
          t.equals(e.pathParams, r.pathParams) && !e.reloadOnSearch && !v
            ? (r.params = e.params, t.copy(r.params, o), n.$broadcast(
            '$routeUpdate', r))
            : (e || r) && (v = !1, n.$broadcast('$routeChangeStart', e,
              r), g.current = e, e && e.redirectTo &&
            (t.isString(e.redirectTo) ? i.path(d(e.redirectTo, e.params)).
              search(e.params).
              replace() : i.url(
              e.redirectTo(e.pathParams, i.path(), i.search())).
              replace()), a.when(e).
              then(function () {
                if (e) {
                  var n, r, i = t.extend({}, e.resolve)
                  return t.forEach(i, function (e, n) {
                    i[n] = t.isString(e) ? s.get(e) : s.invoke(e)
                  }), t.isDefined(n = e.template) ? t.isFunction(n) &&
                    (n = n(e.params)) : t.isDefined(r = e.templateUrl) &&
                    (t.isFunction(r) &&
                    (r = r(e.params)), r = l.getTrustedResourceUrl(
                      r), t.isDefined(r) &&
                    (e.loadedTemplateUrl = r, n = u.get(r, {cache: c}).
                      then(function (e) {return e.data}))), t.isDefined(n) &&
                  (i.$template = n), a.all(i)
                }
              }).
              then(function (i) {
                e == g.current &&
                (e && (e.locals = i, t.copy(e.params, o)), n.$broadcast(
                  '$routeChangeSuccess', e, r))
              }, function (t) {
                e == g.current && n.$broadcast('$routeChangeError', e, r, t)
              }))
        }

        function h () {
          var n, o
          return t.forEach(r, function (r, a) {
            !o && (n = f(i.path(), r)) && (o = e(r, {
              params: t.extend({}, i.search(), n),
              pathParams: n,
            }), o.$$route = r)
          }), o || r[null] && e(r[null], {params: {}, pathParams: {}})
        }

        function d (e, n) {
          var r = []
          return t.forEach((e || '').split(':'), function (e, t) {
            if (0 === t) r.push(e) else {
              var i = e.match(/(\w+)(.*)/), o = i[1]
              r.push(n[o]), r.push(i[2] || ''), delete n[o]
            }
          }), r.join('')
        }

        var v = !1,
          g = {routes: r, reload: function () {v = !0, n.$evalAsync(p)}}
        return n.$on('$locationChangeSuccess', p), g
      }]
  }

  function i () {this.$get = function () {return {}}}

  function o (e, n, r) {
    return {
      restrict: 'ECA',
      terminal: !0,
      priority: 400,
      transclude: 'element',
      link: function (i, o, a, s, u) {
        function c () {
          h && (h.remove(), h = null), f && (f.$destroy(), f = null), p &&
          (r.leave(p, function () {h = null}), h = p, p = null)
        }

        function l () {
          var a = e.current && e.current.locals, s = a && a.$template
          if (t.isDefined(s)) {
            var l = i.$new(), h = e.current, g = u(l, function (e) {
              r.enter(e, null, p || o,
                function () {!t.isDefined(d) || d && !i.$eval(d) || n()}), c()
            })
            p = g, f = h.scope = l, f.$emit('$viewContentLoaded'), f.$eval(v)
          } else c()
        }

        var f, p, h, d = a.autoscroll, v = a.onload || ''
        i.$on('$routeChangeSuccess', l), l()
      },
    }
  }

  function a (e, t, n) {
    return {
      restrict: 'ECA',
      priority: -400,
      link: function (r, i) {
        var o = n.current, a = o.locals
        i.html(a.$template)
        var s = e(i.contents())
        if (o.controller) {
          a.$scope = r
          var u = t(o.controller, a)
          o.controllerAs && (r[o.controllerAs] = u), i.data(
            '$ngControllerController', u), i.children().
            data('$ngControllerController', u)
        }
        s(r)
      },
    }
  }

  var s = t.module('ngRoute', ['ng']).provider('$route', r)
  s.provider('$routeParams', i), s.directive('ngView', o), s.directive('ngView',
    a), o.$inject = [
    '$route',
    '$anchorScroll',
    '$animate'], a.$inject = ['$compile', '$controller', '$route']
}(window, window.angular)