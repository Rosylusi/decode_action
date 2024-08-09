//Fri Aug 09 2024 07:10:52 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _d_x_0x58d925 = require("crypto");
const _d_x_0x153b65 = require("node-rsa");
const _d_x_0x2e0fad = require("crypto-js");
const _d_x_0x3b9a79 = require("fs/promises");
const _d_x_0x2eb13a = require("lodash/random");
const _d_x_0x5396a0 = require("path");
const {
  exit
} = require("process");
const {
  error
} = require("console");
async function _d_x_0x36d1c4(_0x3bbb2c, _0x521b9f, _0x3e80b7) {
  const _0xe2a2ca = await import("got").then(_0x224a5a => _0x224a5a.default);
  if (_0x521b9f == "GET") {
    return _0xe2a2ca.get(_0x3bbb2c, _0x3e80b7);
  } else {
    return _0xe2a2ca.post(_0x3bbb2c, _0x3e80b7);
  }
}
function _d_x_0x5ca363(_0x27aa6a, _0x20c545, _0x24e961, _0x5e40a6, _0x22d30b, _0x2562f2) {
  return _d_x_0x2e0fad[_0x27aa6a].encrypt(_d_x_0x2e0fad.enc.Utf8.parse(_0x5e40a6), _d_x_0x2e0fad.enc.Utf8.parse(_0x22d30b), {
    mode: _d_x_0x2e0fad.mode[_0x20c545],
    padding: _d_x_0x2e0fad.pad[_0x24e961],
    iv: _d_x_0x2e0fad.enc.Utf8.parse(_0x2562f2)
  }).ciphertext.toString(_d_x_0x2e0fad.enc.Hex);
}
function _d_x_0x33c123(_0xb8a39c, _0x2d9736, _0x5a3c9b, _0x5a6e3, _0x2dc755, _0x12e6f8) {
  return _d_x_0x2e0fad[_0xb8a39c].decrypt({
    ciphertext: _d_x_0x2e0fad.enc.Hex.parse(_0x5a6e3)
  }, _d_x_0x2e0fad.enc.Utf8.parse(_0x2dc755), {
    mode: _d_x_0x2e0fad.mode[_0x2d9736],
    padding: _d_x_0x2e0fad.pad[_0x5a3c9b],
    iv: _d_x_0x2e0fad.enc.Utf8.parse(_0x12e6f8)
  }).toString(_d_x_0x2e0fad.enc.Utf8);
}
class _d_x_0x40b74d {
  constructor(_0x5eb33b, _0x2258be) {
    this.account = _0x5eb33b;
    this.pwd = _0x2258be;
    this.deviceUid = _d_x_0x58d925.randomBytes(8).toString("hex");
  }
  time(_0x2ab51b, _0x2b808f = null) {
    let _0x18031d = _0x2b808f ? new Date(_0x2b808f) : new Date();
    const _0x2abff4 = {
      "M+": _0x18031d.getMonth() + 1,
      "d+": _0x18031d.getDate(),
      "h+": _0x18031d.getHours(),
      "m+": _0x18031d.getMinutes(),
      "s+": _0x18031d.getSeconds(),
      "q+": Math.floor((_0x18031d.getMonth() + 3) / 3),
      S: this.padStr(_0x18031d.getMilliseconds(), 3)
    };
    if (/(y+)/.test(_0x2ab51b)) {
      _0x2ab51b = _0x2ab51b.replace(RegExp.$1, (_0x18031d.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (let _0xec925b in _0x2abff4) {
      if (new RegExp("(" + _0xec925b + ")").test(_0x2ab51b)) {
        _0x2ab51b = _0x2ab51b.replace(RegExp.$1, RegExp.$1.length == 1 ? _0x2abff4[_0xec925b] : ("00" + _0x2abff4[_0xec925b]).substr(("" + _0x2abff4[_0xec925b]).length));
      }
    }
    return _0x2ab51b;
  }
  padStr(_0x554d52, _0x556363, _0x24a62d = {}) {
    let _0x4fbcc = _0x24a62d.padding || "0";
    let _0x1ceb4d = _0x24a62d.mode || "l";
    let _0x55f4eb = String(_0x554d52);
    let _0x29fabb = _0x556363 > _0x55f4eb.length ? _0x556363 - _0x55f4eb.length : 0;
    let _0x365519 = "";
    for (let _0x4c2f95 = 0; _0x4c2f95 < _0x29fabb; _0x4c2f95++) {
      _0x365519 += _0x4fbcc;
    }
    if (_0x1ceb4d === "r") {
      _0x55f4eb = _0x55f4eb + _0x365519;
    } else {
      _0x55f4eb = _0x365519 + _0x55f4eb;
    }
    return _0x55f4eb;
  }
  async login() {
    const _0x54a1ec = "https://appgologin.189.cn:9031/login/client/userLoginNormal";
    const _0x47f09a = this.time("yyyyMMddhhmmss");
    const _0x33b131 = "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBkLT15ThVgz6/NOl6s8GNPofd\nWzWbCkWnkaAm7O2LjkM1H7dMvzkiqdxU02jamGRHLX/ZNMCXHnPcW/sDhiFCBN18\nqFvy8g6VYb9QtroI09e176s+ZCtiv7hbin2cCTj99iUpnEloZm19lwHyo69u5UMi\nPMpq0/XKBO8lYhN/gwIDAQAB\n-----END PUBLIC KEY-----";
    let _0x2b0675 = new _d_x_0x153b65(_0x33b131);
    const _0x20f127 = {
      encryptionScheme: "pkcs1"
    };
    _0x2b0675.setOptions(_0x20f127);
    const _0x1fc80a = "iPhone 14 15.4." + this.deviceUid.slice(0, 12) + this.account + _0x47f09a + this.pwd + "0$$$0.";
    const _0x3cc059 = _0x2b0675.encrypt(_0x1fc80a, "base64");
    const _0x534c17 = {
      code: "userLoginNormal",
      timestamp: _0x47f09a,
      broadAccount: "",
      broadToken: "",
      clientType: "#9.6.1#channel50#iPhone 14 Pro Max#",
      shopId: "20002",
      source: "110003",
      sourcePassword: "Sid98s",
      token: "",
      userLoginName: this.account
    };
    const _0x248ba6 = {
      attach: "test",
      fieldData: {}
    };
    _0x248ba6.fieldData.loginType = "4";
    _0x248ba6.fieldData.accountType = "";
    _0x248ba6.fieldData.loginAuthCipherAsymmertric = _0x3cc059;
    _0x248ba6.fieldData.deviceUid = this.deviceUid.slice(0, 16);
    _0x248ba6.fieldData.phoneNum = this.getPhoneNum(this.account);
    _0x248ba6.fieldData.isChinatelecom = "0";
    _0x248ba6.fieldData.systemVersion = "15.4.0";
    _0x248ba6.fieldData.authentication = this.pwd;
    const _0x490760 = {
      headerInfos: _0x534c17,
      content: _0x248ba6
    };
    const _0x5c1bb2 = {
      "User-Agent": "iPhone 14 Pro Max/9.6.1",
      "Content-Type": "application/json"
    };
    const _0x38b60d = {
      headers: _0x5c1bb2,
      json: _0x490760,
      responseType: "json"
    };
    try {
      const _0x3c7c23 = await _d_x_0x36d1c4(_0x54a1ec, "POST", _0x38b60d);
      const _0x1ccf51 = _0x3c7c23.body;
      const _0x2b57d6 = _0x1ccf51.responseData.resultCode;
      if (_0x2b57d6 !== "0000") {
        if (this.account == "1") {
          return null;
        }
        console.log("账号【" + this.account + "】登陆失败，接口日志 " + JSON.stringify(_0x1ccf51));
        return null;
      } else {
        this.token = _0x1ccf51.responseData.data.loginSuccessResult.token;
        this.userId = _0x1ccf51.responseData.data.loginSuccessResult.userId;
        const _0x1cf0b0 = {
          telecom_token: this.token,
          telecom_userId: this.userId
        };
        try {
          await _d_x_0x3b9a79.writeFile("./dx__" + this.account + ".json", JSON.stringify(_0x1cf0b0, null, 4));
          console.log("用户信息已保存到 dx__" + this.account + ".json 文件");
        } catch (_0x3fe314) {
          console.error("保存用户信息出错：" + _0x3fe314.message);
        }
        return true;
      }
    } catch (_0x1c96db) {
      throw new Error(_0x1c96db);
    }
  }
  async getTicket() {
    const _0x25d348 = "https://appgologin.189.cn:9031/map/clientXML";
    const _0x116046 = this.time("yyyyMMddhhmmss");
    const _0x39f202 = "<Request>\n        <HeaderInfos>\n            <Code>getSingle</Code>\n            <Timestamp>" + _0x116046 + "</Timestamp>\n            <BroadAccount></BroadAccount>\n            <BroadToken></BroadToken>\n            <ClientType>#9.6.1#channel50#iPhone 14 Pro Max#</ClientType>\n            <ShopId>20002</ShopId>\n            <Source>110003</Source>\n            <SourcePassword>Sid98s</SourcePassword>\n            <Token>" + this.token + "</Token>\n            <UserLoginName>" + this.account + "</UserLoginName>\n        </HeaderInfos>\n        <Content>\n            <Attach>test</Attach>\n            <FieldData>\n                <TargetId>" + _d_x_0x5ca363("TripleDES", "CBC", "Pkcs7", this.userId, "1234567`90koiuyhgtfrdewsaqaqsqde", "\0\0\0\0\0\0\0\0") + "</TargetId>\n                <Url>4a6862274835b451</Url>\n            </FieldData>\n        </Content>\n    </Request>";
    const _0x760f5f = {
      "User-Agent": "samsung SM-G9750/9.4.0",
      "Content-Type": "text/xml; charset=utf-8",
      "Content-Length": Buffer.byteLength(_0x39f202),
      Host: "appgologin.189.cn:9031",
      Connection: "Keep-Alive",
      "Accept-Encoding": "gzip",
      Pragma: "no-cache",
      "Cache-Control": "no-cache"
    };
    const _0x596ee6 = {
      headers: _0x760f5f,
      body: _0x39f202
    };
    try {
      const _0x29f87e = await _d_x_0x36d1c4(_0x25d348, "POST", _0x596ee6);
      const _0x53e47e = _0x29f87e.body;
      let _0x313f48 = _0x53e47e.match(/\<Ticket\>(\w+)\<\/Ticket\>/);
      if (_0x313f48) {
        let _0x110715 = _0x313f48[1];
        let _0x36b9d5 = _d_x_0x33c123("TripleDES", "CBC", "Pkcs7", _0x110715, "1234567`90koiuyhgtfrdewsaqaqsqde", "\0\0\0\0\0\0\0\0");
        this.ticket = _0x36b9d5;
        await this.login_ka();
      }
    } catch (_0x339ae5) {
      throw new Error(_0x339ae5);
    }
  }
  async login_ka() {
    const _0x1a934d = "https://wapact.189.cn:9001/mas-pub-web/spm/restful?activityCode=ACTCODE20240119MNXBTVOB&method=setRedisPagesJson";
    const _0x57e232 = {
      "User-Agent": "CtClient;11.2.0;iOS;17.5;iPhone 13",
      activityCode: "ACTCODE20240119MNXBTVOB",
      ticket: this.ticket
    };
    try {
      const _0x5e4dac = {
        headers: _0x57e232
      };
      const _0x407007 = await _d_x_0x36d1c4(_0x1a934d, "GET", _0x5e4dac);
      const _0x4816ef = _0x407007.headers["set-cookie"];
      const _0x5b661f = _0x4816ef[0].split(";");
      this.session = _0x5b661f[0];
      console.log(this.session);
      await this.getTaskId();
    } catch (_0x38c545) {
      console.error("Login failed:", _0x38c545);
    }
  }
  async getTaskId() {
    const _0xd0ae3a = [];
    const _0x813097 = ["https://wapact.189.cn:9001/mas-pub-web/componentContent/queryComponentContent?groupId=581&isProvOrCityFlag=1", "https://wapact.189.cn:9001/mas-pub-web/componentContent/queryComponentContent?groupId=607&isProvOrCityFlag=1", "https://wapact.189.cn:9001/mas-pub-web/componentContent/queryComponentContent?groupId=606&isProvOrCityFlag=1", "https://wapact.189.cn:9001/mas-pub-web/componentContent/queryComponentContent?groupId=604&isProvOrCityFlag=1"];
    const _0x468fec = {
      Cookie: this.session,
      "User-Agent": "CtClient;11.2.0;iOS;17.5;iPhone 13",
      activityCode: "ACTCODE20240119MNXBTVOB",
      ticket: this.ticket
    };
    for (let _0x4b09f6 = 0; _0x4b09f6 < _0x813097.length; _0x4b09f6++) {
      for (let _0x6f0ced = 0; _0x6f0ced < 3; _0x6f0ced++) {
        try {
          const _0x5dc7f9 = {
            headers: _0x468fec
          };
          const _0x446fc2 = await _d_x_0x36d1c4(_0x813097[_0x4b09f6], "GET", _0x5dc7f9);
          const _0x483544 = JSON.parse(_0x446fc2.body);
          const _0x4ceba6 = _0x483544.data[0].taskId;
          _0xd0ae3a.push(_0x4ceba6);
          break;
        } catch (_0x4e21d7) {
          console.error("Request failed:", _0x4e21d7);
        }
      }
    }
    this.tasks = _0xd0ae3a;
    console.log(this.tasks);
    await this.goTaskDk();
  }
  async goTaskDk() {
    const _0x5e2f87 = "https://wapact.189.cn:9001/mas-pub-web/taskRecord/saveTaskRecord";
    const _0xfe55f1 = {
      Cookie: this.session,
      "User-Agent": "CtClient;11.2.0;iOS;17.5;iPhone 13",
      activityCode: "ACTCODE20240119MNXBTVOB",
      ticket: this.ticket
    };
    for (let _0x4a380a = 0; _0x4a380a < this.tasks.length; _0x4a380a++) {
      const _0x5f3a37 = {
        activityCode: "ACTCODE20240119MNXBTVOB",
        taskId: this.tasks[_0x4a380a]
      };
      try {
        const _0x472050 = {
          json: _0x5f3a37,
          headers: _0xfe55f1
        };
        const _0x364730 = await _d_x_0x36d1c4(_0x5e2f87, "POST", _0x472050);
        const _0x1ec317 = JSON.parse(_0x364730.body);
        await new Promise(_0xb122c5 => setTimeout(_0xb122c5, 3000));
        console.log(_0x1ec317);
      } catch (_0x51e9aa) {
        console.error("Task record failed:", _0x51e9aa);
      }
    }
    await this.getDaka();
  }
  async getDaka() {
    const _0x36d05a = "https://www.189.cn/wapzt/getCollectedTicketUserid.do?ticket=" + this.ticket;
    try {
      const _0x3f6b16 = await _d_x_0x36d1c4(_0x36d05a, "GET");
      const _0x14d6c7 = _0x3f6b16.headers["set-cookie"];
      const _0x443519 = _0x14d6c7[0].split(";");
      this.session1 = _0x443519[0];
      console.log(this.session1);
      await this.Daka();
    } catch (_0x1b5590) {
      console.error("Get Daka failed:", _0x1b5590);
    }
  }
  async Daka() {
    const _0xf67818 = "https://www.189.cn/wapzt/hall/clock.do";
    const _0x456646 = {
      Cookie: this.session1,
      "Content-Type": "application/json; charset=utf-8",
      "User-Agent": "CtClient;11.2.0;iOS;17.5;iPhone 13"
    };
    const _0x5aa42b = {
      provinceCode: "600301",
      cityCode: "8340100",
      userlatitude: "31.855" + _d_x_0x2eb13a(40849, 531863),
      yytlongitude: "117.20315533297511",
      hallName: "中国电信（高新区营业厅）",
      userlongitude: "117.2031" + _d_x_0x2eb13a(48612, 56341),
      hallCode: "3401001113949",
      type: 1,
      provinceName: "安徽省",
      cityName: "合肥市",
      yytlatitude: "31.855497423709092"
    };
    for (let _0x627b99 = 0; _0x627b99 < 3; _0x627b99++) {
      try {
        const _0x33f8f9 = {
          json: _0x5aa42b,
          headers: _0x456646
        };
        const _0x2f2d97 = await _d_x_0x36d1c4(_0xf67818, "POST", _0x33f8f9);
        const _0x35aa1c = JSON.parse(_0x2f2d97.body);
        if (_0x35aa1c.code === "0") {
          console.log("店外打卡成功");
          await new Promise(_0x176f04 => setTimeout(_0x176f04, 3000));
          break;
        } else {
          console.log("店外打卡失败");
          console.log(_0x35aa1c);
          break;
        }
      } catch (_0x5b8578) {
        console.error("店外打卡错误:", _0x5b8578);
      }
    }
    await this.Daka_inyyt();
  }
  async Daka_inyyt() {
    const _0x1247cc = "https://www.189.cn/wapzt/hall/clock.do";
    const _0x248085 = {
      Cookie: this.session1,
      "Content-Type": "application/json; charset=utf-8",
      "User-Agent": "CtClient;11.2.0;iOS;17.5;iPhone 13"
    };
    const _0x5cb43b = {
      provinceCode: "600301",
      cityCode: "8340100",
      userlatitude: "31.855497" + _d_x_0x2eb13a(36941, 51264),
      yytlongitude: "117.20315533297511",
      hallName: "中国电信（高新区营业厅）",
      userlongitude: "117.2031553" + _d_x_0x2eb13a(28154, 38952),
      hallCode: "3401001113949",
      type: 2,
      provinceName: "安徽省",
      cityName: "合肥市",
      yytlatitude: "31.855497423709092"
    };
    for (let _0x4fd2ca = 0; _0x4fd2ca < 3; _0x4fd2ca++) {
      try {
        const _0x13e235 = {
          json: _0x5cb43b,
          headers: _0x248085
        };
        const _0x2542b8 = await _d_x_0x36d1c4(_0x1247cc, "POST", _0x13e235);
        const _0x2f4d2e = JSON.parse(_0x2542b8.body);
        if (_0x2f4d2e.code === "0") {
          console.log("店内打卡成功");
          await new Promise(_0x1910ba => setTimeout(_0x1910ba, 3000));
          break;
        } else {
          console.log("店内打卡失败");
          console.log(_0x2f4d2e);
          await new Promise(_0x408021 => setTimeout(_0x408021, 3000));
          break;
        }
      } catch (_0x57c2ce) {
        console.error("店内打卡错误:", _0x57c2ce);
      }
    }
    await this.goAItaskDk();
  }
  async goAItaskDk() {
    const _0x547722 = "https://wapact.189.cn:9001/gateway/job/zodiacsigns/taskRecord?ticket=" + this.ticket;
    const _0x593ae2 = {
      Cookie: this.session,
      "User-Agent": "CtClient;11.2.0;iOS;17.5;iPhone 13",
      ticket: this.ticket
    };
    for (let _0x4255cb = 0; _0x4255cb < 3; _0x4255cb++) {
      try {
        const _0x2fbc01 = {
          headers: _0x593ae2
        };
        const _0x460c8c = await _d_x_0x36d1c4(_0x547722, "GET", _0x2fbc01);
        const _0x1e364e = JSON.parse(_0x460c8c.body);
        console.log(_0x1e364e);
        break;
      } catch (_0x55e325) {
        console.error("请求失败:", _0x55e325);
      }
    }
    await this.lottery();
  }
  async lottery() {
    const _0x8ceeaa = "https://wapact.189.cn:9001/mas-pub-web/lotteryActivity/lottery?source=&lotteryType=1";
    const _0x29a637 = {
      Cookie: this.session,
      "User-Agent": "CtClient;11.2.0;iOS;17.5;iPhone 13",
      activityCode: "ACTCODE20240119MNXBTVOB",
      ticket: this.ticket
    };
    this.dbd = false;
    while (true) {
      try {
        const _0x3698bc = {
          headers: _0x29a637
        };
        const _0x504316 = await _d_x_0x36d1c4(_0x8ceeaa, "GET", _0x3698bc);
        const _0x14ea24 = JSON.parse(_0x504316.body);
        if (_0x14ea24.msg.includes("成功")) {
          if (_0x14ea24.data.goodsName.includes("龙")) {
            _0x14ea24.data.goodsName = "6个金豆";
            this.dbd = true;
          }
          console.log("账号" + this.account + "抽到了" + _0x14ea24.data.goodsName);
        } else {
          if (_0x14ea24.exception.includes("无可用资格")) {
            console.log("账号" + this.account + "机会用完");
            break;
          }
        }
        await new Promise(_0x2c6979 => setTimeout(_0x2c6979, 5000));
      } catch (_0x435254) {
        console.error("请求失败:", _0x435254);
      }
    }
    await this.Gift();
  }
  async Gift() {
    if (this.dbd) {
      const _0x14a0f8 = "https://wapact.189.cn:9001/mas-pub-web/springFestivalCard/getVirtualGiftOderInfo";
      const _0x4b460f = {
        Cookie: this.session,
        "User-Agent": "CtClient;11.2.0;iOS;17.5;iPhone 13",
        activityCode: "ACTCODE20240119MNXBTVOB",
        ticket: this.ticket
      };
      const _0x55867c = {
        zodiacNameList: ["dragon"]
      };
      try {
        const _0x2010a9 = {
          json: _0x55867c,
          headers: _0x4b460f
        };
        const _0x5eb9d2 = await _d_x_0x36d1c4(_0x14a0f8, "POST", _0x2010a9);
        const _0x4dcf11 = JSON.parse(_0x5eb9d2.body);
        if (_0x4dcf11.msg.includes("成功")) {
          const _0x419a8f = _0x4dcf11.data;
          const _0x17402d = {
            token: "9c5410cdf1344957a616627a0dde2e5c",
            title: "龙来咯",
            content: _0x419a8f
          };
          const _0x5a2c72 = {
            json: _0x17402d
          };
          const _0x47ce87 = await _d_x_0x36d1c4("http://www.pushplus.plus/send", "POST", _0x5a2c72);
          console.log(_0x47ce87.body);
        }
      } catch (_0x4cd67a) {
        throw new Error(_0x4cd67a);
      }
    }
  }
  async main() {
    try {
      const _0x519969 = _d_x_0x5396a0.join(__dirname, "dx__" + this.account + ".json");
      let _0x3a50ec;
      try {
        _0x3a50ec = await _d_x_0x3b9a79.stat(_0x519969);
      } catch (_0x5c3003) {
        if (this.account != "1") {
          console.log("没有缓存文件，使用密码登录");
        }
        if (!(await this.login())) {
          return "10086";
        }
      }
      if (_0x3a50ec && _0x3a50ec.isFile()) {
        if (this.account != "1") {
          console.log("使用缓存文件登录");
        }
        const _0x4f8622 = await _d_x_0x3b9a79.readFile(_0x519969);
        const _0x50e825 = JSON.parse(_0x4f8622);
        this.token = _0x50e825.telecom_token;
        this.userId = _0x50e825.telecom_userId;
      }
      let _0x4ce689;
      try {
        _0x4ce689 = await this.getTicket();
      } catch (_0x24e1b6) {
        console.error("Failed to get ticket:", _0x24e1b6);
        if (!(await this.login())) {
          return "10086";
        }
        _0x4ce689 = await this.getTicket();
      }
      return _0x4ce689;
    } catch (_0x4d3c98) {
      console.error("Error in main function:", _0x4d3c98);
      return "10086";
    }
  }
  getPhoneNum(_0x16f3ae) {
    let _0x10bce1 = "";
    for (let _0x1e7cd2 = 0; _0x1e7cd2 < _0x16f3ae.length; _0x1e7cd2++) {
      _0x10bce1 += String.fromCharCode(_0x16f3ae.charCodeAt(_0x1e7cd2) + 2);
    }
    return _0x10bce1;
  }
  static processText(_0x1c6799) {
    const _0x27d7a0 = _0x1c6799.length >> 1;
    const _0x4f4ed6 = new Array(_0x27d7a0);
    let _0x25e470 = 0;
    let _0x314674 = 0;
    while (_0x25e470 < _0x27d7a0) {
      const _0x351a52 = _0x314674 + 1;
      const _0x4f2ea8 = "0123456789abcdef0123456789ABCDEF".indexOf(_0x1c6799.charAt(_0x314674));
      if (_0x4f2ea8 !== -1) {
        _0x4f4ed6[_0x25e470] = ((_0x4f2ea8 & 15) << 4) + ("0123456789abcdef0123456789ABCDEF".indexOf(_0x1c6799.charAt(_0x351a52)) & 15);
        _0x25e470++;
        _0x314674 = _0x351a52 + 1;
      } else {
        console.log("转化失败 大概率是明文输入错误");
      }
    }
    return _0x4f4ed6;
  }
}
async function _d_x_0x50929f() {
  const _0x351ff8 = process.env.chinaTelecomAccount;
  if (!_0x351ff8) {
    console.log("没有找到电信账号--请检查变量chinaTelecomAccount");
    exit(0);
  }
  if (_0x351ff8.includes("&")) {
    accountPairs = _0x351ff8.split("&");
  } else {
    accountPairs = [_0x351ff8];
  }
  const _0x57198e = new _d_x_0x40b74d("1", "1");
  await _0x57198e.main();
  for (const _0x3e4d80 of accountPairs) {
    const [_0x4248a4, _0x142b1b] = _0x3e4d80.split("#");
    const _0x52138d = new _d_x_0x40b74d(_0x4248a4, _0x142b1b);
    console.log("------开始执行" + _0x4248a4 + "------");
    await _0x52138d.main();
  }
}
_d_x_0x50929f().catch(_0x23b4f7 => console.error("主函数执行出错：", _0x23b4f7));