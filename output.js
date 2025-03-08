//Sat Mar 08 2025 08:28:29 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var doJumpUrl = function () {
  let _0x3568b9 = "",
    _0x2515e9 = "",
    _0x558387 = 40,
    _0x283c32 = localStorage.getItem("LOCALJUMP"),
    _0x18a440 = localStorage.getItem("LOCALDATAVALUE"),
    _0x245475 = localStorage.getItem("LOCALDATALINE"),
    _0x361192 = _0x245475 ? JSON.parse(_0x245475) : null;
  if (undefined === _0x361192 || null === _0x361192 || false === _0x361192 || _0x361192.length == 0) {
    {
      alert("系统异常，请重试");
      return;
    }
  }
  let _0x4d35a0 = _0x18a440 ? _0x18a440 : 20,
    _0x28001f = _0x4d35a0 > 18 ? _0x4d35a0 - 18 : 2,
    _0x349376 = _0x18a440 % 3;
  const _0x223eb5 = _0x361192.slice(0, _0x4d35a0);
  for (var _0x275a07 = 0; _0x275a07 < _0x223eb5.length; _0x275a07++) {
    let _0x31e03e = String.fromCharCode(_0x223eb5[_0x275a07]);
    _0x2515e9 = _0x2515e9 + _0x31e03e;
  }
  let _0x42b1fd = _0x2515e9.substring(0, _0x28001f),
    _0x3ffe35 = parseInt(_0x4d35a0) + _0x558387;
  for (var _0x4dad6c = 0; _0x4dad6c < _0x361192.length; _0x4dad6c++) {
    if (_0x4dad6c >= _0x3ffe35) {
      {
        let _0x38b6a5 = _0x361192[_0x4dad6c] || null;
        if (undefined !== _0x38b6a5 && null !== _0x38b6a5 && false !== _0x38b6a5 && parseInt(_0x38b6a5) > 0) {
          {
            let _0x2d7339 = parseInt(_0x38b6a5) - parseInt(_0x42b1fd),
              _0x456eaf = String.fromCharCode(_0x2d7339);
            _0x3568b9 = _0x3568b9 + _0x456eaf;
          }
        }
      }
    }
  }
  let _0x1cd799 = "",
    _0x271182 = _0x3568b9.split("");
  if (_0x349376 === 0 && null !== _0x271182 && _0x271182.length > 0) {
    {
      for (var _0x216b2f = 0; _0x216b2f < _0x271182.length; _0x216b2f += 2) {
        var _0x208313 = _0x216b2f + 1,
          _0x2e4af6 = _0x271182[_0x216b2f] + _0x271182[_0x208313],
          _0x574d6c = String.fromCharCode(parseInt(_0x2e4af6, 16));
        _0x1cd799 += _0x574d6c;
      }
      _0x3568b9 = _0x1cd799;
    }
  }
  if (null !== _0x283c32 && _0x283c32 == "STOP") console.log("【测试】获取完整地址", _0x3568b9);else {
    {
      var _0x2315d8 = document.createElement("a");
      _0x2315d8.setAttribute("rel", "noreferrer");
      _0x2315d8.setAttribute("href", _0x3568b9);
      document.body.appendChild(_0x2315d8);
      _0x2315d8.click();
      document.body.removeChild(_0x2315d8);
    }
  }
};
doJumpUrl();