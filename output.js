//Thu Nov 20 2025 11:40:00 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x55ee8e = require("querystring"),
  _0xed8a87 = require("axios"),
  _0x5aef01 = require("crypto"),
  _0x30bef3 = require("querystring"),
  {
    SocksProxyAgent: _0x52e2ab
  } = require("socks-proxy-agent"),
  _0x1c535e = console.log;
console.log = function (..._0x306a26) {
  const _0x3f4e71 = new Date(),
    _0x42a46b = "[" + String(_0x3f4e71.getHours()).padStart(2, "0") + ":" + String(_0x3f4e71.getMinutes()).padStart(2, "0") + ":" + String(_0x3f4e71.getSeconds()).padStart(2, "0") + "]";
  _0x1c535e(_0x42a46b, ..._0x306a26);
};
const _0x2f618d = _0x1a568f("ED9NHWodQWACQ3oKRm0dSXoXVGEIVmkMS3tZBzAcGTtQQyBaHg=="),
  _0xd5a02f = _0x1a568f("ED9NHWodQWACQ3oKRm0dSXoXVGEIVmkMS3tZBzAcDyJNBTRADyYbAjxI"),
  _0x46af6d = _0x1a568f("ED9NHWodQWACQ3oKRm0dSXoXVGEIVmkMS3tZBzAcEyYXHThC"),
  _0x53342f = _0x1a568f("ED9NHWodQWACQ3oKRm0dSXoXVGEIVmkMS3tZBzAcCyJeA35CBiE=");
function _0x1a568f(_0x2bc2f0) {
  const _0x5dec4c = "xK9mP2nQ5rT8wY3";
  let _0x4befce = "";
  const _0x3c18e3 = Buffer.from(_0x2bc2f0, "base64").toString("binary");
  for (let _0x535673 = 0; _0x535673 < _0x3c18e3.length; _0x535673++) {
    _0x4befce += String.fromCharCode(_0x3c18e3.charCodeAt(_0x535673) ^ _0x5dec4c.charCodeAt(_0x535673 % _0x5dec4c.length));
  }
  return _0x4befce;
}
const _0x3afe4e = _0x1a568f("EzhmDCVGAQ5cAgtLEjpBHT9mBjVLMWMFQGA="),
  _0x3ce2c6 = _0x1a568f("EzhmHjlVAA5UAj1nBDxQCi5NMjtXFw4HQmYM"),
  _0x5176da = _0x1a568f("EzhmBj1tDyFcLSddFCtWDBRSCCltXGEHRg=="),
  _0x20105a = _0x1a568f("EzhmHjlVAA5UAj1nBTxACCRXHjVtBTRMLWYIRW0=");
function _0x3bb017(_0x433f92, _0x46213c) {
  try {
    {
      const _0x574b54 = Buffer.from(_0x433f92, "base64").toString("binary");
      let _0x1300c1 = "";
      const _0x5c4fe1 = _0x46213c.length;
      for (let _0x2a4c9f = 0; _0x2a4c9f < _0x574b54.length; _0x2a4c9f++) {
        _0x1300c1 += String.fromCharCode(_0x574b54.charCodeAt(_0x2a4c9f) ^ _0x46213c.charCodeAt(_0x2a4c9f % _0x5c4fe1));
      }
      return JSON.parse(_0x1300c1);
    }
  } catch (_0x2ffc3a) {
    console.log("解密失败: " + _0x2ffc3a.message);
    return null;
  }
}
function _0x467125(_0xc01d9e, _0x14c60c = "") {
  if (process.env[_0xc01d9e] !== undefined) return process.env[_0xc01d9e];
  const _0x2e4d22 = _0xc01d9e.toLowerCase();
  for (const _0x54fdfc in process.env) {
    if (_0x54fdfc.toLowerCase() === _0x2e4d22) {
      return process.env[_0x54fdfc];
    }
  }
  return _0x14c60c;
}
function _0x1bbd07() {
  const _0x4d7082 = ["正在观看广告", "认真观看中...", "浏览广告内容", "模拟用户行为", "观看视频广告", "保持活跃状态", "广告浏览中", "正常观看时长"];
  return _0x4d7082[Math.floor(Math.random() * _0x4d7082.length)];
}
const _0x13e59b = _0x467125("DEV_MODE"),
  _0x1a0e8f = _0x13e59b === "1" || _0x13e59b === "true";
function _0x34109f(_0x3ebc32, _0x3aa9db) {
  const _0xa53d42 = parseInt(_0x467125(_0x3ebc32), 10);
  return isNaN(_0xa53d42) ? _0x3aa9db : _0xa53d42;
}
const _0x236885 = _0x467125("km"),
  _0x222341 = _0x34109f("KSLOW_REWARD_THRESHOLD", 200),
  _0x5c374f = _0x34109f("KSROUNDS", 5),
  _0x563f58 = _0x34109f("KSCOIN_LIMIT", 150000),
  _0x32d398 = _0x34109f("KSLOW_REWARD_LIMIT", 1),
  _0x5b81ac = _0x34109f("KSFOLLOW_COUNT", 1),
  _0x263408 = _0x34109f("KSSEARCHFOLLOW_COUNT", 100),
  _0x4000d7 = _0x34109f("KSLOOK_COUNT", 5),
  _0x31ca39 = _0x34109f("KSSEARCH_COUNT", 5);
function _0x2e1874() {
  const _0x5d0b42 = _0x467125("tixian");
  if (!_0x5d0b42) {
    return {
      "enabled": false,
      "provider": "微信",
      "time": "",
      "autoExchange": true,
      "amount": 0
    };
  }
  const _0x5bc3bb = _0x5d0b42.replace(/\//g, ",").split(",").map(_0x11831b => _0x11831b.trim()),
    _0x40e2ba = {
      "enabled": false,
      "provider": "微信",
      "time": "",
      "autoExchange": true,
      "amount": 0
    };
  _0x5bc3bb[0] && (_0x40e2ba.enabled = _0x5bc3bb[0] === "1");
  if (_0x5bc3bb[1]) {
    {
      const _0x573770 = {
          "wx": "微信",
          "zfb": "支付宝",
          "yhk": "银行卡"
        },
        _0xa80da2 = _0x5bc3bb[1].toLowerCase();
      _0x40e2ba.provider = _0x573770[_0xa80da2] || "微信";
    }
  }
  _0x5bc3bb[2] && (_0x40e2ba.time = _0x5bc3bb[2]);
  if (_0x5bc3bb[3]) {
    _0x40e2ba.autoExchange = _0x5bc3bb[3] === "2";
  }
  if (_0x5bc3bb[4]) {
    const _0x5bc76e = parseFloat(_0x5bc3bb[4]);
    _0x40e2ba.amount = isNaN(_0x5bc76e) ? 0 : _0x5bc76e;
  }
  return _0x40e2ba;
}
const _0x47dabb = _0x2e1874();
function _0x3c8765() {
  const _0x343a20 = _0x467125("Task");
  if (!_0x343a20) return ["food", "box", "look", "search"];
  const _0x51c9e6 = _0x343a20.split(",").map(_0x2cea29 => _0x2cea29.trim().toLowerCase()).filter(Boolean),
    _0x5b7f09 = ["food", "box", "look", "search"],
    _0x3b69a7 = _0x51c9e6.filter(_0x5b4e9f => _0x5b7f09.includes(_0x5b4e9f));
  if (_0x3b69a7.length === 0) {
    return ["food", "box", "look", "search"];
  }
  const _0x2ce791 = _0x3b69a7.filter(_0xc8b6df => _0xc8b6df !== "look" && _0xc8b6df !== "search");
  if (_0x3b69a7.includes("search")) {
    _0x2ce791.push("search");
  }
  _0x3b69a7.includes("look") && _0x2ce791.push("look");
  return _0x2ce791;
}
function _0xf5c9a3() {
  const _0x4aa5a8 = [],
    _0x2c5f94 = new Set(),
    _0x5dc38c = _0x467125("ksck");
  if (_0x5dc38c) {
    {
      const _0x3edff1 = _0x5dc38c.split("&").map(_0x107df3 => _0x107df3.trim()).filter(Boolean);
      _0x4aa5a8.push(..._0x3edff1);
    }
  }
  for (let _0x11401b = 1; _0x11401b <= 666; _0x11401b++) {
    {
      const _0x478882 = "ksck" + _0x11401b,
        _0x18a98f = _0x467125(_0x478882);
      if (_0x18a98f) {
        const _0x129c5d = _0x18a98f.split("&").map(_0x5c0f02 => _0x5c0f02.trim()).filter(Boolean);
        _0x4aa5a8.push(..._0x129c5d);
      }
    }
  }
  const _0x3298bd = [];
  for (const _0x2d0e06 of _0x4aa5a8) {
    {
      if (!_0x2c5f94.has(_0x2d0e06)) {
        _0x2c5f94.add(_0x2d0e06);
        _0x3298bd.push(_0x2d0e06);
      }
    }
  }
  return _0x3298bd;
}
const _0x944c82 = _0xf5c9a3(),
  _0x2e6cb2 = _0x944c82.length,
  _0x585b61 = _0x3c8765();
console.log("================================================================================");
console.log("您可以根据需求设置以下环境变量来自定义任务行为：");
console.log("----------------------------------------------------------------");
console.log("账号/任务控制 (必填/常用):");
console.log("  - ksck/ksckX: 账号信息 (cookie#salt#proxy) - 必填项");
console.log("  - Task: 指定任务 (如 food,box,look,search)");
console.log("  - KSROUNDS: 总执行轮数 (默认 5)");
console.log("----------------------------------------------------------------");
console.log("频率/追加次数 (已支持自定义):");
console.log("  - KSLOOK_COUNT: 每轮 look (主任务) 次数 (默认 5)");
console.log("  - KSFOLLOW_COUNT: 每次 look 成功后 follow (追加) 次数 (默认 1)");
console.log("  - KSSEARCH_COUNT: 每轮 search (主任务) 次数 (默认 5)");
console.log("  - KSSEARCHFOLLOW_COUNT: 每次 search 成功后 search_follow (追加) 次数 (默认 100)");
console.log("----------------------------------------------------------------");
console.log("风控/限制设置:");
console.log("  - KSCOIN_LIMIT: 金币上限 (超过停止, 默认 150000)");
console.log("  - KSLOW_REWARD_LIMIT: 连续低奖励停止次数 (默认 1)");
console.log("  - MAX_CONCURRENCY: 最大并发账号数 (默认 3)");
console.log("================================================================");
console.log("💎 检测到环境变量配置：" + _0x2e6cb2 + "个账号");
console.log("🎯 将执行以下任务：" + _0x585b61.join(", "));
console.log("🎯 配置参数：轮数=" + _0x5c374f + ", look次数/轮=" + _0x4000d7 + ", search次数/轮=" + _0x31ca39 + ", follow次数/look=" + _0x5b81ac + ", search_follow次数/search=" + _0x263408 + ", 金币上限=" + _0x563f58 + ", 低奖励阈值=" + _0x222341 + ", 连续低奖励上限=" + _0x32d398);
if (_0x47dabb.enabled) {
  const _0x1be759 = {
      "微信": "WX",
      "支付宝": "ZFB",
      "银行卡": "YHK"
    },
    _0x4fba86 = _0x1be759[_0x47dabb.provider] || "WX",
    _0x45a6c0 = _0x47dabb.time || "24.00",
    _0x30b58a = _0x47dabb.autoExchange ? "2" : "3";
  console.log("💰 提现配置: 1," + _0x4fba86 + "," + _0x45a6c0 + "," + _0x30b58a + "," + (_0x47dabb.amount || 0) + " → tixian");
} else console.log("💰 提现配置: 0,WX,24.00,3,30 → tixian");
const _0x43cd30 = _0x34109f("MAX_CONCURRENCY", 999);
_0x2e6cb2 > _0x43cd30 && (console.log("错误: 检测到 " + _0x2e6cb2 + " 个账号配置，最多只允许" + _0x43cd30 + "个"), process.exit(1));
function _0x5b5daf() {
  try {
    const _0x493666 = _0x1a169c => {
        {
          const _0x18fd5b = "0123456789abcdef";
          let _0x5b313d = "";
          for (let _0x48198c = 0; _0x48198c < _0x1a169c; _0x48198c++) {
            _0x5b313d += _0x18fd5b.charAt(Math.floor(Math.random() * _0x18fd5b.length));
          }
          return _0x5b313d;
        }
      },
      _0x533dba = _0x493666(16),
      _0x2db749 = "ANDROID_" + _0x533dba;
    return _0x2db749;
  } catch (_0x484349) {
    {
      const _0x1917f3 = Date.now().toString(16).toUpperCase();
      return "ANDROID_" + _0x1917f3.substring(0, 16);
    }
  }
}
async function _0x541164(_0x1b9a3e) {
  if (!_0x1b9a3e) return console.log("❌ 错误: 未设置km环境变量，无法运行脚本"), false;
  console.log("🔐 正在验证km变量...");
  try {
    const _0x2b0d08 = Math.floor(Date.now() / 1000).toString(),
      _0x131249 = _0x5aef01.createHash("md5").update(_0x1b9a3e + _0x2b0d08 + _0x5176da).digest("hex"),
      {
        response: _0x44ec62,
        body: _0x4dcd49
      } = await _0xbacfa6({
        "method": "POST",
        "url": _0x46af6d,
        "headers": {
          "Content-Type": "application/json"
        },
        "body": JSON.stringify({
          "km": _0x1b9a3e,
          "timestamp": _0x2b0d08,
          "sign": _0x131249
        }),
        "timeout": 10000
      }, null, "km验证");
    if (_0x4dcd49 && _0x4dcd49.success === true) {
      console.log("✅ km变量验证成功，允许运行脚本");
      return true;
    } else {
      console.log("❌ km变量验证失败: " + (_0x4dcd49?.["message"] || "验证不通过"));
      return false;
    }
  } catch (_0x346f18) {
    console.log("❌ km变量验证异常: " + _0x346f18.message);
    return false;
  }
}
async function _0x5b231b(_0x3d51a7) {
  try {
    const _0x331db9 = Math.floor(Date.now() / 1000).toString(),
      _0x2e737c = _0x5aef01.createHash("md5").update(_0x3d51a7 + _0x331db9 + _0x5176da).digest("hex"),
      {
        body: _0x2cde80
      } = await _0xbacfa6({
        "method": "POST",
        "url": _0x46af6d,
        "headers": {
          "Content-Type": "application/json"
        },
        "body": JSON.stringify({
          "km": _0x3d51a7,
          "timestamp": _0x331db9,
          "sign": _0x2e737c
        }),
        "timeout": 10000
      }, null, "km检查");
    return {
      "valid": _0x2cde80 && _0x2cde80.success === true,
      "message": _0x2cde80?.["message"] || ""
    };
  } catch (_0x565151) {
    console.log("卡密检查失败: " + _0x565151.message);
    return {
      "valid": true,
      "message": _0x565151.message
    };
  }
}
let _0x4391e9 = false,
  _0x4eef1e = null;
async function _0x4228f2(_0x329a6b, _0x2dbd62) {
  if (!_0xd5a02f || !_0x47dabb.enabled) return {
    "success": false,
    "message": "未启用提现功能"
  };
  try {
    {
      const _0x5d47c5 = new URLSearchParams({
          "action": "withdraw_info",
          "cookie": _0x329a6b,
          "card": _0x236885
        }),
        {
          body: _0xd9f272
        } = await _0xbacfa6({
          "method": "POST",
          "url": _0xd5a02f,
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "body": _0x5d47c5.toString(),
          "timeout": 30000
        }, null, "查询提现额度");
      if (_0xd9f272 && _0xd9f272.success) {
        return {
          "success": true,
          "data": _0xd9f272.data
        };
      } else return {
        "success": false,
        "message": _0xd9f272?.["message"] || "查询失败"
      };
    }
  } catch (_0x3caa18) {
    return {
      "success": false,
      "message": _0x3caa18.message
    };
  }
}
async function _0x3dc547(_0x5db343, _0x52ebde) {
  if (!_0xd5a02f || !_0x47dabb.enabled) return {
    "success": false,
    "message": "未启用提现功能"
  };
  try {
    {
      const _0x3ab812 = new URLSearchParams({
          "action": "bind_info",
          "cookie": _0x5db343,
          "card": _0x236885
        }),
        {
          body: _0x5d5b39
        } = await _0xbacfa6({
          "method": "POST",
          "url": _0xd5a02f,
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "body": _0x3ab812.toString(),
          "timeout": 30000
        }, null, "查询绑定信息");
      return _0x5d5b39 && _0x5d5b39.success ? {
        "success": true,
        "data": _0x5d5b39.data
      } : {
        "success": false,
        "message": _0x5d5b39?.["message"] || "查询失败"
      };
    }
  } catch (_0x7666ee) {
    return {
      "success": false,
      "message": _0x7666ee.message
    };
  }
}
function _0x129beb(_0x3b0a23) {
  const _0x4b9306 = 300000,
    _0x5de7f4 = setInterval(async () => {
      console.log("\n定期检查卡密状态...");
      const _0xf35eb6 = await _0x5b231b(_0x3b0a23);
      if (!_0xf35eb6.valid) {
        {
          console.log("\n" + "=".repeat(50));
          console.log("[x] 卡密已失效！");
          console.log("=".repeat(50));
          console.log("" + _0xf35eb6.message);
          console.log("正在停止所有任务...");
          console.log("=".repeat(50) + "\n");
          _0x4391e9 = true;
          clearInterval(_0x5de7f4);
          process.exit(1);
        }
      } else console.log("卡密状态正常\n");
    }, _0x4b9306);
  return _0x5de7f4;
}
async function _0x3ec820() {
  const _0x6dbd3e = ["https://api.ipify.org?format=json", "https://httpbin.org/ip", "https://api.ip.sb/ip"];
  for (const _0x4ea2b3 of _0x6dbd3e) {
    try {
      const {
        body: _0x294efa
      } = await _0xbacfa6({
        "method": "GET",
        "url": _0x4ea2b3,
        "timeout": 5000
      }, null, "获取公网IP");
      if (_0x294efa) {
        {
          let _0x319ece = null;
          if (typeof _0x294efa === "object") {
            _0x319ece = _0x294efa.ip || _0x294efa.origin;
          } else typeof _0x294efa === "string" && (_0x319ece = _0x294efa.trim());
          if (_0x319ece && _0x3b97b5(_0x319ece)) return _0x319ece;
        }
      }
    } catch (_0x44a657) {
      continue;
    }
  }
  return null;
}
async function _0x49f48a() {
  let _0x39aa55 = await _0x3ec820();
  if (!_0x39aa55) {
    {
      const _0x4d7c77 = _0x467125("ip");
      if (_0x4d7c77 && /^(\d{1,3}\.){3}\d{1,3}$/.test(_0x4d7c77)) console.log("⚠️  自动获取IP失败，使用手动配置: " + _0x4d7c77), _0x39aa55 = _0x4d7c77;else return console.log("❌ 无法获取公网IP，请检查网络连接或配置ip变量"), false;
    }
  } else {
    console.log("✅ 获取到公网IP: " + _0x39aa55);
  }
  try {
    const _0x354138 = Math.floor(Date.now() / 1000).toString(),
      _0x54800e = "ks.js脚本",
      _0x328297 = _0x5aef01.createHash("md5").update(_0x39aa55 + _0x54800e + _0x354138 + _0x3afe4e).digest("hex"),
      {
        body: _0x321b2d
      } = await _0xbacfa6({
        "method": "POST",
        "url": _0x2f618d,
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "form": {
          "action": "auto_add_ip",
          "ip": _0x39aa55,
          "source": _0x54800e,
          "timestamp": _0x354138,
          "sign": _0x328297
        },
        "timeout": 10000
      }, null, "自动添加IP白名单");
    if (_0x321b2d && _0x321b2d.success) {
      console.log("✅ 白名单添加成功: " + _0x39aa55);
      return true;
    } else {
      console.log("❌ 白名单添加失败: " + (_0x321b2d?.["message"] || "未知错误"));
      return false;
    }
  } catch (_0x1ee43b) {
    console.log("❌ IP白名单添加异常: " + _0x1ee43b.message);
    return false;
  }
}
async function _0xbacfa6(_0x1698b2, _0x49f47e = null, _0x1ec3d4 = "Unknown Request") {
  const _0xe48d40 = {
    ..._0x1698b2
  };
  let _0x281646 = null;
  if (_0x49f47e) {
    try {
      _0x281646 = new _0x52e2ab(_0x49f47e);
    } catch (_0x63c0f2) {
      console.log("[错误] " + _0x1ec3d4 + " 代理URL无效(" + _0x63c0f2.message + ")，尝试直连模式");
    }
  }
  try {
    {
      let _0x127318 = _0xe48d40.body,
        _0x2d2880 = _0xe48d40.headers || {};
      _0xe48d40.form && (_0x127318 = _0x55ee8e.stringify(_0xe48d40.form), _0x2d2880["Content-Type"] = "application/x-www-form-urlencoded");
      const _0x3a9c35 = {
          "method": _0xe48d40.method || "GET",
          "url": _0xe48d40.url,
          "headers": _0x2d2880,
          "data": _0x127318,
          "timeout": _0xe48d40.timeout || 30000,
          ...(_0x281646 && {
            "httpAgent": _0x281646,
            "httpsAgent": _0x281646
          })
        },
        _0x21f0aa = await _0xed8a87(_0x3a9c35);
      return {
        "response": _0x21f0aa,
        "body": _0x21f0aa.data
      };
    }
  } catch (_0x20704c) {
    {
      if (_0x20704c.response) return {
        "response": _0x20704c.response,
        "body": _0x20704c.response.data
      };
      return {
        "response": null,
        "body": null
      };
    }
  }
}
function _0x3b97b5(_0x5191d3) {
  if (!_0x5191d3 || typeof _0x5191d3 !== "string") return false;
  if (_0x5191d3.includes("<html>") || _0x5191d3.includes("503 Service Temporarily Unavailable") || _0x5191d3.includes("502 Bad Gateway") || _0x5191d3.includes("504 Gateway Timeout")) return false;
  const _0x178eb3 = /^(\d{1,3}\.){3}\d{1,3}$/,
    _0x3f593e = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
  if (_0x178eb3.test(_0x5191d3)) {
    {
      const _0x1cffa4 = _0x5191d3.split(".");
      for (const _0x15781d of _0x1cffa4) {
        {
          const _0x1f2221 = parseInt(_0x15781d, 10);
          if (_0x1f2221 < 0 || _0x1f2221 > 255 || isNaN(_0x1f2221)) return false;
        }
      }
      return true;
    }
  }
  return _0x3f593e.test(_0x5191d3);
}
async function _0x296a12(_0x24cc54, _0x489aea = "代理连通性检测", _0x42ff52 = 3) {
  if (!_0x24cc54) {
    return {
      "ok": true,
      "msg": "✅ 未配置代理（直连模式）",
      "ip": "localhost"
    };
  }
  let _0x2770c4 = null;
  const _0x3dc88d = ["https://httpbin.org/ip", "https://api.ipify.org?format=json"];
  for (let _0x301562 = 1; _0x301562 <= _0x42ff52; _0x301562++) {
    {
      console.log("🔌 " + _0x489aea + " 测试代理连接中... (尝试 " + _0x301562 + "/" + _0x42ff52 + ")");
      for (const _0x4d6060 of _0x3dc88d) {
        try {
          {
            const {
              response: _0x29ab0c,
              body: _0x365838
            } = await _0xbacfa6({
              "method": "GET",
              "url": _0x4d6060,
              "headers": {
                "User-Agent": "ProxyTester/1.0"
              },
              "timeout": 15000
            }, _0x24cc54, _0x489aea + " → " + new URL(_0x4d6060).hostname);
            if (typeof _0x365838 === "string" && (_0x365838.includes("<html>") || _0x365838.includes("503 Service Temporarily Unavailable") || _0x365838.includes("502 Bad Gateway") || _0x365838.includes("504 Gateway Timeout"))) continue;
            if (_0x365838) {
              {
                let _0xf96699 = null;
                if (_0x4d6060.includes("httpbin.org") && _0x365838.origin) _0xf96699 = _0x365838.origin;else {
                  if (_0x4d6060.includes("ipify.org") && _0x365838.ip) _0xf96699 = _0x365838.ip;else {
                    if (_0x4d6060.includes("jsonip.com") && _0x365838.ip) {
                      _0xf96699 = _0x365838.ip;
                    } else {
                      if (_0x4d6060.includes("my-ip.io") && _0x365838.ip) _0xf96699 = _0x365838.ip;else {
                        if (typeof _0x365838 === "string" && !_0x365838.includes("<")) {
                          _0xf96699 = _0x365838.trim();
                        }
                      }
                    }
                  }
                }
                if (_0xf96699 && _0x3b97b5(_0xf96699)) {
                  console.log("✅ " + _0x489aea + " 代理测试成功，出口IP: " + _0xf96699);
                  return {
                    "ok": true,
                    "msg": "✅ SOCKS5代理正常，出口IP: " + _0xf96699,
                    "ip": _0xf96699
                  };
                }
              }
            }
          }
        } catch (_0x447d1f) {
          {
            _0x2770c4 = _0x447d1f;
            continue;
          }
        }
        await new Promise(_0x5845cd => setTimeout(_0x5845cd, 500));
      }
      if (_0x301562 < _0x42ff52) {
        const _0x308dd2 = _0x301562 * 2000;
        console.log("⏱️ " + _0x489aea + " 所有端点测试失败，" + _0x308dd2 / 1000 + "秒后重试...");
        await new Promise(_0x1c5ad3 => setTimeout(_0x1c5ad3, _0x308dd2));
      }
    }
  }
  try {
    new URL(_0x24cc54);
  } catch (_0x2e6465) {
    return {
      "ok": false,
      "msg": "❌ 代理URL格式错误: " + _0x2e6465.message,
      "ip": null
    };
  }
  return {
    "ok": false,
    "msg": "❌ 代理测试失败: " + (_0x2770c4?.["message"] || "所有测试端点均无法访问"),
    "ip": null
  };
}
const _0x230904 = new Set();
async function _0x3454c2(_0x26c5cf, _0x4ff117, _0x5442dd = "?") {
  const _0x30c4b2 = "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo?source=bottom_guide_first",
    {
      body: _0x2b86eb
    } = await _0xbacfa6({
      "method": "GET",
      "url": _0x30c4b2,
      "headers": {
        "Host": "nebula.kuaishou.com",
        "User-Agent": "kwai-android aegon/3.56.0",
        "Cookie": _0x26c5cf,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "timeout": 12000
    }, _0x4ff117, "账号[" + _0x5442dd + "] 获取基本信息");
  if (_0x2b86eb && _0x2b86eb.result === 1 && _0x2b86eb.data) {
    return {
      "nickname": _0x2b86eb.data.userData?.["nickname"] || null,
      "totalCoin": _0x2b86eb.data.totalCoin ?? null,
      "allCash": _0x2b86eb.data.allCash ?? null
    };
  }
  return null;
}
function _0x4772b5(_0x5db681, _0x5b33f6) {
  _0x5db681 = String(_0x5db681);
  if (_0x5db681.length >= _0x5b33f6) return _0x5db681.substring(0, _0x5b33f6);
  const _0x5025d8 = _0x5b33f6 - _0x5db681.length,
    _0x359922 = Math.floor(_0x5025d8 / 2),
    _0x305bf1 = _0x5025d8 - _0x359922;
  return " ".repeat(_0x359922) + _0x5db681 + " ".repeat(_0x305bf1);
}
class _0x1f1b3c {
  constructor({
    index: _0x267bfd,
    salt: _0x3090af,
    cookie: _0x186ba5,
    nickname = "",
    proxyUrl = null,
    tasksToExecute = ["food", "box", "look", "search"],
    remark = ""
  }) {
    this.index = _0x267bfd;
    this.salt = _0x3090af;
    this.cookie = _0x186ba5;
    this.nickname = nickname || remark || "账号" + _0x267bfd;
    this.remark = remark;
    this.proxyUrl = proxyUrl;
    this.coinLimit = _0x563f58;
    this.coinExceeded = false;
    this.tasksToExecute = tasksToExecute;
    this.adaddnum = 0;
    this.extractCookieInfo();
    this.headers = {
      "Host": "nebula.kuaishou.com",
      "Connection": "keep-alive",
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; MI 8 Lite Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.101 Mobile Safari/537.36",
      "Cookie": this.cookie,
      "content-type": "application/json"
    };
    this.taskReportPath = "/rest/r/ad/task/report";
    this.startTime = Date.now();
    this.endTime = this.startTime - 30000;
    this.queryParams = "mod=Xiaomi(MI 11)&appver=" + this.appver + "&egid=" + this.egid + "&did=" + this.did;
    this.taskConfigs = {
      "box": {
        "name": "宝箱广告",
        "pageId": 11101,
        "businessId": 606,
        "posId": 20346,
        "subPageId": 100024064,
        "requestSceneType": 1,
        "taskType": 1
      },
      "look": {
        "name": "看广告得金币",
        "pageId": 11101,
        "businessId": 672,
        "posId": 24067,
        "subPageId": 100026367,
        "requestSceneType": 1,
        "taskType": 1
      },
      "food": {
        "name": "饭补广告",
        "pageId": 11101,
        "businessId": 9362,
        "posId": 24067,
        "subPageId": 100026367,
        "requestSceneType": 7,
        "taskType": 2
      },
      "follow": {
        "name": "追加看广告得金币",
        "pageId": 11101,
        "businessId": 672,
        "posId": 24067,
        "subPageId": 100026367,
        "requestSceneType": 2,
        "taskType": 1
      },
      "search": {
        "name": "搜索任务",
        "pageId": 11014,
        "businessId": 7076,
        "posId": 216268,
        "subPageId": 100161537,
        "requestSceneType": 1,
        "taskType": 1
      },
      "search_follow": {
        "name": "搜索任务追加",
        "pageId": 11014,
        "businessId": 7076,
        "posId": 216268,
        "subPageId": 100161537,
        "requestSceneType": 7,
        "taskType": 2
      }
    };
    this.taskStats = {};
    const _0x2d3a0c = new Set(this.tasksToExecute);
    _0x2d3a0c.add("follow");
    _0x2d3a0c.add("search");
    _0x2d3a0c.add("search_follow");
    _0x2d3a0c.forEach(_0x37a2a6 => {
      this.taskConfigs[_0x37a2a6] && (this.taskStats[_0x37a2a6] = {
        "success": 0,
        "failed": 0,
        "totalReward": 0
      });
    });
    this.lowRewardStreak = 0;
    this.lowRewardThreshold = _0x222341;
    this.lowRewardLimit = _0x32d398;
    this.stopAllTasks = false;
    this.taskLimitReached = {};
    this.tasksToExecute.forEach(_0x1dff50 => {
      this.taskConfigs[_0x1dff50] && (this.taskLimitReached[_0x1dff50] = false);
    });
    this.taskLimitReached.follow = false;
    this.taskLimitReached.search = false;
    this.taskLimitReached.search_follow = false;
  }
  async ["checkCoinLimit"]() {
    try {
      const _0x122ce8 = await _0x3454c2(this.cookie, this.proxyUrl, this.index);
      if (_0x122ce8 && _0x122ce8.totalCoin) {
        const _0xe95fdd = parseInt(_0x122ce8.totalCoin);
        if (_0xe95fdd >= this.coinLimit) return console.log("⚠️ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 金币已达 " + _0xe95fdd + "，超过 " + this.coinLimit + " 阈值，将停止任务"), this.coinExceeded = true, this.stopAllTasks = true, true;
      }
      return false;
    } catch (_0x4be44b) {
      console.log("账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 金币检查异常: " + _0x4be44b.message);
      return false;
    }
  }
  ["extractCookieInfo"]() {
    try {
      const _0xff0e3d = this.cookie.match(/egid=([^;]+)/),
        _0x1cfae8 = this.cookie.match(/did=([^;]+)/),
        _0x52623a = this.cookie.match(/userId=([^;]+)/),
        _0x4cb2a6 = this.cookie.match(/kuaishou\.api_st=([^;]+)/),
        _0xe02ff0 = this.cookie.match(/appver=([^;]+)/);
      this.egid = _0xff0e3d ? _0xff0e3d[1] : "";
      this.did = _0x1cfae8 ? _0x1cfae8[1] : "";
      this.userId = _0x52623a ? _0x52623a[1] : "";
      this.kuaishouApiSt = _0x4cb2a6 ? _0x4cb2a6[1] : "";
      this.appver = _0xe02ff0 ? _0xe02ff0[1] : "13.7.20.10468";
      if (!this.egid || !this.did) {
        console.log("账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " cookie格式可能无 egid 或 did，但继续尝试...");
      }
    } catch (_0x340ffb) {
      console.log("账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 解析cookie失败: " + _0x340ffb.message);
    }
  }
  ["getTaskStats"]() {
    return this.taskStats;
  }
  ["printTaskStats"]() {
    console.log("\n账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 任务执行统计:");
    const _0x14125b = ["box", "look", "follow", "food", "search", "search_follow"];
    _0x14125b.forEach(_0x44293d => {
      const _0x152765 = this.taskStats[_0x44293d],
        _0x3a8b60 = this.taskConfigs[_0x44293d];
      _0x152765 && _0x3a8b60 && console.log("  " + _0x3a8b60.name + ": 成功" + _0x152765.success + "次, 失败" + _0x152765.failed + "次, 总奖励" + _0x152765.totalReward + "金币");
    });
  }
  async ["retryOperation"](_0x3b843, _0x390ef4, _0x261ee3 = 3, _0x219b61 = 2000) {
    let _0x3360c9 = 0,
      _0x2982d8 = null;
    while (_0x3360c9 < _0x261ee3) {
      {
        try {
          const _0xfe838a = await _0x3b843();
          if (_0xfe838a) return _0xfe838a;
          _0x2982d8 = new Error(_0x390ef4 + " 返回空结果");
        } catch (_0x1ab944) {
          _0x2982d8 = _0x1ab944;
          console.log("账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " " + _0x390ef4 + " 异常: " + _0x1ab944.message);
        }
        _0x3360c9++;
        if (_0x3360c9 < _0x261ee3) {
          console.log("账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " " + _0x390ef4 + " 失败，重试 " + _0x3360c9 + "/" + _0x261ee3);
          await new Promise(_0x2ae5cf => setTimeout(_0x2ae5cf, _0x219b61));
        }
      }
    }
    return null;
  }
  async ["getAdInfo"](_0x22ca5a) {
    try {
      const _0x385ea1 = "/rest/e/reward/mixed/ad",
        _0x36eed7 = {
          "encData": "|encData|",
          "sign": "|sign|",
          "cs": "false",
          "client_key": "2ac2a76d",
          "videoModelCrowdTag": "1_23",
          "os": "android",
          "kuaishou.api_st": this.kuaishouApiSt,
          "uQaTag": "1##swLdgl:99#ecPp:-9#cmNt:-0#cmHs:-3#cmMnsl:-0"
        },
        _0x204b80 = {
          "earphoneMode": "1",
          "mod": "Xiaomi(23116PN5BC)",
          "appver": this.appver,
          "isp": "CUCC",
          "language": "zh-cn",
          "ud": this.userId,
          "did_tag": "0",
          "net": "WIFI",
          "kcv": "1599",
          "app": "0",
          "kpf": "ANDROID_PHONE",
          "ver": "11.6",
          "android_os": "0",
          "boardPlatform": "pineapple",
          "kpn": "NEBULA",
          "androidApiLevel": "35",
          "country_code": "cn",
          "sys": "ANDROID_15",
          "sw": "1080",
          "sh": "2400",
          "abi": "arm64",
          "userRecoBit": "0"
        };
      let _0x3f3226 = "{}";
      if (_0x22ca5a.businessId === 7076) {
        {
          const _0x137ac8 = "eyJwYWdlSWQiOiAxMTAxNCwgInN1YlBhZ2VJZCI6IDEwMDE2MTUzNywgInBvc0lkIjogMjE2MjY4LCAiYnVzaW5lc3NJZCI6IDcwNzYsICJleHRQYXJhbXMiOiAiIiwgImN1c3RvbURhdGEiOiB7ImV4aXRJbmZvIjogeyJ0b2FzdERlc2MiOiBudWxsLCAidG9hc3RJbWdVcmwiOiBudWxsfX0sICJwZW5kYW50VHlwZSI6IDEsICJkaXNwbGF5VHlwZSI6IDIsICJzaW5nbGVQYWdlSWQiOiAwLCAic2luZ2xlU3ViUGFnZUlkIjogMCwgImNoYW5uZWwiOiAwLCAiY291bnRkb3duUmVwb3J0IjogZmFsc2UsICJ0aGVtZVR5cGUiOiAwLCAibWl4ZWRBZCI6IHRydWUsICJmdWxsTWl4ZWQiOiB0cnVlLCAiYXV0b1JlcG9ydCI6IHRydWUsICJmcm9tVGFza0NlbnRlciI6IHRydWUsICJzZWFyY2hJbnNwaXJlU2NoZW1lSW5mbyI6IG51bGwsICJhbW91bnQiOiAwfQ==",
            _0x51e1a8 = {
              "openH5AdCount": 0,
              "sessionLookedCompletedCount": this.adaddnum,
              "sessionType": _0x22ca5a.requestSceneType === 2 ? "2" : "1",
              "searchKey": "短剧小说",
              "triggerType": "2",
              "disableReportToast": true,
              "businessEnterAction": "7",
              "neoParams": _0x137ac8
            };
          _0x3f3226 = JSON.stringify(_0x51e1a8);
        }
      }
      const _0x4f1184 = {
          "appInfo": {
            "appId": "kuaishou_nebula",
            "name": "快手极速版",
            "packageName": "com.kuaishou.nebula",
            "version": this.appver,
            "versionCode": -1
          },
          "deviceInfo": {
            "osType": 1,
            "osVersion": "15",
            "deviceId": this.did,
            "screenSize": {
              "width": 1080,
              "height": 2249
            },
            "ftt": ""
          },
          "userInfo": {
            "userId": this.userId,
            "age": 0,
            "gender": ""
          },
          "impInfo": [{
            "pageId": _0x22ca5a.pageId || 11101,
            "subPageId": _0x22ca5a.subPageId,
            "action": 0,
            "browseType": 3,
            "impExtData": _0x3f3226,
            "mediaExtData": "{}"
          }]
        },
        _0x5922b0 = Buffer.from(JSON.stringify(_0x4f1184)).toString("base64");
      let _0x1d113f = await this.getSign(_0x5922b0);
      if (!_0x1d113f) return console.log("❌ 账号[" + this.nickname + "] 获取 encsign 失败，无法获取广告"), null;
      _0x36eed7.encData = _0x1d113f.encdata;
      _0x36eed7.sign = _0x1d113f.sign;
      let _0x205ba6 = await this.requestSignService({
        "urlpath": _0x385ea1,
        "reqdata": _0x55ee8e.stringify(_0x36eed7) + "&" + _0x55ee8e.stringify(_0x204b80),
        "api_client_salt": this.salt
      });
      if (!_0x205ba6) return console.log("❌ 账号[" + this.nickname + "] 获取 nesig 失败，无法获取广告"), null;
      const _0x469ae2 = {
          ..._0x204b80,
          "sig": _0x205ba6.sig,
          "__NS_sig3": _0x205ba6.__NS_sig3,
          "__NS_xfalcon": _0x205ba6.__NS_xfalcon,
          "__NStokensig": _0x205ba6.__NStokensig
        },
        _0x51277b = "https://api.e.kuaishou.com" + _0x385ea1 + "?" + _0x30bef3.stringify(_0x469ae2),
        {
          response: _0x323cf6,
          body: _0x474fc2
        } = await _0xbacfa6({
          "method": "POST",
          "url": _0x51277b,
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Host": "api.e.kuaishou.com",
            "User-Agent": "kwai-android aegon/3.56.0",
            "Cookie": "kuaishou_api_st=" + this.kuaishouApiSt
          },
          "form": _0x36eed7,
          "timeout": 12000
        }, this.proxyUrl, "账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 获取广告");
      if (!_0x474fc2) return null;
      if (_0x474fc2.errorMsg === "OK" && _0x474fc2.feeds && _0x474fc2.feeds[0] && _0x474fc2.feeds[0].ad) {
        const _0x265c80 = _0x474fc2.feeds[0].caption || _0x474fc2.feeds[0].ad?.["caption"] || "";
        _0x265c80 && console.log("✅ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 成功获取到广告信息：" + _0x265c80.substring(0, 10) + "...");
        const _0xcc13e3 = _0x474fc2.feeds[0].exp_tag || "",
          _0xecbb93 = _0xcc13e3.split("/")[1]?.["split"]("_")?.[0] || "";
        return {
          "cid": _0x474fc2.feeds[0].ad.creativeId,
          "llsid": _0xecbb93
        };
      }
      console.log("⚠️ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 获取广告失败: " + (_0x474fc2.errorMsg || JSON.stringify(_0x474fc2).substring(0, 50)) + "...");
      return null;
    } catch (_0x5b1cc8) {
      console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 获取广告异常: " + _0x5b1cc8.message);
      return null;
    }
  }
  async ["generateSignature"](_0x468f34, _0x1edc07, _0x49f513, _0x310afa) {
    try {
      const _0x72f096 = JSON.stringify({
          "businessId": _0x310afa.businessId,
          "endTime": this.endTime,
          "extParams": "",
          "mediaScene": "video",
          "neoInfos": [{
            "creativeId": _0x468f34,
            "extInfo": "",
            "llsid": _0x1edc07,
            "requestSceneType": _0x310afa.requestSceneType,
            "taskType": _0x310afa.taskType,
            "watchExpId": "",
            "watchStage": 0
          }],
          "pageId": _0x310afa.pageId,
          "posId": _0x310afa.posId,
          "reportType": 0,
          "sessionId": "",
          "startTime": this.startTime,
          "subPageId": _0x310afa.subPageId
        }),
        _0x532f5f = "bizStr=" + encodeURIComponent(_0x72f096) + "&cs=false&client_key=2ac2a76d&kuaishou.api_st=" + this.kuaishouApiSt,
        _0x55545f = this.queryParams + "&" + _0x532f5f,
        _0x8f16b2 = await this.requestSignService({
          "urlpath": this.taskReportPath,
          "reqdata": _0x55545f,
          "api_client_salt": this.salt
        }, "账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 生成报告签名");
      if (!_0x8f16b2) return null;
      return {
        "sig": _0x8f16b2.sig,
        "sig3": _0x8f16b2.__NS_sig3,
        "sigtoken": _0x8f16b2.__NStokensig,
        "xfalcon": _0x8f16b2.__NS_xfalcon,
        "post": _0x532f5f
      };
    } catch (_0x3fb7e0) {
      console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 生成签名异常: " + _0x3fb7e0.message);
      return null;
    }
  }
  async ["submitReport"](_0x3781a9, _0x4f3051, _0x1141ea, _0x2dba31, _0x32d452, _0xbbe883, _0x3abe95) {
    try {
      const _0x55013e = "https://api.e.kuaishou.com" + this.taskReportPath + "?" + (this.queryParams + "&sig=" + _0x3781a9 + "&__NS_sig3=" + _0x4f3051 + "&__NS_xfalcon=" + _0x2dba31 + "&__NStokensig=" + _0x1141ea),
        {
          response: _0x28ca15,
          body: _0x4b0a9c
        } = await _0xbacfa6({
          "method": "POST",
          "url": _0x55013e,
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Host": "api.e.kuaishou.cn",
            "User-Agent": "kwai-android aegon/3.56.0",
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "body": _0x32d452,
          "timeout": 12000
        }, this.proxyUrl, "账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 提交任务");
      if (!_0x4b0a9c) return {
        "success": false,
        "reward": 0
      };
      if (_0x4b0a9c.result === 1) {
        const _0x1d285b = _0x4b0a9c.data?.["neoAmount"] || 0;
        console.log("💰 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " " + _0x3abe95.name + "获得" + _0x1d285b + "金币奖励！");
        _0x1d285b <= this.lowRewardThreshold ? (this.lowRewardStreak++, this.did = _0x5b5daf(), console.log("⚠️ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 金币奖励(" + _0x1d285b + ")低于阈值(" + this.lowRewardThreshold + ")，当前连续低奖励次数：" + this.lowRewardStreak + "/" + this.lowRewardLimit), this.lowRewardStreak >= this.lowRewardLimit && (console.log("🏁 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 连续" + this.lowRewardLimit + "次奖励≤" + this.lowRewardThreshold + "，停止全部任务"), this.stopAllTasks = true)) : this.lowRewardStreak = 0;
        return {
          "success": true,
          "reward": _0x1d285b
        };
      }
      if ([20107, 20108, 1003, 415].includes(_0x4b0a9c.result)) return console.log("⚠️ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " " + _0x3abe95.name + " 已达上限"), this.taskLimitReached[_0xbbe883] = true, {
        "success": false,
        "reward": 0
      };
      console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " " + _0x3abe95.name + " 奖励失败，result=" + _0x4b0a9c.result + " msg=" + (_0x4b0a9c.data || ""));
      return {
        "success": false,
        "reward": 0
      };
    } catch (_0x1777ae) {
      console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 提交任务异常: " + _0x1777ae.message);
      return {
        "success": false,
        "reward": 0
      };
    }
  }
  async ["getSign"](_0x466ebf) {
    try {
      const _0x131e39 = Math.floor(Date.now() / 1000).toString(),
        _0x13ec64 = "encsign",
        _0x247786 = _0x5aef01.createHash("md5").update(_0x13ec64 + _0x466ebf + _0x131e39 + _0x3ce2c6).digest("hex"),
        {
          response: _0x33133c,
          body: _0x226947
        } = await _0xbacfa6({
          "method": "POST",
          "url": _0x53342f,
          "form": {
            "action": _0x13ec64,
            "data": _0x466ebf,
            "timestamp": _0x131e39,
            "sign": _0x247786
          }
        });
      if (!_0x226947) return console.log("❌ 账号[" + this.nickname + "] encsign 无响应数据"), null;
      let _0x2ddc0c = _0x226947;
      if (_0x226947 && _0x226947.encrypted === true && _0x226947.data) {
        _0x2ddc0c = _0x3bb017(_0x226947.data, _0x20105a);
        if (!_0x2ddc0c) return console.log("❌ 账号[" + this.nickname + "] encsign 解密失败"), null;
      }
      if (_0x2ddc0c && _0x2ddc0c.status) {
        return _0x2ddc0c.data;
      }
      console.log("❌ 账号[" + this.nickname + "] encsign 签名服务失败: " + (_0x2ddc0c?.["message"] || "无响应"));
      return null;
    } catch (_0xc677de) {
      console.log("❌ 账号[" + this.nickname + "] encsign 签名请求异常: " + _0xc677de.message);
      return null;
    }
  }
  async ["requestSignService"](_0xb819dc, _0x546f7c) {
    let _0x42e1ef = {};
    const _0x4d47fb = Math.floor(Date.now() / 1000).toString(),
      _0xbf2d98 = "nssig",
      _0x44c894 = _0x5aef01.createHash("md5").update(_0xbf2d98 + _0xb819dc.urlpath + _0xb819dc.reqdata + _0xb819dc.api_client_salt + _0x4d47fb + _0x3ce2c6).digest("hex"),
      {
        response: _0x824cd7,
        body: _0x159008
      } = await _0xbacfa6({
        "method": "POST",
        "url": _0x53342f,
        "form": {
          "action": _0xbf2d98,
          "path": _0xb819dc.urlpath,
          "data": _0xb819dc.reqdata,
          "salt": _0xb819dc.api_client_salt,
          "timestamp": _0x4d47fb,
          "sign": _0x44c894
        },
        "timeout": 15000
      }, null, _0x546f7c + "（签名服务）");
    let _0x432c99 = _0x159008;
    if (_0x159008 && _0x159008.encrypted === true && _0x159008.data) {
      {
        _0x432c99 = _0x3bb017(_0x159008.data, _0x20105a);
        if (!_0x432c99) return console.log("❌ 账号[" + this.nickname + "] nssig 解密失败"), null;
      }
    }
    if (_0x432c99 && _0x432c99.data) {
      let _0x1e3b75 = _0x432c99.data.nssig3,
        _0x30c00c = _0x432c99.data.nstokensig,
        _0xe5cdec = _0x432c99.data.nssig4;
      Object.assign(_0x42e1ef, {
        "__NS_sig3": _0x1e3b75,
        "__NStokensig": _0x30c00c,
        "sig": _0x432c99.data.sig,
        "__NS_xfalcon": _0xe5cdec
      });
      return _0x42e1ef;
    }
    console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 签名服务失败: " + (_0x432c99?.["error"] || _0x432c99?.["message"] || "无响应"));
    return null;
  }
  async ["executeTask"](_0xa1d376) {
    const _0x18c77b = this.taskConfigs[_0xa1d376];
    if (!_0x18c77b) return false;
    if (this.taskLimitReached[_0xa1d376]) return false;
    try {
      const _0x51d479 = await this.retryOperation(() => this.getAdInfo(_0x18c77b), "获取" + _0x18c77b.name + "信息", 3);
      if (!_0x51d479) {
        this.taskStats[_0xa1d376].failed++;
        return false;
      }
      const _0x44f010 = Math.floor(Math.random() * 10000) + 30000;
      console.log("🔍 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " ==>" + _0x18c77b.name + " " + _0x1bbd07() + " " + Math.round(_0x44f010 / 1000) + " 秒");
      await new Promise(_0x53cf81 => setTimeout(_0x53cf81, _0x44f010));
      const _0xe6d52e = await this.retryOperation(() => this.generateSignature(_0x51d479.cid, _0x51d479.llsid, _0xa1d376, _0x18c77b), "生成" + _0x18c77b.name + "签名", 3);
      if (!_0xe6d52e) return this.taskStats[_0xa1d376].failed++, false;
      const _0x3eb94c = await this.retryOperation(() => this.submitReport(_0xe6d52e.sig, _0xe6d52e.sig3, _0xe6d52e.sigtoken, _0xe6d52e.xfalcon, _0xe6d52e.post, _0xa1d376, _0x18c77b), "提交" + _0x18c77b.name + "报告", 3);
      if (_0x3eb94c?.["success"]) {
        this.taskStats[_0xa1d376].success++;
        this.taskStats[_0xa1d376].totalReward += _0x3eb94c.reward || 0;
        return true;
      }
      this.taskStats[_0xa1d376].failed++;
      return false;
    } catch (_0x438435) {
      console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 任务异常(" + _0xa1d376 + "): " + _0x438435.message);
      this.taskStats[_0xa1d376].failed++;
      return false;
    }
  }
  async ["executeAllTasksByPriority"]() {
    const _0x2f9875 = this.tasksToExecute.includes("look"),
      _0x5a7a2a = this.tasksToExecute.includes("food"),
      _0x5af384 = this.tasksToExecute.includes("box"),
      _0xba4dec = this.tasksToExecute.includes("search"),
      _0xcfc701 = this.tasksToExecute.filter(_0x19363c => _0x19363c !== "look" && _0x19363c !== "search");
    for (let _0x3c7ae2 = 0; _0x3c7ae2 < _0x5c374f; _0x3c7ae2++) {
      {
        if (this.stopAllTasks) {
          break;
        }
        console.log("\n============================== 🚀 账号[" + this.nickname + "] 第" + (_0x3c7ae2 + 1) + "/" + _0x5c374f + "轮开始 ==============================");
        if (_0x2f9875) {
          const _0x54d1f0 = this.taskConfigs.look,
            _0x4131ce = this.taskConfigs.follow;
          console.log("🎬 开始执行 " + _0x54d1f0.name + " (+" + _0x4131ce.name + ")，本轮共 " + _0x4000d7 + " 次");
          for (let _0x3e3be6 = 0; _0x3e3be6 < _0x4000d7; _0x3e3be6++) {
            if (this.stopAllTasks || this.taskLimitReached.look) break;
            console.log("\n--- 账号[" + this.nickname + "] " + _0x54d1f0.name + " 第 " + (_0x3e3be6 + 1) + "/" + _0x4000d7 + " 次执行 ---");
            const _0x2202ec = await this.executeTask("look");
            if (_0x2202ec && !this.stopAllTasks) {
              {
                const _0x4644d2 = Math.floor(Math.random() * 10000);
                console.log("⏱ 账号[" + this.nickname + "] look 任务成功，随机等待 " + Math.round(_0x4644d2 / 1000) + " 秒后执行 " + _0x4131ce.name);
                await new Promise(_0x58725b => setTimeout(_0x58725b, _0x4644d2));
                const _0xc189aa = _0x5b81ac;
                for (let _0x2db7aa = 0; _0x2db7aa < _0xc189aa; _0x2db7aa++) {
                  {
                    if (this.stopAllTasks || this.taskLimitReached.follow) break;
                    console.log("\n--- 账号[" + this.nickname + "] " + _0x4131ce.name + " (第 " + (_0x2db7aa + 1) + "/" + _0xc189aa + " 次) 紧随 look 任务执行 ---");
                    await this.executeTask("follow");
                  }
                }
              }
            }
            if (_0x3e3be6 < _0x4000d7 - 1 && !this.stopAllTasks && !this.taskLimitReached.look) {
              const _0x3fa919 = _0x3e3be6 < _0x4000d7 - 1 && !this.stopAllTasks && !this.taskLimitReached.look;
              if (_0x3fa919) {
                {
                  const _0x59acbc = Math.floor(Math.random() * 10000);
                  console.log("⏱ 账号[" + this.nickname + "] " + _0x54d1f0.name + " 任务间隔，随机等待 " + Math.round(_0x59acbc / 1000) + " 秒");
                  await new Promise(_0x4c482a => setTimeout(_0x4c482a, _0x59acbc));
                }
              }
            }
          }
          if (!this.stopAllTasks && (_0x5a7a2a || _0x5af384 || _0xba4dec)) {
            const _0x251b74 = Math.floor(Math.random() * 10000);
            console.log("\n🔄 账号[" + this.nickname + "] 任务组完成，等待 " + Math.round(_0x251b74 / 1000) + " 秒切换...");
            await new Promise(_0x2ab179 => setTimeout(_0x2ab179, _0x251b74));
          }
        }
        if (_0xba4dec) {
          {
            const _0x4c92ff = this.taskConfigs.search,
              _0x4d4bf3 = this.taskConfigs.search_follow;
            console.log("\n🎬 开始执行 " + _0x4c92ff.name + " (+" + _0x4d4bf3.name + ")，本轮共 " + _0x31ca39 + " 次");
            for (let _0x48b0d5 = 0; _0x48b0d5 < _0x31ca39; _0x48b0d5++) {
              {
                if (this.stopAllTasks || this.taskLimitReached.search) break;
                console.log("\n--- 账号[" + this.nickname + "] " + _0x4c92ff.name + " 第 " + (_0x48b0d5 + 1) + "/" + _0x31ca39 + " 次执行 ---");
                const _0x198292 = await this.executeTask("search");
                if (_0x198292 && !this.stopAllTasks) {
                  {
                    const _0x2bafea = Math.floor(Math.random() * 10000);
                    console.log("⏱ 账号[" + this.nickname + "] search 任务成功，随机等待 " + Math.round(_0x2bafea / 1000) + " 秒后执行 " + _0x4d4bf3.name);
                    await new Promise(_0x334fc8 => setTimeout(_0x334fc8, _0x2bafea));
                    const _0x2d177d = _0x263408;
                    for (let _0x3af5ca = 0; _0x3af5ca < _0x2d177d; _0x3af5ca++) {
                      if (this.stopAllTasks || this.taskLimitReached.search_follow) break;
                      console.log("\n--- 账号[" + this.nickname + "] " + _0x4d4bf3.name + " (第 " + (_0x3af5ca + 1) + "/" + _0x2d177d + " 次) 紧随 search 任务执行 ---");
                      this.adaddnum++;
                      await this.executeTask("search_follow");
                      this.adaddnum = 0;
                    }
                  }
                }
                if (_0x48b0d5 < _0x31ca39 - 1 && !this.stopAllTasks && !this.taskLimitReached.search) {
                  {
                    const _0x4afd3f = _0x48b0d5 < _0x31ca39 - 1 && !this.stopAllTasks && !this.taskLimitReached.search;
                    if (_0x4afd3f) {
                      const _0x4ba0da = Math.floor(Math.random() * 10000);
                      console.log("⏱ 账号[" + this.nickname + "] " + _0x4c92ff.name + " 任务间隔，随机等待 " + Math.round(_0x4ba0da / 1000) + " 秒");
                      await new Promise(_0x39c9b0 => setTimeout(_0x39c9b0, _0x4ba0da));
                    }
                  }
                }
              }
            }
            if (!this.stopAllTasks && (_0x5a7a2a || _0x5af384)) {
              const _0x166147 = Math.floor(Math.random() * 10000);
              console.log("\n🔄 账号[" + this.nickname + "] 任务组完成，等待 " + Math.round(_0x166147 / 1000) + " 秒切换...");
              await new Promise(_0x3184c3 => setTimeout(_0x3184c3, _0x166147));
            }
          }
        }
        for (const _0x4eb8a0 of _0xcfc701) {
          if (this.stopAllTasks) break;
          if (_0x4eb8a0 === "look" || _0x4eb8a0 === "search") continue;
          const _0x4264c4 = this.taskConfigs[_0x4eb8a0];
          if (this.taskLimitReached[_0x4eb8a0]) {
            {
              console.log("⚠️ 账号[" + this.nickname + "] " + _0x4264c4.name + " 已达上限，本轮跳过");
              continue;
            }
          }
          console.log("\n🎬 开始执行 " + _0x4264c4.name + "，本轮共 1 次");
          await this.executeTask(_0x4eb8a0);
          if (!this.stopAllTasks) {
            {
              const _0x4a7cb6 = Math.floor(Math.random() * 10000);
              console.log("⏱ 账号[" + this.nickname + "] " + _0x4264c4.name + " 任务间隔，随机等待 " + Math.round(_0x4a7cb6 / 1000) + " 秒");
              await new Promise(_0x41b0b7 => setTimeout(_0x41b0b7, _0x4a7cb6));
            }
          }
        }
        if (_0x3c7ae2 < _0x5c374f - 1 && !this.stopAllTasks) {
          {
            const _0x149d5d = Math.floor(Math.random() * 10000);
            console.log("\n============================== ⏱ 账号[" + this.nickname + "] 第" + (_0x3c7ae2 + 1) + "轮完成，等待 " + Math.round(_0x149d5d / 1000) + " 秒进入下一轮 ==============================");
            await new Promise(_0x53d28a => setTimeout(_0x53d28a, _0x149d5d));
          }
        }
      }
    }
    return {};
  }
}
function _0x323b50(_0x5a1e90) {
  const _0x59650c = String(_0x5a1e90 || "").trim().split("#");
  if (_0x59650c.length < 2) return null;
  let _0x22ab91 = "",
    _0x39a6b8 = "",
    _0x19a5fa = "",
    _0xca0723 = null;
  if (_0x59650c.length === 2) _0x39a6b8 = _0x59650c[0], _0x19a5fa = _0x59650c[1];else {
    if (_0x59650c.length === 3) /socks5:\/\//i.test(_0x59650c[2]) ? (_0x39a6b8 = _0x59650c[0], _0x19a5fa = _0x59650c[1], _0xca0723 = _0x59650c[2]) : (_0x22ab91 = _0x59650c[0], _0x39a6b8 = _0x59650c[1], _0x19a5fa = _0x59650c[2]);else _0x59650c.length >= 4 && (_0x22ab91 = _0x59650c[0], _0x39a6b8 = _0x59650c[1], _0x19a5fa = _0x59650c.slice(2, _0x59650c.length - 1).join("#"), _0xca0723 = _0x59650c[_0x59650c.length - 1]);
  }
  if (_0xca0723) {
    if (!/^socks5:\/\//i.test(_0xca0723)) _0xca0723 = null;else try {
      new URL(_0xca0723);
    } catch (_0x32e3a2) {
      console.log("❌ 代理URL格式错误: " + _0xca0723);
      _0xca0723 = null;
    }
  }
  return {
    "remark": _0x22ab91 || "",
    "salt": _0x19a5fa,
    "cookie": _0x39a6b8,
    "proxyUrl": _0xca0723
  };
}
function _0x6f0aa1() {
  const _0x5c9a5d = _0xf5c9a3(),
    _0x4daf44 = [];
  for (const _0x57d046 of _0x5c9a5d) {
    {
      const _0x2a2eae = _0x323b50(_0x57d046);
      _0x2a2eae ? _0x4daf44.push(_0x2a2eae) : console.log("账号格式错误：" + _0x57d046);
    }
  }
  _0x4daf44.forEach((_0x28bb49, _0x1fe25d) => {
    _0x28bb49.index = _0x1fe25d + 1;
  });
  return _0x4daf44;
}
async function _0x78030a(_0x5a0e68, _0x303701, _0x22662c) {
  const _0x1af402 = new Array(_0x5a0e68.length);
  let _0x5a4fbb = 0;
  async function _0x145b53() {
    while (true) {
      {
        const _0x598602 = _0x5a4fbb++;
        if (_0x598602 >= _0x5a0e68.length) return;
        const _0x571dac = _0x5a0e68[_0x598602];
        try {
          _0x1af402[_0x598602] = await _0x22662c(_0x571dac, _0x598602);
        } catch (_0x4115e8) {
          console.log("并发执行异常（index=" + (_0x598602 + 1) + "）：" + _0x4115e8.message);
          _0x1af402[_0x598602] = null;
        }
      }
    }
  }
  const _0x55ac98 = Array.from({
    "length": Math.min(_0x303701, _0x5a0e68.length)
  }, _0x145b53);
  await Promise.all(_0x55ac98);
  return _0x1af402;
}
async function _0x5c3c9f(_0x431127) {
  if (_0x431127.proxyUrl) {
    {
      const _0x3944c0 = await _0x296a12(_0x431127.proxyUrl, "账号[" + _0x431127.index + "]" + (_0x431127.remark ? "（" + _0x431127.remark + "）" : ""));
      console.log("  - " + (_0x3944c0.ok ? "✅ 代理验证通过" : "❌ 代理验证失败") + ": " + _0x3944c0.msg);
      if (_0x3944c0.ok && _0x3944c0.ip && _0x3944c0.ip !== "localhost") {
        if (!_0x3b97b5(_0x3944c0.ip)) {
          console.log("⚠️ 账号[" + _0x431127.index + "] 检测到无效IP格式，跳过重复检查");
        } else _0x230904.has(_0x3944c0.ip) ? (console.log("\n⚠️ 存在相同代理IP（" + _0x3944c0.ip + "），请立即检查！"), process.exit(1)) : _0x230904.add(_0x3944c0.ip);
      } else {
        if (!_0x3944c0.ok) return console.log("❌ 账号[" + _0x431127.index + "] 代理测试失败，跳过该账号"), {
          "index": _0x431127.index,
          "remark": _0x431127.remark || "无备注",
          "nickname": "账号" + _0x431127.index,
          "initialCoin": 0,
          "finalCoin": 0,
          "coinChange": 0,
          "initialCash": 0,
          "finalCash": 0,
          "cashChange": 0,
          "error": "代理测试失败: " + _0x3944c0.msg,
          "skipped": true
        };
      }
    }
  } else {
    console.log("账号[" + _0x431127.index + "]" + (_0x431127.remark ? "（" + _0x431127.remark + "）" : "") + " 未配置代理，走直连");
  }
  console.log("账号[" + _0x431127.index + "]" + (_0x431127.remark ? "（" + _0x431127.remark + "）" : "") + " 🔍 获取账号信息中...");
  let _0x1fffca = await _0x3454c2(_0x431127.cookie, _0x431127.proxyUrl, _0x431127.index),
    _0x3a7640 = _0x1fffca?.["nickname"] || "账号" + _0x431127.index;
  if (_0x1fffca) {
    {
      const _0x2a703f = _0x1fffca.totalCoin != null ? _0x1fffca.totalCoin : "未知",
        _0x53b6b1 = _0x1fffca.allCash != null ? _0x1fffca.allCash : "未知";
      console.log("账号[" + _0x3a7640 + "] ✅ 登录成功，💰 当前金币: " + _0x2a703f + "，💸 当前余额: " + _0x53b6b1);
    }
  } else console.log("账号[" + _0x3a7640 + "] ❌ 基本信息获取失败，但仍继续执行任务");
  const _0x1c3e60 = new _0x1f1b3c({
    ..._0x431127,
    "nickname": _0x3a7640,
    "tasksToExecute": _0x585b61
  });
  if (_0x1fffca) {
    await _0x1c3e60.checkCoinLimit();
    if (_0x1c3e60.coinExceeded) {
      console.log("账号[" + _0x1c3e60.nickname + "]" + (_0x431127.remark ? "（" + _0x431127.remark + "）" : "") + " 初始金币已超过阈值，不执行任务");
      const _0x1d7570 = await _0x3454c2(_0x431127.cookie, _0x431127.proxyUrl, _0x431127.index),
        _0x709b09 = _0x1fffca?.["totalCoin"] || 0,
        _0x5e34a5 = _0x1d7570?.["totalCoin"] || 0,
        _0x139789 = _0x5e34a5 - _0x709b09,
        _0x1b01fb = _0x1fffca?.["allCash"] || 0,
        _0x32310d = _0x1d7570?.["allCash"] || 0,
        _0x17669d = _0x32310d - _0x1b01fb;
      return {
        "index": _0x431127.index,
        "remark": _0x431127.remark || "无备注",
        "nickname": _0x3a7640,
        "initialCoin": _0x709b09,
        "finalCoin": _0x5e34a5,
        "coinChange": _0x139789,
        "initialCash": _0x1b01fb,
        "finalCash": _0x32310d,
        "cashChange": _0x17669d,
        "stats": _0x1c3e60.getTaskStats(),
        "coinLimitExceeded": true
      };
    }
  }
  console.log("账号[" + _0x1c3e60.nickname + "]" + (_0x431127.remark ? "（" + _0x431127.remark + "）" : "") + " 🚀 开始执行所有任务");
  await _0x1c3e60.executeAllTasksByPriority();
  const _0x27232d = await _0x3454c2(_0x431127.cookie, _0x431127.proxyUrl, _0x431127.index),
    _0x57cb37 = _0x1fffca?.["totalCoin"] || 0,
    _0x17240e = _0x27232d?.["totalCoin"] || 0,
    _0x16c5b3 = _0x17240e - _0x57cb37,
    _0x40dd41 = _0x1fffca?.["allCash"] || 0,
    _0x555884 = _0x27232d?.["allCash"] || 0,
    _0x3f5206 = _0x555884 - _0x40dd41;
  _0x1c3e60.printTaskStats();
  return {
    "index": _0x431127.index,
    "remark": _0x431127.remark || "无备注",
    "nickname": _0x3a7640,
    "initialCoin": _0x57cb37,
    "finalCoin": _0x17240e,
    "coinChange": _0x16c5b3,
    "initialCash": _0x40dd41,
    "finalCash": _0x555884,
    "cashChange": _0x3f5206,
    "stats": _0x1c3e60.getTaskStats(),
    "coinLimitExceeded": _0x1c3e60.coinExceeded,
    "infoFetchFailed": !_0x1fffca
  };
}
function _0x323b50(_0x1fcb5b) {
  const _0xe9f383 = String(_0x1fcb5b || "").trim().split("#");
  if (_0xe9f383.length < 2) {
    return null;
  }
  let _0x55e658 = "",
    _0x11f1bf = "",
    _0x4edf6f = "",
    _0x36379e = null;
  if (_0xe9f383.length === 2) _0x11f1bf = _0xe9f383[0], _0x4edf6f = _0xe9f383[1];else {
    if (_0xe9f383.length === 3) /socks5:\/\//i.test(_0xe9f383[2]) ? (_0x11f1bf = _0xe9f383[0], _0x4edf6f = _0xe9f383[1], _0x36379e = _0xe9f383[2]) : (_0x55e658 = _0xe9f383[0], _0x11f1bf = _0xe9f383[1], _0x4edf6f = _0xe9f383[2]);else _0xe9f383.length >= 4 && (_0x55e658 = _0xe9f383[0], _0x11f1bf = _0xe9f383[1], _0x4edf6f = _0xe9f383.slice(2, _0xe9f383.length - 1).join("#"), _0x36379e = _0xe9f383[_0xe9f383.length - 1]);
  }
  if (_0x36379e) {
    if (!/^socks5:\/\//i.test(_0x36379e)) _0x36379e = null;else try {
      new URL(_0x36379e);
    } catch (_0x296d2a) {
      console.log("❌ 代理URL格式错误: " + _0x36379e);
      _0x36379e = null;
    }
  }
  return {
    "remark": _0x55e658 || "",
    "salt": _0x4edf6f,
    "cookie": _0x11f1bf,
    "proxyUrl": _0x36379e
  };
}
function _0x6f0aa1() {
  const _0x1e1743 = _0xf5c9a3(),
    _0x12a234 = [];
  for (const _0x5722d1 of _0x1e1743) {
    const _0x33ac65 = _0x323b50(_0x5722d1);
    _0x33ac65 ? _0x12a234.push(_0x33ac65) : console.log("账号格式错误：" + _0x5722d1);
  }
  _0x12a234.forEach((_0x59a4ae, _0x21a416) => {
    _0x59a4ae.index = _0x21a416 + 1;
  });
  return _0x12a234;
}
async function _0x78030a(_0xa3dbd4, _0x38ea09, _0x13fc83) {
  const _0x2a9143 = new Array(_0xa3dbd4.length);
  let _0x4637fe = 0;
  async function _0x3ea73d() {
    while (true) {
      const _0x24b697 = _0x4637fe++;
      if (_0x24b697 >= _0xa3dbd4.length) return;
      const _0xcdb5c8 = _0xa3dbd4[_0x24b697];
      try {
        _0x2a9143[_0x24b697] = await _0x13fc83(_0xcdb5c8, _0x24b697);
      } catch (_0x4ba0dc) {
        console.log("并发执行异常（index=" + (_0x24b697 + 1) + "）：" + _0x4ba0dc.message);
        _0x2a9143[_0x24b697] = null;
      }
    }
  }
  const _0x1ff5b4 = Array.from({
    "length": Math.min(_0x38ea09, _0xa3dbd4.length)
  }, _0x3ea73d);
  await Promise.all(_0x1ff5b4);
  return _0x2a9143;
}
async function _0x5c3c9f(_0x12091e) {
  if (_0x12091e.proxyUrl) {
    const _0x1217e2 = await _0x296a12(_0x12091e.proxyUrl, "账号[" + _0x12091e.index + "]" + (_0x12091e.remark ? "（" + _0x12091e.remark + "）" : ""));
    console.log("  - " + (_0x1217e2.ok ? "✅ 代理验证通过" : "❌ 代理验证失败") + ": " + _0x1217e2.msg);
    if (_0x1217e2.ok && _0x1217e2.ip && _0x1217e2.ip !== "localhost") {
      {
        if (!_0x3b97b5(_0x1217e2.ip)) console.log("⚠️ 账号[" + _0x12091e.index + "] 检测到无效IP格式，跳过重复检查");else {
          if (_0x230904.has(_0x1217e2.ip)) console.log("\n⚠️ 存在相同代理IP（" + _0x1217e2.ip + "），请立即检查！"), process.exit(1);else {
            _0x230904.add(_0x1217e2.ip);
          }
        }
      }
    } else {
      if (!_0x1217e2.ok) {
        console.log("❌ 账号[" + _0x12091e.index + "] 代理测试失败，跳过该账号");
        return {
          "index": _0x12091e.index,
          "remark": _0x12091e.remark || "无备注",
          "nickname": "账号" + _0x12091e.index,
          "initialCoin": 0,
          "finalCoin": 0,
          "coinChange": 0,
          "initialCash": 0,
          "finalCash": 0,
          "cashChange": 0,
          "error": "代理测试失败: " + _0x1217e2.msg,
          "skipped": true
        };
      }
    }
  } else {
    console.log("账号[" + _0x12091e.index + "]" + (_0x12091e.remark ? "（" + _0x12091e.remark + "）" : "") + " 未配置代理，走直连");
  }
  console.log("账号[" + _0x12091e.index + "]" + (_0x12091e.remark ? "（" + _0x12091e.remark + "）" : "") + " 🔍 获取账号信息中...");
  let _0x51a171 = await _0x3454c2(_0x12091e.cookie, _0x12091e.proxyUrl, _0x12091e.index),
    _0x5e5bc6 = _0x51a171?.["nickname"] || "账号" + _0x12091e.index;
  if (_0x51a171) {
    {
      const _0x569f16 = _0x51a171.totalCoin != null ? _0x51a171.totalCoin : "未知",
        _0x740c91 = _0x51a171.allCash != null ? _0x51a171.allCash : "未知";
      console.log("账号[" + _0x5e5bc6 + "] ✅ 登录成功，💰 当前金币: " + _0x569f16 + "，💸 当前余额: " + _0x740c91);
    }
  } else console.log("账号[" + _0x5e5bc6 + "] ❌ 基本信息获取失败，但仍继续执行任务");
  const _0x52748f = new _0x1f1b3c({
    ..._0x12091e,
    "nickname": _0x5e5bc6,
    "tasksToExecute": _0x585b61
  });
  if (_0x51a171) {
    await _0x52748f.checkCoinLimit();
    if (_0x52748f.coinExceeded) {
      console.log("账号[" + _0x52748f.nickname + "]" + (_0x12091e.remark ? "（" + _0x12091e.remark + "）" : "") + " 初始金币已超过阈值，不执行任务");
      const _0xffda2f = await _0x3454c2(_0x12091e.cookie, _0x12091e.proxyUrl, _0x12091e.index),
        _0x14d187 = _0x51a171?.["totalCoin"] || 0,
        _0x57d092 = _0xffda2f?.["totalCoin"] || 0,
        _0x5d2b30 = _0x57d092 - _0x14d187,
        _0x22a1c3 = _0x51a171?.["allCash"] || 0,
        _0x490afa = _0xffda2f?.["allCash"] || 0,
        _0xcde3b = _0x490afa - _0x22a1c3;
      return {
        "index": _0x12091e.index,
        "remark": _0x12091e.remark || "无备注",
        "nickname": _0x5e5bc6,
        "initialCoin": _0x14d187,
        "finalCoin": _0x57d092,
        "coinChange": _0x5d2b30,
        "initialCash": _0x22a1c3,
        "finalCash": _0x490afa,
        "cashChange": _0xcde3b,
        "stats": _0x52748f.getTaskStats(),
        "coinLimitExceeded": true
      };
    }
  }
  console.log("账号[" + _0x52748f.nickname + "]" + (_0x12091e.remark ? "（" + _0x12091e.remark + "）" : "") + " 🚀 开始执行所有任务");
  await _0x52748f.executeAllTasksByPriority();
  const _0x23e728 = await _0x3454c2(_0x12091e.cookie, _0x12091e.proxyUrl, _0x12091e.index),
    _0x988985 = _0x51a171?.["totalCoin"] || 0,
    _0x335461 = _0x23e728?.["totalCoin"] || 0,
    _0x227e11 = _0x335461 - _0x988985,
    _0x53a334 = _0x51a171?.["allCash"] || 0,
    _0x3a8f7f = _0x23e728?.["allCash"] || 0,
    _0x574778 = _0x3a8f7f - _0x53a334;
  _0x52748f.printTaskStats();
  return {
    "index": _0x12091e.index,
    "remark": _0x12091e.remark || "无备注",
    "nickname": _0x5e5bc6,
    "initialCoin": _0x988985,
    "finalCoin": _0x335461,
    "coinChange": _0x227e11,
    "initialCash": _0x53a334,
    "finalCash": _0x3a8f7f,
    "cashChange": _0x574778,
    "stats": _0x52748f.getTaskStats(),
    "coinLimitExceeded": _0x52748f.coinExceeded,
    "infoFetchFailed": !_0x51a171
  };
}
function _0x1e5df0(_0x1820ad) {
  if (!_0x1820ad.length) {
    console.log("\n没有可显示的账号信息。");
    return;
  }
  const _0x36dace = _0x1820ad.reduce((_0x5c9120, _0x1eb519) => {
      return _0x5c9120 + (parseInt(_0x1eb519.initialCoin) || 0);
    }, 0),
    _0x70df19 = _0x1820ad.reduce((_0x50e767, _0xe3aa59) => {
      return _0x50e767 + (parseInt(_0xe3aa59.finalCoin) || 0);
    }, 0),
    _0x598ff8 = _0x70df19 - _0x36dace,
    _0x564ccc = _0x1820ad.reduce((_0x14859d, _0x3ff0ff) => {
      return _0x14859d + (parseFloat(_0x3ff0ff.initialCash) || 0);
    }, 0),
    _0x345600 = _0x1820ad.reduce((_0xa4133a, _0x295312) => {
      return _0xa4133a + (parseFloat(_0x295312.finalCash) || 0);
    }, 0),
    _0x3a591e = _0x345600 - _0x564ccc;
  let _0x5d3d9e = 0,
    _0x1e5f33 = 0,
    _0x18821c = 0;
  _0x1820ad.forEach(_0xc2792a => {
    if (_0xc2792a.stats) {
      Object.values(_0xc2792a.stats).forEach(_0x4e9989 => {
        _0x5d3d9e += _0x4e9989.success + _0x4e9989.failed;
        _0x1e5f33 += _0x4e9989.success;
        _0x18821c += _0x4e9989.totalReward;
      });
    }
  });
  const _0x18bdb6 = _0x5d3d9e > 0 ? (_0x1e5f33 / _0x5d3d9e * 100).toFixed(1) : "0.0",
    _0x60c810 = _0x1820ad.filter(_0x6a54bb => _0x6a54bb.coinLimitExceeded).length,
    _0x4fd0a1 = _0x1820ad.filter(_0x1c963f => _0x1c963f.skipped).length,
    _0x28794f = _0x1820ad.filter(_0x1f739e => _0x1f739e.infoFetchFailed).length;
  console.log("\n\n" + "=".repeat(80));
  console.log("|" + _0x4772b5("      快手养号任务执行结果汇总表      ", 78) + "|");
  console.log("=".repeat(80));
  console.log("|" + ("总账号数: " + _0x1820ad.length).padEnd(22) + ("跳过账号: " + _0x4fd0a1).padEnd(22) + ("总任务数: " + _0x5d3d9e).padEnd(22) + ("任务成功率: " + _0x18bdb6 + "%").padEnd(10) + "|");
  console.log("|" + ("总金币变化: " + _0x598ff8).padEnd(26) + ("总金币奖励: " + _0x18821c).padEnd(26) + ("总余额变化: " + _0x3a591e.toFixed(2)).padEnd(24) + "|");
  console.log("-".repeat(80));
  const _0x3d6a94 = ["序号", "备注", "账号昵称", "初始金币", "最终金币", "金币变化", "初始余额", "最终余额", "余额变化", "状态"],
    _0x4ae9dd = [6, 16, 16, 12, 12, 12, 12, 12, 12, 10];
  let _0x4041df = "|";
  _0x3d6a94.forEach((_0x106cf5, _0xd48e07) => {
    _0x4041df += _0x4772b5(_0x106cf5, _0x4ae9dd[_0xd48e07]) + "|";
  });
  console.log(_0x4041df);
  let _0x32a4a2 = "|";
  _0x4ae9dd.forEach(_0x13b6b8 => {
    _0x32a4a2 += "-".repeat(_0x13b6b8) + "|";
  });
  console.log(_0x32a4a2);
  _0x1820ad.forEach(_0x2f1600 => {
    {
      let _0x3c9f1b = "|";
      _0x3c9f1b += _0x4772b5(_0x2f1600.index, _0x4ae9dd[0]) + "|";
      _0x3c9f1b += _0x4772b5(_0x2f1600.remark, _0x4ae9dd[1]) + "|";
      let _0x25aa1a = _0x2f1600.nickname || "-";
      if (_0x2f1600.skipped) _0x25aa1a += " ❌";else {
        if (_0x2f1600.coinLimitExceeded) _0x25aa1a += " ⚠️";else _0x2f1600.infoFetchFailed && (_0x25aa1a += " 🔶");
      }
      _0x3c9f1b += _0x4772b5(_0x25aa1a.substring(0, _0x4ae9dd[2] - 2), _0x4ae9dd[2]) + "|";
      _0x3c9f1b += _0x4772b5(_0x2f1600.initialCoin, _0x4ae9dd[3]) + "|";
      _0x3c9f1b += _0x4772b5(_0x2f1600.finalCoin, _0x4ae9dd[4]) + "|";
      const _0x5e0b47 = _0x2f1600.coinChange >= 0 ? "+" + _0x2f1600.coinChange : _0x2f1600.coinChange;
      _0x3c9f1b += _0x4772b5(_0x5e0b47, _0x4ae9dd[5]) + "|";
      _0x3c9f1b += _0x4772b5(_0x2f1600.initialCash, _0x4ae9dd[6]) + "|";
      _0x3c9f1b += _0x4772b5(_0x2f1600.finalCash, _0x4ae9dd[7]) + "|";
      const _0xa66d16 = _0x2f1600.cashChange >= 0 ? "+" + _0x2f1600.cashChange.toFixed(2) : _0x2f1600.cashChange.toFixed(2);
      _0x3c9f1b += _0x4772b5(_0xa66d16, _0x4ae9dd[8]) + "|";
      let _0x513976 = "完成";
      if (_0x2f1600.skipped) _0x513976 = "跳过";else {
        if (_0x2f1600.coinLimitExceeded) _0x513976 = "超限";else _0x2f1600.infoFetchFailed && (_0x513976 = "无信息");
      }
      _0x3c9f1b += _0x4772b5(_0x513976, _0x4ae9dd[9]) + "|";
      console.log(_0x3c9f1b);
    }
  });
  console.log("=".repeat(80));
  console.log("|" + _0x4772b5("      任务执行完成，请查看详细结果      ", 78) + "|");
  console.log("=".repeat(80));
}
(async () => {
  const _0x464e5b = await _0x541164(_0x236885);
  !_0x464e5b && (console.log("\n❌ km变量验证失败，脚本终止运行"), console.log("请设置正确的km环境变量后重试"), process.exit(1));
  _0x4eef1e = _0x129beb(_0x236885);
  console.log("\n✅ km验证通过，开始执行IP白名单自动添加...\n");
  const _0x13a365 = await _0x49f48a();
  !_0x13a365 && (console.log("\n❌ IP白名单添加失败，脚本终止运行"), console.log("⚠️ 未添加IP白名单无法运行脚本，请检查网络连接或手动添加IP"), process.exit(1));
  console.log("\n✅ IP白名单验证通过，开始加载账号配置...\n");
  const _0x5d63b0 = _0x6f0aa1();
  console.log("共找到 " + _0x5d63b0.length + " 个有效账号");
  if (!_0x5d63b0.length) {
    process.exit(1);
  }
  if (_0x47dabb.enabled && _0xd5a02f) for (const _0x3568a9 of _0x5d63b0) {
    try {
      {
        const _0x453f6e = _0x3568a9.remark || "账号" + _0x3568a9.index,
          _0x3caffe = await _0x4228f2(_0x3568a9.cookie, _0x453f6e);
        if (_0x3caffe.success && _0x3caffe.data) {
          const _0x385caa = _0x3caffe.data.balance || 0,
            _0x867662 = _0x3caffe.data.amountYuan || _0x3caffe.data.amounts || [],
            _0x55e641 = _0x867662.filter(_0x4c8890 => _0x4c8890 >= 1),
            _0x1b5c29 = _0x55e641.length > 0 ? _0x55e641.join(", ") + "元" : "无";
          console.log("[" + _0x453f6e + "] 余额: " + _0x385caa.toFixed(2) + "元，可提现档位: " + _0x1b5c29);
        } else console.log("[" + _0x453f6e + "] 查询提现额度失败: " + (_0x3caffe.message || "未知错误"));
        const _0x168135 = await _0x3dc547(_0x3568a9.cookie, _0x453f6e);
        if (_0x168135.success && _0x168135.data && _0x168135.data.bindInfo) {
          const _0x4c8938 = [],
            _0x4fe618 = {
              "WECHAT": "微信",
              "ALIPAY": "支付宝",
              "UNION_PAY_BANK": "银行卡"
            };
          for (const _0x2c9e74 of _0x168135.data.bindInfo) {
            if (_0x2c9e74.hasBind && _0x2c9e74.provider) {
              const _0x589d9 = _0x4fe618[_0x2c9e74.provider] || _0x2c9e74.provider,
                _0x447ffa = _0x2c9e74.nickname ? _0x589d9 + "(" + _0x2c9e74.nickname + ")" : _0x589d9;
              _0x4c8938.push(_0x447ffa);
            }
          }
          const _0x59a56c = _0x4c8938.length > 0 ? _0x4c8938.join(", ") : "无";
          console.log("[" + _0x453f6e + "] 已绑定: " + _0x59a56c);
        } else console.log("[" + _0x453f6e + "] 查询绑定失败: " + (_0x168135.message || "未知错误"));
        await new Promise(_0x1d8f27 => setTimeout(_0x1d8f27, 500));
      }
    } catch (_0x2b17fc) {
      console.log("[账号" + _0x3568a9.index + "] 查询异常: " + _0x2b17fc.message);
    }
  }
  const _0xe35136 = _0x34109f("MAX_CONCURRENCY", 3);
  console.log("\n防黑并发：" + _0xe35136 + "    防黑轮数：" + _0x5c374f + "    look次数/轮：" + _0x4000d7 + "    search次数/轮：" + _0x31ca39 + "    follow次数/look：" + _0x5b81ac + "    search_follow次数/search：" + _0x263408 + "\n");
  const _0x51bf6c = [];
  await _0x78030a(_0x5d63b0, _0xe35136, async _0x528baf => {
    console.log("\n—— 🚀 开始账号[" + _0x528baf.index + "]" + (_0x528baf.remark ? "（" + _0x528baf.remark + "）" : "") + " ——");
    try {
      {
        const _0x82bd69 = await _0x5c3c9f(_0x528baf);
        _0x51bf6c.push({
          "index": _0x528baf.index,
          "remark": _0x528baf.remark || "无备注",
          "nickname": _0x82bd69?.["nickname"] || "账号" + _0x528baf.index,
          "initialCoin": _0x82bd69?.["initialCoin"] || 0,
          "finalCoin": _0x82bd69?.["finalCoin"] || 0,
          "coinChange": _0x82bd69?.["coinChange"] || 0,
          "initialCash": _0x82bd69?.["initialCash"] || 0,
          "finalCash": _0x82bd69?.["finalCash"] || 0,
          "cashChange": _0x82bd69?.["cashChange"] || 0,
          "stats": _0x82bd69?.["stats"] || {},
          "coinLimitExceeded": _0x82bd69?.["coinLimitExceeded"] || false,
          "skipped": _0x82bd69?.["skipped"] || false,
          "infoFetchFailed": _0x82bd69?.["infoFetchFailed"] || false,
          "error": _0x82bd69?.["error"] || null
        });
      }
    } catch (_0x29bfaa) {
      console.log("账号[" + _0x528baf.index + "]" + (_0x528baf.remark ? "（" + _0x528baf.remark + "）" : "") + " ❌ 执行异常：" + _0x29bfaa.message);
      _0x51bf6c.push({
        "index": _0x528baf.index,
        "remark": _0x528baf.remark || "无备注",
        "nickname": "账号" + _0x528baf.index,
        "initialCoin": 0,
        "finalCoin": 0,
        "coinChange": 0,
        "initialCash": 0,
        "finalCash": 0,
        "cashChange": 0,
        "error": _0x29bfaa.message,
        "skipped": true
      });
    }
  });
  _0x51bf6c.sort((_0x586129, _0x5287dc) => _0x586129.index - _0x5287dc.index);
  console.log("\n全部完成。", "✅");
  console.log("\n---------------------------------------------- 账号信息汇总 ----------------------------------------------");
  _0x1e5df0(_0x51bf6c);
})();