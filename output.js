//Sat Aug 23 2025 05:27:11 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const axios = require("axios"),
  crypto = require("crypto"),
  qs = require("qs");
function sleep(_0x59a5d7) {
  console.log("🛌开始等待" + _0x59a5d7 / 1000 + "秒");
  return new Promise(_0x1086ba => setTimeout(_0x1086ba, _0x59a5d7));
}
function get13DigitTimestamp() {
  return Date.now();
}
function randomInt(_0xfebbb9, _0x30fb74) {
  if (!Number.isInteger(_0xfebbb9) || !Number.isInteger(_0x30fb74)) throw new TypeError("min 和 max 必须为整数");
  if (_0xfebbb9 > _0x30fb74) [_0xfebbb9, _0x30fb74] = [_0x30fb74, _0xfebbb9];
  return Math.floor(Math.random() * (_0x30fb74 - _0xfebbb9 + 1)) + _0xfebbb9;
}
function generateRandomString(_0x1bbe52 = 16) {
  const _0x4a8689 = "abcdefghijklmnopqrstuvwxyz0123456789";
  let _0xc3893 = "";
  const _0x5d9b09 = _0x4a8689.length;
  for (let _0xacdc4a = 0; _0xacdc4a < _0x1bbe52; _0xacdc4a++) {
    _0xc3893 += _0x4a8689.charAt(Math.floor(Math.random() * _0x5d9b09));
  }
  return _0xc3893;
}
async function getOne() {
  try {
    {
      const _0x208f4a = await axios.get("https://api.nxvav.cn/api/yiyan/?encode=json&charset=utf-8");
      return _0x208f4a.data?.["yiyan"] || "人生得意须尽欢";
    }
  } catch (_0x3b1d62) {
    console.log("error", _0x3b1d62);
    return "人生得意须尽欢";
  }
}
function md5(_0x51d049) {
  return crypto.createHash("md5").update(_0x51d049).digest("hex");
}
class FRWZ {
  constructor(_0x243bd9 = "3ec3ab50d4778f28cb9f60fa9825cd84", _0x186bd4 = "liuxunhuan") {
    this.sessionId = _0x243bd9;
    this.name = _0x186bd4;
  }
  ["genReqConfig"](_0x256425, _0x2ee564) {
    let _0x46c03c = get13DigitTimestamp(),
      _0x5ef5d7 = "_t=" + _0x46c03c + "&_ut=" + (_0x46c03c + _0x2ee564) + "&_vi=76&a=wxapp&c=entry&do=" + _0x256425 + "&from=wxapp&i=89&m=mof_shortvideo&state=we7sid-" + this.sessionId + "&t=0&v=1.0.6&wq_mof_short_video_by_moufer_2020",
      _0x144a73 = md5(_0x5ef5d7);
    return {
      "method": "GET",
      "url": "https://weiqing.lingchuangwang.com/app/index.php?i=89&t=0&v=1.0.6&from=wxapp&c=entry&a=wxapp&do=" + _0x256425 + "&=&state=we7sid-" + this.sessionId + "&m=mof_shortvideo&_ut=" + (_0x46c03c + _0x2ee564) + "&_vi=76&sign=" + _0x144a73 + "&_t=" + _0x46c03c,
      "headers": {
        "User-Agent": "Mozilla/5.0 (Linux; Android 15; PJZ110 Build/AP3A.240617.008; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/134.0.6998.136 Mobile Safari/537.36 XWEB/1340095 MMWEBSDK/20250201 MMWEBID/5182 MicroMessenger/8.0.58.2841(0x28003A3E) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64",
        "xweb_xhr": "1",
        "content-type": "application/x-www-form-urlencoded",
        "sec-fetch-site": "cross-site",
        "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
        "referer": "https://servicewechat.com/wxd03a809cfc99930b/4/page-frame.html",
        "accept-language": "zh-CN,zh;q=0.9"
      }
    };
  }
  async ["userSign"]() {
    const _0x38758b = randomInt(15000, 20000);
    let _0x3ba2a2 = this.genReqConfig("ScoreTaskSignIn", _0x38758b);
    const _0x16d684 = await axios(_0x3ba2a2);
    _0x16d684.data.errno === 0 ? console.log("✅" + this.name + "==>今日签到完成") : console.log("❌" + this.name + "==>今日签到失败，" + _0x16d684.data.message);
  }
  async ["watchVideoAd"](_0x5beb00) {
    let _0x4d045e = this.genReqConfig("ScoreTaskVideoAd", _0x5beb00);
    const _0x5d913b = await axios(_0x4d045e);
    console.log(_0x5d913b.data);
    if (_0x5d913b.data.errno === 0) {
      console.log("✅" + this.name + "==>广告积分获取成功，本次获得" + (_0x5d913b.data.data.reward_score || "积分解析异常"));
      return true;
    } else return console.log("❌" + this.name + "==>广告积分获取失败，" + _0x5d913b.data.message), false;
  }
  async ["rollVideoAd"](_0x4553fb) {
    let _0x248813 = this.genReqConfig("ScoreTaskRollVideo", _0x4553fb);
    const _0x21fa97 = await axios(_0x248813);
    if (_0x21fa97.data.errno === 0) {
      console.log("✅" + this.name + "==>滑动视频积分获取成功，本次获得" + (_0x21fa97.data.data.reward_score || "积分解析异常"));
      return true;
    } else {
      console.log("❌" + this.name + "==>滑动视频积分获取失败，" + _0x21fa97.data.message);
      return false;
    }
  }
  async ["userTask"]() {
    await this.userSign();
    for (let _0x37eecc = 0; _0x37eecc < 28; _0x37eecc++) {
      const _0x4106d4 = randomInt(15000, 20000);
      await sleep(_0x4106d4);
      if (!(await this.watchVideoAd(_0x4106d4))) break;
    }
    for (let _0x1418e5 = 0; _0x1418e5 < 150; _0x1418e5++) {
      const _0x30463c = randomInt(10000, 15000);
      await sleep(_0x30463c);
      if (!(await this.rollVideoAd(0))) {
        break;
      }
    }
  }
}
let user = process.env.FRWZ || "";
if (user.length === 0) {}
let userList = user.split("&").map(_0x1f2c4c => {
  let _0x487d13 = _0x1f2c4c.split("#"),
    _0x173e81 = _0x487d13[0],
    _0x3ab6d6 = _0x487d13[1];
  return {
    "name": _0x173e81,
    "sessionId": _0x3ab6d6
  };
});
const base64String = "ICAgJCQkICAgICAgICAgJCQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkJCAgICAgICAgICAKICAgJCQkICAgJCQkJCQkJCQkJCQkJCQkJCAgICQkJCQkJCQkJCQkJCQkJCQkJCQkJCAgICQkJCQkJCQkJCQgJCQkICAgICAgICAgICAKICQkJCQkJCQkJCQkICAgICAkJCQgICQkJCAgICAgICAgICAgICAgICAgICAgJCQkJCAgICQkJCQkJCQkJCQgJCQkJCQkJCQkJCQkJCQKJCQkJCQkJCQkJCQkICQkJCAkJCQgICQkJCAgICAkJCQkJCQkJCQkJCQkJCQkJCQkJCAgICQkJCAgICQkJCAkJCQgICQkJCAgICQkJCAKICAgJCQkJCAgJCQkICQkJCAkJCQgICQkJCAgICAgICAgICAgICAgICAgICAgJCQkJCAgICAkJCQgICQkJCQkJCAgJCQkJCAkJCQkICAKICAkJCQkJCQkJCQkICQkJCAkJCQgICQkJCAgICQkJCQkJCQkJCQkJCQkJCQkJCQkJCAgICAgJCQkJCQkJCAkJCAgJCQkJCAgICAgICAKICQkJCQkICQkJCQkICQkJCAkJCQgICQkJCAgICAgICAgICAgICAgICAgICQkJCAgICAgICAgICQkJCQkICAgICAgJCQkJCAgICAgICAKJCQkJCQkICAgJCQkJCQkJCAkJCQgICQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCAgICAkJCQkJCAgICAkJCQkJCQgICAgICAKJCQgJCQkICAkJCQkJCQkJCAkJCQgICQkJCAgICAgICQkJCAgICAgICAgICQkJCAgICAgICAgJCQkJCQkJCQgICQkJCQgJCQkJCAgICAKICAgJCQkICAgICAgJCQkICAkJCQkJCQkICAgICAgICQkJCQkICAgICAgICQkJCAgICAgICAkJCQkICAkJCQkJCQkJCAgICQkJCQgICAKICAgJCQkICAgICQkJCQgICAkJCQgICAgICAgICAgICAgICQkICAgICAgICQkJCAgICAgJCQkJCAgICAgJCQkJCQgICAgICAkJCQkJCQKICAgJCQkICQkJCQkICAgICAkJCQgICAgICAgICAgICAgICAgICAkJCQkJCQkICAgICAgICAgICAgICAkJCQgICAgICAgICAgICAkJCAgICAgCuatpOiEmuacrOWPquS4uuacrOe+pOWGhemDqOe+pOWRmOS9v+eUqO+8jOacque7j+WFgeiuuOemgeatouS8oOaSre+8jOS4gOe7j+WPkeeOsOWQjuaenOiHqui0n+OAggrlpoLmnpzkvaDmhI/lpJbojrflvpfmraTmnKzlj6/ogZTns7vnvqTkuLvvvIzkuL7miqXkvKDmkq3ogIXlj6/ku6Pmm7/ku5bnmoTkvY3nva4K5YG35pK4576k5Li7cTo0MzE0MjQwNzAq5LuY6LS56L+b77yM5LuL5oSP5Yu/5omwCuaKk+WMhXdlaXFpbmcubGluZ2NodWFuZ3dhbmcuY29t5Z+f5ZCN5LiL5Lu75oSP6K+35rGC5Lit55qEc3RhdGXvvIzlvaLlpoJ3ZTdzaWQtM2VjM2FiNe+8jOWPqumcgOimgeWhq+efreaoque6v+WQjumdoueahOWGheWuue+8jOWPmOmHj+WQjeensO+8mkZSV1rvvJvmoLzlvI/vvJrlpIfms6gjM2VjM2FiNSYz5aSH5rOoI2VjM2FiNe+8jOWkmuWPt+S9v+eUqCbliIblibLvvIzlpIfms6joh6rlrprkuYkKCkBhdXRob3IgYnkgbGl1eHVuaHVhbgpjcmVhdGVUaW1lIDIwMjUuOC4yMQ==";
try {
  const decodedBuffer = Buffer.from(base64String, "base64"),
    decodedString = decodedBuffer.toString("utf8");
  console.log(decodedString);
  console.log("<==================================================>");
} catch (_0x5b527b) {
  console.error(_0x5b527b);
}
console.log("共" + userList.length + "个用户");
const clients = userList.map(_0x18143b => new FRWZ(_0x18143b.sessionId, _0x18143b.name));
(async () => {
  for (const _0x595a0e of clients) {
    await _0x595a0e.userTask();
  }
})();