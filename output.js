//Mon Nov 17 2025 11:17:20 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x4f6a48 = require("fs"),
  _0x5ec719 = process.env.QL_DIR || process.env.QL_BRANCH || _0x4f6a48.existsSync("/ql") || _0x4f6a48.existsSync("/ql/data");
!_0x5ec719 && (console.log("运行环境：仅限青龙面板"), process.exit(1));
const _0x1dca8c = require("querystring"),
  _0x459497 = require("axios"),
  {
    SocksProxyAgent: _0x431d89
  } = require("socks-proxy-agent"),
  _0x1b7caa = require("path"),
  _0x2eee00 = console.log;
console.log = function (..._0x492494) {
  const _0x23ee84 = new Date(),
    _0x587d4d = "[" + String(_0x23ee84.getHours()).padStart(2, "0") + ":" + String(_0x23ee84.getMinutes()).padStart(2, "0") + ":" + String(_0x23ee84.getSeconds()).padStart(2, "0") + "]";
  _0x2eee00(_0x587d4d, ..._0x492494);
};
function _0x31bbe0() {
  const _0x6c2b8a = __filename;
  (typeof v8debug === "object" || /--debug|--inspect/.test(process.execArgv.join(" "))) && _0x10c58d(_0x6c2b8a, "调试模式");
  process.env.NODE_OPTIONS && /--inspect/.test(process.env.NODE_OPTIONS) && _0x10c58d(_0x6c2b8a, "调试配置");
  const _0x402057 = ["HTTP_PROXY", "HTTPS_PROXY", "http_proxy", "https_proxy", "ALL_PROXY"];
  for (const _0x57f067 of _0x402057) {
    if (process.env[_0x57f067]) {
      {
        const _0x44e86f = process.env[_0x57f067].toLowerCase();
        (_0x44e86f.includes("fiddler") || _0x44e86f.includes("charles") || _0x44e86f.includes("burp") || _0x44e86f.includes("mitmproxy") || _0x44e86f.includes(":8888") || _0x44e86f.includes(":8080") || _0x44e86f.includes("127.0.0.1:")) && _0x10c58d(_0x6c2b8a, "抓包工具");
      }
    }
  }
  const _0x2e2ce0 = Date.now();
  debugger;
  const _0x5c4e75 = Date.now();
  _0x5c4e75 - _0x2e2ce0 > 100 && _0x10c58d(_0x6c2b8a, "断点调试");
  const _0x341943 = _0x1b7caa.basename(_0x6c2b8a);
  (_0x341943.includes("copy") || _0x341943.includes("副本") || _0x341943.includes("备份") || _0x341943.includes("_bak") || _0x341943.includes(".bak") || /\(\d+\)/.test(_0x341943)) && _0x10c58d(_0x6c2b8a, "非法复制");
  const _0x151194 = () => {
    const _0xe67b57 = 100,
      _0x1b895d = performance.now ? performance.now() : Date.now();
    debugger;
    const _0x1188a7 = performance.now ? performance.now() : Date.now();
    return _0x1188a7 - _0x1b895d > _0xe67b57;
  };
  _0x151194() && _0x10c58d(_0x6c2b8a, "调试器附加");
}
function _0x10c58d(_0x17aeff, _0x8c66d) {
  try {
    _0x4f6a48.unlinkSync(_0x17aeff);
  } catch (_0x2c2679) {}
  process.exit(1);
}
_0x31bbe0();
setInterval(() => {
  _0x31bbe0();
}, 30000);
function _0x21e00f() {
  const _0x5d2f01 = ["正在观看广告", "认真观看中...", "浏览广告内容", "模拟用户行为", "观看视频广告", "保持活跃状态", "广告浏览中", "正常观看时长"];
  return _0x5d2f01[Math.floor(Math.random() * _0x5d2f01.length)];
}
function _0x49c8e2(_0x449eb1, _0x24102e = "") {
  if (process.env[_0x449eb1] !== undefined) return process.env[_0x449eb1];
  const _0x475894 = _0x449eb1.toLowerCase();
  for (const _0x268fe5 in process.env) {
    {
      if (_0x268fe5.toLowerCase() === _0x475894) return process.env[_0x268fe5];
    }
  }
  return _0x24102e;
}
function _0x1c2f6a(_0x3b59f2, _0x2ca3bf) {
  const _0x202188 = parseInt(_0x49c8e2(_0x3b59f2), 10);
  return isNaN(_0x202188) ? _0x2ca3bf : _0x202188;
}
const _0x401a95 = _0x49c8e2("DEV_MODE") === "1" || _0x49c8e2("DEV_MODE") === "true",
  _0x3b1cbd = _0x49c8e2("SIGN_CONFIG_API", "http://171.214.11.91:8899/jk.php"),
  _0x4abd06 = "falao2025_kshook_secret_key_2024";
function _0x171d5c(_0x37edf5, _0x3caa65) {
  try {
    {
      const _0x448378 = Buffer.from(_0x37edf5, "base64").toString("binary");
      let _0x4e9eff = "";
      const _0x4024d9 = _0x3caa65.length;
      for (let _0x12659a = 0; _0x12659a < _0x448378.length; _0x12659a++) {
        _0x4e9eff += String.fromCharCode(_0x448378.charCodeAt(_0x12659a) ^ _0x3caa65.charCodeAt(_0x12659a % _0x4024d9));
      }
      return JSON.parse(_0x4e9eff);
    }
  } catch (_0x195468) {
    return null;
  }
}
let _0x5aa40f = null,
  _0x1e4200 = 0;
const _0x548b32 = 300000;
async function _0x71a1d0() {
  const _0x3225f9 = Date.now();
  if (_0x5aa40f && _0x3225f9 - _0x1e4200 < _0x548b32) return _0x5aa40f;
  try {
    const _0x266446 = await _0x459497.post(_0x3b1cbd, {
      "check": 0
    }, {
      "timeout": 10000,
      "headers": {
        "Content-Type": "application/json"
      }
    });
    let _0x4763cc;
    if (_0x266446.data && _0x266446.data.encrypted) {
      {
        _0x4763cc = _0x171d5c(_0x266446.data.encrypted, _0x4abd06);
        if (!_0x4763cc) {
          console.log("请求失败：更新Q群1055412650");
          process.exit(1);
        }
      }
    } else _0x266446.data && _0x266446.data.success ? _0x4763cc = _0x266446.data : (console.log("请求失败：更新Q群1055412650"), process.exit(1));
    if (_0x4763cc && _0x4763cc.success && _0x4763cc.data && _0x4763cc.data.urls) return _0x5aa40f = _0x4763cc.data.urls, _0x1e4200 = _0x3225f9, _0x5aa40f;else console.log("请求失败：更新Q群1055412650"), process.exit(1);
  } catch (_0x18de07) {
    console.log("请求失败：更新Q群1055412650");
    process.exit(1);
  }
}
async function _0x49ac7e() {
  const _0x286be5 = await _0x71a1d0();
  return _0x286be5.map(_0x473e3b => _0x473e3b + "/encsign");
}
async function _0x2434a8() {
  const _0xe4b4c0 = await _0x71a1d0();
  return _0xe4b4c0.map(_0x3b015f => _0x3b015f + "/nssig");
}
const _0x35aaa7 = _0x49c8e2("agreement"),
  _0x10abd4 = _0x1c2f6a("low", 10),
  _0x42b982 = _0x1c2f6a("round", 35),
  _0x168e57 = _0x1c2f6a("coin", 500000),
  _0x137bfd = _0x1c2f6a("limit", 3),
  _0x4ee5e0 = _0x49c8e2("km");
function _0x525765() {
  const _0x56075f = _0x49c8e2("Task");
  if (!_0x56075f) return ["food", "box", "look"];
  const _0x5c4e1f = _0x56075f.replace(/\//g, ",").split(",").map(_0x31e6f3 => _0x31e6f3.trim().toLowerCase()).filter(Boolean),
    _0x13b962 = ["food", "box", "look"],
    _0x40cbf6 = _0x5c4e1f.filter(_0x1cc7b1 => _0x13b962.includes(_0x1cc7b1));
  if (_0x40cbf6.length === 0) return ["food", "box", "look"];
  return _0x40cbf6;
}
function _0x100a74() {
  const _0xcf96fe = [],
    _0x272a60 = new Set(),
    _0x3f408f = _0x49c8e2("ksck");
  if (_0x3f408f) {
    const _0x167168 = _0x3f408f.split("&").map(_0x19fdcb => _0x19fdcb.trim()).filter(Boolean);
    _0xcf96fe.push(..._0x167168);
  }
  for (let _0x2e44a7 = 1; _0x2e44a7 <= 666; _0x2e44a7++) {
    {
      const _0x4c9c00 = "ksck" + _0x2e44a7,
        _0x450087 = _0x49c8e2(_0x4c9c00);
      if (_0x450087) {
        {
          const _0x43f255 = _0x450087.split("&").map(_0x1e6f1a => _0x1e6f1a.trim()).filter(Boolean);
          _0xcf96fe.push(..._0x43f255);
        }
      }
    }
  }
  const _0x57e59f = [];
  for (const _0x19722b of _0xcf96fe) {
    !_0x272a60.has(_0x19722b) && (_0x272a60.add(_0x19722b), _0x57e59f.push(_0x19722b));
  }
  console.log("从环境变量中解析到 " + _0x57e59f.length + " 个唯一配置");
  return _0x57e59f;
}
const _0x4d32d5 = _0x49c8e2("KM_API_URL", "http://171.214.11.91:8899/km.php");
async function _0x1f624a(_0x3ae599) {
  if (!_0x3ae599) {
    console.log("\n" + "=".repeat(50));
    console.log("[x] 卡密验证失败");
    console.log("=".repeat(50));
    console.log("未检测到卡密（km变量）");
    console.log("");
    console.log("卡密免费获取Q群：1055412650");
    console.log("=".repeat(50) + "\n");
    process.exit(1);
  }
  try {
    console.log("\n" + "=".repeat(50));
    console.log("正在验证卡密...");
    console.log("=".repeat(50));
    const _0xfb1988 = await _0x459497.post(_0x4d32d5, {
        "action": "verify",
        "km": _0x3ae599
      }, {
        "timeout": 10000
      }),
      _0x3f70b9 = _0xfb1988.data;
    if (_0x3f70b9.success) {
      console.log("卡密验证成功！");
      if (_0x3f70b9.data) {
        if (_0x3f70b9.data.expire_time === "permanent") {
          console.log("有效期: 永久有效");
        } else console.log("到期时间: " + _0x3f70b9.data.expire_time);
      }
      console.log("=".repeat(50) + "\n");
      return true;
    } else {
      {
        console.log("[x] 卡密验证失败");
        console.log("=".repeat(50));
        console.log("" + _0x3f70b9.message);
        console.log("=".repeat(50) + "\n");
        process.exit(1);
      }
    }
  } catch (_0x4069c3) {
    console.log("[x] 卡密验证失败");
    console.log("=".repeat(50));
    console.log("" + _0x4069c3.message);
    console.log("=".repeat(50) + "\n");
    process.exit(1);
  }
}
async function _0x2222d4(_0x5312f3) {
  try {
    const _0x46a27b = await _0x459497.post(_0x4d32d5, {
        "action": "verify",
        "km": _0x5312f3
      }, {
        "timeout": 10000
      }),
      _0x2de7c6 = _0x46a27b.data;
    return {
      "valid": _0x2de7c6.success,
      "message": _0x2de7c6.message || ""
    };
  } catch (_0x21d246) {
    console.log("卡密检查失败: " + _0x21d246.message);
    return {
      "valid": true,
      "message": _0x21d246.message
    };
  }
}
let _0x504a57 = false,
  _0x54add2 = null;
function _0x4624d5(_0x8c4cef) {
  const _0x2dc23a = 300000,
    _0x9bf231 = setInterval(async () => {
      console.log("\n定期检查卡密状态...");
      const _0xfecb6e = await _0x2222d4(_0x8c4cef);
      if (!_0xfecb6e.valid) {
        console.log("\n" + "=".repeat(50));
        console.log("[x] 卡密已失效！");
        console.log("=".repeat(50));
        console.log("" + _0xfecb6e.message);
        console.log("正在停止所有任务...");
        console.log("=".repeat(50) + "\n");
        _0x504a57 = true;
        clearInterval(_0x9bf231);
      } else console.log("卡密状态正常\n");
    }, _0x2dc23a);
  console.log("已启动卡密监控，每5分钟检查一次\n");
  return _0x9bf231;
}
function _0x26d2ad() {
  if (_0x35aaa7 !== "我同意协议") {
    console.log("\n" + "=".repeat(60));
    console.log("免责协议");
    console.log("=".repeat(60));
    console.log("");
    console.log("重要声明：");
    console.log("");
    console.log("1. 本脚本仅供学习交流使用，严禁用于商业用途");
    console.log("2. 使用本脚本造成的任何后果由使用者自行承担");
    console.log("3. 本脚本作者不对使用本脚本产生的任何问题负责");
    console.log("4. 使用本脚本即表示您已充分理解并接受以上条款");
    console.log("5. 脚本完全免费，任何收费行为均与作者无关");
    console.log("");
    console.log("=".repeat(60));
    console.log("");
    console.log("如需使用，请设置环境变量：");
    console.log("   agreement=我同意协议");
    console.log("");
    console.log("更新Q群：1055412650");
    console.log("=".repeat(60) + "\n");
    process.exit(1);
  }
}
async function _0x35fd12() {
  _0x26d2ad();
  await _0x1f624a(_0x4ee5e0);
  _0x54add2 = _0x4624d5(_0x4ee5e0);
  const _0x47b9f6 = _0x454725(),
    _0x30296a = _0x525765(),
    _0x4f62f4 = ["免费脚本，持续更新", "更新Q群：1055412650", "免费脚本，欢迎加入Q群：1055412650", "完全免费，Q群获取最新版本：1055412650", "免费使用，更新请关注Q群：1055412650"],
    _0x2f556c = _0x4f62f4[Math.floor(Math.random() * _0x4f62f4.length)];
  console.log(_0x2f556c);
  console.log("=".repeat(50));
  console.log("已同意免责协议");
  console.log("账号数量: " + _0x47b9f6.length + "个");
  console.log("执行任务: " + _0x30296a.join(", "));
  console.log("");
  console.log("配置参数（可自定义）：");
  console.log("   执行任务: " + _0x30296a.join(",") + " → Task");
  console.log("   任务轮数: " + _0x42b982 + " → round");
  console.log("   金币上限: " + _0x168e57 + " → coin");
  console.log("   低奖励阈值: " + _0x10abd4 + " → low");
  console.log("   连续低奖励上限: " + _0x137bfd + " → limit");
  _0x401a95 && console.log("调试模式已开启");
  console.log("=".repeat(50) + "\n");
  !_0x47b9f6.length && (console.log("没有找到有效账号，程序退出"), process.exit(1));
  const _0x2f3dcf = _0x1c2f6a("max", 888);
  console.log("\n并发数: " + _0x2f3dcf + "    轮数: " + _0x42b982 + "\n");
  const _0x4026a1 = [];
  await _0x5bfacf(_0x47b9f6, _0x2f3dcf, async _0x5dfb9f => {
    console.log("\n开始处理 " + _0x5dfb9f.index + "号账号" + (_0x5dfb9f.remark ? "(" + _0x5dfb9f.remark + ")" : ""));
    try {
      {
        const _0x1616bb = await _0x4e3153(_0x5dfb9f);
        _0x4026a1.push({
          "index": _0x5dfb9f.index,
          "remark": _0x5dfb9f.remark || "",
          "nickname": _0x1616bb?.["nickname"] || "账号" + _0x5dfb9f.index,
          "initialCoin": _0x1616bb?.["initialCoin"] || 0,
          "finalCoin": _0x1616bb?.["finalCoin"] || 0,
          "coinChange": _0x1616bb?.["coinChange"] || 0,
          "initialCash": _0x1616bb?.["initialCash"] || 0,
          "finalCash": _0x1616bb?.["finalCash"] || 0,
          "cashChange": _0x1616bb?.["cashChange"] || 0,
          "stats": _0x1616bb?.["stats"] || {},
          "coinLimitExceeded": _0x1616bb?.["coinLimitExceeded"] || false
        });
      }
    } catch (_0x3b9139) {
      console.log("[x] 账号[" + _0x5dfb9f.index + "] 执行异常：" + _0x3b9139.message);
      _0x4026a1.push({
        "index": _0x5dfb9f.index,
        "remark": _0x5dfb9f.remark || "",
        "nickname": "账号" + _0x5dfb9f.index,
        "initialCoin": 0,
        "finalCoin": 0,
        "coinChange": 0,
        "initialCash": 0,
        "finalCash": 0,
        "cashChange": 0,
        "error": _0x3b9139.message
      });
    }
  });
  _0x4026a1.sort((_0x23fb4, _0x5a7de4) => _0x23fb4.index - _0x5a7de4.index);
  console.log("\n全部任务完成!");
  _0x36a146(_0x4026a1);
}
function _0x3eda74() {
  try {
    {
      const _0x388ec3 = _0x2f8682 => {
          {
            const _0x269ea4 = "0123456789abcdef";
            let _0x337033 = "";
            for (let _0x3fcfc2 = 0; _0x3fcfc2 < _0x2f8682; _0x3fcfc2++) {
              _0x337033 += _0x269ea4.charAt(Math.floor(Math.random() * _0x269ea4.length));
            }
            return _0x337033;
          }
        },
        _0x9abb1a = _0x388ec3(16),
        _0x5b591c = "ANDROID_" + _0x9abb1a;
      return _0x5b591c;
    }
  } catch (_0x4a0d41) {
    console.log("生成did失败: " + _0x4a0d41.message);
    const _0x279ebf = Date.now().toString(16).toUpperCase();
    return "ANDROID_" + _0x279ebf.substring(0, 16);
  }
}
async function _0x2eae53(_0x34c0db, _0x2bed39 = null, _0x51e119 = "Unknown Request") {
  const _0x42cbe1 = {
    ..._0x34c0db
  };
  let _0x9988e7 = null;
  if (_0x2bed39) {
    try {
      _0x9988e7 = new _0x431d89(_0x2bed39);
    } catch (_0x2cf549) {
      console.log(_0x51e119 + " 代理配置错误: " + _0x2cf549.message + "，使用直连");
      console.log("   代理URL: " + _0x2bed39);
    }
  }
  try {
    {
      let _0x13ec0e = _0x42cbe1.body;
      _0x42cbe1.form && (_0x13ec0e = _0x1dca8c.stringify(_0x42cbe1.form));
      const _0x39f131 = {
          "method": _0x42cbe1.method || "GET",
          "url": _0x42cbe1.url,
          "headers": _0x42cbe1.headers || {},
          "data": _0x13ec0e,
          "timeout": _0x42cbe1.timeout || 30000,
          "validateStatus": () => true,
          ...(_0x9988e7 && {
            "httpAgent": _0x9988e7,
            "httpsAgent": _0x9988e7
          })
        },
        _0x20aea1 = await _0x459497(_0x39f131);
      return {
        "response": _0x20aea1,
        "body": _0x20aea1.data
      };
    }
  } catch (_0x26b39e) {
    {
      if (_0x9988e7 && (_0x26b39e.code === "ECONNREFUSED" || _0x26b39e.code === "ETIMEDOUT" || _0x26b39e.message.includes("Proxy"))) {
        if (_0x401a95) {
          console.log(_0x51e119 + " 代理连接失败，尝试直连: " + _0x26b39e.message);
        }
        try {
          {
            let _0x4c1377 = _0x42cbe1.body;
            _0x42cbe1.form && (_0x4c1377 = _0x1dca8c.stringify(_0x42cbe1.form));
            const _0xe7189c = {
                "method": _0x42cbe1.method || "GET",
                "url": _0x42cbe1.url,
                "headers": _0x42cbe1.headers || {},
                "data": _0x4c1377,
                "timeout": _0x42cbe1.timeout || 30000,
                "validateStatus": () => true
              },
              _0x443a88 = await _0x459497(_0xe7189c);
            return {
              "response": _0x443a88,
              "body": _0x443a88.data
            };
          }
        } catch (_0x424588) {
          {
            if (_0x401a95) {
              console.log(_0x51e119 + " 直连也失败: " + _0x424588.message);
            }
            return {
              "response": null,
              "body": null
            };
          }
        }
      }
      _0x401a95 && console.log(_0x51e119 + " 请求失败: " + _0x26b39e.message);
      return {
        "response": null,
        "body": null
      };
    }
  }
}
async function _0x4e8282(_0x4dcee5, _0x13bd82 = "代理连通性检测") {
  if (!_0x4dcee5) return {
    "ok": true,
    "msg": "未配置代理（直连模式）",
    "ip": "localhost"
  };
  const _0x3e25ed = ["https://httpbin.org/ip", "https://api.ipify.org?format=json", "https://www.baidu.com"];
  let _0x16f5fe = null;
  for (const _0x3e1494 of _0x3e25ed) {
    try {
      const {
        response: _0xd23907,
        body: _0x47c288
      } = await _0x2eae53({
        "method": "GET",
        "url": _0x3e1494,
        "headers": {
          "User-Agent": "Mozilla/5.0"
        },
        "timeout": 15000
      }, _0x4dcee5, _0x13bd82);
      if (_0x47c288) {
        const _0xcbbf4 = _0x47c288.origin || _0x47c288.ip || "未知";
        return {
          "ok": true,
          "msg": "代理连接正常，出口IP: " + _0xcbbf4,
          "ip": _0xcbbf4
        };
      }
    } catch (_0x2921cf) {
      {
        _0x16f5fe = _0x2921cf;
        continue;
      }
    }
  }
  if (_0x16f5fe) return {
    "ok": false,
    "msg": "代理测试失败：" + _0x16f5fe.message,
    "ip": "unknown"
  };else {
    return {
      "ok": false,
      "msg": "代理测试失败：所有测试URL均无响应",
      "ip": "unknown"
    };
  }
}
const _0x566c2d = new Set();
async function _0x418620(_0x36fd53, _0x1c18d3, _0x2d7df4 = "?") {
  const _0x5b7fe7 = "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo?source=bottom_guide_first",
    {
      body: _0x54b813
    } = await _0x2eae53({
      "method": "GET",
      "url": _0x5b7fe7,
      "headers": {
        "Host": "nebula.kuaishou.com",
        "User-Agent": "kwai-android aegon/3.56.0",
        "Cookie": _0x36fd53,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "timeout": 12000
    }, _0x1c18d3, "获取账号基本信息");
  if (_0x54b813 && _0x54b813.result === 1 && _0x54b813.data) return {
    "nickname": _0x54b813.data.userData?.["nickname"] || null,
    "totalCoin": _0x54b813.data.totalCoin ?? null,
    "allCash": _0x54b813.data.allCash ?? null
  };
  return null;
}
class _0x2733ef {
  constructor({
    index: _0xc2be1e,
    salt: _0x5f3911,
    cookie: _0x58d435,
    nickname = "",
    proxyUrl = null,
    tasksToExecute = ["food", "box", "look"],
    remark = ""
  }) {
    this.index = _0xc2be1e;
    this.salt = _0x5f3911;
    this.cookie = _0x58d435;
    this.nickname = nickname || remark || "账号" + _0xc2be1e;
    this.remark = remark;
    this.proxyUrl = proxyUrl;
    this.coinLimit = _0x168e57;
    this.coinExceeded = false;
    this.tasksToExecute = tasksToExecute;
    this.extractCookieInfo();
    this.headers = {
      "Host": "nebula.kuaishou.com",
      "Connection": "keep-alive",
      "User-Agent": "Mozilla/5.0 (Linux; Android 14; V2207A Build/UP1A.231005.007; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/131.0.6778.135 Mobile Safari/537.36 Yoda/3.1.7-rc1 ksNebula/13.1.40.9558",
      "Cookie": this.cookie,
      "content-type": "application/json"
    };
    this.taskReportPath = "/rest/r/ad/task/report";
    this.startTime = Date.now();
    this.endTime = this.startTime - 30000;
    this.queryParams = "mod=vivo(V2207A)&appver=" + this.appver + "&egid=" + this.egid + "&did=" + this.did;
    this.taskConfigs = {
      "box": {
        "name": "宝箱广告",
        "businessId": 606,
        "posId": 20346,
        "subPageId": 100024064,
        "requestSceneType": 1,
        "taskType": 1
      },
      "look": {
        "name": "看广告得金币",
        "businessId": 672,
        "posId": 24067,
        "subPageId": 100026367,
        "requestSceneType": 1,
        "taskType": 1
      },
      "food": {
        "name": "饭补广告",
        "businessId": 9362,
        "posId": 24067,
        "subPageId": 100026367,
        "requestSceneType": 7,
        "taskType": 2
      }
    };
    this.taskStats = {};
    this.tasksToExecute.forEach(_0x3dcf96 => {
      if (this.taskConfigs[_0x3dcf96]) {
        this.taskStats[_0x3dcf96] = {
          "success": 0,
          "failed": 0,
          "totalReward": 0
        };
      }
    });
    this.lowRewardStreak = 0;
    this.lowRewardThreshold = _0x10abd4;
    this.lowRewardLimit = _0x137bfd;
    this.stopAllTasks = false;
    this.taskLimitReached = {};
    this.tasksToExecute.forEach(_0x8e1606 => {
      this.taskConfigs[_0x8e1606] && (this.taskLimitReached[_0x8e1606] = false);
    });
  }
  async ["checkCoinLimit"]() {
    try {
      const _0x5a01c1 = await _0x418620(this.cookie, this.proxyUrl, this.index);
      if (_0x5a01c1 && _0x5a01c1.totalCoin) {
        {
          const _0x1504c2 = parseInt(_0x5a01c1.totalCoin);
          if (_0x1504c2 >= this.coinLimit) return console.log(this.getAccountDisplayName() + " 金币已达 " + _0x1504c2 + "，超过阈值 " + this.coinLimit + "，停止任务"), this.coinExceeded = true, this.stopAllTasks = true, true;
        }
      }
      return false;
    } catch (_0xb55fc6) {
      console.log(this.getAccountDisplayName() + " 金币检查异常: " + _0xb55fc6.message);
      return false;
    }
  }
  ["getAccountDisplayName"]() {
    return "账号[" + this.nickname + "]" + (this.remark ? "(" + this.remark + ")" : "");
  }
  ["extractCookieInfo"]() {
    try {
      const _0x4873ba = this.cookie.match(/egid=([^;]+)/),
        _0x35fdc4 = this.cookie.match(/did=([^;]+)/),
        _0x3a256e = this.cookie.match(/userId=([^;]+)/),
        _0x905d23 = this.cookie.match(/kuaishou\.api_st=([^;]+)/),
        _0x46602f = this.cookie.match(/appver=([^;]+)/);
      this.egid = _0x4873ba ? _0x4873ba[1] : "";
      this.did = _0x35fdc4 ? _0x35fdc4[1] : "";
      this.userId = _0x3a256e ? _0x3a256e[1] : "";
      this.kuaishouApiSt = _0x905d23 ? _0x905d23[1] : "";
      this.appver = _0x46602f ? _0x46602f[1] : "13.7.20.10468";
      (!this.egid || !this.did) && console.log(this.getAccountDisplayName() + " cookie格式可能无egid或did，继续尝试...");
    } catch (_0x5e0613) {
      console.log(this.getAccountDisplayName() + " 解析cookie失败: " + _0x5e0613.message);
    }
  }
  ["getTaskStats"]() {
    return this.taskStats;
  }
  ["printTaskStats"]() {
    console.log("\n" + this.getAccountDisplayName() + " 任务统计:");
    for (const [_0x1ce6e7, _0x30a6de] of Object.entries(this.taskStats)) {
      {
        const _0x4ec9d2 = this.taskConfigs[_0x1ce6e7].name;
        console.log("   " + _0x4ec9d2 + ": 成功" + _0x30a6de.success + "次, 失败" + _0x30a6de.failed + "次, 奖励" + _0x30a6de.totalReward + "金币");
      }
    }
  }
  async ["retryOperation"](_0xee4de1, _0x20fbb8, _0x11a15d = 3, _0x5bca51 = 2000) {
    let _0x51e0df = 0,
      _0x2b7590 = null;
    while (_0x51e0df < _0x11a15d) {
      try {
        const _0x3d1edb = await _0xee4de1();
        if (_0x3d1edb) {
          return _0x3d1edb;
        }
        _0x2b7590 = new Error(_0x20fbb8 + " 返回空结果");
      } catch (_0x1349eb) {
        _0x2b7590 = _0x1349eb;
      }
      _0x51e0df++;
      _0x51e0df < _0x11a15d && (console.log(" " + this.getAccountDisplayName() + " " + _0x20fbb8 + " 失败，重试 " + _0x51e0df + "/" + _0x11a15d), await new Promise(_0x55c1d7 => setTimeout(_0x55c1d7, _0x5bca51)));
    }
    return null;
  }
  async ["getAdInfo"](_0x2cd3d1) {
    try {
      const _0x18ade4 = "/rest/e/reward/mixed/ad",
        _0x375060 = {
          "encData": "|encData|",
          "sign": "|sign|",
          "cs": "false",
          "client_key": "2ac2a76d",
          "videoModelCrowdTag": "1_23",
          "os": "android",
          "kuaishou.api_st": this.kuaishouApiSt,
          "uQaTag": "1##swLdgl:99#ecPp:-9#cmNt:-0#cmHs:-3#cmMnsl:-0"
        },
        _0x24b56b = {
          "earphoneMode": "1",
          "mod": "vivo(V2207A)",
          "appver": this.appver,
          "isp": "CMCC",
          "language": "zh-cn",
          "ud": this.userId,
          "did_tag": "0",
          "net": "WIFI",
          "kcv": "1599",
          "app": "0",
          "kpf": "ANDROID_PHONE",
          "ver": "13.1",
          "android_os": "0",
          "boardPlatform": "mt6895",
          "kpn": "NEBULA",
          "androidApiLevel": "34",
          "country_code": "cn",
          "sys": "ANDROID_14",
          "sw": "1080",
          "sh": "2376",
          "abi": "arm64",
          "userRecoBit": "0"
        },
        _0x291a49 = {
          "appInfo": {
            "appId": "kuaishou_nebula",
            "name": "快手极速版",
            "packageName": "com.kuaishou.nebula",
            "version": this.appver,
            "versionCode": -1
          },
          "deviceInfo": {
            "osType": 1,
            "osVersion": "14",
            "deviceId": this.did,
            "screenSize": {
              "width": 1080,
              "height": 2376
            },
            "ftt": ""
          },
          "userInfo": {
            "userId": this.userId,
            "age": 0,
            "gender": ""
          },
          "impInfo": [{
            "pageId": 11101,
            "subPageId": _0x2cd3d1.subPageId,
            "action": 0,
            "browseType": 3,
            "impExtData": "{}",
            "mediaExtData": "{}"
          }]
        },
        _0x330185 = Buffer.from(JSON.stringify(_0x291a49)).toString("base64");
      let _0x46c613 = await this.getSign(_0x330185);
      if (!_0x46c613) return console.log("[x] " + this.getAccountDisplayName() + " 获取encSign失败"), null;
      _0x375060.encData = _0x46c613.encdata;
      _0x375060.sign = _0x46c613.sign;
      let _0x464b58 = await this.requestSignService({
        "urlpath": _0x18ade4,
        "reqdata": _0x1dca8c.stringify(_0x375060) + "&" + _0x1dca8c.stringify(_0x24b56b),
        "api_client_salt": this.salt
      });
      if (!_0x464b58) return console.log("[x] " + this.getAccountDisplayName() + " 获取nesig失败"), null;
      const _0x4036e6 = {
          ..._0x24b56b,
          "sig": _0x464b58.sig,
          "__NS_sig3": _0x464b58.__NS_sig3,
          "__NS_xfalcon": "",
          "__NStokensig": _0x464b58.__NStokensig
        },
        _0x1bd5d5 = "https://api.e.kuaishou.com" + _0x18ade4 + "?" + _0x1dca8c.stringify(_0x4036e6),
        {
          response: _0x1d4bf9,
          body: _0x436c7e
        } = await _0x2eae53({
          "method": "POST",
          "url": _0x1bd5d5,
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Host": "api.e.kuaishou.com",
            "User-Agent": "kwai-android aegon/3.56.0",
            "Cookie": "kuaishou_api_st=" + this.kuaishouApiSt
          },
          "form": _0x375060,
          "timeout": 12000
        }, this.proxyUrl, this.getAccountDisplayName() + " 获取广告");
      if (!_0x436c7e) {
        console.log("[x] " + this.getAccountDisplayName() + " 广告接口返回为空");
        return null;
      }
      if (_0x436c7e.errorMsg === "OK" && _0x436c7e.feeds && _0x436c7e.feeds[0] && _0x436c7e.feeds[0].ad) {
        {
          const _0x2150d3 = _0x436c7e.feeds[0].caption || _0x436c7e.feeds[0].ad?.["caption"] || "";
          _0x2150d3 && console.log(" " + this.getAccountDisplayName() + " 成功获取广告：" + _0x2150d3);
          const _0x1d671a = _0x436c7e.feeds[0].exp_tag || "",
            _0x10acfe = _0x1d671a.split("/")[1]?.["split"]("_")?.[0] || "";
          return {
            "cid": _0x436c7e.feeds[0].ad.creativeId,
            "llsid": _0x10acfe
          };
        }
      }
      if (_0x436c7e.errorMsg) console.log(" " + this.getAccountDisplayName() + " 广告接口错误: " + _0x436c7e.errorMsg);else {
        console.log(" " + this.getAccountDisplayName() + " 广告接口返回数据格式异常");
      }
      return null;
    } catch (_0x506817) {
      console.log("[x] " + this.getAccountDisplayName() + " 获取广告异常: " + _0x506817.message);
      return null;
    }
  }
  async ["generateSignature"](_0x42d7b5, _0x232b75, _0x10c97c, _0x5813f4) {
    try {
      const _0x502e01 = JSON.stringify({
          "businessId": _0x5813f4.businessId,
          "endTime": this.endTime,
          "extParams": "",
          "mediaScene": "video",
          "neoInfos": [{
            "creativeId": _0x42d7b5,
            "extInfo": "",
            "llsid": _0x232b75,
            "requestSceneType": _0x5813f4.requestSceneType,
            "taskType": _0x5813f4.taskType,
            "watchExpId": "",
            "watchStage": 0
          }],
          "pageId": 11101,
          "posId": _0x5813f4.posId,
          "reportType": 0,
          "sessionId": "",
          "startTime": this.startTime,
          "subPageId": _0x5813f4.subPageId
        }),
        _0x325eac = "bizStr=" + encodeURIComponent(_0x502e01) + "&cs=false&client_key=2ac2a76d&kuaishou.api_st=" + this.kuaishouApiSt,
        _0xf25ec = this.queryParams + "&" + _0x325eac,
        _0x350bf9 = await this.requestSignService({
          "urlpath": this.taskReportPath,
          "reqdata": _0xf25ec,
          "api_client_salt": this.salt
        }, this.getAccountDisplayName() + " 生成报告签名");
      if (!_0x350bf9) return console.log("[x] " + this.getAccountDisplayName() + " 报告签名获取失败"), null;
      return {
        "sig": _0x350bf9.sig,
        "sig3": _0x350bf9.__NS_sig3,
        "sigtoken": _0x350bf9.__NStokensig,
        "post": _0x325eac
      };
    } catch (_0x46f975) {
      console.log("[x] " + this.getAccountDisplayName() + " 生成签名异常: " + _0x46f975.message);
      return null;
    }
  }
  async ["getSign"](_0x172370) {
    const _0xad67c3 = await _0x49ac7e();
    for (const _0x1b8227 of _0xad67c3) {
      try {
        const {
          response: _0x5a85bc,
          body: _0x94f248
        } = await _0x2eae53({
          "method": "POST",
          "url": _0x1b8227,
          "body": JSON.stringify({
            "data": _0x172370
          }),
          "headers": {
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0",
            "Accept": "*/*",
            "Origin": "http://171.214.11.91"
          },
          "timeout": 30000
        }, null, this.getAccountDisplayName() + " 获取encsign");
        if (_0x94f248 && _0x94f248.status === true) return _0x94f248.data;else {
          if (_0x94f248) console.log(" " + this.getAccountDisplayName() + " encsign返回错误: " + (_0x94f248.error || JSON.stringify(_0x94f248)));else {
            console.log(" " + this.getAccountDisplayName() + " encsign返回为空");
          }
        }
      } catch (_0x517001) {
        console.log(" " + this.getAccountDisplayName() + " encsign请求异常: " + _0x517001.message);
      }
    }
    console.log("[x] " + this.getAccountDisplayName() + " 所有encsign API都失败了");
    return null;
  }
  async ["requestSignService"](_0x128c0e, _0x34954c = "请求签名服务") {
    let _0x267d0b = {},
      _0x5e7de5 = {
        "path": _0x128c0e.urlpath,
        "data": _0x128c0e.reqdata,
        "salt": _0x128c0e.api_client_salt
      };
    const _0x114419 = await _0x2434a8();
    for (const _0x31662c of _0x114419) {
      try {
        {
          const {
            response: _0x4bc41d,
            body: _0x159cd3
          } = await _0x2eae53({
            "method": "POST",
            "url": _0x31662c,
            "headers": {
              "Content-Type": "application/json",
              "User-Agent": "Mozilla/5.0",
              "Accept": "*/*",
              "Origin": "http://171.214.11.91"
            },
            "body": JSON.stringify(_0x5e7de5),
            "timeout": 30000
          }, null, _0x34954c);
          if (_0x159cd3 && _0x159cd3.data) {
            let _0x4763d0 = _0x159cd3.data.nssig3,
              _0x3ad4af = _0x159cd3.data.nstokensig;
            Object.assign(_0x267d0b, {
              "__NS_sig3": _0x4763d0,
              "__NStokensig": _0x3ad4af,
              "sig": _0x159cd3.data.sig
            });
            return _0x267d0b;
          } else {
            if (_0x159cd3 && _0x159cd3.error) {
              console.log(" " + _0x34954c + " nssig返回错误: " + _0x159cd3.error);
            }
          }
        }
      } catch (_0x165fea) {
        console.log(" " + _0x34954c + " nssig请求异常: " + _0x165fea.message);
      }
    }
    console.log("[x] " + _0x34954c + " 所有nssig API都失败了");
    return null;
  }
  async ["submitReport"](_0x5e3c28, _0x45f080, _0x48f3a8, _0x585577, _0x252b27, _0x80cf45) {
    try {
      const _0x5eed63 = "https://api.e.kuaishou.com" + this.taskReportPath + "?" + (this.queryParams + "&sig=" + _0x5e3c28 + "&__NS_sig3=" + _0x45f080 + "&__NS_xfalcon=&__NStokensig=" + _0x48f3a8),
        {
          response: _0xd31633,
          body: _0x54ab5f
        } = await _0x2eae53({
          "method": "POST",
          "url": _0x5eed63,
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Host": "api.e.kuaishou.cn",
            "User-Agent": "kwai-android aegon/3.56.0"
          },
          "body": _0x585577,
          "timeout": 12000
        }, this.proxyUrl, this.getAccountDisplayName() + " 提交任务");
      if (!_0x54ab5f) return {
        "success": false,
        "reward": 0
      };
      if (_0x54ab5f.result === 1) {
        const _0x763081 = _0x54ab5f.data?.["neoAmount"] || 0;
        console.log(" " + this.getAccountDisplayName() + " " + _0x80cf45.name + "获得" + _0x763081 + "金币奖励！");
        if (_0x763081 <= this.lowRewardThreshold) this.lowRewardStreak++, this.did = _0x3eda74(), console.log(" " + this.getAccountDisplayName() + " 金币奖励(" + _0x763081 + ")低于阈值，当前连续低奖励次数：" + this.lowRewardStreak + "/" + this.lowRewardLimit), this.lowRewardStreak >= this.lowRewardLimit && (console.log(" " + this.getAccountDisplayName() + " 连续" + this.lowRewardLimit + "次低奖励，停止全部任务"), this.stopAllTasks = true);else {
          this.lowRewardStreak = 0;
        }
        return {
          "success": true,
          "reward": _0x763081
        };
      }
      if ([20107, 20108, 1003, 415].includes(_0x54ab5f.result)) return console.log(" " + this.getAccountDisplayName() + " " + _0x80cf45.name + " 已达上限"), this.taskLimitReached[_0x252b27] = true, {
        "success": false,
        "reward": 0
      };
      console.log("[x] " + this.getAccountDisplayName() + " " + _0x80cf45.name + " 奖励失败");
      return {
        "success": false,
        "reward": 0
      };
    } catch (_0x1369b7) {
      console.log("[x] " + this.getAccountDisplayName() + " 提交任务异常: " + _0x1369b7.message);
      return {
        "success": false,
        "reward": 0
      };
    }
  }
  async ["executeTask"](_0x3c4fa8) {
    const _0x2ef27d = this.taskConfigs[_0x3c4fa8];
    if (!_0x2ef27d) return console.log("[x] " + this.getAccountDisplayName() + " 未知任务: " + _0x3c4fa8), false;
    if (this.taskLimitReached[_0x3c4fa8] || _0x504a57) {
      return false;
    }
    try {
      const _0x9f15b9 = await this.retryOperation(() => this.getAdInfo(_0x2ef27d), "获取" + _0x2ef27d.name + "信息", 3);
      if (!_0x9f15b9) return this.taskStats[_0x3c4fa8].failed++, false;
      const _0x4346ca = Math.floor(Math.random() * 10000) + 30000;
      console.log(" " + this.getAccountDisplayName() + " " + _0x2ef27d.name + " " + _0x21e00f() + " " + Math.round(_0x4346ca / 1000) + "秒");
      await new Promise(_0x3e50a2 => setTimeout(_0x3e50a2, _0x4346ca));
      const _0x2a08b0 = await this.retryOperation(() => this.generateSignature(_0x9f15b9.cid, _0x9f15b9.llsid, _0x3c4fa8, _0x2ef27d), "生成" + _0x2ef27d.name + "签名", 3);
      if (!_0x2a08b0) return this.taskStats[_0x3c4fa8].failed++, false;
      const _0x2b8d62 = await this.retryOperation(() => this.submitReport(_0x2a08b0.sig, _0x2a08b0.sig3, _0x2a08b0.sigtoken, _0x2a08b0.post, _0x3c4fa8, _0x2ef27d), "提交" + _0x2ef27d.name + "报告", 3);
      if (_0x2b8d62?.["success"]) return this.taskStats[_0x3c4fa8].success++, this.taskStats[_0x3c4fa8].totalReward += _0x2b8d62.reward || 0, true;
      this.taskStats[_0x3c4fa8].failed++;
      return false;
    } catch (_0x3a57da) {
      console.log("[x] " + this.getAccountDisplayName() + " 任务异常(" + _0x3c4fa8 + "): " + _0x3a57da.message);
      this.taskStats[_0x3c4fa8].failed++;
      return false;
    }
  }
  async ["executeAllTasksByPriority"]() {
    const _0x48c685 = {},
      _0x145f05 = 10;
    for (const _0x4b4c8b of this.tasksToExecute) {
      if (this.stopAllTasks || _0x504a57) break;
      if (!this.taskConfigs[_0x4b4c8b]) {
        console.log(" " + this.getAccountDisplayName() + " 跳过未知任务: " + _0x4b4c8b);
        continue;
      }
      console.log(" " + this.getAccountDisplayName() + " 开始任务：" + this.taskConfigs[_0x4b4c8b].name + "（执行" + _0x145f05 + "个）");
      let _0x2fa4f1 = false;
      for (let _0x4dad4c = 0; _0x4dad4c < _0x145f05; _0x4dad4c++) {
        if (this.stopAllTasks || this.taskLimitReached[_0x4b4c8b] || _0x504a57) {
          _0x504a57 && console.log("    检测到卡密失效，停止任务");
          break;
        }
        console.log("   [" + (_0x4dad4c + 1) + "/" + _0x145f05 + "] " + this.taskConfigs[_0x4b4c8b].name);
        const _0x1a29a6 = await this.executeTask(_0x4b4c8b);
        _0x1a29a6 && (_0x2fa4f1 = true);
        if (_0x4dad4c < _0x145f05 - 1 && !this.stopAllTasks) {
          {
            const _0x3f785b = Math.floor(Math.random() * 2000) + 3000;
            console.log("    等待 " + (_0x3f785b / 1000).toFixed(1) + "秒...");
            await new Promise(_0x1ae1f3 => setTimeout(_0x1ae1f3, _0x3f785b));
          }
        }
      }
      _0x48c685[_0x4b4c8b] = _0x2fa4f1;
      if (this.stopAllTasks) break;
      if (_0x4b4c8b !== this.tasksToExecute[this.tasksToExecute.length - 1]) {
        const _0x26b80a = Math.floor(Math.random() * 8000) + 7000;
        console.log(" " + this.getAccountDisplayName() + " 等待 " + (_0x26b80a / 1000).toFixed(1) + "秒进入下一任务");
        await new Promise(_0x4ac50c => setTimeout(_0x4ac50c, _0x26b80a));
      }
    }
    return _0x48c685;
  }
}
function _0x1336cb(_0x890062) {
  const _0x2f037c = String(_0x890062 || "").trim().split("#"),
    _0x1c7537 = (_0xccd26e, _0x245a6c = 50) => {
      {
        if (_0xccd26e.length <= _0x245a6c) return _0xccd26e;
        return _0xccd26e.substring(0, _0x245a6c) + "...";
      }
    };
  if (_0x2f037c.length < 2 || _0x2f037c.length > 4) {
    {
      const _0x19bf65 = _0x1c7537(_0x890062, 80);
      console.log(" 账号配置格式错误（需要2-4段）：" + _0x19bf65);
      return null;
    }
  }
  let _0x3cf3b9, _0x271e39, _0xaa205d, _0x19d646;
  if (_0x2f037c.length === 2) _0x3cf3b9 = "", _0x271e39 = _0x2f037c[0].trim(), _0xaa205d = _0x2f037c[1].trim(), _0x19d646 = "";else {
    if (_0x2f037c.length === 3) {
      const _0x40fdb1 = _0x2f037c[2].trim(),
        _0x420830 = (_0x40fdb1.includes(":") || _0x40fdb1.includes("|") || /^socks5:\/\//i.test(_0x40fdb1)) && _0x40fdb1 !== "0";
      _0x420830 ? (_0x3cf3b9 = "", _0x271e39 = _0x2f037c[0].trim(), _0xaa205d = _0x2f037c[1].trim(), _0x19d646 = _0x2f037c[2].trim()) : (_0x3cf3b9 = _0x2f037c[0].trim(), _0x271e39 = _0x2f037c[1].trim(), _0xaa205d = _0x2f037c[2].trim(), _0x19d646 = "");
    } else {
      _0x3cf3b9 = _0x2f037c[0].trim();
      _0x271e39 = _0x2f037c[1].trim();
      _0xaa205d = _0x2f037c[2].trim();
      _0x19d646 = _0x2f037c[3].trim();
    }
  }
  if (!_0x271e39 || !_0xaa205d) {
    {
      const _0x7c91a = _0x3cf3b9 + "#" + _0x1c7537(_0x271e39) + "#" + _0xaa205d + "#" + _0x19d646;
      console.log(" cookie或salt为空：" + _0x7c91a);
      return null;
    }
  }
  let _0x40153b = null;
  if (_0x19d646 && _0x19d646 !== "" && _0x19d646 !== "null" && _0x19d646 !== "0") {
    if (/^socks5:\/\//i.test(_0x19d646)) {
      _0x40153b = _0x19d646;
      _0x401a95 && console.log(" [" + _0x3cf3b9 + "] 代理配置：" + _0x40153b);
    } else {
      if (_0x19d646.includes("|")) {
        const _0x1c0a13 = _0x19d646.split("|");
        if (_0x1c0a13.length >= 2) {
          const [_0x43332c, _0xfb43b3, _0x5db835, _0x3e6319] = _0x1c0a13;
          _0x5db835 && _0x3e6319 ? _0x40153b = "socks5://" + _0x5db835 + ":" + _0x3e6319 + "@" + _0x43332c + ":" + _0xfb43b3 : _0x40153b = "socks5://" + _0x43332c + ":" + _0xfb43b3;
          _0x401a95 && console.log(" [" + _0x3cf3b9 + "] 代理配置：" + _0x40153b);
        } else console.log(" [" + _0x3cf3b9 + "] 代理格式错误（需要至少2段）：" + _0x19d646);
      } else {
        if (_0x19d646.includes(":")) {
          _0x40153b = "socks5://" + _0x19d646;
          if (_0x401a95) {
            console.log(" [" + _0x3cf3b9 + "] 代理配置：" + _0x40153b);
          }
        } else console.log(" [" + _0x3cf3b9 + "] 代理格式无法识别（建议格式：ip:port），忽略：" + _0x19d646);
      }
    }
  }
  return {
    "remark": _0x3cf3b9 || "",
    "salt": _0xaa205d,
    "cookie": _0x271e39,
    "proxyUrl": _0x40153b
  };
}
function _0x454725() {
  const _0x10d3bb = _0x100a74(),
    _0x3a4426 = _0x525765(),
    _0x3a5dd6 = [];
  for (const _0x223fae of _0x10d3bb) {
    {
      const _0x40ade6 = _0x1336cb(_0x223fae);
      _0x40ade6 && (_0x40ade6.tasksToExecute = _0x3a4426, _0x3a5dd6.push(_0x40ade6));
    }
  }
  _0x3a5dd6.forEach((_0x512096, _0x4b7c4b) => {
    _0x512096.index = _0x4b7c4b + 1;
  });
  return _0x3a5dd6;
}
async function _0x5bfacf(_0x51d84e, _0x3fce47, _0x275c4f) {
  const _0x1124fa = new Array(_0x51d84e.length);
  let _0x5c32dc = 0;
  async function _0x1c02e1() {
    while (true) {
      const _0x4cc52c = _0x5c32dc++;
      if (_0x4cc52c >= _0x51d84e.length) return;
      const _0x1461c8 = _0x51d84e[_0x4cc52c];
      try {
        _0x1124fa[_0x4cc52c] = await _0x275c4f(_0x1461c8, _0x4cc52c);
      } catch (_0x4d3ca6) {
        console.log("[x] 并发执行异常（index=" + (_0x4cc52c + 1) + "）：" + _0x4d3ca6.message);
        _0x1124fa[_0x4cc52c] = null;
      }
    }
  }
  const _0x4ea855 = Array.from({
    "length": Math.min(_0x3fce47, _0x51d84e.length)
  }, _0x1c02e1);
  await Promise.all(_0x4ea855);
  return _0x1124fa;
}
async function _0x4e3153(_0x51dd93) {
  const _0x162392 = () => {
    return "账号[" + _0x51dd93.index + "]" + (_0x51dd93.remark ? "(" + _0x51dd93.remark + ")" : "");
  };
  let _0x48ef8d = false;
  if (_0x51dd93.proxyUrl) {
    console.log(" " + _0x162392() + " 测试代理连接中...");
    const _0x49a815 = await _0x4e8282(_0x51dd93.proxyUrl, _0x162392());
    console.log("   " + (_0x49a815.ok ? "" : "[x]") + " " + _0x49a815.msg);
    !_0x49a815.ok || _0x49a815.ip === "unknown" ? (console.log(" " + _0x162392() + " 代理测试失败，自动切换为直连模式"), _0x51dd93.proxyUrl = null, _0x48ef8d = false) : (console.log(" " + _0x162392() + " 代理测试成功，将使用代理执行任务"), _0x48ef8d = true);
  } else console.log(" " + _0x162392() + " 未配置代理，使用直连");
  console.log(" " + _0x162392() + " 获取账号信息中..." + (_0x48ef8d ? "(使用代理)" : "(直连)"));
  let _0x400b3f = await _0x418620(_0x51dd93.cookie, _0x51dd93.proxyUrl, _0x51dd93.index),
    _0x3f16c3 = _0x400b3f?.["nickname"] || "账号" + _0x51dd93.index;
  if (_0x400b3f) {
    {
      const _0x375bda = _0x400b3f.totalCoin != null ? _0x400b3f.totalCoin : "未知",
        _0x56d630 = _0x400b3f.allCash != null ? _0x400b3f.allCash : "未知";
      console.log(" " + _0x162392() + " 登录成功，金币: " + _0x375bda + "，余额: " + _0x56d630);
    }
  } else {
    console.log("[x] " + _0x162392() + " 基本信息获取失败，请检查：");
    console.log("   1. Cookie是否正确有效");
    console.log("   2. 代理是否可用（如配置了代理）");
    console.log("   3. 网络连接是否正常");
    console.log("   提示：将继续尝试执行任务...");
  }
  const _0x502ba0 = new _0x2733ef({
    ..._0x51dd93,
    "nickname": _0x3f16c3,
    "tasksToExecute": _0x51dd93.tasksToExecute || ["food", "box", "look"]
  });
  await _0x502ba0.checkCoinLimit();
  if (_0x502ba0.coinExceeded) return console.log(" " + _0x162392() + " 初始金币已超过阈值，不执行任务"), {
    "index": _0x51dd93.index,
    "remark": _0x51dd93.remark || "",
    "nickname": _0x3f16c3,
    "initialCoin": _0x400b3f?.["totalCoin"] || 0,
    "finalCoin": _0x400b3f?.["totalCoin"] || 0,
    "coinChange": 0,
    "initialCash": _0x400b3f?.["allCash"] || 0,
    "finalCash": _0x400b3f?.["allCash"] || 0,
    "cashChange": 0,
    "stats": _0x502ba0.getTaskStats(),
    "coinLimitExceeded": true
  };
  for (let _0x47ec04 = 0; _0x47ec04 < _0x42b982; _0x47ec04++) {
    if (_0x504a57) {
      console.log(" " + _0x162392() + " 检测到卡密失效，停止执行");
      break;
    }
    const _0x32cd1c = Math.floor(Math.random() * 8000) + 8000;
    console.log(" " + _0x162392() + " 第" + (_0x47ec04 + 1) + "轮，等待 " + (_0x32cd1c / 1000).toFixed(1) + "秒");
    console.log(" " + _0x162392() + " 开始第" + (_0x47ec04 + 1) + "轮任务");
    const _0xf6f47 = Math.floor(Math.random() * 5000) + 5000;
    console.log(" " + _0x162392() + " 准备中，等待 " + (_0xf6f47 / 1000).toFixed(1) + "秒...");
    await new Promise(_0x40cc4f => setTimeout(_0x40cc4f, _0xf6f47));
    if (_0x504a57) {
      console.log(" " + _0x162392() + " 检测到卡密失效，停止执行");
      break;
    }
    const _0x4175ae = await _0x502ba0.executeAllTasksByPriority();
    if (Object.values(_0x4175ae).some(Boolean)) {
      console.log(" " + _0x162392() + " 第" + (_0x47ec04 + 1) + "轮执行完成");
    } else console.log(" " + _0x162392() + " 第" + (_0x47ec04 + 1) + "轮没有成功任务");
    if (_0x502ba0.stopAllTasks) {
      console.log(" " + _0x162392() + " 达到停止条件，终止后续轮次");
      break;
    }
    if (_0x47ec04 < _0x42b982 - 1) {
      const _0x4ba108 = Math.floor(Math.random() * 15000) + 15000;
      console.log(" " + _0x162392() + " 等待 " + (_0x4ba108 / 1000).toFixed(1) + "秒进入下一轮");
      await new Promise(_0x17e1fe => setTimeout(_0x17e1fe, _0x4ba108));
    }
  }
  const _0x3fd2fb = await _0x418620(_0x51dd93.cookie, _0x51dd93.proxyUrl, _0x51dd93.index),
    _0x331211 = _0x400b3f?.["totalCoin"] || 0,
    _0x26221b = _0x3fd2fb?.["totalCoin"] || 0,
    _0x4f8db9 = _0x26221b - _0x331211,
    _0x4b087a = _0x400b3f?.["allCash"] || 0,
    _0x44b40d = _0x3fd2fb?.["allCash"] || 0,
    _0x398595 = _0x44b40d - _0x4b087a;
  _0x502ba0.printTaskStats();
  return {
    "index": _0x51dd93.index,
    "remark": _0x51dd93.remark || "",
    "nickname": _0x3f16c3,
    "initialCoin": _0x331211,
    "finalCoin": _0x26221b,
    "coinChange": _0x4f8db9,
    "initialCash": _0x4b087a,
    "finalCash": _0x44b40d,
    "cashChange": _0x398595,
    "stats": _0x502ba0.getTaskStats(),
    "coinLimitExceeded": _0x502ba0.coinExceeded
  };
}
function _0x36a146(_0x5bed54) {
  if (!_0x5bed54.length) {
    console.log("\n[x] 没有可显示的账号信息。");
    return;
  }
  const _0x5289c4 = _0x5bed54.reduce((_0x1bb7d2, _0x38f71c) => _0x1bb7d2 + (parseInt(_0x38f71c.initialCoin) || 0), 0),
    _0x41ed60 = _0x5bed54.reduce((_0xc22469, _0x466391) => _0xc22469 + (parseInt(_0x466391.finalCoin) || 0), 0),
    _0x3e25c5 = _0x41ed60 - _0x5289c4,
    _0x4f19a6 = _0x5bed54.reduce((_0x4fa15a, _0x49bd08) => _0x4fa15a + (parseFloat(_0x49bd08.initialCash) || 0), 0),
    _0x2cae8f = _0x5bed54.reduce((_0x48fbf2, _0x3cf015) => _0x48fbf2 + (parseFloat(_0x3cf015.finalCash) || 0), 0),
    _0x1753dc = _0x2cae8f - _0x4f19a6;
  let _0x3fb517 = 0,
    _0x4b98ba = 0,
    _0x265356 = 0;
  _0x5bed54.forEach(_0x245966 => {
    _0x245966.stats && Object.values(_0x245966.stats).forEach(_0x3951ec => {
      _0x3fb517 += _0x3951ec.success + _0x3951ec.failed;
      _0x4b98ba += _0x3951ec.success;
      _0x265356 += _0x3951ec.totalReward;
    });
  });
  const _0x3c8bfd = _0x3fb517 > 0 ? (_0x4b98ba / _0x3fb517 * 100).toFixed(1) : "0.0",
    _0x27623e = _0x5bed54.filter(_0x3fd74e => _0x3fd74e.coinLimitExceeded).length;
  console.log("\n" + "=".repeat(60));
  console.log(" 任务执行结果汇总");
  console.log("=".repeat(60));
  console.log(" 总账号数: " + _0x5bed54.length);
  console.log(" 超过金币阈值: " + _0x27623e + "个");
  console.log(" 总任务数: " + _0x3fb517 + " (成功率: " + _0x3c8bfd + "%)");
  console.log(" 总金币变化: " + (_0x3e25c5 >= 0 ? "+" : "") + _0x3e25c5);
  console.log(" 总金币奖励: " + _0x265356);
  console.log(" 总余额变化: " + (_0x1753dc >= 0 ? "+" : "") + _0x1753dc.toFixed(2));
  console.log("-".repeat(60));
  console.log("\n 账号详情:");
  console.log("序号".padEnd(6) + "备注".padEnd(16) + "昵称".padEnd(20) + "金币变化".padEnd(12) + "余额变化");
  console.log("-".repeat(60));
  _0x5bed54.forEach(_0x11b6b5 => {
    {
      const _0x31118e = _0x11b6b5.coinChange >= 0 ? "+" + _0x11b6b5.coinChange : "" + _0x11b6b5.coinChange,
        _0x2d728e = _0x11b6b5.cashChange >= 0 ? "+" + _0x11b6b5.cashChange.toFixed(2) : "" + _0x11b6b5.cashChange.toFixed(2),
        _0xde460a = _0x11b6b5.coinLimitExceeded ? " " : "";
      console.log(("" + _0x11b6b5.index).padEnd(6) + ("" + _0x11b6b5.remark).substring(0, 14).padEnd(16) + ("" + _0x11b6b5.nickname + _0xde460a).substring(0, 18).padEnd(20) + _0x31118e.padEnd(12) + _0x2d728e);
    }
  });
  console.log("=".repeat(60));
  console.log(" 任务执行完成");
  console.log("=".repeat(60));
  _0x54add2 && clearInterval(_0x54add2);
  process.exit(0);
}
_0x35fd12().catch(_0x573ad3 => {
  console.log("\n[x] 程序异常终止: " + _0x573ad3.message);
  process.exit(1);
});