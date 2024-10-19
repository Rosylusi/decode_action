//Sat Oct 19 2024 06:07:59 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function () {})();
$(document).ready(function () {
  var _0x1a2900 = "token",
    _0x5a5d81 = "PrivatKey",
    _0x1e8a49 = "str",
    _0x379770 = "hostUrl",
    _0x221b71 = "abc",
    _0x1240e0 = "endNum",
    _0x480b95 = "reUrl",
    _0x37fe2c = "uvkey",
    _0x268d7e = "SllNTDIwMjQwOTMw",
    _0x3100e8 = "1AE9F575F4CA622AC081CC530B0F3FD4",
    _0xf7efc = false,
    _0x2b005f = false,
    _0x2b0a75 = false,
    _0x1e87d3 = "阅读文章正在进行中，请继续！",
    _0x2893f3 = "https://jylmapi.plsvcrthcs.top",
    _0x1a95cd = _0x36386b("priv"),
    _0x30f371 = _0x36386b(_0x379770),
    _0x2cc748 = _0x36386b(_0x37fe2c),
    _0x367bfb = _0x2114b4(_0x1a95cd);
  null !== _0x30f371 && undefined !== _0x30f371 && false !== _0x30f371 && "" !== _0x30f371 && _0x30f371 !== "localhost" && (_0x2893f3 = decodeURIComponent(_0x30f371));
  null !== _0x367bfb && undefined !== _0x367bfb.hostUrl && false !== _0x367bfb.hostUrl && "" !== _0x367bfb.hostUrl && _0x367bfb.hostUrl !== "localhost" && (_0x2893f3 = _0x367bfb.hostUrl);
  if (null !== _0x2cc748 && undefined !== _0x2cc748 && false !== _0x2cc748 && "" !== _0x2cc748) {
    _0x3100e8 = _0x2cc748;
  }
  null !== _0x367bfb && undefined !== _0x367bfb && undefined !== _0x367bfb.privateData && "" !== _0x367bfb.privateData && (_0x2b0a75 = _0x367bfb.privateData, sessionStorage.setItem(_0x5a5d81, _0x2b0a75));
  null !== _0x367bfb && undefined !== _0x367bfb && undefined !== _0x367bfb.token && null !== _0x367bfb.token && "" !== _0x367bfb.token && sessionStorage.setItem(_0x1a2900, _0x367bfb.token);
  console.log("[初始化所使用接口] Priv;解密出来的数据=>", _0x367bfb);
  sessionStorage.setItem(_0x379770, _0x2893f3);
  console.log("[初始化所使用接口] APIURL=" + _0x2893f3 + ";外部传入的接口地址APIURL=" + _0x30f371);
  var _0x198370 = $("#titleText"),
    _0x2a6129 = $("#titleText2"),
    _0x1d97f3 = $("#timer"),
    _0x152ac9 = $("#timer2");
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
    _0xf7efc = true;
    $("#myModal").hide();
    _0x2787b7();
  });
  $("#svgBtn").click(function () {
    _0xf7efc = true;
    $("#myModal").hide();
    _0x2787b7();
  });
  $("#svgBtn2").click(function () {
    _0x2b005f = true;
    $("#myModal2").hide();
    _0x2787b7();
  });
  function _0x2114b4(_0x458c74) {
    var _0x3b54b7 = atob(_0x458c74),
      _0x4c5521 = eval("(" + _0x3b54b7 + ")");
    if (null !== _0x3b54b7 && null !== _0x4c5521 && undefined !== _0x4c5521) return _0x4c5521;
    return null;
  }
  var _0x352067 = function () {
      {
        var _0x261914 = 0,
          _0xa50d23 = 0,
          _0xd5a500 = sessionStorage.getItem(_0x37fe2c);
        if (!_0xd5a500 || undefined === _0xd5a500) {
          _0xd5a500 = _0x3100e8;
        }
        var _0x15cce7 = parseInt(sessionStorage.getItem("ffb")),
          _0x24e83c = sessionStorage.getItem("str");
        if (_0x15cce7 == 2 || _0x15cce7 == 5 || _0x15cce7 == 7 || _0x15cce7 == 9 || _0x15cce7 == 11) _0x261914 = _0x15cce7 * 12, _0xa50d23 = _0x15cce7 % 5;else _0x15cce7 == 3 || _0x15cce7 == 6 || _0x15cce7 == 12 || _0x15cce7 == 15 || _0x15cce7 == 18 ? (_0x261914 = _0x15cce7 * 15, _0xa50d23 = _0x15cce7 % 8) : (_0x261914 = _0x15cce7 * 88, _0xa50d23 = _0x15cce7 % 10);
        var _0x48e864 = md5("_" + _0x261914 + "_" + _0x24e83c + "&MYCODE=" + _0x3ec11c),
          _0xf49236 = md5(_0x48e864 + "_RAND_" + _0xa50d23 + "&PRIKEY=" + _0xd5a500);
        return _0xf49236;
      }
    },
    _0x3ec11c = atob(_0x268d7e);
  function _0x2787b7() {
    typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function" && WeixinJSBridge.call("closeWindow");
  }
  function _0x3831f8(_0x100aed, _0x4c7ead, _0xa6d345) {
    {
      $("#finishNum").text(_0x100aed);
      $("#taskText").text(_0x4c7ead);
      _0x2a6129.text(_0xa6d345);
      $("#myModal2").show();
      _0x48ad11();
    }
  }
  function _0x36386b(_0x3bf80c) {
    {
      var _0x82736 = new RegExp("(^|&)" + _0x3bf80c + "=([^&]*)(&|$)"),
        _0x1ca53f = window.location.search.substr(1).match(_0x82736);
      if (_0x1ca53f != null) return unescape(_0x1ca53f[2]);
      return null;
    }
  }
  function _0x1cfa6e() {
    var _0x52c5f3 = 5,
      _0x56b0b6 = setInterval(function () {
        _0x1d97f3.text(_0x52c5f3);
        if (--_0x52c5f3 < 0) {
          clearInterval(_0x56b0b6);
          $("#finishNum").text("获取中");
          _0xf7efc == false && ($("#myModal").hide(), _0x2787b7());
        }
      }, 1000);
  }
  function _0x48ad11() {
    var _0x2b069c = 3,
      _0x3173de = setInterval(function () {
        {
          var _0x967910 = parseInt(_0x2b069c % 60, 10);
          _0x967910 = _0x967910 < 3 ? _0x967910 : _0x967910;
          _0x152ac9.text(_0x967910);
          --_0x2b069c < 0 && (clearInterval(_0x3173de), $("#finishNum").text("获取中"), _0x2b005f == false && ($("#myModal2").hide(), _0x2787b7()));
        }
      }, 1000);
  }
  function _0x5cea37(_0x5ec89f) {
    {
      var _0x39d72e = 2000,
        _0x2913ed = parseInt(_0x5ec89f),
        _0x5a740b = _0x2913ed % 5;
      if (_0x5a740b > 0) {
        _0x39d72e = 2000 + _0x5a740b;
      }
      var _0xf09151 = parseInt(_0x39d72e) + _0x2913ed;
      return _0xf09151;
    }
  }
  function _0x5b8ed9() {
    {
      console.info("pushHistory");
      var _0x33c923 = "#" + new Date().getTime();
      history.pushState(history.length + 1, "title", _0x33c923);
    }
  }
  function _0x9370() {
    var _0x407e4a = sessionStorage.getItem(_0x1a2900);
    var _0x612681 = sessionStorage.getItem(_0x221b71);
    var _0x21b5ae = sessionStorage.getItem(_0x1e8a49);
    var _0xf06d2e = sessionStorage.getItem("ffb");
    var _0x400b8c = _0x352067();
    var _0x58273c = sessionStorage.getItem("jump02");
    var _0x4582f6 = _0x407e4a + "&startNumber=" + _0x612681 + "&str=" + _0x21b5ae + "&keys=" + _0x400b8c;
    var _0x3889d2 = atob(_0x58273c) + "?token=" + _0x4582f6;
    return _0x3889d2;
  }
  function _0x19de6b() {
    var _0x2a372f = _0x9370();
    var _0xae8eca = sessionStorage.getItem("ffb");
    var _0x61ec03 = _0x5cea37(_0xae8eca);
    var _0x58da9a = _0x2a372f + "&unionId=" + _0x61ec03;
    $.ajax({
      "type": "GET",
      "dataType": "jsonp",
      "url": _0x2893f3 + _0x58da9a,
      "timeout": 10000,
      "success": function (_0x441867) {
        console.log("【getTask】获取文章链接结果返回：");
        console.log(_0x441867);
        _0x2d144d(_0x441867);
      },
      "error": function (_0x300053, _0x4cb8e8) {
        _0x2a6129.text("请求超时了！返回重试");
        $("#myModal2").show();
        _0x48ad11();
      }
    });
  }
  function _0x2d144d(_0x2fd214) {
    {
      if (_0x2fd214.code == 200) {
        if (_0x2fd214.data.code == 130) {
          _0x2a6129.text("账号冻结！");
          $("#myModal2").show();
          _0x48ad11();
          return;
        }
        if (_0x2fd214.data.code == 113) {
          _0x2a6129.text("文章准备失败！请返回重试");
          $("#myModal2").show();
          _0x48ad11();
          return;
        }
        if (_0x2fd214.data.code == 112) {
          {
            _0x2a6129.text("任务失效了！请返回");
            $("#myModal2").show();
            _0x48ad11();
            return;
          }
        }
        if (_0x2fd214.data.code == 111) {
          {
            _0x2a6129.text("登录失效了！请返回");
            $("#myModal2").show();
            _0x48ad11();
            return;
          }
        }
        if (_0x2fd214.data.code == 110) {
          _0x2a6129.text("暂无任务可做了！请返回,整点再来");
          $("#myModal2").show();
          _0x48ad11();
          return;
        }
        if (_0x2fd214.data.code == 0) {
          _0x2a6129.text("获取数据失败！请返回重试");
          $("#myModal2").show();
          _0x48ad11();
          return;
        }
        console.log("[数据验证通过]");
        console.log(_0x2fd214);
        _0x134270(_0x2fd214);
      } else _0x2a6129.text("访问出错了，请返回重试。"), $("#myModal2").show(), _0x48ad11();
    }
  }
  function _0x134270(_0x576561) {
    if (_0x576561.data.code == 501) {
      _0x2a6129.text("非法请求！请返回");
      $("#myModal2").show();
      _0x48ad11();
      return;
    }
    if (_0x576561.data.code == 150) {
      {
        $("#myModal").show();
        _0x1cfa6e();
        return;
      }
    }
    if (_0x576561.data.code == 300) {
      _0x3831f8("已完成", "任务已完成，请返回。", "任务经完成！请返回");
      return;
    }
    if (_0x576561.data.code == 200) {
      sessionStorage.setItem(_0x221b71, _0x576561.data.startNum);
      sessionStorage.setItem(_0x1240e0, _0x576561.data.endNum);
      sessionStorage.setItem("ffb", _0x576561.data.ffb);
      null !== _0x576561.data.startNum && _0x576561.data.startNum > 0 && $("#finishNum").text("成功阅读" + _0x576561.data.startNum + "篇,继续阅读...");
      _0x49ad53(_0x576561.data.url);
    }
  }
  function _0x49ad53(_0x212cc) {
    sessionStorage.setItem(_0x480b95, _0x212cc);
    console.log("调试代码：", _0x212cc);
    setTimeout(function () {
      var _0x469a47 = new Date().getTime();
      var _0x457a59 = document.createElement("a");
      _0x457a59.href = _0x212cc;
      _0x457a59.click();
      sessionStorage.setItem("clickTime", new Date().getTime());
    }, 500);
  }
  function _0xc6d669() {
    {
      var _0x40f6f1 = sessionStorage.getItem(_0x1a2900);
      var _0x4128b0 = sessionStorage.getItem(_0x1e8a49);
      var _0x1ab6e5 = sessionStorage.getItem("jump01");
      var _0x5f2975 = atob(_0x1ab6e5) + "?token=" + _0x40f6f1;
      return _0x5f2975;
    }
  }
  function _0x169c88() {
    var _0x27c3bd = _0xc6d669();
    console.log("【PageShow】Abc请求接口Api:" + _0x27c3bd);
    $.ajax({
      "type": "GET",
      "dataType": "jsonp",
      "url": _0x2893f3 + _0x27c3bd,
      "timeout": 10000,
      "success": function (_0x1b7c9a) {
        {
          console.log("初始化页面：", _0x1b7c9a);
          if (_0x1b7c9a.code == 200) {
            if (_0x1b7c9a.data.code == 200) {
              {
                var _0x44620f = _0x1b7c9a.data.ffb || 0,
                  _0x7181ac = _0x1b7c9a.data.rov || "",
                  _0x33ea1e = _0x1b7c9a.data.bskey || "";
                null !== _0x44620f && undefined !== _0x44620f && sessionStorage.setItem("ffb", _0x44620f);
                null !== _0x7181ac && undefined !== _0x7181ac && "" !== _0x7181ac && sessionStorage.setItem(_0x1e8a49, atob(_0x7181ac));
                null !== _0x33ea1e && undefined !== _0x33ea1e && "" !== _0x33ea1e && sessionStorage.setItem(_0x37fe2c, atob(_0x33ea1e));
                setTimeout(() => {
                  _0x19de6b();
                }, 200);
              }
            } else $("#finishNum").html("<font color=red>获取数据失败!</font>");
          } else {
            _0x2a6129.text("访问出错了，请返回重试。");
            $("#myModal2").show();
            _0x48ad11();
          }
        }
      },
      "error": function (_0x1cb693, _0x23535d) {
        _0x2a6129.text("请求超时了！返回重试");
        $("#myModal2").show();
        _0x48ad11();
      }
    });
  }
  function _0x2312b0(_0x533dde) {
    console.log(_0x533dde);
  }
  window.onpopstate = function () {
    console.info("onpopstate");
  };
  function _0x268ace() {
    WeixinJSBridge.call("hideOptionMenu");
  }
  function _0x5e5117() {
    if (typeof WeixinJSBridge == "undefined") {
      {
        if (document.addEventListener) document.addEventListener("WeixinJSBridgeReady", _0x268ace, false);else document.attachEvent && (document.attachEvent("WeixinJSBridgeReady", _0x268ace), document.attachEvent("onWeixinJSBridgeReady", _0x268ace));
      }
    } else {
      _0x268ace();
    }
  }
  function _0x7dafec() {
    var _0x17cc2e = 761760,
      _0x47e277 = sessionStorage.getItem("person"),
      _0x58a357 = sessionStorage.getItem(_0x1a2900),
      _0x51679b = _0x36386b(_0x1e8a49),
      _0x5c7c39 = _0x36386b(_0x1a2900);
    !_0x58a357 && null !== _0x5c7c39 && undefined !== _0x5c7c39 && sessionStorage.setItem(_0x1a2900, _0x5c7c39);
    null !== _0x51679b && undefined !== _0x51679b && sessionStorage.setItem(_0x1e8a49, _0x51679b);
    sessionStorage.setItem(_0x221b71, "0");
    sessionStorage.setItem("jump01", "L2luZGV4L2dldE1vZGVJbmZv");
    sessionStorage.setItem("jump02", "L2luZGV4L2RvUmVhZEluZm8=");
    sessionStorage.setItem(_0x37fe2c, _0x3100e8);
    if (null !== _0x47e277 && undefined !== _0x47e277 && parseInt(_0x47e277) > 0) {
      _0x17cc2e = parseInt(_0x47e277) + _0x20fb14;
    }
    sessionStorage.setItem("person", _0x17cc2e);
    $("#person").text(_0x17cc2e);
    _0x169c88();
  }
  var _0x20fb14 = Math.floor(Math.random() * 10) + 1;
  function _0xfac2bc() {
    {
      _0x5e5117();
      var _0xae383f = navigator.userAgent.toLowerCase(),
        _0x30e1ed = _0xae383f.indexOf("micromessenger") != -1;
      if (!_0x30e1ed) {
        var _0x3ac7c9 = document.createElement("a"),
          _0x54bb7c = location.href.replace("article.html", "wx.html");
        window.location.href = _0x54bb7c;
        return;
      }
      var _0x3116a6 = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      if (!_0x3116a6) try {
        tbsJs.onReady("{useCachedApi : \"true\"}", function () {});
      } catch (_0x3b9cde) {}
      window.onpageshow = function () {
        if (event.persisted || window.performance && window.performance.navigation.type === 2) {
          var _0x5c16d2 = sessionStorage.getItem(_0x221b71),
            _0x393700 = parseInt(0 + sessionStorage.getItem("person")) + 1;
          sessionStorage.setItem("person", _0x393700);
          $("#person").text(_0x393700);
          console.log("【PageShow】初始化领取用户数：" + _0x393700);
          _0x5c16d2 == 0 ? $("#finishNum").text("获取中，耐心等待...") : $("#finishNum").text("成功阅读" + _0x5c16d2 + "篇,继续阅读下一篇");
          var _0x2dbe94 = sessionStorage.getItem("clickTime");
          if (_0x2dbe94 && new Date().getTime() - _0x2dbe94 < 5000) _0x1e87d3 = "阅读未满5秒无效！请继续阅读", toastr.info(_0x1e87d3), setTimeout(function () {
            {
              var _0x2af9be = sessionStorage.getItem(_0x480b95);
              _0x49ad53(_0x2af9be);
            }
          }, 800);else {
            _0x1e87d3 = "阅读文章正在进行中，请继续！";
            _0x19de6b();
          }
        } else console.log("【PageShow】initDate--[Begin]"), _0x7dafec();
      };
    }
  }
  _0xfac2bc();
});