//Sun Dec 14 2025 14:49:01 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const request = require("request"),
  querystring = require("querystring"),
  {
    SocksProxyAgent
  } = require("socks-proxy-agent");
process.noDeprecation = true;
function generateRandomInteractionMessage() {
  const _0x89afb0 = ["正在观看广告", "认真观看中...", "浏览广告内容", "模拟用户行为", "观看视频广告", "保持活跃状态", "广告浏览中", "正常观看时长"];
  return _0x89afb0[Math.floor(Math.random() * _0x89afb0.length)];
}
const isDevMode = process.env.DEV_MODE === "1" || process.env.DEV_MODE === "true",
  enableDidChange = process.env.ENABLE_DID_CHANGE === "1" || process.env.ENABLE_DID_CHANGE === "true",
  MAX_DID_CHANGE_COUNT = 1;
function getTasksToExecute() {
  const _0x50322a = process.env.Task;
  if (!_0x50322a) return console.log("未设置Task环境变量，将执行所有任务(food, box, look, looks, search, content)"), ["food", "box", "look", "looks", "search", "content"];
  const _0x3b181a = _0x50322a.split(",").map(_0x175ced => _0x175ced.trim().toLowerCase()).filter(Boolean),
    _0x5c8493 = ["food", "box", "look", "looks", "search", "content"],
    _0x4d3b11 = _0x3b181a.filter(_0x58678f => _0x5c8493.includes(_0x58678f));
  if (_0x4d3b11.length === 0) return console.log("Task环境变量中没有有效任务，将执行所有任务(food, box, look, looks, search, content)"), ["food", "box", "look", "looks", "search", "content"];
  console.log("从Task环境变量中解析到要执行的任务: " + _0x4d3b11.join(", "));
  return _0x4d3b11;
}
function parseAccountConfig(_0x50becd) {
  const _0x57d4c0 = String(_0x50becd || "").trim().split("#");
  if (_0x57d4c0.length < 2) return null;
  let _0x548f48 = null,
    _0x4bcbbb,
    _0x2faafa,
    _0x492ed3 = null;
  if (_0x57d4c0.length === 4) {
    [_0x548f48, _0x4bcbbb, _0x2faafa, _0x492ed3] = _0x57d4c0;
  } else {
    if (_0x57d4c0.length === 3) {
      _0x57d4c0[2].includes("socks5://") || _0x57d4c0[2].includes("|") ? [_0x4bcbbb, _0x2faafa, _0x492ed3] = _0x57d4c0 : [_0x548f48, _0x4bcbbb, _0x2faafa] = _0x57d4c0;
    } else {
      if (_0x57d4c0.length === 2) {
        [_0x4bcbbb, _0x2faafa] = _0x57d4c0;
      } else return null;
    }
  }
  if (_0x492ed3) {
    if (_0x492ed3.includes("|")) {
      console.log("开始解析代理格式: " + _0x492ed3);
      const _0x510fe5 = _0x492ed3.split("|");
      if (_0x510fe5.length >= 2) {
        const [_0x4bacb4, _0x2efa54, _0x532a28, _0x3cdedf] = _0x510fe5;
        _0x492ed3 = "socks5://" + _0x532a28 + ":" + _0x3cdedf + "@" + _0x4bacb4 + ":" + _0x2efa54;
      }
    } else !/^socks5:\/\/.+/i.test(_0x492ed3) && (console.log("⚠️ 代理字段不是 socks5:// URL，忽略：" + _0x492ed3), _0x492ed3 = null);
  }
  return {
    "remark": _0x548f48 || null,
    "salt": _0x2faafa,
    "cookie": _0x4bcbbb,
    "proxyUrl": _0x492ed3
  };
}
function loadAccountsFromEnv() {
  const _0x3d9506 = [],
    _0x2e0070 = new Set();
  let _0x51efdf = 0;
  const _0x4010c4 = parseInt(process.env.MAX_KSCK_INDEX || "666", 10) || 666;
  console.log("开始检测ksck1 到 ksck" + _0x4010c4 + " 环境变量...");
  for (let _0x45413c = 1; _0x45413c <= _0x4010c4; _0x45413c++) {
    const _0x333581 = "ksck" + _0x45413c,
      _0x7d091c = process.env[_0x333581];
    if (_0x7d091c) {
      const _0x390daf = _0x7d091c.trim();
      if (!_0x2e0070.has(_0x390daf)) {
        const _0x2d73c1 = parseAccountConfig(_0x390daf);
        if (_0x2d73c1) {
          _0x2d73c1.index = ++_0x51efdf;
          _0x2d73c1.source = _0x333581;
          _0x3d9506.push(_0x2d73c1);
          _0x2e0070.add(_0x390daf);
        } else console.log("⚠️ " + _0x333581 + " 格式错误，忽略: " + _0x390daf);
      } else console.log("⚠️ " + _0x333581 + " 配置重复，忽略: " + _0x390daf);
    }
  }
  const _0x37603f = process.env.ksck;
  if (_0x37603f) {
    console.log("检测到 ksck 环境变量，解析中...");
    const _0x25b0f9 = _0x37603f.split("&").map(_0x1a541a => _0x1a541a.trim()).filter(Boolean);
    console.log("从ksck 环境变量中解析到 " + _0x25b0f9.length + " 个配置");
    for (const _0x35c02b of _0x25b0f9) {
      if (!_0x2e0070.has(_0x35c02b)) {
        const _0x4dbe4f = parseAccountConfig(_0x35c02b);
        _0x4dbe4f ? (_0x4dbe4f.index = ++_0x51efdf, _0x4dbe4f.source = "ksck", _0x3d9506.push(_0x4dbe4f), _0x2e0070.add(_0x35c02b)) : console.log("⚠️ ksck 配置格式错误，忽略: " + _0x35c02b);
      } else {
        console.log("⚠️ ksck 配置重复，忽略: " + _0x35c02b);
      }
    }
  }
  _0x3d9506.length === 0 ? console.log("⚠️ 未找到任何有效的账号配置（检查ksck、ksck1或ksck" + _0x4010c4 + "）") : console.log("✅ 共加载" + _0x3d9506.length + " 个有效账号配置");
  return _0x3d9506;
}
const accountConfigs = loadAccountsFromEnv(),
  accountCount = accountConfigs.length,
  tasksToExecute = getTasksToExecute(),
  taskNameMap = {
    "food": "food（饭补广告）",
    "box": "box（宝箱广告）",
    "look": "look（看广告得金币）",
    "looks": "looks（看广告得金币追加）",
    "search": "search（搜索广告）",
    "content": "content（看内容得金币）"
  },
  coinLimitDefault = parseInt(process.env.COIN_LIMIT || "500000", 10) || 550000,
  maxRoundsDefault = parseInt(process.env.ROUNDS || "50", 10) || 60,
  lowRewardThresholdDefault = parseInt(process.env.LOW_REWARD_THRESHOLD || "10", 10) || 10,
  lowRewardLimitDefault = parseInt(process.env.LOW_REWARD_LIMIT || "3", 5) || 3,
  DEFAULT_CONCURRENCY = 3,
  MAX_CONCURRENCY_LIMIT = 10,
  userConcurrency = parseInt(process.env.MAX_CONCURRENCY, 10),
  maxConcurrency = isNaN(userConcurrency) ? DEFAULT_CONCURRENCY : Math.min(Math.max(userConcurrency, 1), MAX_CONCURRENCY_LIMIT);
console.log("================================================================================");
console.log("免root一键抓包快手极速版（需要卸载快手极速版安装这个版本，登录成功后退出软件重新打开会自动弹窗cookie和salt）：https://pan.quark.cn/s/5995097eccc5     ");
console.log("静态代理ip最低2.5元一个月：http://www.gzsk5.com/#/register?invitation=hnking2&shareid=516  ");
console.log("脚本详细使用教程：https://mp.weixin.qq.com/s/9QhhcY7Yrsz32nnELhgA3A");
console.log("================================================================================");
console.log("🎉 系统破处初始化完成，快手处女至悲金币极速版启动成功！");
console.log("💎 检测到环境变量配置" + accountCount + "个账号");
console.log("🎯 将执行以下任务：" + tasksToExecute.map(_0xe38877 => taskNameMap[_0xe38877] || _0xe38877).join(", "));
console.log("🎯 配置参数：");
console.log("   - 任务配置变量=Task (可选: food看广告得金币1, box宝箱广告, look看广告得金币, looks看广告得金币追加, search搜索广告, content看内容得金币, 多个用逗号分隔)");
console.log("   - 账号配置变量=ksck, 卡密变量=km");
console.log("   - 轮数变量=ROUNDS (当前: " + maxRoundsDefault + ", 默认66)");
console.log("   - 金币阈值变量=COIN_LIMIT (当前: " + coinLimitDefault + ", 默认550000)");
console.log("   - 低奖励阈值变量=LOW_REWARD_THRESHOLD (当前: " + lowRewardThresholdDefault + ", 默认10)");
console.log("   - 连续低奖励上限变量=LOW_REWARD_LIMIT (当前: " + lowRewardLimitDefault + ", 默认3)");
console.log("   - 并发数变量MAX_CONCURRENCY (当前: " + maxConcurrency + ", 默认3, 最多10)");
console.log("🔧 DID更换功能: " + (enableDidChange ? "✅ 已启用(ENABLE_DID_CHANGE=1)" : "❌ 已禁用(设置 ENABLE_DID_CHANGE=1 启用)"));
accountCount > MAX_CONCURRENCY_LIMIT && (console.log("错误: 检测到 " + accountCount + " 个账号配置，最多只允许" + MAX_CONCURRENCY_LIMIT + "个"), process.exit(1));
const baseRemoteUrl = "http://183.87.155.49:5000",
  proxyApiUrl = baseRemoteUrl + "/proxySign",
  queueStatusApiUrl = baseRemoteUrl + "/queue_status";
function generateKuaishouDid() {
  try {
    const _0x432ae7 = _0x2c6da8 => {
        {
          const _0x214516 = "0123456789abcdef";
          let _0x480ec8 = "";
          for (let _0x5e6683 = 0; _0x5e6683 < _0x2c6da8; _0x5e6683++) {
            _0x480ec8 += _0x214516.charAt(Math.floor(Math.random() * _0x214516.length));
          }
          return _0x480ec8;
        }
      },
      _0x501a62 = _0x432ae7(16),
      _0x566ad8 = "ANDROID_" + _0x501a62;
    return _0x566ad8;
  } catch (_0x49183e) {
    {
      console.log("生成did失败: " + _0x49183e.message);
      const _0xa1bb03 = Date.now().toString(16).toUpperCase();
      return "ANDROID_" + _0xa1bb03.substring(0, 16);
    }
  }
}
async function sendRequest(_0xec1a3b, _0x505ece = null, _0x431d78 = "Unknown Request") {
  const _0x513e57 = {
    ..._0xec1a3b
  };
  if (_0x505ece) try {
    _0x513e57.agent = new SocksProxyAgent(_0x505ece);
    isDevMode && console.log("[调试] " + _0x431d78 + " 使用代理: " + _0x505ece);
  } catch (_0x3ed7f3) {
    console.log("[错误] " + _0x431d78 + " 代理URL无效(" + _0x3ed7f3.message + ")，尝试直连模式");
    isDevMode && console.log("[调试] 代理无效，自动切换到直连模式");
  } else {
    isDevMode && console.log("[调试] 未配置代理，使用直连模式");
  }
  if (isDevMode) {
    const _0x296c99 = _0x513e57.method || "GET";
    console.log("[调试] " + _0x431d78 + " -> " + _0x296c99 + " " + _0x513e57.url);
  }
  return new Promise(_0x373a83 => {
    request(_0x513e57, (_0x54d203, _0x45fdb6, _0x14b96b) => {
      {
        if (_0x54d203) {
          _0x54d203.name === "AggregateError" && Array.isArray(_0x54d203.errors) ? console.log("[调试] " + _0x431d78 + " 请求错误: AggregateError\n" + _0x54d203.errors.map((_0x2bc8f9, _0x4fef32) => "  [" + _0x4fef32 + "] " + (_0x2bc8f9?.["message"] || _0x2bc8f9)).join("\n")) : console.log("[调试] " + _0x431d78 + " 请求错误: " + (_0x54d203.message || String(_0x54d203)));
          return _0x373a83(null);
        }
        if (!_0x45fdb6 || _0x45fdb6.statusCode !== 200) {
          const _0x1f91e1 = _0x45fdb6 ? _0x45fdb6.statusCode : "无响应";
          console.log("[调试] " + _0x431d78 + " HTTP状态码异常: " + _0x1f91e1);
          return _0x373a83(null);
        }
        try {
          _0x373a83(JSON.parse(_0x14b96b));
        } catch {
          _0x373a83(_0x14b96b);
        }
      }
    });
  });
}
async function testProxyConnectivity(_0x4281e3, _0x507ba5 = "代理连通性检测") {
  if (!_0x4281e3) return {
    "ok": true,
    "msg": "✅ 未配置代理（直连模式）",
    "ip": "localhost"
  };
  const _0x527e30 = await sendRequest({
    "method": "GET",
    "url": "https://ip9.com.cn/get",
    "headers": {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
    },
    "timeout": 8000
  }, _0x4281e3, _0x507ba5 + " 到ip9.com.cn");
  if (!_0x527e30) return {
    "ok": false,
    "msg": "❌ 无法通过代理访问 ip9.com.cn",
    "ip": ""
  };
  if (isDevMode) {
    console.log("[调试] IP检测API原始响应类型: " + typeof _0x527e30);
    console.log("[调试] IP检测API原始响应内容: " + JSON.stringify(_0x527e30).substring(0, 200));
  }
  let _0x4b9c5e = "";
  if (typeof _0x527e30 === "string") {
    try {
      const _0x1b2be9 = JSON.parse(_0x527e30);
      _0x4b9c5e = _0x1b2be9.ip || _0x1b2be9.IP || _0x1b2be9.addr || _0x1b2be9.ip_address || _0x1b2be9.query || _0x1b2be9.data && _0x1b2be9.data.ip || "";
    } catch {
      {
        const _0x31ff98 = String(_0x527e30).match(/\b(?:\d{1,3}\.){3}\d{1,3}\b/);
        _0x4b9c5e = _0x31ff98 ? _0x31ff98[0] : "";
      }
    }
  } else _0x527e30 && typeof _0x527e30 === "object" && (_0x4b9c5e = _0x527e30.ip || _0x527e30.IP || _0x527e30.addr || _0x527e30.ip_address || _0x527e30.query || _0x527e30.data && _0x527e30.data.ip || "");
  return {
    "ok": true,
    "msg": "✅ SOCKS5代理正常，出口IP: " + (_0x4b9c5e || "未知"),
    "ip": _0x4b9c5e || "未知"
  };
}
const usedProxies = new Set();
async function getAccountBasicInfo(_0x1862c3, _0x48e3cb, _0x160bfb = "?") {
  const _0x338e63 = "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo?source=bottom_guide_first",
    _0x33a03e = await sendRequest({
      "method": "GET",
      "url": _0x338e63,
      "headers": {
        "Host": "nebula.kuaishou.com",
        "User-Agent": "kwai-android aegon/3.56.0",
        "Cookie": _0x1862c3,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "timeout": 12000
    }, _0x48e3cb, "账号[" + _0x160bfb + "] 获取基本信息");
  if (_0x33a03e && _0x33a03e.result === 1 && _0x33a03e.data) return {
    "nickname": _0x33a03e.data.userData?.["nickname"] || null,
    "totalCoin": _0x33a03e.data.totalCoin ?? null,
    "allCash": _0x33a03e.data.allCash ?? null
  };
  return null;
}
function centerAlign(_0x2393bc, _0x447933) {
  _0x2393bc = String(_0x2393bc);
  if (_0x2393bc.length >= _0x447933) return _0x2393bc.substring(0, _0x447933);
  const _0xec950e = _0x447933 - _0x2393bc.length,
    _0x371318 = Math.floor(_0xec950e / 2),
    _0x2fecff = _0xec950e - _0x371318;
  return " ".repeat(_0x371318) + _0x2393bc + " ".repeat(_0x2fecff);
}
class KuaishouAdTask {
  constructor({
    index: _0x1f54a4,
    salt: _0x1c194e,
    cookie: _0x2cef46,
    remark: _0x7ec13c,
    nickname = "",
    proxyUrl = null,
    tasksToExecute = ["food", "box", "look", "looks", "search", "content"]
  }) {
    this.index = _0x1f54a4;
    this.salt = _0x1c194e;
    this.cookie = _0x2cef46;
    this.remark = _0x7ec13c || null;
    this.nickname = nickname || (_0x7ec13c ? _0x7ec13c : "账号" + _0x1f54a4);
    this.proxyUrl = proxyUrl;
    this.coinLimit = parseInt(process.env.COIN_LIMIT || "500000", 10) || 500000;
    this.lowRewardThreshold = parseInt(process.env.LOW_REWARD_THRESHOLD || "0", 10) || 10;
    this.lowRewardLimit = parseInt(process.env.LOW_REWARD_LIMIT || "3", 10) || 3;
    this.coinExceeded = false;
    this.tasksToExecute = tasksToExecute;
    this.extractCookieInfo();
    this.headers = {
      "Host": "nebula.kuaishou.com",
      "User-Agent": "kwai-android aegon/4.28.0",
      "X-REQUESTID": "176141384176960896",
      "Accept-Language": "zh-cn",
      "page-code": "NEW_TASK_CENTER",
      "kaw": "MDHkM+9FrbzBSEAqyw6KYGqGa3b3Y2gIZq3YJZrGkTfaYzm10bLlDdGjxtTP/Vsn9qY6EtUMxCHt4jSsI+tFr9Ghm+r+KqHlnsOvBH0tCt4Ooik1wJGFzJpMJlsk/JeN79ww0w+eSy/M9oLfga/mji6Accpfu1wNXI1lYVZ3blsdkEud+hPR1c9Qj/CgplRmsM+Tmu37HcBisfMQFIszemGwXI2U+aRzBNCli/sJt3/RWyBFmtkwDIFoTyTZoMd0+TUA",
      "kas": "0016df70b7d4e188b70eea1ecf158ad175",
      "X-Client-Info": "model=23013RK75C;os=Android;nqe-score=18;network=OTHER;signal-strength=2;",
      "Cookie": this.cookie,
      "Content-Type": "application/json"
    };
    this.taskReportPath = "/rest/r/ad/task/report";
    this.startTime = Date.now();
    this.endTime = this.startTime - 30000;
    this.queryParams = "mod=Xiaomi(MI 11)&appver=" + this.appver + "&egid=" + this.egid + "&did=" + this.did;
    this.taskConfigs = {
      "box": {
        "name": "宝箱广告",
        "businessId": 606,
        "posId": 20346,
        "subPageId": 100024064,
        "pageId": 11101,
        "requestSceneType": 1,
        "taskType": 1
      },
      "look": {
        "name": "看广告得金币",
        "businessId": 672,
        "posId": 24067,
        "subPageId": 100026367,
        "pageId": 11101,
        "requestSceneType": 1,
        "taskType": 2
      },
      "looks": {
        "name": "看广告得金币[追加]",
        "businessId": 672,
        "posId": 24067,
        "subPageId": 100026367,
        "pageId": 11101,
        "requestSceneType": 7,
        "taskType": 2
      },
      "food": {
        "name": "饭补广告",
        "businessId": 9362,
        "posId": 24067,
        "subPageId": 100026367,
        "pageId": 11101,
        "requestSceneType": 7,
        "taskType": 2
      },
      "search": {
        "name": "搜索广告",
        "businessId": 7038,
        "posId": 96134,
        "subPageId": 100074584,
        "pageId": 11101,
        "requestSceneType": 1,
        "taskType": 1
      },
      "content": {
        "name": "看内容得金币",
        "businessId": 7041,
        "posId": 96134,
        "subPageId": 100076256,
        "pageId": 11101,
        "requestSceneType": 1,
        "taskType": 1
      }
    };
    this.taskStats = {};
    this.tasksToExecute.forEach(_0x430351 => {
      this.taskConfigs[_0x430351] && (this.taskStats[_0x430351] = {
        "success": 0,
        "failed": 0,
        "totalReward": 0
      });
    });
    this.lowRewardStreak = 0;
    this.stopAllTasks = false;
    this.taskLimitReached = {};
    this.tasksToExecute.forEach(_0x56ab02 => {
      if (this.taskConfigs[_0x56ab02]) {
        this.taskLimitReached[_0x56ab02] = false;
      }
    });
  }
  get ["displayName"]() {
    return this.remark || this.nickname;
  }
  async ["checkCoinLimit"]() {
    try {
      {
        const _0x57d1c4 = await getAccountBasicInfo(this.cookie, this.proxyUrl, this.index);
        if (_0x57d1c4 && _0x57d1c4.totalCoin) {
          const _0x24a080 = parseInt(_0x57d1c4.totalCoin);
          if (_0x24a080 >= this.coinLimit) return console.log("⚠️ 账号[" + this.displayName + "] 金币已达 " + _0x24a080 + "，超过" + this.coinLimit + " 阈值，将停止任务[备注：超过金币阈值（COIN_LIMIT=" + (process.env.COIN_LIMIT || "默认") + "）]"), this.coinExceeded = true, this.stopAllTasks = true, true;
        }
        return false;
      }
    } catch (_0x2f26e4) {
      console.log("账号[" + this.displayName + "] 金币检查异常: " + _0x2f26e4.message);
      return false;
    }
  }
  ["extractCookieInfo"]() {
    try {
      {
        const _0x5e1882 = this.cookie.match(/egid=([^;]+)/),
          _0x1d3217 = this.cookie.match(/did=([^;]+)/),
          _0x596eee = this.cookie.match(/userId=([^;]+)/),
          _0x1d698b = this.cookie.match(/kuaishou\.api_st=([^;]+)/),
          _0x42bf58 = this.cookie.match(/appver=([^;]+)/);
        this.egid = _0x5e1882 ? _0x5e1882[1] : "";
        this.did = _0x1d3217 ? _0x1d3217[1] : "";
        this.userId = _0x596eee ? _0x596eee[1] : "";
        this.kuaishouApiSt = _0x1d698b ? _0x1d698b[1] : "";
        this.appver = _0x42bf58 ? _0x42bf58[1] : "13.7.20.10468";
        (!this.egid || !this.did) && console.log("账号[" + this.displayName + "] cookie格式可能缺失egid 或 did，但继续尝试...");
      }
    } catch (_0x239a37) {
      console.log("账号[" + this.displayName + "] 解析cookie失败: " + _0x239a37.message);
    }
  }
  ["getTaskStats"]() {
    return this.taskStats;
  }
  ["printTaskStats"]() {
    console.log("\n账号[" + this.displayName + "] 任务执行统计:");
    for (const [_0xf237f6, _0x33998b] of Object.entries(this.taskStats)) {
      const _0x1a78b2 = this.taskConfigs[_0xf237f6].name;
      console.log("  " + _0x1a78b2 + ": 成功" + _0x33998b.success + "次 失败" + _0x33998b.failed + "次 总奖励" + _0x33998b.totalReward + "金币");
    }
  }
  async ["retryOperation"](_0x10460e, _0x2a959b, _0x53caec = 3, _0x434f7f = 2000) {
    let _0x4a42a8 = 0,
      _0x1b651f = null;
    while (_0x4a42a8 < _0x53caec) {
      try {
        {
          const _0x503d1a = await _0x10460e();
          if (_0x503d1a) return _0x503d1a;
          _0x1b651f = new Error(_0x2a959b + " 返回空结果");
        }
      } catch (_0x4ab18d) {
        _0x1b651f = _0x4ab18d;
        console.log("账号[" + this.displayName + "] " + _0x2a959b + " 异常: " + _0x4ab18d.message);
      }
      _0x4a42a8++;
      _0x4a42a8 < _0x53caec && (console.log("账号[" + this.displayName + "] " + _0x2a959b + " 失败，重试" + _0x4a42a8 + "/" + _0x53caec), await new Promise(_0x1abdce => setTimeout(_0x1abdce, _0x434f7f)));
    }
    isDevMode && _0x1b651f && console.log("[调试] " + _0x2a959b + " 最终失败: " + _0x1b651f.message);
    return null;
  }
  async ["getAdInfo"](_0x59d35a) {
    try {
      {
        const _0x36a0bd = "/rest/e/reward/mixed/ad",
          _0x80a09c = {
            "encData": "|encData|",
            "sign": "|sign|",
            "cs": "false",
            "client_key": "2ac2a76d",
            "videoModelCrowdTag": "1_23",
            "os": "android",
            "kuaishou.api_st": this.kuaishouApiSt,
            "uQaTag": "1##swLdgl:99#ecPp:-9#cmNt:-0#cmHs:-3#cmMnsl:-0"
          },
          _0x2e9c85 = {
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
          },
          _0x13562b = {
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
              "pageId": _0x59d35a.pageId,
              "subPageId": _0x59d35a.subPageId,
              "action": 0,
              "browseType": 3,
              "impExtData": "{}",
              "mediaExtData": "{}"
            }]
          },
          _0x31a91b = Buffer.from(JSON.stringify(_0x13562b)).toString("base64"),
          _0x5b76b2 = await this.generateSignature2(_0x36a0bd, querystring.stringify({
            ..._0x2e9c85,
            ..._0x80a09c
          }), this.salt, _0x31a91b);
        if (!_0x5b76b2) return console.log("❌ 账号[" + this.displayName + "] 生成签名失败，无法获取" + _0x59d35a.name), null;
        const _0x177076 = {
          ..._0x2e9c85,
          "sig": _0x5b76b2.sig,
          "__NS_sig3": _0x5b76b2.__NS_sig3,
          "__NS_xfalcon": "",
          "__NStokensig": _0x5b76b2.__NStokensig
        };
        _0x80a09c.encData = _0x5b76b2.encData;
        _0x80a09c.sign = _0x5b76b2.sign;
        const _0x19c6a3 = "https://api.e.kuaishou.com" + _0x36a0bd + "?" + querystring.stringify(_0x177076),
          _0x2938a8 = await sendRequest({
            "method": "POST",
            "url": _0x19c6a3,
            "headers": {
              "Host": "api.e.kuaishou.com",
              "User-Agent": "kwai-android aegon/3.56.0",
              "Cookie": "kuaishou_api_st=" + this.kuaishouApiSt,
              "kaw": _0x5b76b2.kaw,
              "kas": _0x5b76b2.kas
            },
            "form": _0x80a09c,
            "timeout": 12000
          }, this.proxyUrl, "账号[" + this.displayName + "] 获取广告");
        if (!_0x2938a8) return null;
        if (_0x2938a8.errorMsg === "OK" && _0x2938a8.feeds && _0x2938a8.feeds[0] && _0x2938a8.feeds[0].ad) {
          const _0x18a2e3 = _0x2938a8.feeds[0].caption || _0x2938a8.feeds[0].ad?.["caption"] || "";
          if (_0x18a2e3) {
            console.log("✅ 账号[" + this.displayName + "] 成功获取到广告信息：" + _0x18a2e3);
          }
          const _0x470996 = _0x2938a8.feeds[0].exp_tag || "",
            _0x31548e = _0x470996.split("/")[1]?.["split"]("_")?.[0] || "";
          return {
            "cid": _0x2938a8.feeds[0].ad.creativeId,
            "llsid": _0x31548e
          };
        }
        isDevMode && console.log("[调试] getAdInfo 原始响应:", JSON.stringify(_0x2938a8));
        return null;
      }
    } catch (_0x17d65a) {
      console.log("❌ 账号[" + this.displayName + "] 获取广告异常: " + _0x17d65a.message);
      return null;
    }
  }
  async ["generateSignature"](_0x29e82d, _0x568593, _0x1e148a, _0x47228b) {
    try {
      {
        const _0x1ac2c5 = JSON.stringify({
            "businessId": _0x47228b.businessId,
            "endTime": this.endTime,
            "extParams": "",
            "mediaScene": "video",
            "neoInfos": [{
              "creativeId": _0x29e82d,
              "extInfo": "",
              "llsid": _0x568593,
              "requestSceneType": _0x47228b.requestSceneType,
              "taskType": _0x47228b.taskType,
              "watchExpId": "",
              "watchStage": 0
            }],
            "pageId": _0x47228b.pageId,
            "posId": _0x47228b.posId,
            "reportType": 0,
            "sessionId": "",
            "startTime": this.startTime,
            "subPageId": _0x47228b.subPageId
          }),
          _0x155a68 = "bizStr=" + encodeURIComponent(_0x1ac2c5) + "&cs=false&client_key=2ac2a76d",
          _0x415f0d = this.queryParams + "&" + _0x155a68,
          _0xb1bd7f = await this.requestSignService({
            "urlpath": this.taskReportPath,
            "urldata": _0x415f0d,
            "api_client_salt": this.salt
          }, "账号[" + this.displayName + "] 生成报告签名");
        if (!_0xb1bd7f || !_0xb1bd7f.data) return null;
        return {
          "sig": _0xb1bd7f.data.sig,
          "sig3": _0xb1bd7f.data.__NS_sig3,
          "sigtoken": _0xb1bd7f.data.__NStokensig,
          "post": _0x155a68
        };
      }
    } catch (_0x56a615) {
      console.log("❌ 账号[" + this.displayName + "] 生成签名异常: " + _0x56a615.message);
      return null;
    }
  }
  async ["generateSignature2"](_0x5721a8, _0x1573c7, _0x56188a, _0x2638e2) {
    const _0x4df73c = await this.requestSignService({
      "urlpath": _0x5721a8,
      "urldata": _0x1573c7,
      "api_client_salt": _0x56188a,
      "req_str": _0x2638e2
    }, "账号[" + this.displayName + "] 生成广告签名");
    if (!_0x4df73c) return null;
    return _0x4df73c.data || _0x4df73c;
  }
  async ["submitReport"](_0x657172, _0x130b7b, _0x4d27b5, _0x3dcac7, _0xf462ba, _0x5dd804) {
    try {
      const _0x6e34fb = "https://api.e.kuaishou.com" + this.taskReportPath + "?" + (this.queryParams + "&sig=" + _0x657172 + "&__NS_sig3=" + _0x130b7b + "&__NS_xfalcon=&__NStokensig=" + _0x4d27b5),
        _0x482dc9 = await sendRequest({
          "method": "POST",
          "url": _0x6e34fb,
          "headers": {
            "Host": "api.e.kuaishou.cn",
            "User-Agent": "kwai-android aegon/3.56.0",
            "Cookie": this.cookie,
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "body": _0x3dcac7,
          "timeout": 12000
        }, this.proxyUrl, "账号[" + this.displayName + "] 提交任务");
      if (!_0x482dc9) return {
        "success": false,
        "reward": 0
      };
      if (_0x482dc9.result === 1) {
        const _0x2b5024 = _0x482dc9.data?.["neoAmount"] || 0;
        console.log("💰 账号[" + this.displayName + "] " + _0x5dd804.name + "获得" + _0x2b5024 + "金币奖励！");
        if (_0x2b5024 <= this.lowRewardThreshold) this.lowRewardStreak++, enableDidChange ? (this.didChangeCount === undefined && (this.didChangeCount = 0), this.didChangeCount < MAX_DID_CHANGE_COUNT ? (this.did = generateKuaishouDid(), this.didChangeCount++, console.log("⚠️ 账号[" + this.displayName + "] [备注：奖励低于LOW_REWARD_THRESHOLD=" + this.lowRewardThreshold + "] 金币低于阈值，已更换DID (第" + this.didChangeCount + "/" + MAX_DID_CHANGE_COUNT + "次)")) : console.log("⚠️ 账号[" + this.displayName + "] [备注：奖励低于LOW_REWARD_THRESHOLD=" + this.lowRewardThreshold + "] 金币低于阈值，但已达到DID更换次数上限(" + MAX_DID_CHANGE_COUNT + "次)")) : console.log("⚠️ 账号[" + this.displayName + "] [备注：奖励低于LOW_REWARD_THRESHOLD=" + this.lowRewardThreshold + "] 金币低于阈值"), this.lowRewardStreak >= this.lowRewardLimit && (console.log("🏁 账号[" + this.displayName + "] 连续" + this.lowRewardLimit + "次奖励≤" + this.lowRewardThreshold + "，停止全部任务[备注：连续低奖励达到上限 LOW_REWARD_LIMIT=" + this.lowRewardLimit + "]"), this.stopAllTasks = true);else {
          this.lowRewardStreak = 0;
        }
        return {
          "success": true,
          "reward": _0x2b5024
        };
      }
      if ([20107, 20108, 1003, 415].includes(_0x482dc9.result)) return console.log("⚠️ 账号[" + this.displayName + "] " + _0x5dd804.name + " 已达上限"), this.taskLimitReached[_0xf462ba] = true, {
        "success": false,
        "reward": 0
      };
      console.log("❌ 账号[" + this.displayName + "] " + _0x5dd804.name + " 奖励失败，result=" + _0x482dc9.result + " msg=" + (_0x482dc9.data || ""));
      isDevMode && console.log("[调试] submitReport 原始响应:", JSON.stringify(_0x482dc9));
      return {
        "success": false,
        "reward": 0
      };
    } catch (_0x15ccd8) {
      console.log("❌ 账号[" + this.displayName + "] 提交任务异常: " + _0x15ccd8.message);
      return {
        "success": false,
        "reward": 0
      };
    }
  }
  async ["requestSignService"](_0x42f64d, _0x4c5d3d) {
    const _0x56e27b = (process.env.km || "").trim();
    if (!_0x56e27b) return null;
    const _0x306cea = await sendRequest({
      "method": "POST",
      "url": proxyApiUrl + "?card_key=" + encodeURIComponent(_0x56e27b),
      "headers": {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0",
        "X-Card-Key": _0x56e27b
      },
      "body": JSON.stringify(_0x42f64d),
      "timeout": 15000
    }, null, _0x4c5d3d + "（签名服务）");
    if (!_0x306cea) return null;
    if (_0x306cea.success && _0x306cea.status === "queued" && _0x306cea.queue_id) {
      const _0x32e529 = await this.pollQueueStatus(_0x306cea.queue_id);
      if (_0x32e529 && _0x32e529.success && (_0x32e529.status === "completed" || _0x32e529.status === "processed")) return _0x32e529;
      console.log("账号[" + this.displayName + "] 签名失败: " + (_0x32e529?.["error"] || _0x32e529?.["status"] || "未知"));
      return null;
    }
    if (_0x306cea.success && (!_0x306cea.status || _0x306cea.status === "processed" || _0x306cea.status === "completed")) {
      return _0x306cea;
    }
    console.log("账号[" + this.displayName + "] 签名失败: " + (_0x306cea.error || _0x306cea.message || _0x306cea.status || "未知"));
    return null;
  }
  async ["pollQueueStatus"](_0x28213b, _0x33f36c = 30000, _0x2aad4c = 2000) {
    const _0x24ccaa = Date.now();
    while (Date.now() - _0x24ccaa < _0x33f36c) {
      const _0x43ff64 = await sendRequest({
        "method": "GET",
        "url": queueStatusApiUrl + "?queue_id=" + encodeURIComponent(_0x28213b),
        "headers": {
          "User-Agent": "Mozilla/5.0"
        },
        "timeout": 10000
      }, null, "账号[" + this.displayName + "] 签名排队");
      if (_0x43ff64?.["success"]) {
        if (_0x43ff64.status === "completed" || _0x43ff64.status === "processed") return _0x43ff64;
        if (_0x43ff64.status === "failed") return _0x43ff64;
      }
      await new Promise(_0x19427a => setTimeout(_0x19427a, _0x2aad4c));
    }
    return {
      "success": false,
      "status": "failed",
      "error": "queue_timeout"
    };
  }
  async ["executeTask"](_0x1628dd) {
    const _0x2db0c8 = this.taskConfigs[_0x1628dd];
    if (!_0x2db0c8) return console.log("❌ 账号[" + this.displayName + "] 未知任务: " + _0x1628dd), false;
    if (this.taskLimitReached[_0x1628dd]) return false;
    try {
      {
        const _0x286475 = await this.retryOperation(() => this.getAdInfo(_0x2db0c8), "获取" + _0x2db0c8.name + "信息", 3);
        if (!_0x286475) return this.taskStats[_0x1628dd].failed++, false;
        const _0x94cadf = Math.floor(Math.random() * 10000) + 30000;
        console.log("🔍 账号[" + this.displayName + "] ==>" + _0x2db0c8.name + " " + generateRandomInteractionMessage() + " " + Math.round(_0x94cadf / 1000) + " 秒");
        await new Promise(_0x2f99d9 => setTimeout(_0x2f99d9, _0x94cadf));
        const _0x409f20 = await this.retryOperation(() => this.generateSignature(_0x286475.cid, _0x286475.llsid, _0x1628dd, _0x2db0c8), "生成" + _0x2db0c8.name + "签名", 3);
        if (!_0x409f20) return this.taskStats[_0x1628dd].failed++, false;
        const _0x10ba6f = await this.retryOperation(() => this.submitReport(_0x409f20.sig, _0x409f20.sig3, _0x409f20.sigtoken, _0x409f20.post, _0x1628dd, _0x2db0c8), "提交" + _0x2db0c8.name + "报告", 3);
        if (_0x10ba6f?.["success"]) {
          this.taskStats[_0x1628dd].success++;
          this.taskStats[_0x1628dd].totalReward += _0x10ba6f.reward || 0;
          return true;
        }
        this.taskStats[_0x1628dd].failed++;
        return false;
      }
    } catch (_0x358b4e) {
      console.log("❌ 账号[" + this.displayName + "] 任务异常(" + _0x1628dd + "): " + _0x358b4e.message);
      this.taskStats[_0x1628dd].failed++;
      return false;
    }
  }
  async ["executeAllTasksByPriority"]() {
    const _0x25115c = {};
    for (const _0x8a5b55 of this.tasksToExecute) {
      if (this.stopAllTasks) break;
      if (!this.taskConfigs[_0x8a5b55]) {
        console.log("⚠️ 账号[" + this.displayName + "] 跳过未知任务: " + _0x8a5b55);
        continue;
      }
      console.log("🚀 账号[" + this.displayName + "] 开始任务：" + this.taskConfigs[_0x8a5b55].name);
      _0x25115c[_0x8a5b55] = await this.executeTask(_0x8a5b55);
      if (this.stopAllTasks) break;
      if (_0x8a5b55 !== this.tasksToExecute[this.tasksToExecute.length - 1]) {
        {
          const _0x95a32 = Math.floor(Math.random() * 8000) + 7000;
          console.log("⌛ 账号[" + this.displayName + "] 等待下一个任务，随机等待 " + Math.round(_0x95a32 / 1000) + " 秒");
          await new Promise(_0x1aaac9 => setTimeout(_0x1aaac9, _0x95a32));
        }
      }
    }
    return _0x25115c;
  }
}
async function concurrentExecute(_0x46d32a, _0x4256a9, _0x14f518) {
  const _0x50866d = new Array(_0x46d32a.length);
  let _0x2ee340 = 0;
  async function _0x101fe2() {
    while (true) {
      {
        const _0x29e1e3 = _0x2ee340++;
        if (_0x29e1e3 >= _0x46d32a.length) {
          return;
        }
        const _0x10d125 = _0x46d32a[_0x29e1e3];
        try {
          _0x50866d[_0x29e1e3] = await _0x14f518(_0x10d125, _0x29e1e3);
        } catch (_0x2e3500) {
          console.log("并发执行异常（index=" + (_0x29e1e3 + 1) + "）：" + _0x2e3500.message);
          _0x50866d[_0x29e1e3] = null;
        }
      }
    }
  }
  const _0x5bc881 = Array.from({
    "length": Math.min(_0x4256a9, _0x46d32a.length)
  }, _0x101fe2);
  await Promise.all(_0x5bc881);
  return _0x50866d;
}
async function processAccount(_0x3e752c, _0xb12110 = maxRoundsDefault) {
  console.log("账号[" + _0x3e752c.index + "]" + (_0x3e752c.remark ? " " + _0x3e752c.remark + " " : "") + " [备注：本账号将执行最多" + _0xb12110 + " 轮任务]");
  if (_0x3e752c.proxyUrl) {
    {
      console.log("账号[" + _0x3e752c.index + "]" + (_0x3e752c.remark ? " " + _0x3e752c.remark + " " : "") + " 🔌 测试代理连接中..");
      const _0x103a06 = await testProxyConnectivity(_0x3e752c.proxyUrl, "账号[" + _0x3e752c.index + "]");
      console.log("  - " + (_0x103a06.ok ? "✅ 代理验证通过，IP: " + _0x103a06.ip : "❌ 代理验证失败") + ": " + _0x103a06.msg);
      if (!_0x103a06.ok) return {
        "index": _0x3e752c.index,
        "remark": _0x3e752c.remark,
        "success": false,
        "error": _0x103a06.msg
      };
    }
  }
  console.log("账号[" + _0x3e752c.index + "]" + (_0x3e752c.remark ? " " + _0x3e752c.remark + " " : "") + " 🔍 获取账号信息中..");
  let _0x59944c = await getAccountBasicInfo(_0x3e752c.cookie, _0x3e752c.proxyUrl, _0x3e752c.index),
    _0x947fb9 = _0x59944c?.["nickname"] || "账号" + _0x3e752c.index;
  if (_0x59944c) {
    const _0x398da4 = _0x59944c.totalCoin != null ? _0x59944c.totalCoin : "未知",
      _0xe2c1ed = _0x59944c.allCash != null ? _0x59944c.allCash : "未知";
    console.log("账号[" + _0x947fb9 + "] ✅ 登录成功，当前金币: " + _0x398da4 + "，当前余额: " + _0xe2c1ed);
  } else console.log("账号[" + _0x947fb9 + "] ⚠️ 基本信息获取失败，继续执行");
  const _0x19ce99 = new KuaishouAdTask({
    ..._0x3e752c,
    "nickname": _0x947fb9,
    "tasksToExecute": tasksToExecute
  });
  await _0x19ce99.checkCoinLimit();
  if (_0x19ce99.coinExceeded) {
    {
      console.log("账号[" + _0x19ce99.displayName + "] 初始金币已超过阈值，不执行任务");
      const _0x27fc83 = await getAccountBasicInfo(_0x3e752c.cookie, _0x3e752c.proxyUrl, _0x3e752c.index),
        _0x216ad5 = _0x59944c?.["totalCoin"] || 0,
        _0x236286 = _0x27fc83?.["totalCoin"] || 0,
        _0x7a1812 = _0x236286 - _0x216ad5,
        _0x38f068 = _0x59944c?.["allCash"] || 0,
        _0x2bfbc1 = _0x27fc83?.["allCash"] || 0,
        _0x5f4564 = _0x2bfbc1 - _0x38f068;
      return {
        "index": _0x3e752c.index,
        "nickname": _0x19ce99.displayName,
        "initialCoin": _0x216ad5,
        "finalCoin": _0x236286,
        "coinChange": _0x7a1812,
        "initialCash": _0x38f068,
        "finalCash": _0x2bfbc1,
        "cashChange": _0x5f4564,
        "stats": _0x19ce99.getTaskStats(),
        "coinLimitExceeded": true
      };
    }
  }
  for (let _0x27f508 = 0; _0x27f508 < _0xb12110; _0x27f508++) {
    {
      const _0x522017 = Math.floor(Math.random() * 8000) + 8000;
      console.log("账号[" + _0x19ce99.displayName + "] ⌛ 第" + (_0x27f508 + 1) + "轮，先随机等待 " + Math.round(_0x522017 / 1000) + " 秒");
      await new Promise(_0x5b8615 => setTimeout(_0x5b8615, _0x522017));
      console.log("账号[" + _0x19ce99.displayName + "] 🚀 开始第" + (_0x27f508 + 1) + "轮任务");
      const _0x531197 = await _0x19ce99.executeAllTasksByPriority();
      if (Object.values(_0x531197).some(Boolean)) {
        console.log("账号[" + _0x19ce99.displayName + "] ✅ 第" + (_0x27f508 + 1) + "轮执行完成");
      } else console.log("账号[" + _0x19ce99.displayName + "] ⚠️ 第" + (_0x27f508 + 1) + "轮没有成功任务");
      if (_0x19ce99.stopAllTasks) {
        console.log("账号[" + _0x19ce99.displayName + "] 🏁 达到停止条件，终止后续轮次");
        break;
      }
      if (_0x27f508 < _0xb12110 - 1) {
        {
          const _0x53fa04 = Math.floor(Math.random() * 10000) + 10000;
          console.log("账号[" + _0x19ce99.displayName + "] ⌛ 等待 " + Math.round(_0x53fa04 / 1000) + " 秒进入下一轮");
          await new Promise(_0x13fd0b => setTimeout(_0x13fd0b, _0x53fa04));
        }
      }
    }
  }
  const _0x218060 = await getAccountBasicInfo(_0x3e752c.cookie, _0x3e752c.proxyUrl, _0x3e752c.index),
    _0x4efd6e = _0x59944c?.["totalCoin"] || 0,
    _0x34f38f = _0x218060?.["totalCoin"] || 0,
    _0x589a5c = _0x34f38f - _0x4efd6e,
    _0x57d413 = _0x59944c?.["allCash"] || 0,
    _0x5b965d = _0x218060?.["allCash"] || 0,
    _0x3eea59 = _0x5b965d - _0x57d413;
  _0x19ce99.printTaskStats();
  return {
    "index": _0x3e752c.index,
    "nickname": _0x19ce99.displayName,
    "initialCoin": _0x4efd6e,
    "finalCoin": _0x34f38f,
    "coinChange": _0x589a5c,
    "initialCash": _0x57d413,
    "finalCash": _0x5b965d,
    "cashChange": _0x3eea59,
    "stats": _0x19ce99.getTaskStats(),
    "coinLimitExceeded": _0x19ce99.coinExceeded
  };
}
function printAccountsSummary(_0x338177) {
  if (!_0x338177.length) {
    {
      console.log("\n没有可显示的账号信息");
      return;
    }
  }
  const _0x446d5a = _0x338177.reduce((_0x27dd8f, _0x10a848) => {
      return _0x27dd8f + (parseInt(_0x10a848.initialCoin) || 0);
    }, 0),
    _0x5aa03c = _0x338177.reduce((_0x3e88b3, _0x4c7cd1) => {
      return _0x3e88b3 + (parseInt(_0x4c7cd1.finalCoin) || 0);
    }, 0),
    _0x560790 = _0x5aa03c - _0x446d5a,
    _0x198ac1 = _0x338177.reduce((_0x4a67ad, _0x62a13e) => {
      return _0x4a67ad + (parseFloat(_0x62a13e.initialCash) || 0);
    }, 0),
    _0x448bee = _0x338177.reduce((_0x245a21, _0x205991) => {
      return _0x245a21 + (parseFloat(_0x205991.finalCash) || 0);
    }, 0),
    _0x11b0bd = _0x448bee - _0x198ac1;
  let _0x14a6b0 = 0,
    _0x192703 = 0,
    _0x3f0621 = 0;
  _0x338177.forEach(_0x56aa78 => {
    _0x56aa78.stats && Object.values(_0x56aa78.stats).forEach(_0x13a1fd => {
      _0x14a6b0 += _0x13a1fd.success + _0x13a1fd.failed;
      _0x192703 += _0x13a1fd.success;
      _0x3f0621 += _0x13a1fd.totalReward;
    });
  });
  const _0x4e0f11 = _0x14a6b0 > 0 ? (_0x192703 / _0x14a6b0 * 100).toFixed(1) : "0.0",
    _0x24303e = _0x338177.filter(_0x1b09e7 => _0x1b09e7.coinLimitExceeded).length;
  console.log("\n\n" + "=".repeat(80));
  console.log("|" + centerAlign("      快手养号任务执行结果汇总表      ", 78) + "|");
  console.log("=".repeat(80));
  console.log("|" + ("总账号数: " + _0x338177.length).padEnd(22) + ("超过金币阈值账号: " + _0x24303e).padEnd(22) + ("总任务数: " + _0x14a6b0).padEnd(22) + ("任务成功率: " + _0x4e0f11 + "%").padEnd(10) + "|");
  console.log("|" + ("总金币变化: " + _0x560790).padEnd(26) + ("总金币奖励: " + _0x3f0621).padEnd(26) + ("总余额变化: " + _0x11b0bd.toFixed(2)).padEnd(24) + "|");
  console.log("-".repeat(80));
  const _0x596b02 = ["序号", "账号昵称", "初始金币", "最终金币", "金币变化", "初始余额", "最终余额", "余额变化"],
    _0xeb8474 = [6, 16, 12, 12, 12, 12, 12, 12];
  let _0x5388b0 = "|";
  _0x596b02.forEach((_0x6d99f7, _0x2ee531) => {
    _0x5388b0 += centerAlign(_0x6d99f7, _0xeb8474[_0x2ee531]) + "|";
  });
  console.log(_0x5388b0);
  let _0x42e253 = "|";
  _0xeb8474.forEach(_0x4c146e => {
    _0x42e253 += "-".repeat(_0x4c146e) + "|";
  });
  console.log(_0x42e253);
  _0x338177.forEach(_0x47e361 => {
    let _0x1b32c8 = "|";
    _0x1b32c8 += centerAlign(_0x47e361.index, _0xeb8474[0]) + "|";
    const _0x5637bc = (_0x47e361.nickname || "-") + (_0x47e361.coinLimitExceeded ? " ⚠️" : "");
    _0x1b32c8 += centerAlign(_0x5637bc.substring(0, _0xeb8474[1] - 2), _0xeb8474[1]) + "|";
    _0x1b32c8 += centerAlign(_0x47e361.initialCoin, _0xeb8474[2]) + "|";
    _0x1b32c8 += centerAlign(_0x47e361.finalCoin, _0xeb8474[3]) + "|";
    const _0x2e033d = _0x47e361.coinChange >= 0 ? "+" + _0x47e361.coinChange : _0x47e361.coinChange;
    _0x1b32c8 += centerAlign(_0x2e033d, _0xeb8474[4]) + "|";
    _0x1b32c8 += centerAlign(_0x47e361.initialCash, _0xeb8474[5]) + "|";
    _0x1b32c8 += centerAlign(_0x47e361.finalCash, _0xeb8474[6]) + "|";
    const _0x1a53b1 = _0x47e361.cashChange >= 0 ? "+" + _0x47e361.cashChange.toFixed(2) : _0x47e361.cashChange.toFixed(2);
    _0x1b32c8 += centerAlign(_0x1a53b1, _0xeb8474[7]) + "|";
    console.log(_0x1b32c8);
  });
  console.log("=".repeat(80));
  console.log("|" + centerAlign("      任务执行完成，请查看详细结果      ", 78) + "|");
  console.log("=".repeat(80));
}
(async () => {
  const _0x5f4244 = loadAccountsFromEnv();
  console.log("共找到" + _0x5f4244.length + " 个有效账号");
  !_0x5f4244.length && process.exit(1);
  const _0x5ef130 = parseInt(process.env.ROUNDS || "35", 10) || 35,
    _0x54f84b = [];
  await concurrentExecute(_0x5f4244, maxConcurrency, async _0x2dfcda => {
    {
      console.log("\n——🚀 开始账号[" + _0x2dfcda.index + "]" + (_0x2dfcda.remark ? " " + _0x2dfcda.remark + " " : "") + " ——");
      try {
        {
          const _0x455dc7 = await processAccount(_0x2dfcda, _0x5ef130);
          _0x54f84b.push({
            "index": _0x2dfcda.index,
            "remark": _0x2dfcda.remark || "无备注",
            "nickname": _0x455dc7?.["nickname"] || "未知",
            "initialCoin": _0x455dc7?.["initialCoin"] || 0,
            "finalCoin": _0x455dc7?.["finalCoin"] || 0,
            "coinChange": _0x455dc7?.["coinChange"] || 0,
            "initialCash": _0x455dc7?.["initialCash"] || 0,
            "finalCash": _0x455dc7?.["finalCash"] || 0,
            "cashChange": _0x455dc7?.["cashChange"] || 0,
            "stats": _0x455dc7?.["stats"] || {},
            "coinLimitExceeded": _0x455dc7?.["coinLimitExceeded"] || false
          });
        }
      } catch (_0xdd5968) {
        console.log("账号[" + _0x2dfcda.index + "] ❌ 执行异常: " + _0xdd5968.message);
        _0x54f84b.push({
          "index": _0x2dfcda.index,
          "remark": _0x2dfcda.remark || "无备注",
          "nickname": "未知",
          "initialCoin": 0,
          "finalCoin": 0,
          "coinChange": 0,
          "initialCash": 0,
          "finalCash": 0,
          "cashChange": 0,
          "error": _0xdd5968.message
        });
      }
    }
  });
  _0x54f84b.sort((_0x316ed8, _0x540e85) => _0x316ed8.index - _0x540e85.index);
  console.log("\n全部完成");
  console.log("\n---------------------------------------------- 账号信息汇总----------------------------------------------");
  printAccountsSummary(_0x54f84b);
})();