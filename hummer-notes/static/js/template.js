angular.module('templates', []).
  run([
    '$templateCache',
    function (a) {
      a.put('view/html/accept-terms.html',
        '<div class=dialog><div class=title><h1><img src=//static.smartisanos.cn/cloud/index/img/cloud-logo_70e2453647.png alt=欢喜云服务></h1><h2 class=warning><img src=//static.smartisanos.cn/cloud/index/img/text-warn_5e9dce4791.png alt=个人隐私安全警告说明 data-at2x></h2></div><div class=content><form class=login-form name=form novalidate autocomplete=off><div class=agreement><p>锤子科技（北京）有限公司是一家注册于中国大陆地区的公司，按照中华人民共和国的相关法律法规，您通过欢喜云服务系统保存在锤子科技服务器上的数据和信息，有可能会应中国公安机关或其他有关部门的要求对其公开，除此类特殊情况外，锤子科技承诺不会向任何个人和团体泄露您的数据和信息。</p><p>开启欢喜云服务意味着您已理解并接受上述条款。</p></div><div class=btn-wrapper><div class="btn btn-primary" ng-click=agree()><a><span class=start>开启欢喜云服务</span></a></div></div></form></div></div>')
    }])