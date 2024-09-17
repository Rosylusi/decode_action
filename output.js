//Tue Sep 17 2024 13:43:19 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
$(document).ready(function () {
  var _0x240a49 = "token",
    _0x534235 = "str",
    _0x3754a5 = "abc",
    _0x154bdd = "endNum",
    _0x14090e = "reUrl",
    _0x1950db = false,
    _0x55a3a9 = false,
    _0x3c080e = "https://weixin.h3hkmek50zvv.cn",
    _0xab2864 = "阅读文章正在进行中，请继续！",
    _0xf41603 = $("#titleText2"),
    _0x1d60c6 = $("#timer"),
    _0x117e8a = $("#timer2");
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
    _0x1950db = true;
    $("#myModal").hide();
    _0x303c74();
  });
  $("#svgBtn").click(function () {
    _0x1950db = true;
    $("#myModal").hide();
    _0x303c74();
  });
  $("#svgBtn2").click(function () {
    _0x55a3a9 = true;
    $("#myModal2").hide();
    _0x303c74();
  });
  function _0x14a83d() {
    var _0x4524b4 = parseInt(sessionStorage.getItem("ffb")),
      _0x3e06c6 = sessionStorage.getItem("str");
    if (_0x4524b4 == 2) {
      var _0x301523 = _0x4524b4 * 12;
    } else {
      if (_0x4524b4 == 5) {
        var _0x301523 = _0x4524b4 * 12;
      } else {
        if (_0x4524b4 == 7) var _0x301523 = _0x4524b4 * 12;else {
          if (_0x4524b4 == 9) {
            var _0x301523 = _0x4524b4 * 12;
          } else {
            if (_0x4524b4 == 10) {
              var _0x301523 = _0x4524b4 * 12;
            } else {
              if (_0x4524b4 == 12) {
                var _0x301523 = _0x4524b4 * 12;
              } else {
                if (_0x4524b4 == 15) {
                  var _0x301523 = _0x4524b4 * 12;
                } else {
                  if (_0x4524b4 == 16) var _0x301523 = _0x4524b4 * 12;else {
                    if (_0x4524b4 == 20) var _0x301523 = _0x4524b4 * 12;else {
                      var _0x301523 = _0x4524b4 * 88;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    var _0x599eee = _0x301523 + "" + _0x3e06c6,
      _0x2eef4c = md5(_0x599eee);
    return _0x2eef4c;
  }
  function _0x303c74() {
    if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
      WeixinJSBridge.call("closeWindow");
    }
  }
  function _0x5045d6(_0x5944cd, _0x13c169, _0x4e71b9) {
    $("#finishNum").text(_0x5944cd);
    $("#taskText").text(_0x13c169);
    _0xf41603.text(_0x4e71b9);
    $("#myModal2").show();
    _0x1b1424();
  }
  function _0x5358f6(_0x359175) {
    var _0x4acf7b = new RegExp("(^|&)" + _0x359175 + "=([^&]*)(&|$)"),
      _0x1215a5 = window.location.search.substr(1).match(_0x4acf7b);
    if (_0x1215a5 != null) return unescape(_0x1215a5[2]);
    return null;
  }
  function _0x47a999() {
    var _0x75372b = 5,
      _0x563df3 = setInterval(function () {
        _0x1d60c6.text(_0x75372b);
        --_0x75372b < 0 && (clearInterval(_0x563df3), $("#finishNum").text("获取中"), _0x1950db == false && ($("#myModal").hide(), _0x303c74()));
      }, 1000);
  }
  function _0x1b1424() {
    var _0x4538f1 = 3,
      _0x4abede = setInterval(function () {
        var _0x208052 = parseInt(_0x4538f1 % 60, 10);
        _0x208052 = _0x208052 < 3 ? _0x208052 : _0x208052;
        _0x117e8a.text(_0x208052);
        if (--_0x4538f1 < 0) {
          clearInterval(_0x4abede);
          $("#finishNum").text("获取中");
          _0x55a3a9 == false && ($("#myModal2").hide(), _0x303c74());
        }
      }, 1000);
  }
  function _0x3c1e16() {
    console.info("pushHistory");
    var _0x23a9ec = "#" + new Date().getTime();
    history.pushState(history.length + 1, "title", _0x23a9ec);
  }
  function _0x6f2bf9() {
    var _0xcfe9ed = sessionStorage.getItem(_0x240a49);
    var _0x510422 = sessionStorage.getItem(_0x3754a5);
    var _0x384da1 = sessionStorage.getItem(_0x534235);
    var _0x3967a0 = _0x14a83d();
    _0xcfe9ed = _0xcfe9ed + "&startNumber=" + _0x510422 + "&str=" + _0x384da1 + "&keys=" + _0x3967a0;
    var _0x4297cc = "/index/inspec?token=" + _0xcfe9ed;
    return _0x4297cc;
  }
  function _0x5f37d8() {
    var _0x176a78 = _0x6f2bf9();
    $.ajax({
      "type": "GET",
      "dataType": "jsonp",
      "url": _0x3c080e + _0x176a78,
      "timeout": 10000,
      "success": function (_0x21e14c) {
        console.log(_0x21e14c);
        _0x341d7b(_0x21e14c);
      },
      "error": function (_0xddcebe, _0x2057b1) {
        _0xf41603.text("è¯·æ±è¶æ¶äºï¼è¿åéè¯");
        $("#myModal2").show();
        _0x1b1424();
      }
    });
  }
  function _0x341d7b(_0x27bdaa) {
    if (_0x27bdaa.code == 200) {
      if (_0x27bdaa.data.code == 130) {
        _0xf41603.text("账号冻结！");
        $("#myModal2").show();
        _0x1b1424();
        return;
      }
      if (_0x27bdaa.data.code == 113) {
        _0xf41603.text("文章准备失败！请返回重试");
        $("#myModal2").show();
        _0x1b1424();
        return;
      }
      if (_0x27bdaa.data.code == 112) {
        _0xf41603.text("任务失效了！请返回");
        $("#myModal2").show();
        _0x1b1424();
        return;
      }
      if (_0x27bdaa.data.code == 111) {
        _0xf41603.text("登录失效了！请返回");
        $("#myModal2").show();
        _0x1b1424();
        return;
      }
      if (_0x27bdaa.data.code == 110) {
        _0xf41603.text("暂无任务可做了！请返回,整点再来");
        $("#myModal2").show();
        _0x1b1424();
        return;
      }
      _0x4b4d5d(_0x27bdaa);
    } else _0xf41603.text("访问出错了，请返回重试。"), $("#myModal2").show(), _0x1b1424();
  }
  function _0x4b4d5d(_0x14571b) {
    if (_0x14571b.data.code == 501) {
      _0xf41603.text("非法请求！请返回");
      $("#myModal2").show();
      _0x1b1424();
      return;
    }
    if (_0x14571b.data.code == 150) {
      $("#myModal").show();
      _0x47a999();
      return;
    }
    if (_0x14571b.data.code == 300) {
      _0x5045d6("å·²å®æ", "任务已完成，请返回。", "任务经完成！请返回");
      return;
    }
    if (_0x14571b.data.code == 200) {
      sessionStorage.setItem(_0x3754a5, _0x14571b.data.startNum);
      sessionStorage.setItem(_0x154bdd, _0x14571b.data.endNum);
      sessionStorage.setItem("ffb", _0x14571b.data.ffb);
      _0xae6ee(_0x14571b.data.url);
    }
  }
  function _0xae6ee(_0x5a5f8e) {
    sessionStorage.setItem(_0x14090e, _0x5a5f8e);
    setTimeout(function () {
      var _0x562051 = document.createElement("a");
      _0x562051.href = _0x5a5f8e;
      _0x562051.click();
      sessionStorage.setItem("clickTime", new Date().getTime());
    }, 300);
  }
  function _0x8bb56() {
    var _0x47bd14 = sessionStorage.getItem(_0x240a49),
      _0x4fb51f = sessionStorage.getItem(_0x534235);
    _0x47bd14 = _0x47bd14 + "&str=" + _0x4fb51f;
    var _0x11d4f7 = "/index/ascent?token=" + _0x47bd14;
    return _0x11d4f7;
  }
  function _0x45c880() {
    var _0x246a14 = _0x8bb56();
    $.ajax({
      "type": "GET",
      "dataType": "jsonp",
      "url": _0x3c080e + _0x246a14,
      "timeout": 10000,
      "success": function (_0xed6aba) {
        console.log(_0xed6aba);
        if (_0xed6aba.code == 200) {
          if (_0xed6aba.data.code == 200) {
            sessionStorage.setItem("ffb", _0xed6aba.data.ffb);
            _0x5f37d8();
          }
        } else _0xf41603.text("访问出错了，请返回重试。"), $("#myModal2").show(), _0x1b1424();
      },
      "error": function (_0x2659c6, _0x4ad5a6) {
        _0xf41603.text("è¯·æ±è¶æ¶äºï¼è¿åéè¯");
        $("#myModal2").show();
        _0x1b1424();
      }
    });
  }
  function _0x527729(_0x330b12) {
    console.log(_0x330b12);
  }
  window.onpopstate = function () {
    console.info("onpopstate");
  };
  function _0x1272b3() {
    WeixinJSBridge.call("hideOptionMenu");
  }
  function _0x57fdd0() {
    if (typeof WeixinJSBridge == "undefined") {
      if (document.addEventListener) document.addEventListener("WeixinJSBridgeReady", _0x1272b3, false);else {
        if (document.attachEvent) {
          document.attachEvent("WeixinJSBridgeReady", _0x1272b3);
          document.attachEvent("onWeixinJSBridgeReady", _0x1272b3);
        }
      }
    } else _0x1272b3();
  }
  function _0x40c65e() {
    sessionStorage.setItem(_0x3754a5, "0");
    sessionStorage.setItem(_0x240a49, _0x5358f6(_0x240a49));
    sessionStorage.setItem(_0x534235, _0x5358f6(_0x534235));
    _0x45c880();
    var _0x42f7dc = 761762 + _0x23c367;
    sessionStorage.setItem("person", _0x42f7dc);
    $("#person").text(_0x42f7dc);
  }
  var _0x23c367 = Math.floor(Math.random() * 1000) + 1;
  function _0x3e2596() {
    _0x57fdd0();
    var _0x197eac = navigator.userAgent.toLowerCase(),
      _0x50f204 = _0x197eac.indexOf("micromessenger") != -1;
    if (!_0x50f204) {
      var _0x2c8b84 = location.href.replace("article.html", "wx.html");
      return window.location.href = _0x2c8b84, true;
    }
    var _0x3d621a = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (!_0x3d621a) {
      try {
        tbsJs.onReady("{useCachedApi : \"true\"}", function () {});
      } catch (_0x53878c) {}
    }
    window.onpageshow = function () {
      if (event.persisted || window.performance && window.performance.navigation.type === 2) {
        var _0xd62bdd = sessionStorage.getItem(_0x3754a5),
          _0x4375a0 = parseInt(0 + sessionStorage.getItem("person")) + 1;
        sessionStorage.setItem("person", _0x4375a0);
        $("#person").text(_0x4375a0);
        _0xd62bdd == 0 ? $("#finishNum").text("è·åä¸­ï¼èå¿ç­å¾...") : $("#finishNum").text("成功阅读" + _0xd62bdd + "篇,继续阅读下一篇");
        var _0xf10d9 = sessionStorage.getItem("clickTime");
        _0xf10d9 && new Date().getTime() - _0xf10d9 < 8000 ? (_0xab2864 = "阅读未满5秒无效！请继续阅读", toastr.info(_0xab2864), setTimeout(function () {
          var _0x52c8c7 = sessionStorage.getItem(_0x14090e);
          _0xae6ee(_0x52c8c7);
        }, 500)) : (_0xab2864 = "阅读文章正在进行中，请继续！", _0x5f37d8());
      } else {
        _0x40c65e();
      }
    };
  }
  _0x3e2596();
});