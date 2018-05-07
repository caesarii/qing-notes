'use strict'
var cloudApp = angular.module('cloudApp',
  ['ngRoute', 'cloudApp.services', 'cloudApp.controllers', 'templates']),
  services = angular.module('cloudApp.services', []),
  controllers = angular.module('cloudApp.controllers', [])
cloudApp.config([
  '$routeProvider',
  function (e) {
    e.when('/', {
      title: '欢喜云',
      resolve: {
        init: [
          '$timeout',
          'Apps',
          '$rootScope',
          'Account',
          function (e, n, o, t) {
            e(function () {
              o.cur_app && o.cur_app.length > 0 &&
              n.close(), o.cur_app = '', o.cur_title = '欢喜云首页', o.needAcceptTerms = !1, t.close()
            })
          }],
      },
    }), e.when('/login',
      {title: '登录欢喜云', template: '', controller: 'LoginCtrl'}), e.when(
      '/accept-terms', {
        title: '欢喜云个人隐私安全警告声明',
        templateUrl: 'view/html/accept-terms.html',
        controller: 'AcceptTermsCtrl',
      })
    for (var n = [
      {
        name: 'radar',
        title: '查找手机',
      },
      {
        name: 'contacts',
        title: '联系人',
      },
      {
        name: 'notes',
        title: '锤子便签',
      }], o = 0; o < n.length; o++)void function (n) {
      e.when('/' + n.name, {
        title: n.title,
        resolve: {
          init: [
            '$timeout',
            'Apps',
            '$window',
            '$rootScope',
            'Auth',
            '$location',
            'BaseInfo',
            'Account',
            function (e, o, t, a, r, c, i, s) {
              e(function () {
                i.update().
                  then(function () {
                    r.appAuthCheck(n.name, function () {
                      a.cur_app = n.name, a.cur_title = n.title, o.open(n.name)
                    })
                  }, function () {s.login()})
              })
            }],
        },
      })
    }(n[o]);
    e.otherwise({redirectTo: '/'})
  }]), cloudApp.run([
  '$rootScope',
  '$route',
  '$window',
  '$location',
  'Util',
  function (e, n, o, t, a) {
    e.$on('$routeChangeStart', function (n, o, r) {
      a.isMobile() && t.path().indexOf('radar') < 0 &&
      (e.cur_app = 'radar', t.path('/radar').replace(), n.preventDefault())
    }), e.$on('$routeChangeSuccess', function (t, a, r) {
      e.title = n.current.title, jQuery.support.leadingWhitespace ||
      (o.document.title = n.current.title + ' - 锤子科技')
    })
  }]), services.factory('Loading', function () {
  return {
    start: function () {$('.cloud-view').addClass('blur')},
    done: function () {$('.cloud-view').removeClass('blur')},
  }
}), services.constant('Config', {
  baseUrl: 'index.php?r=',
  headconfig: {headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}},
  route: {
    radar: '/apps/radar/',
    contacts: '/apps/contact/',
    notes: '/apps/note/',
  },
  access: {radar: 3, contacts: 3, notes: 3},
}).
  constant('ACCESS_LEVELS',
    {pub: 1, user: 2, cloud: 3, alpha: 4}), services.factory('Apps', [
  'Loading',
  'Config',
  '$rootScope',
  '$timeout',
  'User',
  '$window',
  function (e, n, o, t, a, r) {
    function c (e) {
      return m[e] || (m[e] = 'cloud_app_' + e), m[e]
    }

    function i (e) {
      if (e.indexOf('?') === -1 && e.indexOf('&') === -1)return {}
      e = e.replace(/&+/g, '&').replace(/^&/, '').replace(/&$/, ''), e.indexOf(
        '?') > -1 && (e = e.split('?')[1])
      var n = '{"' + decodeURI(e).
          replace(/"/g, '\\"').
          replace(/&/g, '","').
          replace(/=/g, '":"') + '"}'
      return JSON.parse(n)
    }

    function s (e) {
      var n = ''
      if ('string' == typeof e && (e = i(e)), 'object' != typeof e)return n
      for (var o in e)n += o + '=' + e[o] + '&';
      return n.replace(/&$/, '')
    }

    function l (e, n, t) {g[e] = 1, o.add_app(e, n, t)}

    function u (e, n) {$('#' + c(e))[0].contentWindow.location.replace(n)}

    function p (e, n) {
      var o = $('.app_wrap iframe').not('#' + e), t = $('#' + e)
      n ? t.addClass('app-show') : t.addClass(
        'app-fadeIn app-cur'), o.removeClass('app-show app-cur'), o.addClass(
        'app-ready'), clearTimeout(v), v = setTimeout(
        function () {o.removeClass('app-fadeIn'), $('.app_wrap i').hide()},
        700), e.indexOf('contacts') >= 0 ? $('.app_wrap .fix-contacts-sidenav').
        addClass('fadeIn') : $('.app_wrap .fix-contacts-sidenav').
        removeClass('fadeIn')
    }

    function d (e) {
      $('#' + e).
        addClass('app-ready').
        removeClass('app-show app-cur app-fadeIn')
    }

    function f (e, n) {
      var o = document.getElementById(e)
      if (!o)return void setTimeout(function () {f(e, n)}, 500)
      var t = null
      return o.contentDocument ? t = o.contentDocument : o.contentWindow &&
        (t = o.contentWindow.document), t && 'complete' == t.readyState
        ? void(n && n())
        : void setTimeout(function () {f(e, n)}, 500)
    }

    var g = {}, m = {}, h = null, v = null, w = []
    return {
      add_loaded_callback: function (e) {w.push(e)},
      on_app_loaded: function (e) {
        var n = c(e)
        setTimeout(function () {
          f(n, function () {
            h == e && p(n, !0), g[e] = 2, w.length > 0 &&
            $.each(w, function (e, o) {o(n)})
          })
        }, 500)
      },
      open: function (o, t) {
        if (a.isLoggedIn()) {
          if (!a.isAuthorized(n.access[o]))return void $location.path('/').
            replace()
          var i = n.route[o]
          if (i) {
            var f = r.location.href
            h ? t || g[o] || d(c(h)) : ($('.app_wrap').
              addClass('fadeIn'), e.start()), f = s(f), f &&
            (i += '#request?' + f), t || (h = o)
            var m = c(o)
            g[o] ? (f && u(o, i), p(m)) : ($('.app_wrap i').show(), l(o, i, m))
          }
        }
      },
      openByHashChange: function (e, n) {
        n = s(n)
        var o = '/' + e + (n ? '?' + n : '')
        $location.url(o)
      },
      close: function () {
        if (e.done(), $('.app_wrap').
            removeClass('fadeIn'), h) {
          var n = c(h)
          $('.app_wrap i').hide(), d(n), h = null
        }
      },
      clearLoaded: function () {g = {}},
      pathIsApp: function (e) {return !!n.route[e]},
    }
  }]), services.factory('Message', [
  '$rootScope',
  'Account',
  'User',
  'BaseInfo',
  '$location',
  'Auth',
  function (e, n, o, t, a, r) {
    var c = function (c) {
      var i = c.originalEvent;
      (window.LocalEnvironment || i.origin == n.config.origin) &&
      ('isLoggedIn' == i.data &&
      (t.update().then(function () {r.check()}), n.close()), 'isLoggedOut' ==
      i.data && (n.setSrc(), n.close(), o.logout(), e.needLogin = !1, a.path(
        '/')), 'dialogClose' == i.data && n.close())
    }
    return {handler: c}
  }]), services.factory('User', [
  '$rootScope',
  '$q',
  '$http',
  '$location',
  'Config',
  'ACCESS_LEVELS',
  'Loading',
  function (e, n, o, t, a, r, c) {
    var i = {role: r.pub}, s = !1, l = a.baseUrl, u = function (n) {
      n.id
        ? $.extend(i, n)
        : i = {role: r.pub}, e.userName = i.name ||
        '', e.userPhoto = i.avatarUrl || '', e.userPhoto.length > 0 &&
      (e.userPhoto = e.userPhoto + '?ver=' +
        (new Date).getTime()), s = !0, e.userInitial = !0, i.role > r.user
        ? e.isLoggedIn = !0
        : e.isLoggedIn = !1, e.$$phase || e.$apply()
    }
    window.user_set = u
    var p = function () {
      var e = n.defer()
      return o.post(l + 'account/login', '', null).
        success(function (n) {
          var o = {}
          if (0 == n.code) {
            var t = n.data
            o.role = t.agree
              ? r.cloud
              : r.user, o.id = t.uid, o.name = t.nickname
              ? t.nickname
              : t.email
                ? t.email
                : t.cellphone, o.avatarUrl = t.avatar_url
          }
          u(o), e.resolve(n)
        }).
        error(function () {e.reject('网络异常!')}), e.promise
    }, d = function () {
      var e = n.defer()
      return o.post(l + 'account/agree', '', null).
        success(function (n) {
          if (0 == n.code) {
            var o = {role: r.cloud, id: i.id}
            u(o), e.resolve(n)
          } else e.reject(n)
        }).
        error(function (n) {e.reject('网络异常！')}), e.promise
    }
    return {
      getInfo: p,
      isInitial: function () {return s},
      isAuthorized: function (e) {return i && i.role >= e},
      set: u,
      isLoggedIn: function () {return !!i.id},
      getUser: function () {return i},
      getId: function () {return i ? i.id : null},
      getName: function () {return i.name || ''},
      getRole: function () {return i.role || null},
      getAvatarUrl: function () {return i.avatarUrl || ''},
      startService: d,
      logout: function () {u({})},
    }
  }]), services.factory('Account', [
  '$window',
  '$timeout',
  function (e, n) {
    var o = {}, t = {
      wrapper: 'body',
      origin: 'https://account.smartisan.com',
      loginUrl: 'https://account.smartisan.com/#/v2/login',
      logoutUrl: 'https://account.smartisan.com/#/logout/embed',
      settingsUrl: 'https://account.smartisan.com/#/settings/embed',
    }, a = window.location.protocol
    'cloud-global.smartisan.com' == window.location.host && (t = {
      wrapper: 'body',
      origin: a + '//account-global.smartisan.com',
      loginUrl: a + '//account-global.smartisan.com/#/v2/login',
      logoutUrl: a + '//account-global.smartisan.com/#/logout/embed',
      settingsUrl: a + '//account-global.smartisan.com/#/settings/embed',
    })
    var r = 0, c = function () {
      if (!o.wrapper) {
        var e = []
        e.push('<div class="iframe-dialog" id="iframe-dialog">'), e.push(
          '<div class="mask"></div>'), e.push(
          '<iframe allowtransparency="true" src="" frameborder="0"></iframe>'), e.push(
          '</div>'), o.wrapper = $(t.wrapper), o.wrapper.append(e.join(''))
      }
      o.mask = $('#iframe-dialog .mask'), o.iframe = $('#iframe-dialog iframe')
    }, i = function (e, t) {
      'undefined' != typeof e && (n.cancel(r), o.mask.removeClass().
        addClass('mask'), o.iframe.removeClass(), e.indexOf('settings') !==
      -1 &&
      (o.mask.addClass('transition'), o.iframe.addClass('transition')), t ||
      o.mask.addClass('open'), o.iframe.addClass('open'))
    }, s = function () {
      if (o.iframe) {
        o.mask.addClass('close'), o.iframe.addClass('close')
        var e = $('#ie-caret-cancel')
        if (!e.length) {
          var e = $(
            '<input id="ie-caret-cancel" style="position:absolute;left:-1000px;" type="text"/>')
          $('body').append(e)
        }
        e[0].select(), r = n(function () {
          o.mask.removeClass().
            addClass('mask'), o.iframe.removeClass()
        }, 300)
      }
    }, l = '', u = function (n) {
      var t = e.location.origin ||
        e.location.protocol + '//' + e.location.hostname
      if (n = 'undefined' == typeof n ? '' : n + '?origin=' +
          encodeURIComponent(t + '/' + e.location.hash) || '', l !== n) {
        l = n
        var a = $('#iframe-dialog').html()
        a = a.replace(/src="[^"]*"/, 'src="' + n + '"'), $('#iframe-dialog').
          html(a), o.mask = $('#iframe-dialog .mask'), o.iframe = $(
          '#iframe-dialog iframe')
      }
    }, p = function (n) {
      n = n || e.location.href, e.location.href = t.loginUrl + '?return_url=' +
        encodeURIComponent(n)
    }, d = function () {u(t.logoutUrl)}, f = function () {i(t.settingsUrl)}
    return c(), {
      config: t,
      close: s,
      login: p,
      logout: d,
      settings: f,
      setSrc: u,
    }
  }]), services.factory('Auth', [
  '$rootScope',
  '$q',
  '$http',
  '$location',
  'ACCESS_LEVELS',
  'Account',
  'Config',
  'User',
  'BaseInfo',
  '$timeout',
  function (e, n, o, t, a, r, c, i, s, l) {
    var u = function () {
      var n = i.getRole()
      n = n || a.pub
      var o = t.$$path
      switch (n) {
        case a.pub:
          s.update().then(function () {u()}, function () {r.login()})
          break
        case a.user:
          t.path('/accept-terms').search('return_app', o).replace()
          break
        case a.cloud:
          e.needAcceptTerms = !1
          var c = t.search().return_app || ''
          c && '' != c ? t.path(c).search('').replace() : t.path('/').
            search('').
            replace()
          break
        case a.alpha:
      }
    }, p = function (e, n, o) {
      var t = c.access[e], a = i.getRole()
      a >= t ? n && n() : u()
    }
    return {check: u, appAuthCheck: p}
  }]), services.factory('CloudAPI', [
  '$timeout',
  '$location',
  'Apps',
  'User',
  'SideNav',
  function (e, n, o, t, a) {
    var r = {
      message: function (e, n) {
        o.open(e, n, !1)
      },
      call: function (e, n) {o.openByHashChange(e, n)},
      close: function () {e(function () {n.path('/').search('')})},
      openSide: function () {a.open()},
      relogin: function (e) {
        t.getInfo().
          then(function () {
            e ? n.path('/login').search('return_app', e) : n.path('/login').
              search('')
          })
      },
    }
    return top.CloudAPI = r, $(window).
      on('blur', function () {$('body').click()}), r
  }]), services.factory('Dock', [
  '$rootScope',
  'User',
  'Apps',
  function (e, n, o) {
    return {
      render: function (n) {
        e.apps_quick = n.data.apps, (!e.apps || e.apps && 0 == e.apps.length) &&
        (e.apps = [], o.clearLoaded())
      },
    }
  }]), services.factory('BaseInfo', [
  '$q',
  'User',
  'Account',
  'Dock',
  'Loading',
  'Util',
  function (e, n, o, t, a, r) {
    var c = function () {
      var c = e.defer()
      return n.getInfo().
        then(function (e) {
          0 == e.code ? c.resolve() : c.reject(), 0 == e.code &&
          (t.render(e), a.done(), r.isMobile() ||
          o.setSrc(o.config.settingsUrl))
        }), c.promise
    }
    return {update: c}
  }]), services.factory('Util', [
  '$rootScope',
  function (e) {
    var n = function () {
      return !!(navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i) ||
      navigator.userAgent.match(/MQQBrowser/i))
    }
    return {isMobile: n}
  }]), services.factory('SideNav', function () {
  var e = 1
  return {
    open: function () {
      e = 2, $('.side-nav').css('left', 0), $('.side-nav-mask').addClass('on')
    },
    close: function () {
      e = 1, $('.side-nav').css('left', -300), $('.side-nav-mask').
        removeClass('on')
    },
    toggle: function () {1 == e ? this.open() : this.close()},
  }
}), controllers.controller('MainCtrl', [
  '$scope',
  '$rootScope',
  '$location',
  '$window',
  'BaseInfo',
  'Account',
  'Auth',
  'Dock',
  'Message',
  'Apps',
  'User',
  'CloudAPI',
  'SideNav',
  function (e, n, o, t, a, r, c, i, s, l, u, p, d) {
    n.apps_quick = [
      {
        name_cn: '联系人',
        name_en: 'contacts',
        active: 1,
      },
      {
        name_cn: '便签',
        name_en: 'notes',
        active: 1,
      },
      {
        name_cn: '查找手机',
        name_en: 'radar',
        active: 1,
      }], n.needLogin = !1, n.userName = '', n.userPhoto = '', n.registerUrl = '', $(
      window).on('message', s.handler), n.add_app = function (
      e, o, t) {
      n.apps.push({name: e, src: o, id: t})
    }, n.change_src = function (e, o) {
      for (var t = 0; t < n.apps.length; t++)if (n.apps[t].name == e) {
        n.apps[t].src = o
        break
      }
    }, n.app_init = function (e) {
      l.on_app_loaded(e)
    }, e.settings = function () {d.close(), r.settings()}, e.logout = function () {d.close(), r.logout()}, e.toggleSide = function () {d.toggle()}, e.closeSide = function () {d.close()}, e.login = function () {r.login()}
    var f = function () {
      var e = 'http://account.smartisan.com/#/register?v=2&return_url=' +
        encodeURIComponent(t.location.href)
      return e
    }
    n.registerUrl = f()
    var g = o.path().replace(/\//g, '')
    e.switchApp = function (e) {
      if ('' == n.userName) {
        var t = 'https://cloud.smartisan.com/#/' + e
        r.login(t)
      } else {
        if (d.close(), n.cur_app == e)return
        n.cur_app = e, o.path('/' + e).search('')
      }
    }, e.backIndex = function (e) {
      d.close(), o.path('/').
        search('')
    }, g.indexOf('login') !== -1 || l.pathIsApp(g) ||
    a.update().then(function () {}), n.openAccount = 0, $('.account-menu').
      click(function (e) {
        e.stopPropagation
          ? e.stopPropagation()
          : e.cancelBubble = !0, n.openAccount = 1, n.$apply()
      }), $('.account-panel-view').
      click(function () {n.openAccount = 0, n.$apply()}), $('body').
      click(function () {n.openAccount = 0, n.$apply()})
  }]), controllers.controller('LoginCtrl', [
  '$rootScope',
  '$scope',
  '$location',
  'User',
  function (e, n, o, t) {
    t.isLoggedIn
      ? o.path('/').replace()
      : n.login()
  }]), controllers.controller('AcceptTermsCtrl', [
  '$rootScope',
  '$scope',
  'User',
  'BaseInfo',
  'Auth',
  function (e, n, o, t, a) {
    e.needAcceptTerms = !0, n.agree = function () {
      o.startService().
        then(function (e) {a.check()})
    }
  }])