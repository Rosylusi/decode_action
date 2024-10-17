//Thu Oct 17 2024 15:14:01 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function () {})();
$(document).ready(function () {
  var _0x2dc369 = "token",
    _0x49a807 = "str",
    _0x37061d = "hostUrl",
    _0x426821 = "abc",
    _0x473b3b = "endNum",
    _0x571c75 = "reUrl",
    _0x52c38c = "uvkey",
    _0x46c5a5 = "SllNTDIwMjQwOTMw",
    _0x139cc1 = "1AE9F575F4CA622AC081CC530B0F3FD4",
    _0x485f22 = false,
    _0x4d8586 = false,
    _0x232926 = "阅读文章正在进行中，请继续！",
    _0x50abd6 = "https://jylmapi.plsvcrthcs.top",
    _0x11cc09 = _0x4dffed(_0x37061d),
    _0x1500bf = _0x4dffed(_0x52c38c);
  null !== _0x11cc09 && undefined !== _0x11cc09 && false !== _0x11cc09 && "" !== _0x11cc09 && _0x11cc09 !== "localhost" && (_0x50abd6 = decodeURIComponent(_0x11cc09));
  null !== _0x1500bf && undefined !== _0x1500bf && false !== _0x1500bf && "" !== _0x1500bf && (_0x139cc1 = _0x1500bf);
  sessionStorage.setItem(_0x37061d, _0x50abd6);
  var _0x4aabc8 = $("#titleText"),
    _0x1262f4 = $("#titleText2"),
    _0x4f1463 = $("#timer"),
    _0x33b1ef = $("#timer2");
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
    _0x485f22 = true;
    $("#myModal").hide();
    _0x57e146();
  });
  $("#svgBtn").click(function () {
    _0x485f22 = true;
    $("#myModal").hide();
    _0x57e146();
  });
  $("#svgBtn2").click(function () {
    _0x4d8586 = true;
    $("#myModal2").hide();
    _0x57e146();
  });
  var _0x18fe27 = atob(_0x46c5a5);
  function _0x5116b6() {
    var _0x16a24f = 0,
      _0x3a048d = 0,
      _0x543b11 = _0x139cc1,
      _0x27e524 = parseInt(sessionStorage.getItem("ffb")),
      _0x432fe7 = sessionStorage.getItem("str");
    if (_0x27e524 == 2 || _0x27e524 == 5 || _0x27e524 == 7 || _0x27e524 == 9 || _0x27e524 == 11) _0x16a24f = _0x27e524 * 12, _0x3a048d = _0x27e524 % 5;else _0x27e524 == 3 || _0x27e524 == 6 || _0x27e524 == 12 || _0x27e524 == 15 || _0x27e524 == 18 ? (_0x16a24f = _0x27e524 * 15, _0x3a048d = _0x27e524 % 8) : (_0x16a24f = _0x27e524 * 88, _0x3a048d = _0x27e524 % 10);
    var _0x318470 = md5("_" + _0x16a24f + "_" + _0x432fe7 + "&MYCODE=" + _0x18fe27),
      _0x34aab2 = md5(_0x318470 + "_RAND_" + _0x3a048d + "&PRIKEY=" + _0x543b11);
    return _0x34aab2;
  }
  function _0x57e146() {
    {
      if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
        WeixinJSBridge.call("closeWindow");
      }
    }
  }
  function _0x142a15(_0x572e86, _0xc84665, _0x18bce0) {
    $("#finishNum").text(_0x572e86);
    $("#taskText").text(_0xc84665);
    _0x1262f4.text(_0x18bce0);
    $("#myModal2").show();
    _0x510ef3();
  }
  function _0x4dffed(_0x5eeff2) {
    {
      var _0x2040e4 = new RegExp("(^|&)" + _0x5eeff2 + "=([^&]*)(&|$)"),
        _0xccf8aa = window.location.search.substr(1).match(_0x2040e4);
      if (_0xccf8aa != null) return unescape(_0xccf8aa[2]);
      return null;
    }
  }
  function _0xe4a370() {
    var _0x360c4a = 5,
      _0x118525 = setInterval(function () {
        _0x4f1463.text(_0x360c4a);
        --_0x360c4a < 0 && (clearInterval(_0x118525), $("#finishNum").text("获取中"), _0x485f22 == false && ($("#myModal").hide(), _0x57e146()));
      }, 1000);
  }
  function _0x510ef3() {
    var _0x2c5714 = 3,
      _0x56762a = setInterval(function () {
        var _0x421ba4 = parseInt(_0x2c5714 % 60, 10);
        _0x421ba4 = _0x421ba4 < 3 ? _0x421ba4 : _0x421ba4;
        _0x33b1ef.text(_0x421ba4);
        --_0x2c5714 < 0 && (clearInterval(_0x56762a), $("#finishNum").text("获取中"), _0x4d8586 == false && ($("#myModal2").hide(), _0x57e146()));
      }, 1000);
  }
  function _0x37855a() {
    console.info("pushHistory");
    var _0x5361a2 = "#" + new Date().getTime();
    history.pushState(history.length + 1, "title", _0x5361a2);
  }
  function _0x2a10bd() {
    var _0x5dfde0 = sessionStorage.getItem(_0x2dc369);
    var _0x195aaf = sessionStorage.getItem(_0x426821);
    var _0x58c875 = sessionStorage.getItem(_0x49a807);
    var _0x1c6104 = sessionStorage.getItem("ffb");
    var _0x956527 = _0x5116b6();
    _0x5dfde0 = _0x5dfde0 + "&startNumber=" + _0x195aaf + "&str=" + _0x58c875 + "&keys=" + _0x956527;
    var _0x583f61 = "/index/doReadInfo?token=" + _0x5dfde0;
    return _0x583f61;
  }
  function _0x4d118a() {
    var _0xec063a = _0x2a10bd(),
      _0x47a9e8 = sessionStorage.getItem("ffb"),
      _0x3218bb = parseInt(_0x47a9e8) + 2000,
      _0xe56911 = "&unionId=" + _0x3218bb;
    $.ajax({
      "type": "GET",
      "dataType": "jsonp",
      "url": _0x50abd6 + _0xec063a + _0xe56911,
      "timeout": 10000,
      "success": function (_0x35aa6b) {
        console.log("【getTask】获取文章链接结果返回：");
        console.log(_0x35aa6b);
        _0x43177c(_0x35aa6b);
      },
      "error": function (_0xa3a72, _0x12da60) {
        _0x1262f4.text("请求超时了！返回重试");
        $("#myModal2").show();
        _0x510ef3();
      }
    });
  }
  function _0x43177c(_0x4bfaf2) {
    if (_0x4bfaf2.code == 200) {
      {
        if (_0x4bfaf2.data.code == 130) {
          {
            _0x1262f4.text("账号冻结！");
            $("#myModal2").show();
            _0x510ef3();
            return;
          }
        }
        if (_0x4bfaf2.data.code == 113) {
          _0x1262f4.text("文章准备失败！请返回重试");
          $("#myModal2").show();
          _0x510ef3();
          return;
        }
        if (_0x4bfaf2.data.code == 112) {
          {
            _0x1262f4.text("任务失效了！请返回");
            $("#myModal2").show();
            _0x510ef3();
            return;
          }
        }
        if (_0x4bfaf2.data.code == 111) {
          _0x1262f4.text("登录失效了！请返回");
          $("#myModal2").show();
          _0x510ef3();
          return;
        }
        if (_0x4bfaf2.data.code == 110) {
          _0x1262f4.text("暂无任务可做了！请返回,整点再来");
          $("#myModal2").show();
          _0x510ef3();
          return;
        }
        if (_0x4bfaf2.data.code == 0) {
          {
            _0x1262f4.text("获取数据失败！请返回重试");
            $("#myModal2").show();
            _0x510ef3();
            return;
          }
        }
        console.log("[数据验证通过]");
        console.log(_0x4bfaf2);
        _0x49d3f1(_0x4bfaf2);
      }
    } else _0x1262f4.text("访问出错了，请返回重试。"), $("#myModal2").show(), _0x510ef3();
  }
  function _0x49d3f1(_0xd664c9) {
    if (_0xd664c9.data.code == 501) {
      {
        _0x1262f4.text("非法请求！请返回");
        $("#myModal2").show();
        _0x510ef3();
        return;
      }
    }
    if (_0xd664c9.data.code == 150) {
      $("#myModal").show();
      _0xe4a370();
      return;
    }
    if (_0xd664c9.data.code == 300) {
      _0x142a15("已完成", "任务已完成，请返回。", "任务经完成！请返回");
      return;
    }
    if (_0xd664c9.data.code == 200) {
      sessionStorage.setItem(_0x426821, _0xd664c9.data.startNum);
      sessionStorage.setItem(_0x473b3b, _0xd664c9.data.endNum);
      sessionStorage.setItem("ffb", _0xd664c9.data.ffb);
      null !== _0xd664c9.data.startNum && _0xd664c9.data.startNum > 0 && $("#finishNum").text("成功阅读" + _0xd664c9.data.startNum + "篇,继续阅读...");
      _0x317a04(_0xd664c9.data.url);
    }
  }
  function _0x317a04(_0x4256e0) {
    sessionStorage.setItem(_0x571c75, _0x4256e0);
    console.log("调试代码：", _0x4256e0);
    setTimeout(function () {
      var _0x2cc712 = new Date().getTime();
      var _0xf894bb = document.createElement("a");
      _0xf894bb.href = _0x4256e0;
      _0xf894bb.click();
      sessionStorage.setItem("clickTime", new Date().getTime());
    }, 500);
  }
  function _0x41cf88() {
    {
      var _0x49d56c = sessionStorage.getItem(_0x2dc369);
      var _0x1f8aae = sessionStorage.getItem(_0x49a807);
      _0x49d56c = _0x49d56c + "&str=" + _0x1f8aae;
      var _0x25cafe = "/index/getModeInfo?token=" + _0x49d56c;
      return _0x25cafe;
    }
  }
  function _0x5dd14b() {
    var _0x5260fa = _0x41cf88();
    console.log("【PageShow】Abc请求接口Api:" + _0x5260fa);
    $.ajax({
      "type": "GET",
      "dataType": "jsonp",
      "url": _0x50abd6 + _0x5260fa,
      "timeout": 10000,
      "success": function (_0x20dd7a) {
        console.log("初始化页面：", _0x20dd7a);
        if (_0x20dd7a.code == 200) {
          _0x20dd7a.data.code == 200 ? (sessionStorage.setItem("ffb", _0x20dd7a.data.ffb), _0x4d118a()) : $("#finishNum").html("<font color=red>获取数据失败!</font>");
        } else _0x1262f4.text("访问出错了，请返回重试。"), $("#myModal2").show(), _0x510ef3();
      },
      "error": function (_0x56bc03, _0x3e4903) {
        _0x1262f4.text("请求超时了！返回重试");
        $("#myModal2").show();
        _0x510ef3();
      }
    });
  }
  function _0x9f1876(_0x3120bc) {
    console.log(_0x3120bc);
  }
  window.onpopstate = function () {
    console.info("onpopstate");
  };
  function _0x21822c() {
    WeixinJSBridge.call("hideOptionMenu");
  }
  function _0x53e7c5() {
    {
      if (typeof WeixinJSBridge == "undefined") {
        if (document.addEventListener) document.addEventListener("WeixinJSBridgeReady", _0x21822c, false);else document.attachEvent && (document.attachEvent("WeixinJSBridgeReady", _0x21822c), document.attachEvent("onWeixinJSBridgeReady", _0x21822c));
      } else _0x21822c();
    }
  }
  function _0x40df63() {
    {
      var _0xc8b730 = 761760;
      var _0x18784f = sessionStorage.getItem("person");
      var _0x2ee580 = _0x4dffed(_0x2dc369);
      var _0x2dd76a = _0x4dffed(_0x49a807);
      sessionStorage.setItem(_0x2dc369, _0x2ee580);
      sessionStorage.setItem(_0x49a807, _0x2dd76a);
      sessionStorage.setItem(_0x426821, "0");
      null !== _0x18784f && undefined !== _0x18784f && parseInt(_0x18784f) > 0 && (_0xc8b730 = parseInt(_0x18784f) + _0xa2d829);
      sessionStorage.setItem("person", _0xc8b730);
      $("#person").text(_0xc8b730);
      _0x5dd14b();
    }
  }
  var _0xa2d829 = Math.floor(Math.random() * 10) + 1;
  function _0x23af23() {
    {
      _0x53e7c5();
      var _0x1c6c7a = navigator.userAgent.toLowerCase(),
        _0x2e69e5 = _0x1c6c7a.indexOf("micromessenger") != -1;
      if (!_0x2e69e5) var _0x369630 = document.createElement("a"),
        _0x306181 = location.href.replace("article.html", "wx.html");
      var _0x5f4126 = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      if (!_0x5f4126) {
        try {
          tbsJs.onReady("{useCachedApi : \"true\"}", function () {});
        } catch (_0x18bc28) {}
      }
      window.onpageshow = function () {
        if (event.persisted || window.performance && window.performance.navigation.type === 2) {
          var _0x44725f = sessionStorage.getItem(_0x426821),
            _0xb70a99 = parseInt(0 + sessionStorage.getItem("person")) + 1;
          sessionStorage.setItem("person", _0xb70a99);
          $("#person").text(_0xb70a99);
          console.log("【PageShow】初始化领取用户数：" + _0xb70a99);
          if (_0x44725f == 0) {
            $("#finishNum").text("获取中，耐心等待...");
          } else $("#finishNum").text("成功阅读" + _0x44725f + "篇,继续阅读下一篇");
          var _0x41f702 = sessionStorage.getItem("clickTime");
          _0x41f702 && new Date().getTime() - _0x41f702 < 5000 ? (_0x232926 = "阅读未满5秒无效！请继续阅读", toastr.info(_0x232926), setTimeout(function () {
            {
              var _0x4609a9 = sessionStorage.getItem(_0x571c75);
              _0x317a04(_0x4609a9);
            }
          }, 800)) : (_0x232926 = "阅读文章正在进行中，请继续！", _0x4d118a());
        } else console.log("【PageShow】initDate--[Begin]"), _0x40df63();
      };
    }
  }
  _0x23af23();
});