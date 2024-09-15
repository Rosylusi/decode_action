//Sun Sep 15 2024 13:54:23 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
$(document).ready(function () {
  var _0xd0538e = "token",
    _0x4f3035 = "str",
    _0x124aef = "abc",
    _0xf6544f = "endNum",
    _0x592288 = "reUrl",
    _0x57c818 = false,
    _0x4ff9f5 = false,
    _0x487103 = "http://jump.h3hkmek50zvv.cn",
    _0x423946 = "阅读文章正在进行中，请继续！",
    _0x122856 = $("#titleText2"),
    _0x1008a7 = $("#timer"),
    _0x77d28a = $("#timer2");
  toastr.options = {
    "closeButton": false,
    "debug": false,
    "positionClass": "toast-center-center",
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "1000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  };
  $("#mainBtn").click(function () {
    _0x57c818 = true;
    $("#myModal").hide();
    _0x1c2a08();
  });
  $("#svgBtn").click(function () {
    _0x57c818 = true;
    $("#myModal").hide();
    _0x1c2a08();
  });
  $("#svgBtn2").click(function () {
    _0x4ff9f5 = true;
    $("#myModal2").hide();
    _0x1c2a08();
  });
  function _0x2888cd() {
    var _0xb8f709 = parseInt(sessionStorage.getItem("ffb")),
      _0xce1cb1 = sessionStorage.getItem("str");
    if (_0xb8f709 == 2) {
      var _0x5d3e42 = _0xb8f709 * 12;
    } else {
      if (_0xb8f709 == 5) var _0x5d3e42 = _0xb8f709 * 12;else {
        if (_0xb8f709 == 7) {
          var _0x5d3e42 = _0xb8f709 * 12;
        } else {
          if (_0xb8f709 == 9) {
            var _0x5d3e42 = _0xb8f709 * 12;
          } else {
            if (_0xb8f709 == 10) {
              var _0x5d3e42 = _0xb8f709 * 12;
            } else {
              if (_0xb8f709 == 12) {
                var _0x5d3e42 = _0xb8f709 * 12;
              } else {
                if (_0xb8f709 == 15) {
                  var _0x5d3e42 = _0xb8f709 * 12;
                } else {
                  if (_0xb8f709 == 16) {
                    var _0x5d3e42 = _0xb8f709 * 12;
                  } else {
                    if (_0xb8f709 == 20) {
                      var _0x5d3e42 = _0xb8f709 * 12;
                    } else {
                      var _0x5d3e42 = _0xb8f709 * 88;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    var _0x33ea8d = _0x5d3e42 + "" + _0xce1cb1,
      _0x481661 = md5(_0x33ea8d);
    return _0x481661;
  }
  function _0x1c2a08() {
    typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function" && WeixinJSBridge.call("closeWindow");
  }
  function _0x5a5fd5(_0x4cbf88, _0x24eb6d, _0x1d61cd) {
    $("#finishNum").text(_0x4cbf88);
    $("#taskText").text(_0x24eb6d);
    _0x122856.text(_0x1d61cd);
    $("#myModal2").show();
    _0x56b228();
  }
  function _0x497956(_0x49db5f) {
    var _0x3cf061 = new RegExp("(^|&)" + _0x49db5f + "=([^&]*)(&|$)"),
      _0x57bc93 = window.location.search.substr(1).match(_0x3cf061);
    if (_0x57bc93 != null) return unescape(_0x57bc93[2]);
    return null;
  }
  function _0x531981() {
    var _0x3de300 = 5,
      _0x5782ea = setInterval(function () {
        _0x1008a7.text(_0x3de300);
        --_0x3de300 < 0 && (clearInterval(_0x5782ea), $("#finishNum").text("获取中"), _0x57c818 == false && ($("#myModal").hide(), _0x1c2a08()));
      }, 1000);
  }
  function _0x56b228() {
    var _0xc7534f = 3,
      _0x24c74d = setInterval(function () {
        var _0x48d5a6 = parseInt(_0xc7534f % 60, 10);
        _0x48d5a6 = _0x48d5a6 < 3 ? _0x48d5a6 : _0x48d5a6;
        _0x77d28a.text(_0x48d5a6);
        if (--_0xc7534f < 0) {
          clearInterval(_0x24c74d);
          $("#finishNum").text("获取中");
          if (_0x4ff9f5 == false) {
            $("#myModal2").hide();
            _0x1c2a08();
          }
        }
      }, 1000);
  }
  function _0x24aa98() {
    console.info("pushHistory");
    var _0x26dab7 = "#" + new Date().getTime();
    history.pushState(history.length + 1, "title", _0x26dab7);
  }
  function _0x269c83() {
    var _0xd3dac = sessionStorage.getItem(_0xd0538e);
    var _0x28ef07 = sessionStorage.getItem(_0x124aef);
    var _0x1fe95a = sessionStorage.getItem(_0x4f3035);
    var _0xf92f75 = _0x2888cd();
    _0xd3dac = _0xd3dac + "&startNumber=" + _0x28ef07 + "&str=" + _0x1fe95a + "&keys=" + _0xf92f75 + "&ds=";
    var _0x3410e4 = "/index/intlc?token=" + _0xd3dac;
    return _0x3410e4;
  }
  function _0x3d602e() {
    var _0x29161b = _0x269c83();
    $.ajax({
      "type": "GET",
      "dataType": "jsonp",
      "url": _0x487103 + _0x29161b,
      "timeout": 10000,
      "success": function (_0x18a2e7) {
        console.log(_0x18a2e7);
        _0x58a024(_0x18a2e7);
      },
      "error": function (_0x2c05fa, _0x597c61) {
        _0x122856.text("请求超时了！返回重试");
        $("#myModal2").show();
        _0x56b228();
      }
    });
  }
  function _0x58a024(_0x3b6e21) {
    if (_0x3b6e21.code == 200) {
      if (_0x3b6e21.data.code == 130) {
        _0x122856.text("账号冻结！");
        $("#myModal2").show();
        _0x56b228();
        return;
      }
      if (_0x3b6e21.data.code == 113) {
        _0x122856.text("文章准备失败！请返回重试");
        $("#myModal2").show();
        _0x56b228();
        return;
      }
      if (_0x3b6e21.data.code == 112) {
        _0x122856.text("任务失效了！请返回");
        $("#myModal2").show();
        _0x56b228();
        return;
      }
      if (_0x3b6e21.data.code == 111) {
        _0x122856.text("登录失效了！请返回");
        $("#myModal2").show();
        _0x56b228();
        return;
      }
      if (_0x3b6e21.data.code == 110) {
        _0x122856.text("暂无任务可做了！请返回,整点再来");
        $("#myModal2").show();
        _0x56b228();
        return;
      }
      _0x3a90c3(_0x3b6e21);
    } else _0x122856.text("访问出错了，请返回重试。"), $("#myModal2").show(), _0x56b228();
  }
  function _0x3a90c3(_0x4b024e) {
    if (_0x4b024e.data.code == 501) {
      _0x122856.text("非法请求！请返回");
      $("#myModal2").show();
      _0x56b228();
      return;
    }
    if (_0x4b024e.data.code == 150) {
      $("#myModal").show();
      _0x531981();
      return;
    }
    if (_0x4b024e.data.code == 300) {
      _0x5a5fd5("已完成", "任务已完成，请返回。", "任务经完成！请返回");
      return;
    }
    _0x4b024e.data.code == 200 && (sessionStorage.setItem(_0x124aef, _0x4b024e.data.startNum), sessionStorage.setItem(_0xf6544f, _0x4b024e.data.endNum), sessionStorage.setItem("ffb", _0x4b024e.data.ffb), _0x10335a(_0x4b024e.data.url));
  }
  function _0x10335a(_0xbf2d06) {
    sessionStorage.setItem(_0x592288, _0xbf2d06);
    setTimeout(function () {
      var _0x186929 = document.createElement("a");
      _0x186929.href = _0xbf2d06;
      _0x186929.click();
      sessionStorage.setItem("clickTime", new Date().getTime());
    }, 300);
  }
  function _0x27ca0a() {
    var _0x394bcd = sessionStorage.getItem(_0xd0538e);
    var _0x1ab3e0 = sessionStorage.getItem(_0x4f3035);
    _0x394bcd = _0x394bcd + "&str=" + _0x1ab3e0;
    var _0x13a4b8 = "/index/vv?token=" + _0x394bcd;
    return _0x13a4b8;
  }
  function _0x5bb83b() {
    var _0x24466b = _0x27ca0a();
    $.ajax({
      "type": "GET",
      "dataType": "jsonp",
      "url": _0x487103 + _0x24466b,
      "timeout": 10000,
      "success": function (_0x4a71aa) {
        console.log(_0x4a71aa);
        if (_0x4a71aa.code == 200) _0x4a71aa.data.code == 200 && (sessionStorage.setItem("ffb", _0x4a71aa.data.ffb), _0x3d602e());else {
          _0x122856.text("访问出错了，请返回重试。");
          $("#myModal2").show();
          _0x56b228();
        }
      },
      "error": function (_0x429c46, _0x370a53) {
        _0x122856.text("请求超时了！返回重试");
        $("#myModal2").show();
        _0x56b228();
      }
    });
  }
  function _0x575821(_0x25955) {
    console.log(_0x25955);
  }
  window.onpopstate = function () {
    console.info("onpopstate");
  };
  function _0x5d8cae() {
    WeixinJSBridge.call("hideOptionMenu");
  }
  function _0x4dac97() {
    if (typeof WeixinJSBridge == "undefined") {
      if (document.addEventListener) {
        document.addEventListener("WeixinJSBridgeReady", _0x5d8cae, false);
      } else document.attachEvent && (document.attachEvent("WeixinJSBridgeReady", _0x5d8cae), document.attachEvent("onWeixinJSBridgeReady", _0x5d8cae));
    } else {
      _0x5d8cae();
    }
  }
  function _0x9c43ea() {
    sessionStorage.setItem(_0x124aef, "0");
    sessionStorage.setItem(_0xd0538e, _0x497956(_0xd0538e));
    sessionStorage.setItem(_0x4f3035, _0x497956(_0x4f3035));
    _0x5bb83b();
    var _0x5c3611 = 761762 + _0x47b327;
    sessionStorage.setItem("person", _0x5c3611);
    $("#person").text(_0x5c3611);
  }
  var _0x47b327 = Math.floor(Math.random() * 1000) + 1;
  function _0x314582() {
    _0x4dac97();
    var _0x1ca073 = navigator.userAgent.toLowerCase(),
      _0x2646cb = _0x1ca073.indexOf("micromessenger") != -1;
    if (!_0x2646cb) {
      var _0x7e29ed = location.href.replace("jump.html", "wx.html");
      return window.location.href = _0x7e29ed, true;
    }
    var _0x240723 = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (!_0x240723) try {
      tbsJs.onReady("{useCachedApi : \"true\"}", function () {});
    } catch (_0x30ef1b) {}
    window.onpageshow = function () {
      if (event.persisted || window.performance && window.performance.navigation.type === 2) {
        var _0x1870ff = sessionStorage.getItem(_0x124aef),
          _0x45e89f = parseInt(0 + sessionStorage.getItem("person")) + 1;
        sessionStorage.setItem("person", _0x45e89f);
        $("#person").text(_0x45e89f);
        _0x1870ff == 0 ? $("#finishNum").text("获取中，耐心等待...") : $("#finishNum").text("成功阅读" + _0x1870ff + "篇,继续阅读下一篇");
        var _0x4ddfaa = sessionStorage.getItem("clickTime");
        if (_0x4ddfaa && new Date().getTime() - _0x4ddfaa < 8000) {
          _0x423946 = "阅读未满5秒无效！请继续阅读";
          toastr.info(_0x423946);
          setTimeout(function () {
            var _0x1596e4 = sessionStorage.getItem(_0x592288);
            _0x10335a(_0x1596e4);
          }, 500);
        } else _0x423946 = "阅读文章正在进行中，请继续！", _0x3d602e();
      } else _0x9c43ea();
    };
  }
  _0x314582();
});