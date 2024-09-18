//Wed Sep 18 2024 05:27:36 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function () {})();
function cc() {
  var _0x546c80 = sessionStorage.getItem("ffb"),
    _0x346976 = sessionStorage.getItem("str");
  if (_0x546c80 >= 10) {
    var _0x3f90e4 = _0x546c80.toString().substr(0, 1);
    var _0x5cc447 = _0x546c80.toString().substr(1, 2);
    var _0x1e4555 = _0x5cc447 + "" + _0x3f90e4;
    var _0xf552ee = parseInt(_0x1e4555);
    var _0x14acb0 = _0xf552ee * 80;
    var _0x965fd5 = _0x14acb0 + _0x346976;
    var _0x1fb1a6 = md5(_0x965fd5);
    return _0x1fb1a6;
  } else {
    var _0x55e630 = _0x546c80 * 80,
      _0x2b688c = _0x55e630 + _0x346976,
      _0x1fb1a6 = md5(_0x2b688c);
    return _0x1fb1a6;
  }
}
function bb() {
  var _0x31521b = "ffb";
  if (_0x31521b.length >= 2) {
    var _0x198f23 = _0x31521b.toString().substr(0, 1);
    var _0x287145 = _0x31521b.toString().substr(2, 2);
    var _0x23e8f2 = _0x287145 + "" + _0x198f23;
    var _0x3fd67e = md5(_0x23e8f2);
    return _0x3fd67e;
  } else {
    var _0x3fd67e = md5(_0x31521b);
    return _0x3fd67e;
  }
}
function dd() {
  var _0x49c89f = 0;
  if (_0x49c89f % 1 == 0) {
    var _0x4e327c = "bdcse".toString().substr(0, 1);
    var _0x2153f5 = "bdcse".toString().substr(2, 2);
    var _0x20e553 = _0x2153f5 + "" + _0x4e327c;
    var _0x596f0d = md5(_0x20e553);
    return _0x596f0d;
  } else {
    var _0x596f0d = md5(_0x49c89f);
    return _0x596f0d;
  }
}