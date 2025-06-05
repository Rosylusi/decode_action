//Thu Jun 05 2025 08:58:32 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
let tokenkm = "";
const proxyApiUrl = "";
const axios = require("axios");
const crypto = require("crypto");
const https = require("https");
const $ = new Env("甬音 单过验证码");
const YongPai = ($.isNode() ? process.env.YongPaiDL : $.getdata("YongPaiDL")) || "";
let deviceId = ($.isNode() ? process.env.YongPaiDeviceId : $.getdata("YongPaiDeviceId")) || "";
window = {};
let proxy = null;
let phone = "";
let userId = "";
let name = "";
let model = "";
async function getProxy() {
  let _0x79f03b = 5;
  while (_0x79f03b > 0) {
    try {
      const _0x1739f7 = await axios.get(proxyApiUrl);
      const _0x5b8b50 = _0x1739f7.data;
      console.log("获取到的代理: " + _0x5b8b50);
      if (/^(\d{1,3}\.){3}\d{1,3}:\d+$/.test(_0x5b8b50)) {
        proxy = {
          host: _0x5b8b50.split(":")[0],
          port: _0x5b8b50.split(":")[1]
        };
        console.log("代理有效: " + proxy.host + ":" + proxy.port);
        return true;
      } else {
        console.log("获取的代理格式不正确");
      }
    } catch (_0x2a007a) {
      console.log("获取代理失败: " + _0x2a007a.message);
    }
    _0x79f03b--;
    await wait(3000);
  }
  return false;
}
!(async () => {
  await main();
})().catch(_0x3e56ed => {
  $.log(_0x3e56ed);
}).finally(() => {
  $.done({});
});
function wait(_0x409b1a) {
  return new Promise(_0x1e7969 => setTimeout(_0x1e7969, _0x409b1a));
}
async function main() {
  console.log("PoweredBy：空山新雨后");
  if (!YongPai) {
    console.log("先填写账号密码");
    await sendMsg("先填写账号密码");
    return;
  }
  let _0x96db7c = YongPai.split("#");
  const _0x4e2c40 = _0x96db7c.length;
  console.log("当前共获取到" + _0x4e2c40 + "个账号");
  for (let _0x103e61 = 0; _0x103e61 < _0x4e2c40; _0x103e61++) {
    const _0x429841 = _0x96db7c[_0x103e61];
    const _0x2cd5f3 = _0x429841.split("&")[0];
    lotteryCookie = "";
    let _0x94cb53 = generateRandomDevice();
    !deviceId && (deviceId = _0x94cb53.deviceId);
    model = _0x94cb53.model;
    const _0x223020 = _0x429841.split("&")[1];
    console.log("用户：" + maskPhoneNumber(_0x2cd5f3) + "开始任务");
    await getProxy();
    let _0x4e59da = Date.now();
    console.log(deviceId);
    let _0x354a89 = await loginPwdGet("username=" + _0x2cd5f3 + "&password=" + encodeURIComponent(_0x223020) + "&deviceId=" + deviceId + "&globalDatetime=" + _0x4e59da + "&sign=" + md5("globalDatetime" + _0x4e59da + "username" + _0x2cd5f3 + "test_123456679890123456").toUpperCase());
    if (_0x354a89.code != 0) {
      console.log(_0x354a89.message);
      continue;
    }
    console.log("获取userId：" + _0x354a89.data.userId);
    userId = _0x354a89.data.userId;
    console.log("获取name：" + _0x354a89.data.nickname);
    name = _0x354a89.data.nickname;
    let _0x2c5625 = await loginGet("userId=" + userId + "&loginName=" + _0x2cd5f3 + "&name=" + encodeURIComponent(name) + "&phone=" + _0x2cd5f3);
    if (_0x2c5625.code != 200) {
      console.log(_0x2c5625.message);
      continue;
    }
    console.log("登录成功");
    token = _0x2c5625.data;
    await wait(2000);
    await requestCaptcha(userId, tokenkm);
    console.log("————————————");
  }
}
function maskPhoneNumber(_0x2d113b) {
  return _0x2d113b.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
}
async function loginPwdGet(_0x2e280e) {
  console.log("使用代理: " + (proxy ? proxy.host + ":" + proxy.port : "不使用代理"));
  return new Promise(_0xf9db0e => {
    const _0x1c7bc4 = {
      url: "https://ypapp.cnnb.com.cn/yongpai-user/api/login2/local3?" + _0x2e280e,
      headers: {
        system: "android",
        version: "30",
        model: model,
        appversion: "11.0.0",
        appbuild: "202407040",
        deviceid: deviceId,
        ticket: "",
        "accept-encoding": "gzip",
        "user-agent": "okhttp/4.9.1",
        ...(proxy ? {
          proxy: proxy
        } : {})
      }
    };
    $.get(_0x1c7bc4, async (_0x4b14f5, _0x403876, _0x25f5ca) => {
      try {
        _0x4b14f5 ? (console.log("" + JSON.stringify(_0x4b14f5)), console.log($.name + " API请求失败，请检查网路重试")) : (await $.wait(2000), _0xf9db0e(JSON.parse(_0x25f5ca)));
      } catch (_0x3765a3) {
        $.logErr(_0x3765a3, _0x403876);
      } finally {
        _0xf9db0e();
      }
    });
  });
}
async function loginGet(_0x48c585) {
  console.log("使用代理: " + (proxy ? proxy.host + ":" + proxy.port : "不使用代理"));
  return new Promise(_0x3232f3 => {
    const _0x199b52 = {
      url: "https://ypapp.cnnb.com.cn/web-nbcc/member/login?" + _0x48c585,
      headers: {
        "content-type": "application/json",
        module: "web-member",
        sign: md5("/member/login{loginName:" + phone + ",name:" + name + ",phone:" + phone + ",userId:" + userId),
        "accept-encoding": "gzip",
        "user-agent": "okhttp/4.9.1",
        ...(proxy ? {
          proxy: proxy
        } : {})
      }
    };
    $.get(_0x199b52, async (_0x34696d, _0x2e5e99, _0x287353) => {
      try {
        _0x34696d ? console.log($.name + " API请求失败，请检查网路重试") : (await $.wait(2000), _0x3232f3(JSON.parse(_0x287353)));
      } catch (_0x5a0f10) {
        $.logErr(_0x5a0f10, _0x2e5e99);
      } finally {
        _0x3232f3();
      }
    });
  });
}
async function requestCaptcha(_0x2c4029, _0x8b15d3) {
  const _0x582dc3 = "http://1855no5631.oicp.vip:44011/api/run_captcha";
  const _0x5b2ac5 = {
    token: _0x8b15d3
  };
  try {
    console.log("准备进行验证码校验...请稍候");
    await axios.get(_0x582dc3).catch(_0x138e96 => {});
    const _0x2a71bb = await axios.post(_0x582dc3, _0x5b2ac5);
    const _0xa63e00 = _0x2a71bb.data;
    if (_0x2a71bb.status === 200) {
      const _0x533e6d = _0xa63e00.captcha_id;
      const _0xaa3018 = _0xa63e00.captcha_output;
      const _0x5d1021 = _0xa63e00.gen_time;
      const _0x250703 = _0xa63e00.lot_number;
      const _0x16efe8 = _0xa63e00.pass_token;
      await wait(2000);
      await check(_0x2c4029, _0x533e6d, _0xaa3018, _0x5d1021, _0x250703, _0x16efe8);
    } else {
      console.error("请求失败:", _0x2a71bb.data);
    }
  } catch (_0x482d70) {
    if (_0x482d70.response) {
      _0x482d70.response.data.error === "请联系开发者处理！" ? console.error("token可用次数不足:", _0x482d70.response.data.error) : console.error("其他错误:", _0x482d70.response.data);
    } else {
      _0x482d70.request ? console.error("没有收到响应:", _0x482d70.request) : console.error("错误信息:", _0x482d70.message);
    }
  }
}
async function check(_0x5bdbcf, _0x27152a, _0x13690d, _0x29cfdf, _0x1a7c02, _0x1a92c8) {
  console.log("使用代理: " + (proxy ? proxy.host + ":" + proxy.port : "不使用代理"));
  const _0x8148c6 = 3;
  for (let _0x476d14 = 0; _0x476d14 < _0x8148c6; _0x476d14++) {
    try {
      const {
        data: _0x101efd
      } = await axios.post("https://ypapp.cnnb.com.cn/yongpai-user/api/duiba/captcha", {
        userId: _0x5bdbcf,
        captchaId: _0x27152a,
        genTime: _0x29cfdf,
        passToken: _0x1a92c8,
        captchaOutput: _0x13690d,
        lotNumber: _0x1a7c02
      }, {
        headers: {
          "User-Agent": "okhttp/4.9.1",
          "Content-Type": "application/json",
          "X-Requested-With": "io.dcloud.H55BDF6BE",
          Referer: "https://ypstatic.cnnb.com.cn/yppage-share2/yongyin/hongbao/share",
          "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
          Accept: "application/json, text/plain, */*",
          Origin: "https://ypstatic.cnnb.com.cn"
        },
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
          secureOptions: crypto.constants.SSL_OP_NO_SSLv3 | crypto.constants.SSL_OP_NO_TLSv1 | crypto.constants.SSL_OP_NO_TLSv1_1
        }),
        proxy: proxy ? {
          protocol: "http",
          host: proxy.host,
          port: proxy.port
        } : false
      });
      console.log("验证码校验结果成功:", _0x101efd);
      return;
    } catch (_0x10cd34) {
      console.error("失败:", _0x10cd34.response?.["data"] || _0x10cd34.message);
      _0x476d14 === _0x8148c6 - 1 ? (console.log("达到最大重试次数，准备重新获取代理 IP..."), await getProxy(), console.log("代理 IP 获取成功")) : await wait(3000);
    }
  }
}
function generateRandomDevice() {
  const _0x1b06d5 = generateDeviceId();
  const _0x2ae5a0 = ["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"];
  const _0x1f5b71 = getRandomElement(_0x2ae5a0);
  return {
    deviceId: _0x1b06d5,
    model: _0x1f5b71
  };
}
function getRandomElement(_0x1997d5) {
  return _0x1997d5[Math.floor(Math.random() * _0x1997d5.length)];
}
function generateDeviceId(_0x6571e4 = 16) {
  const _0x5a8f80 = "abcdefghijklmnopqrstuvwxyz0123456789";
  let _0x1ebcce = "";
  for (let _0x1b677d = 0; _0x1b677d < _0x6571e4; _0x1b677d++) {
    _0x1ebcce += _0x5a8f80.charAt(Math.floor(Math.random() * _0x5a8f80.length));
  }
  return _0x1ebcce;
}
async function sendMsg(_0x4c14b8) {
  if ($.isNode()) {
    let _0xc0def4 = "";
    try {
      _0xc0def4 = require("./sendNotify");
    } catch (_0x1b2ef8) {
      _0xc0def4 = require("../sendNotify");
    }
    await _0xc0def4.sendNotify($.name, _0x4c14b8);
  } else {
    $.msg($.name, "", _0x4c14b8);
  }
}
function md5(_0x450f13) {
  return rstr2hex(rstr_md5(str2rstr_utf8(_0x450f13)));
}
function b64_md5(_0x2c350c) {
  return rstr2b64(rstr_md5(str2rstr_utf8(_0x2c350c)));
}
function any_md5(_0x4321f0, _0x1d034b) {
  return rstr2any(rstr_md5(str2rstr_utf8(_0x4321f0)), _0x1d034b);
}
function hex_hmac_md5(_0x282fb7, _0x28a71e) {
  return rstr2hex(rstr_hmac_md5(str2rstr_utf8(_0x282fb7), str2rstr_utf8(_0x28a71e)));
}
function b64_hmac_md5(_0x528fd2, _0x49a596) {
  return rstr2b64(rstr_hmac_md5(str2rstr_utf8(_0x528fd2), str2rstr_utf8(_0x49a596)));
}
function any_hmac_md5(_0x418e56, _0x229f42, _0x2066cc) {
  return rstr2any(rstr_hmac_md5(str2rstr_utf8(_0x418e56), str2rstr_utf8(_0x229f42)), _0x2066cc);
}
function md5_vm_test() {
  return "900150983cd24fb0d6963f7d28e17f72" == hex_md5("abc").toLowerCase();
}
function rstr_md5(_0x42dbf7) {
  return binl2rstr(binl_md5(rstr2binl(_0x42dbf7), 8 * _0x42dbf7.length));
}
function rstr_hmac_md5(_0x51e396, _0x489d05) {
  var _0x70b97f = rstr2binl(_0x51e396);
  _0x70b97f.length > 16 && (_0x70b97f = binl_md5(_0x70b97f, 8 * _0x51e396.length));
  for (var _0x1953fe = Array(16), _0x142777 = Array(16), _0x292355 = 0; _0x292355 < 16; _0x292355++) {
    _0x1953fe[_0x292355] = 909522486 ^ _0x70b97f[_0x292355];
    _0x142777[_0x292355] = 1549556828 ^ _0x70b97f[_0x292355];
  }
  var _0x473452 = binl_md5(_0x1953fe.concat(rstr2binl(_0x489d05)), 512 + 8 * _0x489d05.length);
  return binl2rstr(binl_md5(_0x142777.concat(_0x473452), 640));
}
function rstr2hex(_0x4a06b0) {
  for (var _0x5d3f91, _0x50342d = hexcase ? "0123456789ABCDEF" : "0123456789abcdef", _0xaaed2c = "", _0x446485 = 0; _0x446485 < _0x4a06b0.length; _0x446485++) {
    _0x5d3f91 = _0x4a06b0.charCodeAt(_0x446485);
    _0xaaed2c += _0x50342d.charAt(_0x5d3f91 >>> 4 & 15) + _0x50342d.charAt(15 & _0x5d3f91);
  }
  return _0xaaed2c;
}
function rstr2b64(_0x22a06e) {
  for (var _0x1718e1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", _0xdc360d = "", _0x1b94f4 = _0x22a06e.length, _0x49d579 = 0; _0x49d579 < _0x1b94f4; _0x49d579 += 3) {
    for (var _0x32e367 = _0x22a06e.charCodeAt(_0x49d579) << 16 | (_0x49d579 + 1 < _0x1b94f4 ? _0x22a06e.charCodeAt(_0x49d579 + 1) << 8 : 0) | (_0x49d579 + 2 < _0x1b94f4 ? _0x22a06e.charCodeAt(_0x49d579 + 2) : 0), _0x28b351 = 0; _0x28b351 < 4; _0x28b351++) {
      8 * _0x49d579 + 6 * _0x28b351 > 8 * _0x22a06e.length ? _0xdc360d += b64pad : _0xdc360d += _0x1718e1.charAt(_0x32e367 >>> 6 * (3 - _0x28b351) & 63);
    }
  }
  return _0xdc360d;
}
function rstr2any(_0x47a927, _0x28aba4) {
  var _0x478db7;
  var _0x304d0f;
  var _0x2ff546;
  var _0x5de8cc;
  var _0x1e1332;
  var _0x2734c5 = _0x28aba4.length;
  var _0x4be899 = Array(Math.ceil(_0x47a927.length / 2));
  for (_0x478db7 = 0; _0x478db7 < _0x4be899.length; _0x478db7++) {
    _0x4be899[_0x478db7] = _0x47a927.charCodeAt(2 * _0x478db7) << 8 | _0x47a927.charCodeAt(2 * _0x478db7 + 1);
  }
  var _0x31d8b9 = Math.ceil(8 * _0x47a927.length / (Math.log(_0x28aba4.length) / Math.log(2)));
  var _0x1b383d = Array(_0x31d8b9);
  for (_0x304d0f = 0; _0x304d0f < _0x31d8b9; _0x304d0f++) {
    for (_0x1e1332 = Array(), _0x5de8cc = 0, _0x478db7 = 0; _0x478db7 < _0x4be899.length; _0x478db7++) {
      _0x5de8cc = (_0x5de8cc << 16) + _0x4be899[_0x478db7];
      _0x2ff546 = Math.floor(_0x5de8cc / _0x2734c5);
      _0x5de8cc -= _0x2ff546 * _0x2734c5;
      (_0x1e1332.length > 0 || _0x2ff546 > 0) && (_0x1e1332[_0x1e1332.length] = _0x2ff546);
    }
    _0x1b383d[_0x304d0f] = _0x5de8cc;
    _0x4be899 = _0x1e1332;
  }
  var _0x4d5afc = "";
  for (_0x478db7 = _0x1b383d.length - 1; _0x478db7 >= 0; _0x478db7--) {
    _0x4d5afc += _0x28aba4.charAt(_0x1b383d[_0x478db7]);
  }
  return _0x4d5afc;
}
function str2rstr_utf8(_0xe858a8) {
  for (var _0x3c143e, _0x239948, _0x158d19 = "", _0x535915 = -1; ++_0x535915 < _0xe858a8.length;) {
    _0x3c143e = _0xe858a8.charCodeAt(_0x535915);
    _0x239948 = _0x535915 + 1 < _0xe858a8.length ? _0xe858a8.charCodeAt(_0x535915 + 1) : 0;
    55296 <= _0x3c143e && _0x3c143e <= 56319 && 56320 <= _0x239948 && _0x239948 <= 57343 && (_0x3c143e = 65536 + ((1023 & _0x3c143e) << 10) + (1023 & _0x239948), _0x535915++);
    _0x3c143e <= 127 ? _0x158d19 += String.fromCharCode(_0x3c143e) : _0x3c143e <= 2047 ? _0x158d19 += String.fromCharCode(192 | _0x3c143e >>> 6 & 31, 128 | 63 & _0x3c143e) : _0x3c143e <= 65535 ? _0x158d19 += String.fromCharCode(224 | _0x3c143e >>> 12 & 15, 128 | _0x3c143e >>> 6 & 63, 128 | 63 & _0x3c143e) : _0x3c143e <= 2097151 && (_0x158d19 += String.fromCharCode(240 | _0x3c143e >>> 18 & 7, 128 | _0x3c143e >>> 12 & 63, 128 | _0x3c143e >>> 6 & 63, 128 | 63 & _0x3c143e));
  }
  return _0x158d19;
}
function str2rstr_utf16le(_0x42f540) {
  for (var _0x4b569f = "", _0x46e3a4 = 0; _0x46e3a4 < _0x42f540.length; _0x46e3a4++) {
    _0x4b569f += String.fromCharCode(255 & _0x42f540.charCodeAt(_0x46e3a4), _0x42f540.charCodeAt(_0x46e3a4) >>> 8 & 255);
  }
  return _0x4b569f;
}
function str2rstr_utf16be(_0x46cd4b) {
  for (var _0x1d542c = "", _0xc43f76 = 0; _0xc43f76 < _0x46cd4b.length; _0xc43f76++) {
    _0x1d542c += String.fromCharCode(_0x46cd4b.charCodeAt(_0xc43f76) >>> 8 & 255, 255 & _0x46cd4b.charCodeAt(_0xc43f76));
  }
  return _0x1d542c;
}
function rstr2binl(_0x14d968) {
  for (var _0x5e91c9 = Array(_0x14d968.length >> 2), _0x8a1847 = 0; _0x8a1847 < _0x5e91c9.length; _0x8a1847++) {
    _0x5e91c9[_0x8a1847] = 0;
  }
  for (_0x8a1847 = 0; _0x8a1847 < 8 * _0x14d968.length; _0x8a1847 += 8) {
    _0x5e91c9[_0x8a1847 >> 5] |= (255 & _0x14d968.charCodeAt(_0x8a1847 / 8)) << _0x8a1847 % 32;
  }
  return _0x5e91c9;
}
function binl2rstr(_0x1f27ab) {
  for (var _0x38cae6 = "", _0x4d207c = 0; _0x4d207c < 32 * _0x1f27ab.length; _0x4d207c += 8) {
    _0x38cae6 += String.fromCharCode(_0x1f27ab[_0x4d207c >> 5] >>> _0x4d207c % 32 & 255);
  }
  return _0x38cae6;
}
function binl_md5(_0x146dfb, _0x5e55e6) {
  _0x146dfb[_0x5e55e6 >> 5] |= 128 << _0x5e55e6 % 32;
  _0x146dfb[14 + (_0x5e55e6 + 64 >>> 9 << 4)] = _0x5e55e6;
  for (var _0x16a1e3 = 1732584193, _0x127ad2 = -271733879, _0x214052 = -1732584194, _0x4dd7f6 = 271733878, _0x3d5ad8 = 0; _0x3d5ad8 < _0x146dfb.length; _0x3d5ad8 += 16) {
    var _0x568805 = _0x16a1e3;
    var _0x4deba6 = _0x127ad2;
    var _0x156ec0 = _0x214052;
    var _0x1b2b66 = _0x4dd7f6;
    _0x16a1e3 = md5_ff(_0x16a1e3, _0x127ad2, _0x214052, _0x4dd7f6, _0x146dfb[_0x3d5ad8 + 0], 7, -680876936);
    _0x4dd7f6 = md5_ff(_0x4dd7f6, _0x16a1e3, _0x127ad2, _0x214052, _0x146dfb[_0x3d5ad8 + 1], 12, -389564586);
    _0x214052 = md5_ff(_0x214052, _0x4dd7f6, _0x16a1e3, _0x127ad2, _0x146dfb[_0x3d5ad8 + 2], 17, 606105819);
    _0x127ad2 = md5_ff(_0x127ad2, _0x214052, _0x4dd7f6, _0x16a1e3, _0x146dfb[_0x3d5ad8 + 3], 22, -1044525330);
    _0x16a1e3 = md5_ff(_0x16a1e3, _0x127ad2, _0x214052, _0x4dd7f6, _0x146dfb[_0x3d5ad8 + 4], 7, -176418897);
    _0x4dd7f6 = md5_ff(_0x4dd7f6, _0x16a1e3, _0x127ad2, _0x214052, _0x146dfb[_0x3d5ad8 + 5], 12, 1200080426);
    _0x214052 = md5_ff(_0x214052, _0x4dd7f6, _0x16a1e3, _0x127ad2, _0x146dfb[_0x3d5ad8 + 6], 17, -1473231341);
    _0x127ad2 = md5_ff(_0x127ad2, _0x214052, _0x4dd7f6, _0x16a1e3, _0x146dfb[_0x3d5ad8 + 7], 22, -45705983);
    _0x16a1e3 = md5_ff(_0x16a1e3, _0x127ad2, _0x214052, _0x4dd7f6, _0x146dfb[_0x3d5ad8 + 8], 7, 1770035416);
    _0x4dd7f6 = md5_ff(_0x4dd7f6, _0x16a1e3, _0x127ad2, _0x214052, _0x146dfb[_0x3d5ad8 + 9], 12, -1958414417);
    _0x214052 = md5_ff(_0x214052, _0x4dd7f6, _0x16a1e3, _0x127ad2, _0x146dfb[_0x3d5ad8 + 10], 17, -42063);
    _0x127ad2 = md5_ff(_0x127ad2, _0x214052, _0x4dd7f6, _0x16a1e3, _0x146dfb[_0x3d5ad8 + 11], 22, -1990404162);
    _0x16a1e3 = md5_ff(_0x16a1e3, _0x127ad2, _0x214052, _0x4dd7f6, _0x146dfb[_0x3d5ad8 + 12], 7, 1804603682);
    _0x4dd7f6 = md5_ff(_0x4dd7f6, _0x16a1e3, _0x127ad2, _0x214052, _0x146dfb[_0x3d5ad8 + 13], 12, -40341101);
    _0x214052 = md5_ff(_0x214052, _0x4dd7f6, _0x16a1e3, _0x127ad2, _0x146dfb[_0x3d5ad8 + 14], 17, -1502002290);
    _0x127ad2 = md5_ff(_0x127ad2, _0x214052, _0x4dd7f6, _0x16a1e3, _0x146dfb[_0x3d5ad8 + 15], 22, 1236535329);
    _0x16a1e3 = md5_gg(_0x16a1e3, _0x127ad2, _0x214052, _0x4dd7f6, _0x146dfb[_0x3d5ad8 + 1], 5, -165796510);
    _0x4dd7f6 = md5_gg(_0x4dd7f6, _0x16a1e3, _0x127ad2, _0x214052, _0x146dfb[_0x3d5ad8 + 6], 9, -1069501632);
    _0x214052 = md5_gg(_0x214052, _0x4dd7f6, _0x16a1e3, _0x127ad2, _0x146dfb[_0x3d5ad8 + 11], 14, 643717713);
    _0x127ad2 = md5_gg(_0x127ad2, _0x214052, _0x4dd7f6, _0x16a1e3, _0x146dfb[_0x3d5ad8 + 0], 20, -373897302);
    _0x16a1e3 = md5_gg(_0x16a1e3, _0x127ad2, _0x214052, _0x4dd7f6, _0x146dfb[_0x3d5ad8 + 5], 5, -701558691);
    _0x4dd7f6 = md5_gg(_0x4dd7f6, _0x16a1e3, _0x127ad2, _0x214052, _0x146dfb[_0x3d5ad8 + 10], 9, 38016083);
    _0x214052 = md5_gg(_0x214052, _0x4dd7f6, _0x16a1e3, _0x127ad2, _0x146dfb[_0x3d5ad8 + 15], 14, -660478335);
    _0x127ad2 = md5_gg(_0x127ad2, _0x214052, _0x4dd7f6, _0x16a1e3, _0x146dfb[_0x3d5ad8 + 4], 20, -405537848);
    _0x16a1e3 = md5_gg(_0x16a1e3, _0x127ad2, _0x214052, _0x4dd7f6, _0x146dfb[_0x3d5ad8 + 9], 5, 568446438);
    _0x4dd7f6 = md5_gg(_0x4dd7f6, _0x16a1e3, _0x127ad2, _0x214052, _0x146dfb[_0x3d5ad8 + 14], 9, -1019803690);
    _0x214052 = md5_gg(_0x214052, _0x4dd7f6, _0x16a1e3, _0x127ad2, _0x146dfb[_0x3d5ad8 + 3], 14, -187363961);
    _0x127ad2 = md5_gg(_0x127ad2, _0x214052, _0x4dd7f6, _0x16a1e3, _0x146dfb[_0x3d5ad8 + 8], 20, 1163531501);
    _0x16a1e3 = md5_gg(_0x16a1e3, _0x127ad2, _0x214052, _0x4dd7f6, _0x146dfb[_0x3d5ad8 + 13], 5, -1444681467);
    _0x4dd7f6 = md5_gg(_0x4dd7f6, _0x16a1e3, _0x127ad2, _0x214052, _0x146dfb[_0x3d5ad8 + 2], 9, -51403784);
    _0x214052 = md5_gg(_0x214052, _0x4dd7f6, _0x16a1e3, _0x127ad2, _0x146dfb[_0x3d5ad8 + 7], 14, 1735328473);
    _0x127ad2 = md5_gg(_0x127ad2, _0x214052, _0x4dd7f6, _0x16a1e3, _0x146dfb[_0x3d5ad8 + 12], 20, -1926607734);
    _0x16a1e3 = md5_hh(_0x16a1e3, _0x127ad2, _0x214052, _0x4dd7f6, _0x146dfb[_0x3d5ad8 + 5], 4, -378558);
    _0x4dd7f6 = md5_hh(_0x4dd7f6, _0x16a1e3, _0x127ad2, _0x214052, _0x146dfb[_0x3d5ad8 + 8], 11, -2022574463);
    _0x214052 = md5_hh(_0x214052, _0x4dd7f6, _0x16a1e3, _0x127ad2, _0x146dfb[_0x3d5ad8 + 11], 16, 1839030562);
    _0x127ad2 = md5_hh(_0x127ad2, _0x214052, _0x4dd7f6, _0x16a1e3, _0x146dfb[_0x3d5ad8 + 14], 23, -35309556);
    _0x16a1e3 = md5_hh(_0x16a1e3, _0x127ad2, _0x214052, _0x4dd7f6, _0x146dfb[_0x3d5ad8 + 1], 4, -1530992060);
    _0x4dd7f6 = md5_hh(_0x4dd7f6, _0x16a1e3, _0x127ad2, _0x214052, _0x146dfb[_0x3d5ad8 + 4], 11, 1272893353);
    _0x214052 = md5_hh(_0x214052, _0x4dd7f6, _0x16a1e3, _0x127ad2, _0x146dfb[_0x3d5ad8 + 7], 16, -155497632);
    _0x127ad2 = md5_hh(_0x127ad2, _0x214052, _0x4dd7f6, _0x16a1e3, _0x146dfb[_0x3d5ad8 + 10], 23, -1094730640);
    _0x16a1e3 = md5_hh(_0x16a1e3, _0x127ad2, _0x214052, _0x4dd7f6, _0x146dfb[_0x3d5ad8 + 13], 4, 681279174);
    _0x4dd7f6 = md5_hh(_0x4dd7f6, _0x16a1e3, _0x127ad2, _0x214052, _0x146dfb[_0x3d5ad8 + 0], 11, -358537222);
    _0x214052 = md5_hh(_0x214052, _0x4dd7f6, _0x16a1e3, _0x127ad2, _0x146dfb[_0x3d5ad8 + 3], 16, -722521979);
    _0x127ad2 = md5_hh(_0x127ad2, _0x214052, _0x4dd7f6, _0x16a1e3, _0x146dfb[_0x3d5ad8 + 6], 23, 76029189);
    _0x16a1e3 = md5_hh(_0x16a1e3, _0x127ad2, _0x214052, _0x4dd7f6, _0x146dfb[_0x3d5ad8 + 9], 4, -640364487);
    _0x4dd7f6 = md5_hh(_0x4dd7f6, _0x16a1e3, _0x127ad2, _0x214052, _0x146dfb[_0x3d5ad8 + 12], 11, -421815835);
    _0x214052 = md5_hh(_0x214052, _0x4dd7f6, _0x16a1e3, _0x127ad2, _0x146dfb[_0x3d5ad8 + 15], 16, 530742520);
    _0x127ad2 = md5_hh(_0x127ad2, _0x214052, _0x4dd7f6, _0x16a1e3, _0x146dfb[_0x3d5ad8 + 2], 23, -995338651);
    _0x16a1e3 = md5_ii(_0x16a1e3, _0x127ad2, _0x214052, _0x4dd7f6, _0x146dfb[_0x3d5ad8 + 0], 6, -198630844);
    _0x4dd7f6 = md5_ii(_0x4dd7f6, _0x16a1e3, _0x127ad2, _0x214052, _0x146dfb[_0x3d5ad8 + 7], 10, 1126891415);
    _0x214052 = md5_ii(_0x214052, _0x4dd7f6, _0x16a1e3, _0x127ad2, _0x146dfb[_0x3d5ad8 + 14], 15, -1416354905);
    _0x127ad2 = md5_ii(_0x127ad2, _0x214052, _0x4dd7f6, _0x16a1e3, _0x146dfb[_0x3d5ad8 + 5], 21, -57434055);
    _0x16a1e3 = md5_ii(_0x16a1e3, _0x127ad2, _0x214052, _0x4dd7f6, _0x146dfb[_0x3d5ad8 + 12], 6, 1700485571);
    _0x4dd7f6 = md5_ii(_0x4dd7f6, _0x16a1e3, _0x127ad2, _0x214052, _0x146dfb[_0x3d5ad8 + 3], 10, -1894986606);
    _0x214052 = md5_ii(_0x214052, _0x4dd7f6, _0x16a1e3, _0x127ad2, _0x146dfb[_0x3d5ad8 + 10], 15, -1051523);
    _0x127ad2 = md5_ii(_0x127ad2, _0x214052, _0x4dd7f6, _0x16a1e3, _0x146dfb[_0x3d5ad8 + 1], 21, -2054922799);
    _0x16a1e3 = md5_ii(_0x16a1e3, _0x127ad2, _0x214052, _0x4dd7f6, _0x146dfb[_0x3d5ad8 + 8], 6, 1873313359);
    _0x4dd7f6 = md5_ii(_0x4dd7f6, _0x16a1e3, _0x127ad2, _0x214052, _0x146dfb[_0x3d5ad8 + 15], 10, -30611744);
    _0x214052 = md5_ii(_0x214052, _0x4dd7f6, _0x16a1e3, _0x127ad2, _0x146dfb[_0x3d5ad8 + 6], 15, -1560198380);
    _0x127ad2 = md5_ii(_0x127ad2, _0x214052, _0x4dd7f6, _0x16a1e3, _0x146dfb[_0x3d5ad8 + 13], 21, 1309151649);
    _0x16a1e3 = md5_ii(_0x16a1e3, _0x127ad2, _0x214052, _0x4dd7f6, _0x146dfb[_0x3d5ad8 + 4], 6, -145523070);
    _0x4dd7f6 = md5_ii(_0x4dd7f6, _0x16a1e3, _0x127ad2, _0x214052, _0x146dfb[_0x3d5ad8 + 11], 10, -1120210379);
    _0x214052 = md5_ii(_0x214052, _0x4dd7f6, _0x16a1e3, _0x127ad2, _0x146dfb[_0x3d5ad8 + 2], 15, 718787259);
    _0x127ad2 = md5_ii(_0x127ad2, _0x214052, _0x4dd7f6, _0x16a1e3, _0x146dfb[_0x3d5ad8 + 9], 21, -343485551);
    _0x16a1e3 = safe_add(_0x16a1e3, _0x568805);
    _0x127ad2 = safe_add(_0x127ad2, _0x4deba6);
    _0x214052 = safe_add(_0x214052, _0x156ec0);
    _0x4dd7f6 = safe_add(_0x4dd7f6, _0x1b2b66);
  }
  return Array(_0x16a1e3, _0x127ad2, _0x214052, _0x4dd7f6);
}
function md5_cmn(_0x32d6bc, _0x3a494f, _0x30bc43, _0x5731fd, _0x5815e0, _0x5eeffc) {
  return safe_add(bit_rol(safe_add(safe_add(_0x3a494f, _0x32d6bc), safe_add(_0x5731fd, _0x5eeffc)), _0x5815e0), _0x30bc43);
}
function md5_ff(_0x3b7eb7, _0x7260f0, _0xe0b94, _0x4d6a39, _0x5b675b, _0x15f9cc, _0x4f8db0) {
  return md5_cmn(_0x7260f0 & _0xe0b94 | ~_0x7260f0 & _0x4d6a39, _0x3b7eb7, _0x7260f0, _0x5b675b, _0x15f9cc, _0x4f8db0);
}
function md5_gg(_0x311043, _0x5b0fc1, _0x247ff3, _0x273bfb, _0x2899bb, _0x1fdaf6, _0x11047c) {
  return md5_cmn(_0x5b0fc1 & _0x273bfb | _0x247ff3 & ~_0x273bfb, _0x311043, _0x5b0fc1, _0x2899bb, _0x1fdaf6, _0x11047c);
}
function md5_hh(_0x78965f, _0x1d4368, _0x1a8fd0, _0x43855e, _0x5ae8af, _0x150a1c, _0x3a1eb1) {
  return md5_cmn(_0x1d4368 ^ _0x1a8fd0 ^ _0x43855e, _0x78965f, _0x1d4368, _0x5ae8af, _0x150a1c, _0x3a1eb1);
}
function md5_ii(_0x32f85a, _0x1619c8, _0x1eb030, _0x1135ee, _0x49e66a, _0x268ab6, _0x197c47) {
  return md5_cmn(_0x1eb030 ^ (_0x1619c8 | ~_0x1135ee), _0x32f85a, _0x1619c8, _0x49e66a, _0x268ab6, _0x197c47);
}
function safe_add(_0x593aae, _0x2fe6b6) {
  var _0x415f25 = (65535 & _0x593aae) + (65535 & _0x2fe6b6);
  var _0x1243d6 = (_0x593aae >> 16) + (_0x2fe6b6 >> 16) + (_0x415f25 >> 16);
  return _0x1243d6 << 16 | 65535 & _0x415f25;
}
function bit_rol(_0x260ff6, _0x57661f) {
  return _0x260ff6 << _0x57661f | _0x260ff6 >>> 32 - _0x57661f;
}
var hexcase = 0;
var b64pad = "";
function Env(_0x19b29b, _0x4469aa) {
  class _0xc5c9cd {
    constructor(_0x551631) {
      this.env = _0x551631;
    }
    send(_0x272392, _0x1eac1b = "GET") {
      _0x272392 = "string" == typeof _0x272392 ? {
        url: _0x272392
      } : _0x272392;
      let _0x20c0a1 = this.get;
      "POST" === _0x1eac1b && (_0x20c0a1 = this.post);
      return new Promise((_0x257dcf, _0x59816d) => {
        _0x20c0a1.call(this, _0x272392, (_0x50f9dd, _0x2e4aa3, _0x1cfd41) => {
          _0x50f9dd ? _0x59816d(_0x50f9dd) : _0x257dcf(_0x2e4aa3);
        });
      });
    }
    get(_0x2677c7) {
      return this.send.call(this.env, _0x2677c7);
    }
    post(_0x23449e) {
      return this.send.call(this.env, _0x23449e, "POST");
    }
  }
  return new class {
    constructor(_0x37aa66, _0x2901af) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = _0x37aa66;
      this.http = new _0xc5c9cd(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x2901af);
      this.log("", this.name + ", 开始!");
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : undefined;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(_0xf13e97, _0x54b117 = null) {
      try {
        return JSON.parse(_0xf13e97);
      } catch {
        return _0x54b117;
      }
    }
    toStr(_0x232620, _0x405941 = null, ..._0x4477b3) {
      try {
        return JSON.stringify(_0x232620, ..._0x4477b3);
      } catch {
        return _0x405941;
      }
    }
    getjson(_0x56f6fd, _0x1f72b0) {
      let _0x15ba59 = _0x1f72b0;
      if (this.getdata(_0x56f6fd)) {
        try {
          _0x15ba59 = JSON.parse(this.getdata(_0x56f6fd));
        } catch {}
      }
      return _0x15ba59;
    }
    setjson(_0x299e26, _0x591d4f) {
      try {
        return this.setdata(JSON.stringify(_0x299e26), _0x591d4f);
      } catch {
        return false;
      }
    }
    getScript(_0x15aee5) {
      return new Promise(_0x134132 => {
        this.get({
          url: _0x15aee5
        }, (_0x354e15, _0x4542e2, _0x331a69) => _0x134132(_0x331a69));
      });
    }
    runScript(_0x5e89cd, _0x331cd3) {
      return new Promise(_0x39d66b => {
        let _0x4539a2 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x4539a2 = _0x4539a2 ? _0x4539a2.replace(/\n/g, "").trim() : _0x4539a2;
        let _0x320fbd = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x320fbd = _0x320fbd ? 1 * _0x320fbd : 20;
        _0x320fbd = _0x331cd3 && _0x331cd3.timeout ? _0x331cd3.timeout : _0x320fbd;
        const [_0x529c97, _0x1860d6] = _0x4539a2.split("@");
        const _0x1bf2bb = {
          url: "http://" + _0x1860d6 + "/v1/scripting/evaluate",
          body: {
            script_text: _0x5e89cd,
            mock_type: "cron",
            timeout: _0x320fbd
          },
          headers: {
            "X-Key": _0x529c97,
            Accept: "*/*"
          },
          timeout: _0x320fbd
        };
        this.post(_0x1bf2bb, (_0x1e8528, _0xffdd38, _0x4f0ab1) => _0x39d66b(_0x4f0ab1));
      }).catch(_0x4f067d => this.logErr(_0x4f067d));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x7b130b = this.path.resolve(this.dataFile);
        const _0x44cc10 = this.path.resolve(process.cwd(), this.dataFile);
        const _0x456b59 = this.fs.existsSync(_0x7b130b);
        const _0x508c92 = !_0x456b59 && this.fs.existsSync(_0x44cc10);
        if (!_0x456b59 && !_0x508c92) {
          return {};
        }
        {
          const _0x8bc55e = _0x456b59 ? _0x7b130b : _0x44cc10;
          try {
            return JSON.parse(this.fs.readFileSync(_0x8bc55e));
          } catch (_0x5946ee) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x56896e = this.path.resolve(this.dataFile);
        const _0x4cd534 = this.path.resolve(process.cwd(), this.dataFile);
        const _0xd9daee = this.fs.existsSync(_0x56896e);
        const _0x2a8331 = !_0xd9daee && this.fs.existsSync(_0x4cd534);
        const _0x3e6d90 = JSON.stringify(this.data);
        _0xd9daee ? this.fs.writeFileSync(_0x56896e, _0x3e6d90) : _0x2a8331 ? this.fs.writeFileSync(_0x4cd534, _0x3e6d90) : this.fs.writeFileSync(_0x56896e, _0x3e6d90);
      }
    }
    lodash_get(_0xdfa2bb, _0x3eb19b, _0x38dd49) {
      const _0x306a3a = _0x3eb19b.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x4da11f = _0xdfa2bb;
      for (const _0x277395 of _0x306a3a) if (_0x4da11f = Object(_0x4da11f)[_0x277395], undefined === _0x4da11f) {
        return _0x38dd49;
      }
      return _0x4da11f;
    }
    lodash_set(_0x1eea3e, _0x50defc, _0x4ee064) {
      Object(_0x1eea3e) !== _0x1eea3e || (Array.isArray(_0x50defc) || (_0x50defc = _0x50defc.toString().match(/[^.[\]]+/g) || []), _0x50defc.slice(0, -1).reduce((_0x11336c, _0x201ab7, _0x37dffa) => Object(_0x11336c[_0x201ab7]) === _0x11336c[_0x201ab7] ? _0x11336c[_0x201ab7] : _0x11336c[_0x201ab7] = Math.abs(_0x50defc[_0x37dffa + 1]) >> 0 == +_0x50defc[_0x37dffa + 1] ? [] : {}, _0x1eea3e)[_0x50defc[_0x50defc.length - 1]] = _0x4ee064);
      return _0x1eea3e;
    }
    getdata(_0xb95670) {
      let _0xd4f9fe = this.getval(_0xb95670);
      if (/^@/.test(_0xb95670)) {
        const [, _0x318eee, _0x242887] = /^@(.*?)\.(.*?)$/.exec(_0xb95670);
        const _0x353a74 = _0x318eee ? this.getval(_0x318eee) : "";
        if (_0x353a74) {
          try {
            const _0x241c66 = JSON.parse(_0x353a74);
            _0xd4f9fe = _0x241c66 ? this.lodash_get(_0x241c66, _0x242887, "") : _0xd4f9fe;
          } catch (_0x125dad) {
            _0xd4f9fe = "";
          }
        }
      }
      return _0xd4f9fe;
    }
    setdata(_0x2fdd8b, _0x9e39da) {
      let _0x475933 = false;
      if (/^@/.test(_0x9e39da)) {
        const [, _0x7b0f0c, _0x3dd999] = /^@(.*?)\.(.*?)$/.exec(_0x9e39da);
        const _0x5527a8 = this.getval(_0x7b0f0c);
        const _0x11a216 = _0x7b0f0c ? "null" === _0x5527a8 ? null : _0x5527a8 || "{}" : "{}";
        try {
          const _0x35524f = JSON.parse(_0x11a216);
          this.lodash_set(_0x35524f, _0x3dd999, _0x2fdd8b);
          _0x475933 = this.setval(JSON.stringify(_0x35524f), _0x7b0f0c);
        } catch (_0x287011) {
          const _0x421ab3 = {};
          this.lodash_set(_0x421ab3, _0x3dd999, _0x2fdd8b);
          _0x475933 = this.setval(JSON.stringify(_0x421ab3), _0x7b0f0c);
        }
      } else {
        _0x475933 = this.setval(_0x2fdd8b, _0x9e39da);
      }
      return _0x475933;
    }
    getval(_0x54cd02) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(_0x54cd02);
        case "Quantumult X":
          return $prefs.valueForKey(_0x54cd02);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[_0x54cd02];
        default:
          return this.data && this.data[_0x54cd02] || null;
      }
    }
    setval(_0x127bf5, _0x15b68e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(_0x127bf5, _0x15b68e);
        case "Quantumult X":
          return $prefs.setValueForKey(_0x127bf5, _0x15b68e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[_0x15b68e] = _0x127bf5;
          this.writedata();
          return true;
        default:
          return this.data && this.data[_0x15b68e] || null;
      }
    }
    initGotEnv(_0x247d47) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x247d47 && (_0x247d47.headers = _0x247d47.headers ? _0x247d47.headers : {}, _0x247d47 && (_0x247d47.headers = _0x247d47.headers ? _0x247d47.headers : {}, undefined === _0x247d47.headers.cookie && undefined === _0x247d47.headers.Cookie && undefined === _0x247d47.cookieJar && (_0x247d47.cookieJar = this.ckjar)));
    }
    get(_0x19f04a, _0x3a9b2a = () => {}) {
      switch (_0x19f04a.headers && (delete _0x19f04a.headers["Content-Type"], delete _0x19f04a.headers["Content-Length"], delete _0x19f04a.headers["content-type"], delete _0x19f04a.headers["content-length"]), _0x19f04a.params && (_0x19f04a.url += "?" + this.queryStr(_0x19f04a.params)), undefined === _0x19f04a.followRedirect || _0x19f04a.followRedirect || ((this.isSurge() || this.isLoon()) && (_0x19f04a["auto-redirect"] = false), this.isQuanX() && (_0x19f04a.opts ? _0x19f04a.opts.redirection = false : _0x19f04a.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (_0x19f04a.headers = _0x19f04a.headers || {}, Object.assign(_0x19f04a.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient.get(_0x19f04a, (_0x2ead2f, _0x5dbefe, _0x1e0db4) => {
            !_0x2ead2f && _0x5dbefe && (_0x5dbefe.body = _0x1e0db4, _0x5dbefe.statusCode = _0x5dbefe.status ? _0x5dbefe.status : _0x5dbefe.statusCode, _0x5dbefe.status = _0x5dbefe.statusCode);
            _0x3a9b2a(_0x2ead2f, _0x5dbefe, _0x1e0db4);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (_0x19f04a.opts = _0x19f04a.opts || {}, Object.assign(_0x19f04a.opts, {
            hints: false
          }));
          $task.fetch(_0x19f04a).then(_0xb8f1a => {
            const {
              statusCode: _0x25a1d8,
              statusCode: _0x4936ab,
              headers: _0x474843,
              body: _0x4bec9b,
              bodyBytes: _0x532ff6
            } = _0xb8f1a;
            _0x3a9b2a(null, {
              status: _0x25a1d8,
              statusCode: _0x4936ab,
              headers: _0x474843,
              body: _0x4bec9b,
              bodyBytes: _0x532ff6
            }, _0x4bec9b, _0x532ff6);
          }, _0x1f1f1a => _0x3a9b2a(_0x1f1f1a && _0x1f1f1a.error || "UndefinedError"));
          break;
        case "Node.js":
          let _0x234143 = require("iconv-lite");
          this.initGotEnv(_0x19f04a);
          this.got(_0x19f04a).on("redirect", (_0x4f0582, _0x27f908) => {
            try {
              if (_0x4f0582.headers["set-cookie"]) {
                const _0x8bd65f = _0x4f0582.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                _0x8bd65f && this.ckjar.setCookieSync(_0x8bd65f, null);
                _0x27f908.cookieJar = this.ckjar;
              }
            } catch (_0xbab4ab) {
              this.logErr(_0xbab4ab);
            }
          }).then(_0x22312a => {
            const {
              statusCode: _0x4d7695,
              statusCode: _0x21beba,
              headers: _0x1d77c6,
              rawBody: _0x574365
            } = _0x22312a;
            const _0x3f1083 = _0x234143.decode(_0x574365, this.encoding);
            _0x3a9b2a(null, {
              status: _0x4d7695,
              statusCode: _0x21beba,
              headers: _0x1d77c6,
              rawBody: _0x574365,
              body: _0x3f1083
            }, _0x3f1083);
          }, _0x3229ce => {
            const {
              message: _0x1cf61b,
              response: _0x587af6
            } = _0x3229ce;
            _0x3a9b2a(_0x1cf61b, _0x587af6, _0x587af6 && _0x234143.decode(_0x587af6.rawBody, this.encoding));
          });
          break;
      }
    }
    post(_0x38109a, _0x2be0d5 = () => {}) {
      const _0x2da0a7 = _0x38109a.method ? _0x38109a.method.toLocaleLowerCase() : "post";
      switch (_0x38109a.body && _0x38109a.headers && !_0x38109a.headers["Content-Type"] && !_0x38109a.headers["content-type"] && (_0x38109a.headers["content-type"] = "application/x-www-form-urlencoded"), _0x38109a.headers && (delete _0x38109a.headers["Content-Length"], delete _0x38109a.headers["content-length"]), undefined === _0x38109a.followRedirect || _0x38109a.followRedirect || ((this.isSurge() || this.isLoon()) && (_0x38109a["auto-redirect"] = false), this.isQuanX() && (_0x38109a.opts ? _0x38109a.opts.redirection = false : _0x38109a.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (_0x38109a.headers = _0x38109a.headers || {}, Object.assign(_0x38109a.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient[_0x2da0a7](_0x38109a, (_0x568a46, _0x9c66d1, _0x4dba82) => {
            !_0x568a46 && _0x9c66d1 && (_0x9c66d1.body = _0x4dba82, _0x9c66d1.statusCode = _0x9c66d1.status ? _0x9c66d1.status : _0x9c66d1.statusCode, _0x9c66d1.status = _0x9c66d1.statusCode);
            _0x2be0d5(_0x568a46, _0x9c66d1, _0x4dba82);
          });
          break;
        case "Quantumult X":
          _0x38109a.method = _0x2da0a7;
          this.isNeedRewrite && (_0x38109a.opts = _0x38109a.opts || {}, Object.assign(_0x38109a.opts, {
            hints: false
          }));
          $task.fetch(_0x38109a).then(_0x74dc87 => {
            const {
              statusCode: _0x15bee0,
              statusCode: _0x91027d,
              headers: _0x173285,
              body: _0x5f4817,
              bodyBytes: _0x1bb45b
            } = _0x74dc87;
            _0x2be0d5(null, {
              status: _0x15bee0,
              statusCode: _0x91027d,
              headers: _0x173285,
              body: _0x5f4817,
              bodyBytes: _0x1bb45b
            }, _0x5f4817, _0x1bb45b);
          }, _0x4407f4 => _0x2be0d5(_0x4407f4 && _0x4407f4.error || "UndefinedError"));
          break;
        case "Node.js":
          let _0x168e3e = require("iconv-lite");
          this.initGotEnv(_0x38109a);
          const {
            url: _0x195227,
            ..._0x162c2e
          } = _0x38109a;
          this.got[_0x2da0a7](_0x195227, _0x162c2e).then(_0x3391f5 => {
            const {
              statusCode: _0x54c155,
              statusCode: _0x1ed7d0,
              headers: _0x4c1441,
              rawBody: _0x499b9e
            } = _0x3391f5;
            const _0x4267fb = _0x168e3e.decode(_0x499b9e, this.encoding);
            _0x2be0d5(null, {
              status: _0x54c155,
              statusCode: _0x1ed7d0,
              headers: _0x4c1441,
              rawBody: _0x499b9e,
              body: _0x4267fb
            }, _0x4267fb);
          }, _0x38dd47 => {
            const {
              message: _0x2f4d8f,
              response: _0x4c6727
            } = _0x38dd47;
            _0x2be0d5(_0x2f4d8f, _0x4c6727, _0x4c6727 && _0x168e3e.decode(_0x4c6727.rawBody, this.encoding));
          });
          break;
      }
    }
    time(_0x35f26c, _0x1fbd96 = null) {
      const _0x4b5f02 = _0x1fbd96 ? new Date(_0x1fbd96) : new Date();
      let _0x36d12e = {
        "M+": _0x4b5f02.getMonth() + 1,
        "d+": _0x4b5f02.getDate(),
        "H+": _0x4b5f02.getHours(),
        "m+": _0x4b5f02.getMinutes(),
        "s+": _0x4b5f02.getSeconds(),
        "q+": Math.floor((_0x4b5f02.getMonth() + 3) / 3),
        S: _0x4b5f02.getMilliseconds()
      };
      /(y+)/.test(_0x35f26c) && (_0x35f26c = _0x35f26c.replace(RegExp.$1, (_0x4b5f02.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x3daec8 in _0x36d12e) new RegExp("(" + _0x3daec8 + ")").test(_0x35f26c) && (_0x35f26c = _0x35f26c.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x36d12e[_0x3daec8] : ("00" + _0x36d12e[_0x3daec8]).substr(("" + _0x36d12e[_0x3daec8]).length)));
      return _0x35f26c;
    }
    queryStr(_0x34a62b) {
      let _0x53822f = "";
      for (const _0x2f150f in _0x34a62b) {
        let _0xafa190 = _0x34a62b[_0x2f150f];
        null != _0xafa190 && "" !== _0xafa190 && ("object" == typeof _0xafa190 && (_0xafa190 = JSON.stringify(_0xafa190)), _0x53822f += _0x2f150f + "=" + _0xafa190 + "&");
      }
      _0x53822f = _0x53822f.substring(0, _0x53822f.length - 1);
      return _0x53822f;
    }
    msg(_0xe9a4c9 = _0x19b29b, _0x5a5e0e = "", _0x2e14bf = "", _0x4acb4c = {}) {
      const _0x3429b1 = _0x547a2e => {
        const {
          $open: _0x412388,
          $copy: _0x26aab5,
          $media: _0x3189fc,
          $mediaMime: _0x9cfb7a
        } = _0x547a2e;
        switch (typeof _0x547a2e) {
          case undefined:
            return _0x547a2e;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: _0x547a2e
                };
              case "Loon":
              case "Shadowrocket":
                return _0x547a2e;
              case "Quantumult X":
                return {
                  "open-url": _0x547a2e
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const _0x4cb88f = {};
                  let _0xcc4447 = _0x547a2e.openUrl || _0x547a2e.url || _0x547a2e["open-url"] || _0x412388;
                  _0xcc4447 && Object.assign(_0x4cb88f, {
                    action: "open-url",
                    url: _0xcc4447
                  });
                  let _0xc44e59 = _0x547a2e["update-pasteboard"] || _0x547a2e.updatePasteboard || _0x26aab5;
                  if (_0xc44e59 && Object.assign(_0x4cb88f, {
                    action: "clipboard",
                    text: _0xc44e59
                  }), _0x3189fc) {
                    let _0x58038f;
                    let _0x57f23d;
                    let _0x4f1e03;
                    if (_0x3189fc.startsWith("http")) {
                      _0x58038f = _0x3189fc;
                    } else {
                      if (_0x3189fc.startsWith("data:")) {
                        const [_0x48e497] = _0x3189fc.split(";");
                        const [, _0x758709] = _0x3189fc.split(",");
                        _0x57f23d = _0x758709;
                        _0x4f1e03 = _0x48e497.replace("data:", "");
                      } else {
                        _0x57f23d = _0x3189fc;
                        _0x4f1e03 = (_0x4072b6 => {
                          const _0x57f60c = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var _0x3810f1 in _0x57f60c) if (0 === _0x4072b6.indexOf(_0x3810f1)) {
                            return _0x57f60c[_0x3810f1];
                          }
                          return null;
                        })(_0x3189fc);
                      }
                    }
                    Object.assign(_0x4cb88f, {
                      "media-url": _0x58038f,
                      "media-base64": _0x57f23d,
                      "media-base64-mime": _0x9cfb7a ?? _0x4f1e03
                    });
                  }
                  Object.assign(_0x4cb88f, {
                    "auto-dismiss": _0x547a2e["auto-dismiss"],
                    sound: _0x547a2e.sound
                  });
                  return _0x4cb88f;
                }
              case "Loon":
                {
                  const _0x2978a5 = {};
                  let _0x4a8d3f = _0x547a2e.openUrl || _0x547a2e.url || _0x547a2e["open-url"] || _0x412388;
                  _0x4a8d3f && Object.assign(_0x2978a5, {
                    openUrl: _0x4a8d3f
                  });
                  let _0x4407ed = _0x547a2e.mediaUrl || _0x547a2e["media-url"];
                  _0x3189fc?.["startsWith"]("http") && (_0x4407ed = _0x3189fc);
                  _0x4407ed && Object.assign(_0x2978a5, {
                    mediaUrl: _0x4407ed
                  });
                  console.log(JSON.stringify(_0x2978a5));
                  return _0x2978a5;
                }
              case "Quantumult X":
                {
                  const _0x6b6a5c = {};
                  let _0x10ba92 = _0x547a2e["open-url"] || _0x547a2e.url || _0x547a2e.openUrl || _0x412388;
                  _0x10ba92 && Object.assign(_0x6b6a5c, {
                    "open-url": _0x10ba92
                  });
                  let _0x312e2c = _0x547a2e["media-url"] || _0x547a2e.mediaUrl;
                  _0x3189fc?.["startsWith"]("http") && (_0x312e2c = _0x3189fc);
                  _0x312e2c && Object.assign(_0x6b6a5c, {
                    "media-url": _0x312e2c
                  });
                  let _0x190165 = _0x547a2e["update-pasteboard"] || _0x547a2e.updatePasteboard || _0x26aab5;
                  _0x190165 && Object.assign(_0x6b6a5c, {
                    "update-pasteboard": _0x190165
                  });
                  console.log(JSON.stringify(_0x6b6a5c));
                  return _0x6b6a5c;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(_0xe9a4c9, _0x5a5e0e, _0x2e14bf, _0x3429b1(_0x4acb4c));
            break;
          case "Quantumult X":
            $notify(_0xe9a4c9, _0x5a5e0e, _0x2e14bf, _0x3429b1(_0x4acb4c));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let _0x8cbdc = ["", "==============📣系统通知📣=============="];
        _0x8cbdc.push(_0xe9a4c9);
        _0x5a5e0e && _0x8cbdc.push(_0x5a5e0e);
        _0x2e14bf && _0x8cbdc.push(_0x2e14bf);
        console.log(_0x8cbdc.join("\n"));
        this.logs = this.logs.concat(_0x8cbdc);
      }
    }
    debug(..._0x271b3c) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (_0x271b3c.length > 0 && (this.logs = [...this.logs, ..._0x271b3c]), console.log("" + this.logLevelPrefixs.debug + _0x271b3c.map(_0x42d66c => _0x42d66c ?? String(_0x42d66c)).join(this.logSeparator)));
    }
    info(..._0x209135) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (_0x209135.length > 0 && (this.logs = [...this.logs, ..._0x209135]), console.log("" + this.logLevelPrefixs.info + _0x209135.map(_0x2dd325 => _0x2dd325 ?? String(_0x2dd325)).join(this.logSeparator)));
    }
    warn(..._0x35158f) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (_0x35158f.length > 0 && (this.logs = [...this.logs, ..._0x35158f]), console.log("" + this.logLevelPrefixs.warn + _0x35158f.map(_0x5e6898 => _0x5e6898 ?? String(_0x5e6898)).join(this.logSeparator)));
    }
    error(..._0x397af5) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (_0x397af5.length > 0 && (this.logs = [...this.logs, ..._0x397af5]), console.log("" + this.logLevelPrefixs.error + _0x397af5.map(_0x1a32ee => _0x1a32ee ?? String(_0x1a32ee)).join(this.logSeparator)));
    }
    log(..._0x2e271c) {
      _0x2e271c.length > 0 && (this.logs = [...this.logs, ..._0x2e271c]);
      console.log(_0x2e271c.map(_0x2fe12d => _0x2fe12d ?? String(_0x2fe12d)).join(this.logSeparator));
    }
    logErr(_0x1d4eb5, _0x2c930f) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", "❗️" + this.name + ", 错误!", _0x2c930f, _0x1d4eb5);
          break;
        case "Node.js":
          this.log("", "❗️" + this.name + ", 错误!", _0x2c930f, undefined !== _0x1d4eb5.message ? _0x1d4eb5.message : _0x1d4eb5, _0x1d4eb5.stack);
          break;
      }
    }
    wait(_0x5d59ef) {
      return new Promise(_0x4c9527 => setTimeout(_0x4c9527, _0x5d59ef));
    }
    done(_0x3ced38 = {}) {
      const _0x16b40c = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", this.name + ", 结束! 🕛 " + _0x16b40c + " 秒"), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(_0x3ced38);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(_0x19b29b, _0x4469aa);
}