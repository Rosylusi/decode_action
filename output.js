//Fri Aug 09 2024 07:13:08 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const crypto = require("crypto");
const NodeRSA = require("node-rsa");
const CryptoJS = require("crypto-js");
const fs = require("fs/promises");
const random = require("lodash/random");
const path = require("path");
const {
  exit
} = require("process");
async function req(_0x4094e8, _0x27f816, _0x276749) {
  const _0x9c876a = await import("got").then(_0x40dd2e => _0x40dd2e.default);
  if (_0x27f816 == "GET") {
    return _0x9c876a.get(_0x4094e8, _0x276749);
  } else {
    return _0x9c876a.post(_0x4094e8, _0x276749);
  }
}
function encryptData(_0x304c15, _0x22d148, _0x3091a4, _0x398918, _0x9fe067, _0x55489e) {
  return CryptoJS[_0x304c15].encrypt(CryptoJS.enc.Utf8.parse(_0x398918), CryptoJS.enc.Utf8.parse(_0x9fe067), {
    mode: CryptoJS.mode[_0x22d148],
    padding: CryptoJS.pad[_0x3091a4],
    iv: CryptoJS.enc.Utf8.parse(_0x55489e)
  }).ciphertext.toString(CryptoJS.enc.Hex);
}
function decryptData(_0xd41133, _0x5bea19, _0x801bc1, _0xf549d5, _0x3d09f4, _0x8500b3) {
  return CryptoJS[_0xd41133].decrypt({
    ciphertext: CryptoJS.enc.Hex.parse(_0xf549d5)
  }, CryptoJS.enc.Utf8.parse(_0x3d09f4), {
    mode: CryptoJS.mode[_0x5bea19],
    padding: CryptoJS.pad[_0x801bc1],
    iv: CryptoJS.enc.Utf8.parse(_0x8500b3)
  }).toString(CryptoJS.enc.Utf8);
}
class TelecomLogin {
  constructor(_0x1d2e6c, _0x35bf48) {
    this.account = _0x1d2e6c;
    this.pwd = _0x35bf48;
    this.deviceUid = crypto.randomBytes(8).toString("hex");
  }
  time(_0x12f917, _0x5106c2 = null) {
    let _0x420154 = _0x5106c2 ? new Date(_0x5106c2) : new Date();
    const _0x5a1bc3 = {
      "M+": _0x420154.getMonth() + 1,
      "d+": _0x420154.getDate(),
      "h+": _0x420154.getHours(),
      "m+": _0x420154.getMinutes(),
      "s+": _0x420154.getSeconds(),
      "q+": Math.floor((_0x420154.getMonth() + 3) / 3),
      S: this.padStr(_0x420154.getMilliseconds(), 3)
    };
    if (/(y+)/.test(_0x12f917)) {
      _0x12f917 = _0x12f917.replace(RegExp.$1, (_0x420154.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (let _0x202dc3 in _0x5a1bc3) {
      if (new RegExp("(" + _0x202dc3 + ")").test(_0x12f917)) {
        _0x12f917 = _0x12f917.replace(RegExp.$1, RegExp.$1.length == 1 ? _0x5a1bc3[_0x202dc3] : ("00" + _0x5a1bc3[_0x202dc3]).substr(("" + _0x5a1bc3[_0x202dc3]).length));
      }
    }
    return _0x12f917;
  }
  padStr(_0x432d9b, _0x9c89bb, _0xf8fa27 = {}) {
    let _0x1c4e52 = _0xf8fa27.padding || "0";
    let _0x2fc86d = _0xf8fa27.mode || "l";
    let _0x25c113 = String(_0x432d9b);
    let _0x4a0492 = _0x9c89bb > _0x25c113.length ? _0x9c89bb - _0x25c113.length : 0;
    let _0x3868a6 = "";
    for (let _0x16f025 = 0; _0x16f025 < _0x4a0492; _0x16f025++) {
      _0x3868a6 += _0x1c4e52;
    }
    if (_0x2fc86d === "r") {
      _0x25c113 = _0x25c113 + _0x3868a6;
    } else {
      _0x25c113 = _0x3868a6 + _0x25c113;
    }
    return _0x25c113;
  }
  async login() {
    const _0xde069f = "https://appgologin.189.cn:9031/login/client/userLoginNormal";
    const _0x2219e9 = this.time("yyyyMMddhhmmss");
    const _0x191437 = "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBkLT15ThVgz6/NOl6s8GNPofd\nWzWbCkWnkaAm7O2LjkM1H7dMvzkiqdxU02jamGRHLX/ZNMCXHnPcW/sDhiFCBN18\nqFvy8g6VYb9QtroI09e176s+ZCtiv7hbin2cCTj99iUpnEloZm19lwHyo69u5UMi\nPMpq0/XKBO8lYhN/gwIDAQAB\n-----END PUBLIC KEY-----";
    let _0x1e7956 = new NodeRSA(_0x191437);
    const _0x53d7dd = {
      encryptionScheme: "pkcs1"
    };
    _0x1e7956.setOptions(_0x53d7dd);
    const _0xe71402 = "iPhone 14 15.4." + this.deviceUid.slice(0, 12) + this.account + _0x2219e9 + this.pwd + "0$$$0.";
    const _0x2e9fb9 = _0x1e7956.encrypt(_0xe71402, "base64");
    const _0x15b203 = {
      code: "userLoginNormal",
      timestamp: _0x2219e9,
      broadAccount: "",
      broadToken: "",
      clientType: "#9.6.1#channel50#iPhone 14 Pro Max#",
      shopId: "20002",
      source: "110003",
      sourcePassword: "Sid98s",
      token: "",
      userLoginName: this.account
    };
    const _0x181ee8 = {
      attach: "test",
      fieldData: {}
    };
    _0x181ee8.fieldData.loginType = "4";
    _0x181ee8.fieldData.accountType = "";
    _0x181ee8.fieldData.loginAuthCipherAsymmertric = _0x2e9fb9;
    _0x181ee8.fieldData.deviceUid = this.deviceUid.slice(0, 16);
    _0x181ee8.fieldData.phoneNum = this.getPhoneNum(this.account);
    _0x181ee8.fieldData.isChinatelecom = "0";
    _0x181ee8.fieldData.systemVersion = "15.4.0";
    _0x181ee8.fieldData.authentication = this.pwd;
    const _0x2f3c62 = {
      headerInfos: _0x15b203,
      content: _0x181ee8
    };
    const _0x5f3901 = {
      "User-Agent": "iPhone 14 Pro Max/9.6.1",
      "Content-Type": "application/json"
    };
    const _0x118bad = {
      headers: _0x5f3901,
      json: _0x2f3c62,
      responseType: "json"
    };
    try {
      const _0x2b4606 = await req(_0xde069f, "POST", _0x118bad);
      const _0x4e6e08 = _0x2b4606.body;
      const _0x31dafc = _0x4e6e08.responseData.resultCode;
      if (_0x31dafc !== "0000") {
        console.log("账号【" + this.account + "】，登陆失败，可能密码错误, 接口日志 " + JSON.stringify(_0x4e6e08));
        return null;
      } else {
        this.token = _0x4e6e08.responseData.data.loginSuccessResult.token;
        this.userId = _0x4e6e08.responseData.data.loginSuccessResult.userId;
        const _0x247ba9 = {
          telecom_token: this.token,
          telecom_userId: this.userId
        };
        try {
          await fs.writeFile("./dx__" + this.account + ".json", JSON.stringify(_0x247ba9, null, 4));
          console.log("用户信息已保存到 dx__" + this.account + ".json 文件");
        } catch (_0x4c8c24) {
          console.error("保存用户信息出错：" + _0x4c8c24.message);
        }
        return true;
      }
    } catch (_0x5759a0) {
      throw new Error(_0x5759a0);
    }
  }
  async getTicket() {
    const _0x33ccf1 = "https://appgologin.189.cn:9031/map/clientXML";
    const _0x4c8ec5 = this.time("yyyyMMddhhmmss");
    const _0x55d279 = "<Request>\n        <HeaderInfos>\n            <Code>getSingle</Code>\n            <Timestamp>" + _0x4c8ec5 + "</Timestamp>\n            <BroadAccount></BroadAccount>\n            <BroadToken></BroadToken>\n            <ClientType>#9.6.1#channel50#iPhone 14 Pro Max#</ClientType>\n            <ShopId>20002</ShopId>\n            <Source>110003</Source>\n            <SourcePassword>Sid98s</SourcePassword>\n            <Token>" + this.token + "</Token>\n            <UserLoginName>" + this.account + "</UserLoginName>\n        </HeaderInfos>\n        <Content>\n            <Attach>test</Attach>\n            <FieldData>\n                <TargetId>" + encryptData("TripleDES", "CBC", "Pkcs7", this.userId, "1234567`90koiuyhgtfrdewsaqaqsqde", "\0\0\0\0\0\0\0\0") + "</TargetId>\n                <Url>4a6862274835b451</Url>\n            </FieldData>\n        </Content>\n    </Request>";
    const _0x33d01c = {
      "User-Agent": "samsung SM-G9750/9.4.0",
      "Content-Type": "text/xml; charset=utf-8",
      "Content-Length": Buffer.byteLength(_0x55d279),
      Host: "appgologin.189.cn:9031",
      Connection: "Keep-Alive",
      "Accept-Encoding": "gzip",
      Pragma: "no-cache",
      "Cache-Control": "no-cache"
    };
    const _0x4c1191 = {
      headers: _0x33d01c,
      body: _0x55d279
    };
    try {
      const _0x2e87f9 = await req(_0x33ccf1, "POST", _0x4c1191);
      const _0x7b6988 = _0x2e87f9.body;
      let _0x5ace67 = _0x7b6988.match(/\<Ticket\>(\w+)\<\/Ticket\>/);
      if (_0x5ace67) {
        let _0x19d9de = _0x5ace67[1];
        let _0x89bce8 = decryptData("TripleDES", "CBC", "Pkcs7", _0x19d9de, "1234567`90koiuyhgtfrdewsaqaqsqde", "\0\0\0\0\0\0\0\0");
        this.ticket = _0x89bce8;
        await this.login_ka();
      }
    } catch (_0x4a1d0e) {
      throw new Error(_0x4a1d0e);
    }
  }
  async login_ka() {
    const _0x40a260 = "https://wapact.189.cn:9001/mas-pub-web/spm/restful?activityCode=ACTCODE20240119MNXBTVOB&method=setRedisPagesJson";
    const _0x3812ac = {
      "User-Agent": "CtClient;11.2.0;iOS;17.5;iPhone 13",
      activityCode: "ACTCODE20240119MNXBTVOB",
      ticket: this.ticket
    };
    try {
      const _0x3c5c37 = {
        headers: _0x3812ac
      };
      const _0x413409 = await req(_0x40a260, "GET", _0x3c5c37);
      const _0x29f0d0 = _0x413409.headers["set-cookie"];
      const _0x51e844 = _0x29f0d0[0].split(";");
      this.session = _0x51e844[0];
      console.log(this.session);
      await this.getTaskId();
    } catch (_0x55e8b0) {
      console.error("Login failed:", _0x55e8b0);
    }
  }
  async getTaskId() {
    const _0x2f41d8 = [];
    const _0x2c9d84 = ["https://wapact.189.cn:9001/mas-pub-web/componentContent/queryComponentContent?groupId=581&isProvOrCityFlag=1", "https://wapact.189.cn:9001/mas-pub-web/componentContent/queryComponentContent?groupId=607&isProvOrCityFlag=1", "https://wapact.189.cn:9001/mas-pub-web/componentContent/queryComponentContent?groupId=606&isProvOrCityFlag=1", "https://wapact.189.cn:9001/mas-pub-web/componentContent/queryComponentContent?groupId=604&isProvOrCityFlag=1"];
    const _0x3121ae = {
      Cookie: this.session,
      "User-Agent": "CtClient;11.2.0;iOS;17.5;iPhone 13",
      activityCode: "ACTCODE20240119MNXBTVOB",
      ticket: this.ticket
    };
    for (let _0x33b35c = 0; _0x33b35c < _0x2c9d84.length; _0x33b35c++) {
      for (let _0x336994 = 0; _0x336994 < 3; _0x336994++) {
        try {
          const _0x7f6ed9 = {
            headers: _0x3121ae
          };
          const _0x3f891e = await req(_0x2c9d84[_0x33b35c], "GET", _0x7f6ed9);
          const _0x5cb27f = JSON.parse(_0x3f891e.body);
          const _0x4f1b6e = _0x5cb27f.data[0].taskId;
          _0x2f41d8.push(_0x4f1b6e);
          break;
        } catch (_0x8d3e2a) {
          console.error("Request failed:", _0x8d3e2a);
        }
      }
    }
    this.tasks = _0x2f41d8;
    console.log(this.tasks);
    await this.goTaskDk();
  }
  async goTaskDk() {
    const _0x567fd0 = "https://wapact.189.cn:9001/mas-pub-web/taskRecord/saveTaskRecord";
    const _0x2d0170 = {
      Cookie: this.session,
      "User-Agent": "CtClient;11.2.0;iOS;17.5;iPhone 13",
      activityCode: "ACTCODE20240119MNXBTVOB",
      ticket: this.ticket
    };
    for (let _0x31303b = 0; _0x31303b < this.tasks.length; _0x31303b++) {
      const _0x3acef8 = {
        activityCode: "ACTCODE20240119MNXBTVOB",
        taskId: this.tasks[_0x31303b]
      };
      try {
        const _0x81bf77 = {
          json: _0x3acef8,
          headers: _0x2d0170
        };
        const _0x3f876f = await req(_0x567fd0, "POST", _0x81bf77);
        const _0x835c85 = JSON.parse(_0x3f876f.body);
        await new Promise(_0x3acc4d => setTimeout(_0x3acc4d, 3000));
        console.log(_0x835c85);
      } catch (_0x350c2d) {
        console.error("Task record failed:", _0x350c2d);
      }
    }
    await this.getDaka();
  }
  async getDaka() {
    const _0xcdd97b = "https://www.189.cn/wapzt/getCollectedTicketUserid.do?ticket=" + this.ticket;
    try {
      const _0x31cd8b = await req(_0xcdd97b, "GET");
      const _0x36fbf7 = _0x31cd8b.headers["set-cookie"];
      const _0x17edce = _0x36fbf7[0].split(";");
      this.session1 = _0x17edce[0];
      console.log(this.session1);
      await this.Daka();
    } catch (_0x352064) {
      console.error("Get Daka failed:", _0x352064);
    }
  }
  async Daka() {
    const _0x4c4867 = "https://www.189.cn/wapzt/hall/clock.do";
    const _0x2802d7 = {
      Cookie: this.session1,
      "Content-Type": "application/json; charset=utf-8",
      "User-Agent": "CtClient;11.2.0;iOS;17.5;iPhone 13"
    };
    const _0x518365 = {
      provinceCode: "600301",
      cityCode: "8340100",
      userlatitude: "31.855" + random(40849, 531863),
      yytlongitude: "117.20315533297511",
      hallName: "中国电信（高新区营业厅）",
      userlongitude: "117.2031" + random(48612, 56341),
      hallCode: "3401001113949",
      type: 1,
      provinceName: "安徽省",
      cityName: "合肥市",
      yytlatitude: "31.855497423709092"
    };
    for (let _0x454c9b = 0; _0x454c9b < 3; _0x454c9b++) {
      try {
        const _0x4f2da3 = {
          json: _0x518365,
          headers: _0x2802d7
        };
        const _0x100a1f = await req(_0x4c4867, "POST", _0x4f2da3);
        const _0x307e22 = JSON.parse(_0x100a1f.body);
        if (_0x307e22.code === "0") {
          console.log("店外打卡成功");
          await new Promise(_0x33f121 => setTimeout(_0x33f121, 3000));
          break;
        } else {
          console.log("店外打卡失败");
          console.log(_0x307e22);
          break;
        }
      } catch (_0x4c3263) {
        console.error("店外打卡错误:", _0x4c3263);
      }
    }
    await this.Daka_inyyt();
  }
  async Daka_inyyt() {
    const _0x3007eb = "https://www.189.cn/wapzt/hall/clock.do";
    const _0x3a5eee = {
      Cookie: this.session1,
      "Content-Type": "application/json; charset=utf-8",
      "User-Agent": "CtClient;11.2.0;iOS;17.5;iPhone 13"
    };
    const _0x2ed2b9 = {
      provinceCode: "600301",
      cityCode: "8340100",
      userlatitude: "31.855497" + random(36941, 51264),
      yytlongitude: "117.20315533297511",
      hallName: "中国电信（高新区营业厅）",
      userlongitude: "117.2031553" + random(28154, 38952),
      hallCode: "3401001113949",
      type: 2,
      provinceName: "安徽省",
      cityName: "合肥市",
      yytlatitude: "31.855497423709092"
    };
    for (let _0x2481e8 = 0; _0x2481e8 < 3; _0x2481e8++) {
      try {
        const _0x442623 = {
          json: _0x2ed2b9,
          headers: _0x3a5eee
        };
        const _0x3c2cf8 = await req(_0x3007eb, "POST", _0x442623);
        const _0x436764 = JSON.parse(_0x3c2cf8.body);
        if (_0x436764.code === "0") {
          console.log("店内打卡成功");
          await new Promise(_0x3f751d => setTimeout(_0x3f751d, 3000));
          break;
        } else {
          console.log("店内打卡失败");
          console.log(_0x436764);
          await new Promise(_0x411376 => setTimeout(_0x411376, 3000));
          break;
        }
      } catch (_0x5672da) {
        console.error("店内打卡错误:", _0x5672da);
      }
    }
    await this.goAItaskDk();
  }
  async goAItaskDk() {
    const _0x1b7588 = "https://wapact.189.cn:9001/gateway/job/zodiacsigns/taskRecord?ticket=" + this.ticket;
    const _0x3a947f = {
      Cookie: this.session,
      "User-Agent": "CtClient;11.2.0;iOS;17.5;iPhone 13",
      ticket: this.ticket
    };
    for (let _0x111280 = 0; _0x111280 < 3; _0x111280++) {
      try {
        const _0x419035 = {
          headers: _0x3a947f
        };
        const _0x373ebe = await req(_0x1b7588, "GET", _0x419035);
        const _0x40d6c0 = JSON.parse(_0x373ebe.body);
        console.log(_0x40d6c0);
        break;
      } catch (_0x533c8b) {
        console.error("请求失败:", _0x533c8b);
      }
    }
    await this.lottery();
  }
  async lottery() {
    const _0x18f42f = "https://wapact.189.cn:9001/mas-pub-web/lotteryActivity/lottery?source=&lotteryType=1";
    const _0x3d3f7f = {
      Cookie: this.session,
      "User-Agent": "CtClient;11.2.0;iOS;17.5;iPhone 13",
      activityCode: "ACTCODE20240119MNXBTVOB",
      ticket: this.ticket
    };
    this.dbd = false;
    while (true) {
      try {
        const _0x1d9960 = {
          headers: _0x3d3f7f
        };
        const _0x11e56f = await req(_0x18f42f, "GET", _0x1d9960);
        const _0x143e8e = JSON.parse(_0x11e56f.body);
        if (_0x143e8e.msg.includes("成功")) {
          if (_0x143e8e.data.goodsName.includes("龙")) {
            _0x143e8e.data.goodsName = "6个金豆";
            this.dbd = true;
          }
          console.log("账号" + this.account + "抽到了" + _0x143e8e.data.goodsName);
        } else {
          if (_0x143e8e.exception.includes("无可用资格")) {
            console.log("账号" + this.account + "机会用完");
            break;
          }
        }
        await new Promise(_0x15ab06 => setTimeout(_0x15ab06, 5000));
      } catch (_0x332431) {
        console.error("请求失败:", _0x332431);
      }
    }
    await this.Gift();
  }
  async Gift() {
    if (this.dbd) {
      const _0xd6d3cb = "https://wapact.189.cn:9001/mas-pub-web/springFestivalCard/getVirtualGiftOderInfo";
      const _0x2d503a = {
        Cookie: this.session,
        "User-Agent": "CtClient;11.2.0;iOS;17.5;iPhone 13",
        activityCode: "ACTCODE20240119MNXBTVOB",
        ticket: this.ticket
      };
      const _0x29ac92 = {
        zodiacNameList: ["dragon"]
      };
      try {
        const _0x3d86cb = {
          json: _0x29ac92,
          headers: _0x2d503a
        };
        const _0x1a9254 = await req(_0xd6d3cb, "POST", _0x3d86cb);
        const _0x231086 = JSON.parse(_0x1a9254.body);
        if (_0x231086.msg.includes("成功")) {
          const _0x3adbaf = _0x231086.data;
          const _0x110419 = {
            token: "9c5410cdf1344957a616627a0dde2e5c",
            title: "龙来咯",
            content: _0x3adbaf
          };
          const _0xb037da = {
            json: _0x110419
          };
          const _0x4fe5f7 = await req("http://www.pushplus.plus/send", "POST", _0xb037da);
          console.log(_0x4fe5f7.body);
        }
      } catch (_0x36b465) {
        throw new Error(_0x36b465);
      }
    }
  }
  async main() {
    try {
      const _0x13dfc7 = path.join(__dirname, "dx__" + this.account + ".json");
      let _0x45036f;
      try {
        _0x45036f = await fs.stat(_0x13dfc7);
      } catch (_0x5ddacb) {
        console.log("没有缓存文件，使用密码登录");
        if (!(await this.login())) {
          return "10086";
        }
      }
      if (_0x45036f && _0x45036f.isFile()) {
        console.log("使用缓存文件登录");
        const _0x12998a = await fs.readFile(_0x13dfc7);
        const _0x40f724 = JSON.parse(_0x12998a);
        this.token = _0x40f724.telecom_token;
        this.userId = _0x40f724.telecom_userId;
      }
      let _0x539e45;
      try {
        _0x539e45 = await this.getTicket();
      } catch (_0xdb7e76) {
        console.error("Failed to get ticket:", _0xdb7e76);
        if (!(await this.login())) {
          return "10086";
        }
        _0x539e45 = await this.getTicket();
      }
      return _0x539e45;
    } catch (_0x43313f) {
      console.error("Error in main function:", _0x43313f);
      return "10086";
    }
  }
  getPhoneNum(_0x39848b) {
    let _0x2079e6 = "";
    for (let _0x4379b3 = 0; _0x4379b3 < _0x39848b.length; _0x4379b3++) {
      _0x2079e6 += String.fromCharCode(_0x39848b.charCodeAt(_0x4379b3) + 2);
    }
    return _0x2079e6;
  }
  static processText(_0xcacecc) {
    const _0xc94cee = _0xcacecc.length >> 1;
    const _0xc1453c = new Array(_0xc94cee);
    let _0x44602c = 0;
    let _0x98712d = 0;
    while (_0x44602c < _0xc94cee) {
      const _0x530ebf = _0x98712d + 1;
      const _0x396045 = "0123456789abcdef0123456789ABCDEF".indexOf(_0xcacecc.charAt(_0x98712d));
      if (_0x396045 !== -1) {
        _0xc1453c[_0x44602c] = ((_0x396045 & 15) << 4) + ("0123456789abcdef0123456789ABCDEF".indexOf(_0xcacecc.charAt(_0x530ebf)) & 15);
        _0x44602c++;
        _0x98712d = _0x530ebf + 1;
      } else {
        console.log("转化失败 大概率是明文输入错误");
      }
    }
    return _0xc1453c;
  }
}
async function main() {
  const _0x9d4125 = process.env.chinaTelecomAccount;
  if (!_0x9d4125) {
    console.log("没有找到电信账号--请检查变量chinaTelecomAccount");
    exit(0);
  }
  if (_0x9d4125.includes("&")) {
    accountPairs = _0x9d4125.split("&");
  } else {
    accountPairs = [_0x9d4125];
  }
  const _0x2eb163 = [];
  for (const _0xd9ea1b of accountPairs) {
    const [_0x26fa28, _0x2cab6e] = _0xd9ea1b.split("#");
    const _0x5209fc = new TelecomLogin(_0x26fa28, _0x2cab6e);
    _0x2eb163.push(_0x5209fc);
  }
  for (const _0x27eb48 of _0x2eb163) {
    await _0x27eb48.main();
  }
}
main().catch(_0x5b0828 => console.error("主函数执行出错：", _0x5b0828));