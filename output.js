//Sun Nov 16 2025 12:11:20 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x50819a = require("querystring"),
  _0x23c271 = require("axios"),
  {
    SocksProxyAgent: _0x4d2839
  } = require("socks-proxy-agent");
function _0x7e3867() {
  const _0x1deaad = ["正在观看广告", "认真观看中...", "浏览广告内容", "模拟用户行为", "观看视频广告", "保持活跃状态", "广告浏览中", "正常观看时长"];
  return _0x1deaad[Math.floor(Math.random() * _0x1deaad.length)];
}
const _0x16444f = process.env.DEV_MODE === "1" || process.env.DEV_MODE === "true";
function _0x4f9da6(_0x23e01f, _0x5a7fe7) {
  const _0x4eb12f = parseInt(process.env[_0x23e01f], 10);
  return isNaN(_0x4eb12f) ? _0x5a7fe7 : _0x4eb12f;
}
const _0x5e8ba6 = _0x4f9da6("low", 10),
  _0x43365e = _0x4f9da6("round", 35),
  _0x38bab5 = _0x4f9da6("coin", 500000),
  _0x3ad3b9 = _0x4f9da6("limit", 3),
  _0xfa1df4 = process.env.km || "";
function _0x16decf() {
  const _0x482096 = process.env.Task;
  if (!_0x482096) return ["food", "box", "look"];
  const _0x4ee8ff = _0x482096.replace(/\//g, ",").split(",").map(_0x4e6cc3 => _0x4e6cc3.trim().toLowerCase()).filter(Boolean),
    _0xb7fe4c = ["food", "box", "look"],
    _0x28d0c3 = _0x4ee8ff.filter(_0x2ece41 => _0xb7fe4c.includes(_0x2ece41));
  if (_0x28d0c3.length === 0) {
    return ["food", "box", "look"];
  }
  return _0x28d0c3;
}
function _0x182977() {
  const _0x5ade37 = [],
    _0x303cc0 = new Set();
  if (process.env.ksck) {
    {
      const _0x339202 = process.env.ksck,
        _0x552b52 = _0x339202.split("&").map(_0x13a8e5 => _0x13a8e5.trim()).filter(Boolean);
      _0x5ade37.push(..._0x552b52);
    }
  }
  for (let _0x46c078 = 1; _0x46c078 <= 666; _0x46c078++) {
    const _0x48cca6 = "ksck" + _0x46c078;
    if (process.env[_0x48cca6]) {
      {
        const _0x4844d5 = process.env[_0x48cca6],
          _0x3cba59 = _0x4844d5.split("&").map(_0x176e0e => _0x176e0e.trim()).filter(Boolean);
        _0x5ade37.push(..._0x3cba59);
      }
    }
  }
  const _0x5d0523 = [];
  for (const _0x795855 of _0x5ade37) {
    if (!_0x303cc0.has(_0x795855)) {
      _0x303cc0.add(_0x795855);
      _0x5d0523.push(_0x795855);
    }
  }
  console.log("📊 从环境变量中解析到 " + _0x5d0523.length + " 个唯一配置");
  return _0x5d0523;
}
const _0x285367 = process.env.KM_API_URL || "http://171.214.11.91:8899/km.php";
async function _0x5440a8(_0x3bca72) {
  if (!_0x3bca72) {
    console.log("\n" + "=".repeat(50));
    console.log("❌ 卡密验证失败");
    console.log("=".repeat(50));
    console.log("⚠️  未检测到卡密（km变量）");
    console.log("");
    console.log("💡 卡密免费获取Q群：1055412650");
    console.log("=".repeat(50) + "\n");
    process.exit(1);
  }
  try {
    console.log("\n" + "=".repeat(50));
    console.log("🔐 正在验证卡密...");
    console.log("=".repeat(50));
    const _0xa3c5fd = await _0x23c271.post(_0x285367, {
        "action": "verify",
        "km": _0x3bca72
      }, {
        "timeout": 10000
      }),
      _0x5280b1 = _0xa3c5fd.data;
    if (_0x5280b1.success) return console.log("✅ 卡密验证成功！"), _0x5280b1.data && (_0x5280b1.data.expire_time === "permanent" ? console.log("⏰ 有效期: 永久有效") : console.log("⏰ 到期时间: " + _0x5280b1.data.expire_time)), console.log("=".repeat(50) + "\n"), true;else {
      console.log("❌ 卡密验证失败");
      console.log("=".repeat(50));
      console.log("⚠️  " + _0x5280b1.message);
      console.log("=".repeat(50) + "\n");
      process.exit(1);
    }
  } catch (_0x51ba9a) {
    console.log("❌ 卡密验证失败");
    console.log("=".repeat(50));
    console.log("⚠️  " + _0x51ba9a.message);
    console.log("=".repeat(50) + "\n");
    process.exit(1);
  }
}
async function _0x1ee660(_0x46c6b5) {
  try {
    const _0x1fa41d = await _0x23c271.post(_0x285367, {
        "action": "verify",
        "km": _0x46c6b5
      }, {
        "timeout": 10000
      }),
      _0x1e4e42 = _0x1fa41d.data;
    return {
      "valid": _0x1e4e42.success,
      "message": _0x1e4e42.message || ""
    };
  } catch (_0x4d31b9) {
    console.log("⚠️ 卡密检查失败: " + _0x4d31b9.message);
    return {
      "valid": true,
      "message": _0x4d31b9.message
    };
  }
}
let _0x5cc6fb = false;
function _0x31673a(_0x1e9a8b) {
  const _0x1d564f = 300000,
    _0x29bbe7 = setInterval(async () => {
      console.log("\n🔍 定期检查卡密状态...");
      const _0xceafa1 = await _0x1ee660(_0x1e9a8b);
      if (!_0xceafa1.valid) {
        console.log("\n" + "=".repeat(50));
        console.log("❌ 卡密已失效！");
        console.log("=".repeat(50));
        console.log("⚠️  " + _0xceafa1.message);
        console.log("🛑 正在停止所有任务...");
        console.log("=".repeat(50) + "\n");
        _0x5cc6fb = true;
        clearInterval(_0x29bbe7);
      } else console.log("✅ 卡密状态正常\n");
    }, _0x1d564f);
  console.log("🔒 已启动卡密监控，每5分钟检查一次\n");
  return _0x29bbe7;
}
async function _0x34af18() {
  await _0x5440a8(_0xfa1df4);
  const _0x387091 = _0x31673a(_0xfa1df4),
    _0x5965c6 = _0x433eae(),
    _0x56b57a = _0x16decf(),
    _0x38682c = ["💝 免费脚本，持续更新", "📢 更新Q群：1055412650", "🎁 免费脚本，欢迎加入Q群：1055412650", "💎 完全免费，Q群获取最新版本：1055412650", "🔥 免费使用，更新请关注Q群：1055412650"],
    _0x186655 = _0x38682c[Math.floor(Math.random() * _0x38682c.length)];
  console.log(_0x186655);
  console.log("=".repeat(50));
  console.log("📱 账号数量: " + _0x5965c6.length + "个");
  console.log("🎯 执行任务: " + _0x56b57a.join(", "));
  console.log("");
  console.log("⚙️  配置参数（可自定义）：");
  console.log("   任务轮数: " + _0x43365e + " → round");
  console.log("   金币上限: " + _0x38bab5 + " → coin");
  console.log("   低奖励阈值: " + _0x5e8ba6 + " → low");
  console.log("   连续低奖励上限: " + _0x3ad3b9 + " → limit");
  if (_0x16444f) {
    console.log("🐛 调试模式已开启");
  }
  console.log("=".repeat(50) + "\n");
  !_0x5965c6.length && (console.log("❌ 没有找到有效账号，程序退出"), process.exit(1));
  const _0x3633aa = _0x4f9da6("max", 888);
  console.log("\n⚡ 并发数: " + _0x3633aa + "    轮数: " + _0x43365e + "\n");
  const _0x3d149f = [];
  await _0x1c745a(_0x5965c6, _0x3633aa, async _0x540942 => {
    console.log("\n── 🚀 开始处理 " + _0x540942.index + "号账号" + (_0x540942.remark ? "(" + _0x540942.remark + ")" : "") + " ──");
    try {
      const _0x4b7024 = await _0x2047d9(_0x540942);
      _0x3d149f.push({
        "index": _0x540942.index,
        "remark": _0x540942.remark || "无备注",
        "nickname": _0x4b7024?.["nickname"] || "账号" + _0x540942.index,
        "initialCoin": _0x4b7024?.["initialCoin"] || 0,
        "finalCoin": _0x4b7024?.["finalCoin"] || 0,
        "coinChange": _0x4b7024?.["coinChange"] || 0,
        "initialCash": _0x4b7024?.["initialCash"] || 0,
        "finalCash": _0x4b7024?.["finalCash"] || 0,
        "cashChange": _0x4b7024?.["cashChange"] || 0,
        "stats": _0x4b7024?.["stats"] || {},
        "coinLimitExceeded": _0x4b7024?.["coinLimitExceeded"] || false
      });
    } catch (_0x150921) {
      console.log("❌ 账号[" + _0x540942.index + "] 执行异常：" + _0x150921.message);
      _0x3d149f.push({
        "index": _0x540942.index,
        "remark": _0x540942.remark || "无备注",
        "nickname": "账号" + _0x540942.index,
        "initialCoin": 0,
        "finalCoin": 0,
        "coinChange": 0,
        "initialCash": 0,
        "finalCash": 0,
        "cashChange": 0,
        "error": _0x150921.message
      });
    }
  });
  _0x3d149f.sort((_0x4c3efe, _0x214272) => _0x4c3efe.index - _0x214272.index);
  console.log("\n🎉 全部任务完成!");
  _0x3af075(_0x3d149f);
}
function _0x131221() {
  try {
    const _0x51a954 = _0xf1fc36 => {
        const _0x45676b = "0123456789abcdef";
        let _0x13378e = "";
        for (let _0x482c87 = 0; _0x482c87 < _0xf1fc36; _0x482c87++) {
          _0x13378e += _0x45676b.charAt(Math.floor(Math.random() * _0x45676b.length));
        }
        return _0x13378e;
      },
      _0xff134a = _0x51a954(16),
      _0x1af055 = "ANDROID_" + _0xff134a;
    return _0x1af055;
  } catch (_0x569cde) {
    console.log("❌ 生成did失败: " + _0x569cde.message);
    const _0x37e7bb = Date.now().toString(16).toUpperCase();
    return "ANDROID_" + _0x37e7bb.substring(0, 16);
  }
}
async function _0x277610(_0x3882e7, _0x4d4de2 = null, _0xc9e216 = "Unknown Request") {
  const _0x94c1ec = {
    ..._0x3882e7
  };
  let _0x5f0d02 = null;
  if (_0x4d4de2) try {
    _0x5f0d02 = new _0x4d2839(_0x4d4de2);
  } catch (_0xd915cc) {
    console.log("⚠️ " + _0xc9e216 + " 代理配置错误: " + _0xd915cc.message + "，使用直连");
    console.log("   代理URL: " + _0x4d4de2);
  }
  try {
    let _0x1c0969 = _0x94c1ec.body;
    _0x94c1ec.form && (_0x1c0969 = _0x50819a.stringify(_0x94c1ec.form));
    const _0x3338c8 = {
        "method": _0x94c1ec.method || "GET",
        "url": _0x94c1ec.url,
        "headers": _0x94c1ec.headers || {},
        "data": _0x1c0969,
        "timeout": _0x94c1ec.timeout || 30000,
        "validateStatus": () => true,
        ...(_0x5f0d02 && {
          "httpAgent": _0x5f0d02,
          "httpsAgent": _0x5f0d02
        })
      },
      _0xea1d4a = await _0x23c271(_0x3338c8);
    return {
      "response": _0xea1d4a,
      "body": _0xea1d4a.data
    };
  } catch (_0x1ad1c7) {
    if (_0x5f0d02 && (_0x1ad1c7.code === "ECONNREFUSED" || _0x1ad1c7.code === "ETIMEDOUT" || _0x1ad1c7.message.includes("Proxy"))) {
      {
        if (_0x16444f) {
          console.log("⚠️ " + _0xc9e216 + " 代理连接失败，尝试直连: " + _0x1ad1c7.message);
        }
        try {
          {
            let _0x1158a6 = _0x94c1ec.body;
            _0x94c1ec.form && (_0x1158a6 = _0x50819a.stringify(_0x94c1ec.form));
            const _0x29993e = {
                "method": _0x94c1ec.method || "GET",
                "url": _0x94c1ec.url,
                "headers": _0x94c1ec.headers || {},
                "data": _0x1158a6,
                "timeout": _0x94c1ec.timeout || 30000,
                "validateStatus": () => true
              },
              _0x14c835 = await _0x23c271(_0x29993e);
            return {
              "response": _0x14c835,
              "body": _0x14c835.data
            };
          }
        } catch (_0x49e564) {
          _0x16444f && console.log("⚠️ " + _0xc9e216 + " 直连也失败: " + _0x49e564.message);
          return {
            "response": null,
            "body": null
          };
        }
      }
    }
    _0x16444f && console.log("⚠️ " + _0xc9e216 + " 请求失败: " + _0x1ad1c7.message);
    return {
      "response": null,
      "body": null
    };
  }
}
async function _0x31b477(_0x15644f, _0x3fefe5 = "代理连通性检测") {
  if (!_0x15644f) return {
    "ok": true,
    "msg": "✅ 未配置代理（直连模式）",
    "ip": "localhost"
  };
  const _0x3cac7a = ["https://httpbin.org/ip", "https://api.ipify.org?format=json", "https://www.baidu.com"];
  let _0x4bdab2 = null;
  for (const _0x36dfb6 of _0x3cac7a) {
    try {
      const {
        response: _0x19b58c,
        body: _0x2e1349
      } = await _0x277610({
        "method": "GET",
        "url": _0x36dfb6,
        "headers": {
          "User-Agent": "Mozilla/5.0"
        },
        "timeout": 15000
      }, _0x15644f, _0x3fefe5);
      if (_0x2e1349) {
        {
          const _0x35c6af = _0x2e1349.origin || _0x2e1349.ip || "未知";
          return {
            "ok": true,
            "msg": "✅ 代理连接正常，出口IP: " + _0x35c6af,
            "ip": _0x35c6af
          };
        }
      }
    } catch (_0x302363) {
      {
        _0x4bdab2 = _0x302363;
        continue;
      }
    }
  }
  return _0x4bdab2 ? {
    "ok": false,
    "msg": "❌ 代理测试失败：" + _0x4bdab2.message,
    "ip": "unknown"
  } : {
    "ok": false,
    "msg": "❌ 代理测试失败：所有测试URL均无响应",
    "ip": "unknown"
  };
}
const _0x1be7d3 = new Set();
async function _0x1db91e(_0x578a4a, _0x257d03, _0x4e4dcd = "?") {
  const _0x12b88a = "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo?source=bottom_guide_first",
    {
      body: _0x34b59e
    } = await _0x277610({
      "method": "GET",
      "url": _0x12b88a,
      "headers": {
        "Host": "nebula.kuaishou.com",
        "User-Agent": "kwai-android aegon/3.56.0",
        "Cookie": _0x578a4a,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "timeout": 12000
    }, _0x257d03, "获取账号基本信息");
  if (_0x34b59e && _0x34b59e.result === 1 && _0x34b59e.data) return {
    "nickname": _0x34b59e.data.userData?.["nickname"] || null,
    "totalCoin": _0x34b59e.data.totalCoin ?? null,
    "allCash": _0x34b59e.data.allCash ?? null
  };
  return null;
}
class _0x537c2c {
  constructor({
    index: _0x58883b,
    salt: _0x3f7b04,
    cookie: _0x5d1eff,
    nickname = "",
    proxyUrl = null,
    tasksToExecute = ["food", "box", "look"],
    remark = ""
  }) {
    this.index = _0x58883b;
    this.salt = _0x3f7b04;
    this.cookie = _0x5d1eff;
    this.nickname = nickname || remark || "账号" + _0x58883b;
    this.remark = remark;
    this.proxyUrl = proxyUrl;
    this.coinLimit = _0x38bab5;
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
    this.tasksToExecute.forEach(_0x2c7ea1 => {
      this.taskConfigs[_0x2c7ea1] && (this.taskStats[_0x2c7ea1] = {
        "success": 0,
        "failed": 0,
        "totalReward": 0
      });
    });
    this.lowRewardStreak = 0;
    this.lowRewardThreshold = _0x5e8ba6;
    this.lowRewardLimit = _0x3ad3b9;
    this.stopAllTasks = false;
    this.taskLimitReached = {};
    this.tasksToExecute.forEach(_0x21fe36 => {
      {
        if (this.taskConfigs[_0x21fe36]) {
          this.taskLimitReached[_0x21fe36] = false;
        }
      }
    });
  }
  async ["checkCoinLimit"]() {
    try {
      const _0x22bad1 = await _0x1db91e(this.cookie, this.proxyUrl, this.index);
      if (_0x22bad1 && _0x22bad1.totalCoin) {
        {
          const _0x4dbbbd = parseInt(_0x22bad1.totalCoin);
          if (_0x4dbbbd >= this.coinLimit) {
            console.log("💰 " + this.getAccountDisplayName() + " 金币已达 " + _0x4dbbbd + "，超过阈值 " + this.coinLimit + "，停止任务");
            this.coinExceeded = true;
            this.stopAllTasks = true;
            return true;
          }
        }
      }
      return false;
    } catch (_0x11562f) {
      console.log("❌ " + this.getAccountDisplayName() + " 金币检查异常: " + _0x11562f.message);
      return false;
    }
  }
  ["getAccountDisplayName"]() {
    return "账号[" + this.nickname + "]" + (this.remark ? "(" + this.remark + ")" : "");
  }
  ["extractCookieInfo"]() {
    try {
      {
        const _0x71010a = this.cookie.match(/egid=([^;]+)/),
          _0x4d2728 = this.cookie.match(/did=([^;]+)/),
          _0x2a3f06 = this.cookie.match(/userId=([^;]+)/),
          _0x52515e = this.cookie.match(/kuaishou\.api_st=([^;]+)/),
          _0x3d61f2 = this.cookie.match(/appver=([^;]+)/);
        this.egid = _0x71010a ? _0x71010a[1] : "";
        this.did = _0x4d2728 ? _0x4d2728[1] : "";
        this.userId = _0x2a3f06 ? _0x2a3f06[1] : "";
        this.kuaishouApiSt = _0x52515e ? _0x52515e[1] : "";
        this.appver = _0x3d61f2 ? _0x3d61f2[1] : "13.7.20.10468";
        (!this.egid || !this.did) && console.log("⚠️ " + this.getAccountDisplayName() + " cookie格式可能无egid或did，继续尝试...");
      }
    } catch (_0x24b0a7) {
      console.log("❌ " + this.getAccountDisplayName() + " 解析cookie失败: " + _0x24b0a7.message);
    }
  }
  ["getTaskStats"]() {
    return this.taskStats;
  }
  ["printTaskStats"]() {
    console.log("\n📊 " + this.getAccountDisplayName() + " 任务统计:");
    for (const [_0x6fc69b, _0x2c2c9a] of Object.entries(this.taskStats)) {
      {
        const _0x5151df = this.taskConfigs[_0x6fc69b].name;
        console.log("   " + _0x5151df + ": 成功" + _0x2c2c9a.success + "次, 失败" + _0x2c2c9a.failed + "次, 奖励" + _0x2c2c9a.totalReward + "金币");
      }
    }
  }
  async ["retryOperation"](_0x1de072, _0x4890ba, _0x2029bd = 3, _0x15d0f2 = 2000) {
    let _0x10a7fb = 0,
      _0x2afabc = null;
    while (_0x10a7fb < _0x2029bd) {
      try {
        const _0x5b6129 = await _0x1de072();
        if (_0x5b6129) return _0x5b6129;
        _0x2afabc = new Error(_0x4890ba + " 返回空结果");
      } catch (_0x39f0de) {
        _0x2afabc = _0x39f0de;
      }
      _0x10a7fb++;
      _0x10a7fb < _0x2029bd && (console.log("🔄 " + this.getAccountDisplayName() + " " + _0x4890ba + " 失败，重试 " + _0x10a7fb + "/" + _0x2029bd), await new Promise(_0x87119b => setTimeout(_0x87119b, _0x15d0f2)));
    }
    return null;
  }
  async ["getAdInfo"](_0x58ad45) {
    try {
      const _0xb57469 = "/rest/e/reward/mixed/ad",
        _0x434b8e = {
          "encData": "|encData|",
          "sign": "|sign|",
          "cs": "false",
          "client_key": "2ac2a76d",
          "videoModelCrowdTag": "1_23",
          "os": "android",
          "kuaishou.api_st": this.kuaishouApiSt,
          "uQaTag": "1##swLdgl:99#ecPp:-9#cmNt:-0#cmHs:-3#cmMnsl:-0"
        },
        _0x374fce = {
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
        _0x530d7d = {
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
            "subPageId": _0x58ad45.subPageId,
            "action": 0,
            "browseType": 3,
            "impExtData": "{}",
            "mediaExtData": "{}"
          }]
        },
        _0x4e0da2 = Buffer.from(JSON.stringify(_0x530d7d)).toString("base64");
      let _0x4e6849 = await this.getSign(_0x4e0da2);
      if (!_0x4e6849) return console.log("❌ " + this.getAccountDisplayName() + " 获取encSign失败"), null;
      _0x434b8e.encData = _0x4e6849.encdata;
      _0x434b8e.sign = _0x4e6849.sign;
      let _0x25c73b = await this.requestSignService({
        "urlpath": _0xb57469,
        "reqdata": _0x50819a.stringify(_0x434b8e) + "&" + _0x50819a.stringify(_0x374fce),
        "api_client_salt": this.salt
      });
      if (!_0x25c73b) return console.log("❌ " + this.getAccountDisplayName() + " 获取nesig失败"), null;
      const _0x20f3d8 = {
          ..._0x374fce,
          "sig": _0x25c73b.sig,
          "__NS_sig3": _0x25c73b.__NS_sig3,
          "__NS_xfalcon": "",
          "__NStokensig": _0x25c73b.__NStokensig
        },
        _0x513a6d = "https://api.e.kuaishou.com" + _0xb57469 + "?" + _0x50819a.stringify(_0x20f3d8),
        {
          response: _0x56bcba,
          body: _0x2290d3
        } = await _0x277610({
          "method": "POST",
          "url": _0x513a6d,
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Host": "api.e.kuaishou.com",
            "User-Agent": "kwai-android aegon/3.56.0",
            "Cookie": "kuaishou_api_st=" + this.kuaishouApiSt
          },
          "form": _0x434b8e,
          "timeout": 12000
        }, this.proxyUrl, this.getAccountDisplayName() + " 获取广告");
      if (!_0x2290d3) return console.log("❌ " + this.getAccountDisplayName() + " 广告接口返回为空"), null;
      if (_0x2290d3.errorMsg === "OK" && _0x2290d3.feeds && _0x2290d3.feeds[0] && _0x2290d3.feeds[0].ad) {
        const _0x424cbc = _0x2290d3.feeds[0].caption || _0x2290d3.feeds[0].ad?.["caption"] || "";
        _0x424cbc && console.log("✅ " + this.getAccountDisplayName() + " 成功获取广告：" + _0x424cbc);
        const _0x13f087 = _0x2290d3.feeds[0].exp_tag || "",
          _0x35fcc2 = _0x13f087.split("/")[1]?.["split"]("_")?.[0] || "";
        return {
          "cid": _0x2290d3.feeds[0].ad.creativeId,
          "llsid": _0x35fcc2
        };
      }
      _0x2290d3.errorMsg ? console.log("⚠️ " + this.getAccountDisplayName() + " 广告接口错误: " + _0x2290d3.errorMsg) : console.log("⚠️ " + this.getAccountDisplayName() + " 广告接口返回数据格式异常");
      return null;
    } catch (_0x37bf91) {
      console.log("❌ " + this.getAccountDisplayName() + " 获取广告异常: " + _0x37bf91.message);
      return null;
    }
  }
  async ["generateSignature"](_0x19310f, _0x23136e, _0x502cd6, _0x2104e4) {
    try {
      {
        const _0x59ca97 = JSON.stringify({
            "businessId": _0x2104e4.businessId,
            "endTime": this.endTime,
            "extParams": "",
            "mediaScene": "video",
            "neoInfos": [{
              "creativeId": _0x19310f,
              "extInfo": "",
              "llsid": _0x23136e,
              "requestSceneType": _0x2104e4.requestSceneType,
              "taskType": _0x2104e4.taskType,
              "watchExpId": "",
              "watchStage": 0
            }],
            "pageId": 11101,
            "posId": _0x2104e4.posId,
            "reportType": 0,
            "sessionId": "",
            "startTime": this.startTime,
            "subPageId": _0x2104e4.subPageId
          }),
          _0x242262 = "bizStr=" + encodeURIComponent(_0x59ca97) + "&cs=false&client_key=2ac2a76d&kuaishou.api_st=" + this.kuaishouApiSt,
          _0x250124 = this.queryParams + "&" + _0x242262,
          _0x3fec1a = await this.requestSignService({
            "urlpath": this.taskReportPath,
            "reqdata": _0x250124,
            "api_client_salt": this.salt
          }, this.getAccountDisplayName() + " 生成报告签名");
        if (!_0x3fec1a) {
          console.log("❌ " + this.getAccountDisplayName() + " 报告签名获取失败");
          return null;
        }
        return {
          "sig": _0x3fec1a.sig,
          "sig3": _0x3fec1a.__NS_sig3,
          "sigtoken": _0x3fec1a.__NStokensig,
          "post": _0x242262
        };
      }
    } catch (_0xce4563) {
      console.log("❌ " + this.getAccountDisplayName() + " 生成签名异常: " + _0xce4563.message);
      return null;
    }
  }
  async ["getSign"](_0x5d51e3) {
    const _0x35a8e0 = ["http://171.214.11.91:1998/encsign"];
    for (const _0x3341b2 of _0x35a8e0) {
      try {
        const {
          response: _0x593d92,
          body: _0x52e35a
        } = await _0x277610({
          "method": "POST",
          "url": _0x3341b2,
          "body": JSON.stringify({
            "data": _0x5d51e3
          }),
          "headers": {
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0"
          },
          "timeout": 10000
        }, null, this.getAccountDisplayName() + " 获取encsign");
        if (_0x52e35a && _0x52e35a.status) return _0x52e35a.data;
      } catch (_0xcbeb60) {}
    }
    console.log("❌ " + this.getAccountDisplayName() + " 所有encsign API都失败了");
    return null;
  }
  async ["requestSignService"](_0x3157ad, _0x4838dd = "请求签名服务") {
    let _0x4809a2 = {},
      _0x8d1422 = {
        "path": _0x3157ad.urlpath,
        "data": _0x3157ad.reqdata,
        "salt": _0x3157ad.api_client_salt
      };
    const _0x17054f = ["http://171.214.11.91:1998/nssig"];
    for (const _0x58a65f of _0x17054f) {
      try {
        {
          const {
            response: _0x155e7b,
            body: _0x9c7736
          } = await _0x277610({
            "method": "POST",
            "url": _0x58a65f,
            "headers": {
              "Content-Type": "application/json",
              "User-Agent": "Mozilla/5.0"
            },
            "body": JSON.stringify(_0x8d1422),
            "timeout": 10000
          }, null, _0x4838dd);
          if (_0x9c7736 && _0x9c7736.data) {
            let _0x4b1956 = _0x9c7736.data.nssig3,
              _0x514c30 = _0x9c7736.data.nstokensig;
            Object.assign(_0x4809a2, {
              "__NS_sig3": _0x4b1956,
              "__NStokensig": _0x514c30,
              "sig": _0x9c7736.data.sig
            });
            return _0x4809a2;
          }
        }
      } catch (_0x2789fb) {}
    }
    console.log("❌ " + _0x4838dd + " 所有nssig API都失败了");
    return null;
  }
  async ["submitReport"](_0x5b3d96, _0x118c89, _0x3580af, _0x2171f4, _0x352149, _0x12a67f) {
    try {
      {
        const _0x5c2a53 = "https://api.e.kuaishou.com" + this.taskReportPath + "?" + (this.queryParams + "&sig=" + _0x5b3d96 + "&__NS_sig3=" + _0x118c89 + "&__NS_xfalcon=&__NStokensig=" + _0x3580af),
          {
            response: _0x3ab7fe,
            body: _0x14e074
          } = await _0x277610({
            "method": "POST",
            "url": _0x5c2a53,
            "headers": {
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
              "Host": "api.e.kuaishou.cn",
              "User-Agent": "kwai-android aegon/3.56.0"
            },
            "body": _0x2171f4,
            "timeout": 12000
          }, this.proxyUrl, this.getAccountDisplayName() + " 提交任务");
        if (!_0x14e074) return {
          "success": false,
          "reward": 0
        };
        if (_0x14e074.result === 1) {
          const _0x1f8bd7 = _0x14e074.data?.["neoAmount"] || 0;
          console.log("💰 " + this.getAccountDisplayName() + " " + _0x12a67f.name + "获得" + _0x1f8bd7 + "金币奖励！");
          _0x1f8bd7 <= this.lowRewardThreshold ? (this.lowRewardStreak++, this.did = _0x131221(), console.log("⚠️ " + this.getAccountDisplayName() + " 金币奖励(" + _0x1f8bd7 + ")低于阈值，当前连续低奖励次数：" + this.lowRewardStreak + "/" + this.lowRewardLimit), this.lowRewardStreak >= this.lowRewardLimit && (console.log("🏁 " + this.getAccountDisplayName() + " 连续" + this.lowRewardLimit + "次低奖励，停止全部任务"), this.stopAllTasks = true)) : this.lowRewardStreak = 0;
          return {
            "success": true,
            "reward": _0x1f8bd7
          };
        }
        if ([20107, 20108, 1003, 415].includes(_0x14e074.result)) return console.log("⚠️ " + this.getAccountDisplayName() + " " + _0x12a67f.name + " 已达上限"), this.taskLimitReached[_0x352149] = true, {
          "success": false,
          "reward": 0
        };
        console.log("❌ " + this.getAccountDisplayName() + " " + _0x12a67f.name + " 奖励失败");
        return {
          "success": false,
          "reward": 0
        };
      }
    } catch (_0x1fbf6b) {
      console.log("❌ " + this.getAccountDisplayName() + " 提交任务异常: " + _0x1fbf6b.message);
      return {
        "success": false,
        "reward": 0
      };
    }
  }
  async ["executeTask"](_0x41c415) {
    const _0x3c69e8 = this.taskConfigs[_0x41c415];
    if (!_0x3c69e8) return console.log("❌ " + this.getAccountDisplayName() + " 未知任务: " + _0x41c415), false;
    if (this.taskLimitReached[_0x41c415] || _0x5cc6fb) return false;
    try {
      {
        const _0x85c955 = await this.retryOperation(() => this.getAdInfo(_0x3c69e8), "获取" + _0x3c69e8.name + "信息", 3);
        if (!_0x85c955) return this.taskStats[_0x41c415].failed++, false;
        const _0x215a4e = Math.floor(Math.random() * 10000) + 30000;
        console.log("👀 " + this.getAccountDisplayName() + " " + _0x3c69e8.name + " " + _0x7e3867() + " " + Math.round(_0x215a4e / 1000) + "秒");
        await new Promise(_0x185b78 => setTimeout(_0x185b78, _0x215a4e));
        const _0x534d7f = await this.retryOperation(() => this.generateSignature(_0x85c955.cid, _0x85c955.llsid, _0x41c415, _0x3c69e8), "生成" + _0x3c69e8.name + "签名", 3);
        if (!_0x534d7f) {
          this.taskStats[_0x41c415].failed++;
          return false;
        }
        const _0x3bbc19 = await this.retryOperation(() => this.submitReport(_0x534d7f.sig, _0x534d7f.sig3, _0x534d7f.sigtoken, _0x534d7f.post, _0x41c415, _0x3c69e8), "提交" + _0x3c69e8.name + "报告", 3);
        if (_0x3bbc19?.["success"]) return this.taskStats[_0x41c415].success++, this.taskStats[_0x41c415].totalReward += _0x3bbc19.reward || 0, true;
        this.taskStats[_0x41c415].failed++;
        return false;
      }
    } catch (_0x426541) {
      console.log("❌ " + this.getAccountDisplayName() + " 任务异常(" + _0x41c415 + "): " + _0x426541.message);
      this.taskStats[_0x41c415].failed++;
      return false;
    }
  }
  async ["executeAllTasksByPriority"]() {
    const _0x8c4e74 = {},
      _0x1e6b5d = 10;
    for (const _0x18dca4 of this.tasksToExecute) {
      if (this.stopAllTasks || _0x5cc6fb) break;
      if (!this.taskConfigs[_0x18dca4]) {
        {
          console.log("⚠️ " + this.getAccountDisplayName() + " 跳过未知任务: " + _0x18dca4);
          continue;
        }
      }
      console.log("🚀 " + this.getAccountDisplayName() + " 开始任务：" + this.taskConfigs[_0x18dca4].name + "（执行" + _0x1e6b5d + "个）");
      let _0x522053 = false;
      for (let _0x50bbc6 = 0; _0x50bbc6 < _0x1e6b5d; _0x50bbc6++) {
        {
          if (this.stopAllTasks || this.taskLimitReached[_0x18dca4] || _0x5cc6fb) {
            {
              _0x5cc6fb && console.log("   🛑 检测到卡密失效，停止任务");
              break;
            }
          }
          console.log("   [" + (_0x50bbc6 + 1) + "/" + _0x1e6b5d + "] " + this.taskConfigs[_0x18dca4].name);
          const _0x3436fa = await this.executeTask(_0x18dca4);
          _0x3436fa && (_0x522053 = true);
          if (_0x50bbc6 < _0x1e6b5d - 1 && !this.stopAllTasks) {
            {
              const _0x2f6485 = Math.floor(Math.random() * 2000) + 3000;
              console.log("   ⏱ 等待 " + Math.round(_0x2f6485 / 1000) + "秒...");
              await new Promise(_0x1f6859 => setTimeout(_0x1f6859, _0x2f6485));
            }
          }
        }
      }
      _0x8c4e74[_0x18dca4] = _0x522053;
      if (this.stopAllTasks) {
        break;
      }
      if (_0x18dca4 !== this.tasksToExecute[this.tasksToExecute.length - 1]) {
        const _0x2217c2 = Math.floor(Math.random() * 8000) + 7000;
        console.log("⏱ " + this.getAccountDisplayName() + " 等待 " + Math.round(_0x2217c2 / 1000) + "秒进入下一任务");
        await new Promise(_0xc533c2 => setTimeout(_0xc533c2, _0x2217c2));
      }
    }
    return _0x8c4e74;
  }
}
function _0x5c7b58(_0x1693bc) {
  const _0x111f7a = String(_0x1693bc || "").trim().split("#"),
    _0x43fc49 = (_0x109912, _0x3d2863 = 50) => {
      {
        if (_0x109912.length <= _0x3d2863) return _0x109912;
        return _0x109912.substring(0, _0x3d2863) + "...";
      }
    };
  if (_0x111f7a.length < 2 || _0x111f7a.length > 4) {
    {
      const _0x50d329 = _0x43fc49(_0x1693bc, 80);
      console.log("⚠️ 账号配置格式错误（需要2-4段）：" + _0x50d329);
      return null;
    }
  }
  let _0x530a4e, _0x4a5652, _0x490a76, _0x1377e2;
  if (_0x111f7a.length === 2) _0x530a4e = "", _0x4a5652 = _0x111f7a[0].trim(), _0x490a76 = _0x111f7a[1].trim(), _0x1377e2 = "";else {
    if (_0x111f7a.length === 3) {
      {
        const _0x1b1272 = _0x111f7a[2].trim(),
          _0x476b09 = (_0x1b1272.includes(":") || _0x1b1272.includes("|") || /^socks5:\/\//i.test(_0x1b1272)) && _0x1b1272 !== "0";
        _0x476b09 ? (_0x530a4e = "", _0x4a5652 = _0x111f7a[0].trim(), _0x490a76 = _0x111f7a[1].trim(), _0x1377e2 = _0x111f7a[2].trim()) : (_0x530a4e = _0x111f7a[0].trim(), _0x4a5652 = _0x111f7a[1].trim(), _0x490a76 = _0x111f7a[2].trim(), _0x1377e2 = "");
      }
    } else {
      _0x530a4e = _0x111f7a[0].trim();
      _0x4a5652 = _0x111f7a[1].trim();
      _0x490a76 = _0x111f7a[2].trim();
      _0x1377e2 = _0x111f7a[3].trim();
    }
  }
  if (!_0x4a5652 || !_0x490a76) {
    const _0x27c9d9 = _0x530a4e + "#" + _0x43fc49(_0x4a5652) + "#" + _0x490a76 + "#" + _0x1377e2;
    console.log("⚠️ cookie或salt为空：" + _0x27c9d9);
    return null;
  }
  let _0x2906ca = null;
  if (_0x1377e2 && _0x1377e2 !== "" && _0x1377e2 !== "null" && _0x1377e2 !== "0") {
    {
      if (/^socks5:\/\//i.test(_0x1377e2)) _0x2906ca = _0x1377e2, _0x16444f && console.log("🔧 [" + _0x530a4e + "] 代理配置：" + _0x2906ca);else {
        if (_0x1377e2.includes("|")) {
          {
            const _0x3824ec = _0x1377e2.split("|");
            if (_0x3824ec.length >= 2) {
              {
                const [_0x52f3c6, _0x48f104, _0x5e8c87, _0x261e87] = _0x3824ec;
                _0x5e8c87 && _0x261e87 ? _0x2906ca = "socks5://" + _0x5e8c87 + ":" + _0x261e87 + "@" + _0x52f3c6 + ":" + _0x48f104 : _0x2906ca = "socks5://" + _0x52f3c6 + ":" + _0x48f104;
                _0x16444f && console.log("🔧 [" + _0x530a4e + "] 代理配置：" + _0x2906ca);
              }
            } else console.log("⚠️ [" + _0x530a4e + "] 代理格式错误（需要至少2段）：" + _0x1377e2);
          }
        } else {
          if (_0x1377e2.includes(":")) {
            _0x2906ca = "socks5://" + _0x1377e2;
            _0x16444f && console.log("🔧 [" + _0x530a4e + "] 代理配置：" + _0x2906ca);
          } else console.log("⚠️ [" + _0x530a4e + "] 代理格式无法识别（建议格式：ip:port），忽略：" + _0x1377e2);
        }
      }
    }
  }
  return {
    "remark": _0x530a4e || "未命名",
    "salt": _0x490a76,
    "cookie": _0x4a5652,
    "proxyUrl": _0x2906ca
  };
}
function _0x433eae() {
  const _0x3ec21f = _0x182977(),
    _0x280e5f = _0x16decf(),
    _0x14b588 = [];
  for (const _0x37420d of _0x3ec21f) {
    const _0xf0a8e4 = _0x5c7b58(_0x37420d);
    _0xf0a8e4 && (_0xf0a8e4.tasksToExecute = _0x280e5f, _0x14b588.push(_0xf0a8e4));
  }
  _0x14b588.forEach((_0x2fb8e7, _0x295aa9) => {
    _0x2fb8e7.index = _0x295aa9 + 1;
  });
  return _0x14b588;
}
async function _0x1c745a(_0x4b2a63, _0x5a162f, _0x2df83e) {
  const _0x5e7379 = new Array(_0x4b2a63.length);
  let _0x1eb245 = 0;
  async function _0x3a5f26() {
    while (true) {
      const _0x36cb71 = _0x1eb245++;
      if (_0x36cb71 >= _0x4b2a63.length) return;
      const _0x190fe6 = _0x4b2a63[_0x36cb71];
      try {
        _0x5e7379[_0x36cb71] = await _0x2df83e(_0x190fe6, _0x36cb71);
      } catch (_0x340ea0) {
        console.log("❌ 并发执行异常（index=" + (_0x36cb71 + 1) + "）：" + _0x340ea0.message);
        _0x5e7379[_0x36cb71] = null;
      }
    }
  }
  const _0x40ea05 = Array.from({
    "length": Math.min(_0x5a162f, _0x4b2a63.length)
  }, _0x3a5f26);
  await Promise.all(_0x40ea05);
  return _0x5e7379;
}
async function _0x2047d9(_0x45e0ee) {
  const _0x4d1956 = () => {
    return "账号[" + _0x45e0ee.index + "]" + (_0x45e0ee.remark ? "(" + _0x45e0ee.remark + ")" : "");
  };
  let _0x30182d = false;
  if (_0x45e0ee.proxyUrl) {
    {
      console.log("🔌 " + _0x4d1956() + " 测试代理连接中...");
      const _0x1ec4a6 = await _0x31b477(_0x45e0ee.proxyUrl, _0x4d1956());
      console.log("   " + (_0x1ec4a6.ok ? "✅" : "❌") + " " + _0x1ec4a6.msg);
      if (!_0x1ec4a6.ok || _0x1ec4a6.ip === "unknown") {
        console.log("⚠️ " + _0x4d1956() + " 代理测试失败，自动切换为直连模式");
        _0x45e0ee.proxyUrl = null;
        _0x30182d = false;
      } else console.log("✅ " + _0x4d1956() + " 代理测试成功，将使用代理执行任务"), _0x30182d = true;
    }
  } else console.log("🌐 " + _0x4d1956() + " 未配置代理，使用直连");
  console.log("🔍 " + _0x4d1956() + " 获取账号信息中..." + (_0x30182d ? "(使用代理)" : "(直连)"));
  let _0x3552d7 = await _0x1db91e(_0x45e0ee.cookie, _0x45e0ee.proxyUrl, _0x45e0ee.index),
    _0x5806fe = _0x3552d7?.["nickname"] || "账号" + _0x45e0ee.index;
  if (_0x3552d7) {
    const _0x37f632 = _0x3552d7.totalCoin != null ? _0x3552d7.totalCoin : "未知",
      _0x54b90e = _0x3552d7.allCash != null ? _0x3552d7.allCash : "未知";
    console.log("✅ " + _0x4d1956() + " 登录成功，金币: " + _0x37f632 + "，余额: " + _0x54b90e);
  } else {
    console.log("❌ " + _0x4d1956() + " 基本信息获取失败，请检查：");
    console.log("   1. Cookie是否正确有效");
    console.log("   2. 代理是否可用（如配置了代理）");
    console.log("   3. 网络连接是否正常");
    console.log("   提示：将继续尝试执行任务...");
  }
  const _0x26f096 = new _0x537c2c({
    ..._0x45e0ee,
    "nickname": _0x5806fe,
    "tasksToExecute": _0x45e0ee.tasksToExecute || ["food", "box", "look"]
  });
  await _0x26f096.checkCoinLimit();
  if (_0x26f096.coinExceeded) {
    console.log("💰 " + _0x4d1956() + " 初始金币已超过阈值，不执行任务");
    return {
      "index": _0x45e0ee.index,
      "remark": _0x45e0ee.remark || "无备注",
      "nickname": _0x5806fe,
      "initialCoin": _0x3552d7?.["totalCoin"] || 0,
      "finalCoin": _0x3552d7?.["totalCoin"] || 0,
      "coinChange": 0,
      "initialCash": _0x3552d7?.["allCash"] || 0,
      "finalCash": _0x3552d7?.["allCash"] || 0,
      "cashChange": 0,
      "stats": _0x26f096.getTaskStats(),
      "coinLimitExceeded": true
    };
  }
  for (let _0x47886a = 0; _0x47886a < _0x43365e; _0x47886a++) {
    {
      if (_0x5cc6fb) {
        console.log("🛑 " + _0x4d1956() + " 检测到卡密失效，停止执行");
        break;
      }
      const _0x2466e8 = Math.floor(Math.random() * 8000) + 8000;
      console.log("⏱ " + _0x4d1956() + " 第" + (_0x47886a + 1) + "轮，等待 " + Math.round(_0x2466e8 / 1000) + "秒");
      console.log("🚀 " + _0x4d1956() + " 开始第" + (_0x47886a + 1) + "轮任务");
      const _0x20b9d0 = Math.floor(Math.random() * 5000) + 5000;
      console.log("⏳ " + _0x4d1956() + " 准备中，等待 " + Math.round(_0x20b9d0 / 1000) + "秒...");
      await new Promise(_0x480ff1 => setTimeout(_0x480ff1, _0x20b9d0));
      if (_0x5cc6fb) {
        {
          console.log("🛑 " + _0x4d1956() + " 检测到卡密失效，停止执行");
          break;
        }
      }
      const _0xf16a27 = await _0x26f096.executeAllTasksByPriority();
      Object.values(_0xf16a27).some(Boolean) ? console.log("✅ " + _0x4d1956() + " 第" + (_0x47886a + 1) + "轮执行完成") : console.log("⚠️ " + _0x4d1956() + " 第" + (_0x47886a + 1) + "轮没有成功任务");
      if (_0x26f096.stopAllTasks) {
        {
          console.log("🏁 " + _0x4d1956() + " 达到停止条件，终止后续轮次");
          break;
        }
      }
      if (_0x47886a < _0x43365e - 1) {
        const _0x31f93d = Math.floor(Math.random() * 15000) + 15000;
        console.log("⏱ " + _0x4d1956() + " 等待 " + Math.round(_0x31f93d / 1000) + "秒进入下一轮");
        await new Promise(_0x3eefdc => setTimeout(_0x3eefdc, _0x31f93d));
      }
    }
  }
  const _0x1b5e13 = await _0x1db91e(_0x45e0ee.cookie, _0x45e0ee.proxyUrl, _0x45e0ee.index),
    _0x5ee7ef = _0x3552d7?.["totalCoin"] || 0,
    _0x5292da = _0x1b5e13?.["totalCoin"] || 0,
    _0x5bff37 = _0x5292da - _0x5ee7ef,
    _0x3ae72e = _0x3552d7?.["allCash"] || 0,
    _0x518f03 = _0x1b5e13?.["allCash"] || 0,
    _0x415cc5 = _0x518f03 - _0x3ae72e;
  _0x26f096.printTaskStats();
  return {
    "index": _0x45e0ee.index,
    "remark": _0x45e0ee.remark || "无备注",
    "nickname": _0x5806fe,
    "initialCoin": _0x5ee7ef,
    "finalCoin": _0x5292da,
    "coinChange": _0x5bff37,
    "initialCash": _0x3ae72e,
    "finalCash": _0x518f03,
    "cashChange": _0x415cc5,
    "stats": _0x26f096.getTaskStats(),
    "coinLimitExceeded": _0x26f096.coinExceeded
  };
}
function _0x3af075(_0x34b9f0) {
  if (!_0x34b9f0.length) {
    console.log("\n❌ 没有可显示的账号信息。");
    return;
  }
  const _0xa31def = _0x34b9f0.reduce((_0x341351, _0x88f434) => _0x341351 + (parseInt(_0x88f434.initialCoin) || 0), 0),
    _0x5cc765 = _0x34b9f0.reduce((_0x533984, _0x76b77b) => _0x533984 + (parseInt(_0x76b77b.finalCoin) || 0), 0),
    _0x2c84cc = _0x5cc765 - _0xa31def,
    _0x10b37f = _0x34b9f0.reduce((_0x56099f, _0x12ca5b) => _0x56099f + (parseFloat(_0x12ca5b.initialCash) || 0), 0),
    _0x190b62 = _0x34b9f0.reduce((_0x171fdd, _0x35ffd1) => _0x171fdd + (parseFloat(_0x35ffd1.finalCash) || 0), 0),
    _0x46e991 = _0x190b62 - _0x10b37f;
  let _0x3233b = 0,
    _0x6f5481 = 0,
    _0xd543ac = 0;
  _0x34b9f0.forEach(_0x29d800 => {
    _0x29d800.stats && Object.values(_0x29d800.stats).forEach(_0x5b6649 => {
      _0x3233b += _0x5b6649.success + _0x5b6649.failed;
      _0x6f5481 += _0x5b6649.success;
      _0xd543ac += _0x5b6649.totalReward;
    });
  });
  const _0x324828 = _0x3233b > 0 ? (_0x6f5481 / _0x3233b * 100).toFixed(1) : "0.0",
    _0x5112f8 = _0x34b9f0.filter(_0x413058 => _0x413058.coinLimitExceeded).length;
  console.log("\n" + "=".repeat(60));
  console.log("📊 任务执行结果汇总");
  console.log("=".repeat(60));
  console.log("👥 总账号数: " + _0x34b9f0.length);
  console.log("💰 超过金币阈值: " + _0x5112f8 + "个");
  console.log("📈 总任务数: " + _0x3233b + " (成功率: " + _0x324828 + "%)");
  console.log("🎯 总金币变化: " + (_0x2c84cc >= 0 ? "+" : "") + _0x2c84cc);
  console.log("🏆 总金币奖励: " + _0xd543ac);
  console.log("💵 总余额变化: " + (_0x46e991 >= 0 ? "+" : "") + _0x46e991.toFixed(2));
  console.log("-".repeat(60));
  console.log("\n📋 账号详情:");
  console.log("序号".padEnd(6) + "备注".padEnd(16) + "昵称".padEnd(20) + "金币变化".padEnd(12) + "余额变化");
  console.log("-".repeat(60));
  _0x34b9f0.forEach(_0x218134 => {
    const _0x4acc99 = _0x218134.coinChange >= 0 ? "+" + _0x218134.coinChange : "" + _0x218134.coinChange,
      _0x296949 = _0x218134.cashChange >= 0 ? "+" + _0x218134.cashChange.toFixed(2) : "" + _0x218134.cashChange.toFixed(2),
      _0x277276 = _0x218134.coinLimitExceeded ? " ⚠️" : "";
    console.log(("" + _0x218134.index).padEnd(6) + ("" + _0x218134.remark).substring(0, 14).padEnd(16) + ("" + _0x218134.nickname + _0x277276).substring(0, 18).padEnd(20) + _0x4acc99.padEnd(12) + _0x296949);
  });
  console.log("=".repeat(60));
  console.log("✅ 任务执行完成");
  console.log("=".repeat(60));
  kmMonitorTimer && (clearInterval(kmMonitorTimer), console.log("\n🔒 已停止卡密监控"));
}
_0x34af18().catch(_0x408cee => {
  console.log("\n❌ 程序异常终止: " + _0x408cee.message);
  process.exit(1);
});