//Sat Aug 02 2025 07:17:56 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("望潮");
const notify = $.isNode() ? require("./sendNotify") : "";
(() => {
  function _0x5e22b5(_0x311cc2) {
    {
      _0x5e22b5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_0x56cbb3) {
        {
          return typeof _0x56cbb3;
        }
      } : function (_0xdbf63b) {
        return _0xdbf63b && "function" == typeof Symbol && _0xdbf63b.constructor === Symbol && _0xdbf63b !== Symbol.prototype ? "symbol" : typeof _0xdbf63b;
      };
      return _0x5e22b5(_0x311cc2);
    }
  }
  function _0x51b042(_0x904995, _0x39aec0) {
    {
      var _0x4e1f4f = "undefined" != typeof Symbol && _0x904995[Symbol.iterator] || _0x904995["@@iterator"];
      if (!_0x4e1f4f) {
        if (Array.isArray(_0x904995) || (_0x4e1f4f = _0xb5f6b6(_0x904995)) || _0x39aec0 && _0x904995 && "number" == typeof _0x904995.length) {
          _0x4e1f4f && (_0x904995 = _0x4e1f4f);
          var _0x113289 = 0;
          var _0x3725bd = function () {};
          return {
            s: _0x3725bd,
            n: function () {
              {
                var _0x3e2e8b = {
                  done: true
                };
                return _0x113289 >= _0x904995.length ? _0x3e2e8b : {
                  done: false,
                  value: _0x904995[_0x113289++]
                };
              }
            },
            e: function (_0xbffcea) {
              {
                throw _0xbffcea;
              }
            },
            f: _0x3725bd
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var _0x5c1774;
      var _0x178a25 = true;
      var _0x1e721b = false;
      return {
        s: function () {
          {
            _0x4e1f4f = _0x4e1f4f.call(_0x904995);
          }
        },
        n: function () {
          {
            var _0x2edbfc = _0x4e1f4f.next();
            _0x178a25 = _0x2edbfc.done;
            return _0x2edbfc;
          }
        },
        e: function (_0x3b5014) {
          {
            _0x1e721b = true;
            _0x5c1774 = _0x3b5014;
          }
        },
        f: function () {
          {
            try {
              {
                _0x178a25 || null == _0x4e1f4f.return || _0x4e1f4f.return();
              }
            } finally {
              {
                if (_0x1e721b) {
                  throw _0x5c1774;
                }
              }
            }
          }
        }
      };
    }
  }
  function _0xb5f6b6(_0x59a63a, _0x56ffb3) {
    {
      if (_0x59a63a) {
        if ("string" == typeof _0x59a63a) {
          return _0x5f3878(_0x59a63a, _0x56ffb3);
        }
        var _0x59eed9 = {}.toString.call(_0x59a63a).slice(8, -1);
        "Object" === _0x59eed9 && _0x59a63a.constructor && (_0x59eed9 = _0x59a63a.constructor.name);
        return "Map" === _0x59eed9 || "Set" === _0x59eed9 ? Array.from(_0x59a63a) : "Arguments" === _0x59eed9 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x59eed9) ? _0x5f3878(_0x59a63a, _0x56ffb3) : undefined;
      }
    }
  }
  function _0x5f3878(_0x200c78, _0x10ed5e) {
    {
      (null == _0x10ed5e || _0x10ed5e > _0x200c78.length) && (_0x10ed5e = _0x200c78.length);
      for (var _0x52b41a = 0, _0x4af718 = Array(_0x10ed5e); _0x52b41a < _0x10ed5e; _0x52b41a++) {
        _0x4af718[_0x52b41a] = _0x200c78[_0x52b41a];
      }
      return _0x4af718;
    }
  }
  function _0x224103() {
    "use strict";

    _0x224103 = function () {
      {
        return _0x58e184;
      }
    };
    var _0x767d8d;
    var _0x58e184 = {
      wrap: _0x29cb70,
      isGeneratorFunction: function (_0x2a9193) {
        {
          var _0x2e9075 = "function" == typeof _0x2a9193 && _0x2a9193.constructor;
          return !!_0x2e9075 && (_0x2e9075 === _0x502a51 || "GeneratorFunction" === (_0x2e9075.displayName || _0x2e9075.name));
        }
      },
      mark: function (_0xe0a23c) {
        {
          Object.setPrototypeOf ? Object.setPrototypeOf(_0xe0a23c, _0x59ebc3) : (_0xe0a23c.__proto__ = _0x59ebc3, _0x44f893(_0xe0a23c, _0x1c487a, "GeneratorFunction"));
          _0xe0a23c.prototype = Object.create(_0x46be51);
          return _0xe0a23c;
        }
      },
      awrap: function (_0x23a3ac) {
        {
          var _0x31d68d = {
            __await: _0x23a3ac
          };
          return _0x31d68d;
        }
      },
      AsyncIterator: _0x437c56,
      async: function (_0x1483d5, _0x2711c4, _0x4e3c73, _0x229f28, _0x45a9fc) {
        {
          undefined === _0x45a9fc && (_0x45a9fc = Promise);
          var _0x3893a8 = new _0x437c56(_0x29cb70(_0x1483d5, _0x2711c4, _0x4e3c73, _0x229f28), _0x45a9fc);
          return _0x58e184.isGeneratorFunction(_0x2711c4) ? _0x3893a8 : _0x3893a8.next().then(function (_0x492eda) {
            {
              return _0x492eda.done ? _0x492eda.value : _0x3893a8.next();
            }
          });
        }
      },
      keys: function (_0x543fe6) {
        var _0x168b4d = Object(_0x543fe6);
        var _0x24684f = [];
        for (var _0x44bc26 in _0x168b4d) _0x24684f.push(_0x44bc26);
        _0x24684f.reverse();
        return function _0x1da67c() {
          {
            for (; _0x24684f.length;) {
              {
                var _0x317bcf = _0x24684f.pop();
                if (_0x317bcf in _0x168b4d) {
                  _0x1da67c.value = _0x317bcf;
                  _0x1da67c.done = false;
                  return _0x1da67c;
                }
              }
            }
            _0x1da67c.done = true;
            return _0x1da67c;
          }
        };
      },
      values: _0x2c04ca
    };
    var _0x31f4db = Object.prototype;
    var _0x2bfabb = _0x31f4db.hasOwnProperty;
    var _0x162e4e = Object.defineProperty || function (_0x2b0e25, _0x2dee61, _0x280e32) {
      {
        _0x2b0e25[_0x2dee61] = _0x280e32.value;
      }
    };
    var _0x3ccb8c = "function" == typeof Symbol ? Symbol : {};
    var _0x157da6 = _0x3ccb8c.iterator || "@@iterator";
    var _0x912a7b = _0x3ccb8c.asyncIterator || "@@asyncIterator";
    var _0x1c487a = _0x3ccb8c.toStringTag || "@@toStringTag";
    function _0x44f893(_0x1e51ea, _0x26bafd, _0x9615ce) {
      {
        var _0x5b3286 = {
          value: _0x9615ce,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(_0x1e51ea, _0x26bafd, _0x5b3286);
        return _0x1e51ea[_0x26bafd];
      }
    }
    try {
      {
        _0x44f893({}, "");
      }
    } catch (_0x925677) {
      {
        _0x44f893 = function (_0x1d5dd7, _0xaa78a7, _0x216b41) {
          {
            return _0x1d5dd7[_0xaa78a7] = _0x216b41;
          }
        };
      }
    }
    function _0x29cb70(_0x5a2c68, _0x1a20f9, _0x2644c6, _0x303620) {
      {
        var _0x1761b1 = _0x1a20f9 && _0x1a20f9.prototype instanceof _0x50fe2f ? _0x1a20f9 : _0x50fe2f;
        var _0x1616f2 = Object.create(_0x1761b1.prototype);
        var _0x5e4a79 = new _0x57372d(_0x303620 || []);
        _0x162e4e(_0x1616f2, "_invoke", {
          value: _0x65c07a(_0x5a2c68, _0x2644c6, _0x5e4a79)
        });
        return _0x1616f2;
      }
    }
    function _0x1e4267(_0x4658e7, _0x215d18, _0x207635) {
      {
        try {
          {
            return {
              type: "normal",
              arg: _0x4658e7.call(_0x215d18, _0x207635)
            };
          }
        } catch (_0x2b9cdc) {
          {
            var _0x437701 = {
              type: "throw",
              arg: _0x2b9cdc
            };
            return _0x437701;
          }
        }
      }
    }
    var _0x56ec4b = "suspendedStart";
    var _0x53c367 = "suspendedYield";
    var _0x1c084d = "executing";
    var _0x3ac492 = "completed";
    var _0x398ed4 = {};
    function _0x50fe2f() {}
    function _0x502a51() {}
    function _0x59ebc3() {}
    var _0x1c40c7 = {};
    _0x44f893(_0x1c40c7, _0x157da6, function () {
      return this;
    });
    var _0x1744d7 = Object.getPrototypeOf;
    var _0x22dc05 = _0x1744d7 && _0x1744d7(_0x1744d7(_0x2c04ca([])));
    _0x22dc05 && _0x22dc05 !== _0x31f4db && _0x2bfabb.call(_0x22dc05, _0x157da6) && (_0x1c40c7 = _0x22dc05);
    _0x59ebc3.prototype = _0x50fe2f.prototype = Object.create(_0x1c40c7);
    var _0x46be51 = _0x59ebc3.prototype;
    function _0x472351(_0x30aeaa) {
      {
        ["next", "throw", "return"].forEach(function (_0x3f3538) {
          {
            _0x44f893(_0x30aeaa, _0x3f3538, function (_0x4c7d11) {
              {
                return this._invoke(_0x3f3538, _0x4c7d11);
              }
            });
          }
        });
      }
    }
    function _0x437c56(_0x24da4d, _0x181412) {
      {
        function _0x2f8c63(_0x48a632, _0x2a929d, _0x1125b2, _0x1df565) {
          {
            var _0x1aa4a2 = _0x1e4267(_0x24da4d[_0x48a632], _0x24da4d, _0x2a929d);
            if ("throw" !== _0x1aa4a2.type) {
              var _0x3ee14d = _0x1aa4a2.arg;
              var _0x216e21 = _0x3ee14d.value;
              return _0x216e21 && "object" == _0x5e22b5(_0x216e21) && _0x2bfabb.call(_0x216e21, "__await") ? _0x181412.resolve(_0x216e21.__await).then(function (_0x46982a) {
                {
                  _0x2f8c63("next", _0x46982a, _0x1125b2, _0x1df565);
                }
              }, function (_0x2ed0a2) {
                {
                  _0x2f8c63("throw", _0x2ed0a2, _0x1125b2, _0x1df565);
                }
              }) : _0x181412.resolve(_0x216e21).then(function (_0x17224d) {
                {
                  _0x3ee14d.value = _0x17224d;
                  _0x1125b2(_0x3ee14d);
                }
              }, function (_0xccc681) {
                {
                  return _0x2f8c63("throw", _0xccc681, _0x1125b2, _0x1df565);
                }
              });
            }
            _0x1df565(_0x1aa4a2.arg);
          }
        }
        var _0x238582;
        _0x162e4e(this, "_invoke", {
          value: function (_0xb5c6fa, _0x2dc793) {
            {
              function _0xc79da() {
                {
                  return new _0x181412(function (_0x2dd6b5, _0x4a38cf) {
                    {
                      _0x2f8c63(_0xb5c6fa, _0x2dc793, _0x2dd6b5, _0x4a38cf);
                    }
                  });
                }
              }
              return _0x238582 = _0x238582 ? _0x238582.then(_0xc79da, _0xc79da) : _0xc79da();
            }
          }
        });
      }
    }
    function _0x65c07a(_0x46c0a9, _0x3fc637, _0x12ae7b) {
      {
        var _0x172a41 = _0x56ec4b;
        return function (_0x58d6fa, _0x182af0) {
          {
            if (_0x172a41 === _0x1c084d) {
              throw Error("Generator is already running");
            }
            if (_0x172a41 === _0x3ac492) {
              if ("throw" === _0x58d6fa) {
                throw _0x182af0;
              }
              var _0x379658 = {
                value: _0x767d8d,
                done: true
              };
              return _0x379658;
            }
            for (_0x12ae7b.method = _0x58d6fa, _0x12ae7b.arg = _0x182af0;;) {
              {
                var _0x3f0387 = _0x12ae7b.delegate;
                if (_0x3f0387) {
                  var _0xfabf88 = _0x10106b(_0x3f0387, _0x12ae7b);
                  if (_0xfabf88) {
                    if (_0xfabf88 === _0x398ed4) {
                      continue;
                    }
                    return _0xfabf88;
                  }
                }
                if ("next" === _0x12ae7b.method) {
                  _0x12ae7b.sent = _0x12ae7b._sent = _0x12ae7b.arg;
                } else {
                  if ("throw" === _0x12ae7b.method) {
                    if (_0x172a41 === _0x56ec4b) {
                      throw _0x172a41 = _0x3ac492, _0x12ae7b.arg;
                    }
                    _0x12ae7b.dispatchException(_0x12ae7b.arg);
                  } else {
                    "return" === _0x12ae7b.method && _0x12ae7b.abrupt("return", _0x12ae7b.arg);
                  }
                }
                _0x172a41 = _0x1c084d;
                var _0x306d4e = _0x1e4267(_0x46c0a9, _0x3fc637, _0x12ae7b);
                if ("normal" === _0x306d4e.type) {
                  if (_0x172a41 = _0x12ae7b.done ? _0x3ac492 : _0x53c367, _0x306d4e.arg === _0x398ed4) {
                    continue;
                  }
                  var _0x3a0040 = {
                    value: _0x306d4e.arg,
                    done: _0x12ae7b.done
                  };
                  return _0x3a0040;
                }
                "throw" === _0x306d4e.type && (_0x172a41 = _0x3ac492, _0x12ae7b.method = "throw", _0x12ae7b.arg = _0x306d4e.arg);
              }
            }
          }
        };
      }
    }
    function _0x10106b(_0x1cd196, _0x5dd7c9) {
      {
        var _0x54fc11 = _0x5dd7c9.method;
        var _0x406a07 = _0x1cd196.iterator[_0x54fc11];
        if (_0x406a07 === _0x767d8d) {
          _0x5dd7c9.delegate = null;
          "throw" === _0x54fc11 && _0x1cd196.iterator.return && (_0x5dd7c9.method = "return", _0x5dd7c9.arg = _0x767d8d, _0x10106b(_0x1cd196, _0x5dd7c9), "throw" === _0x5dd7c9.method) || "return" !== _0x54fc11 && (_0x5dd7c9.method = "throw", _0x5dd7c9.arg = new TypeError("The iterator does not provide a '" + _0x54fc11 + "' method"));
          return _0x398ed4;
        }
        var _0x6ce3d = _0x1e4267(_0x406a07, _0x1cd196.iterator, _0x5dd7c9.arg);
        if ("throw" === _0x6ce3d.type) {
          _0x5dd7c9.method = "throw";
          _0x5dd7c9.arg = _0x6ce3d.arg;
          _0x5dd7c9.delegate = null;
          return _0x398ed4;
        }
        var _0x73951c = _0x6ce3d.arg;
        return _0x73951c ? _0x73951c.done ? (_0x5dd7c9[_0x1cd196.resultName] = _0x73951c.value, _0x5dd7c9.next = _0x1cd196.nextLoc, "return" !== _0x5dd7c9.method && (_0x5dd7c9.method = "next", _0x5dd7c9.arg = _0x767d8d), _0x5dd7c9.delegate = null, _0x398ed4) : _0x73951c : (_0x5dd7c9.method = "throw", _0x5dd7c9.arg = new TypeError("iterator result is not an object"), _0x5dd7c9.delegate = null, _0x398ed4);
      }
    }
    function _0x3e365f(_0x3fb05f) {
      {
        var _0x415f50 = {
          tryLoc: _0x3fb05f[0]
        };
        1 in _0x3fb05f && (_0x415f50.catchLoc = _0x3fb05f[1]);
        2 in _0x3fb05f && (_0x415f50.finallyLoc = _0x3fb05f[2], _0x415f50.afterLoc = _0x3fb05f[3]);
        this.tryEntries.push(_0x415f50);
      }
    }
    function _0x22cf21(_0x8a10f4) {
      {
        var _0x38e97a = _0x8a10f4.completion || {};
        _0x38e97a.type = "normal";
        delete _0x38e97a.arg;
        _0x8a10f4.completion = _0x38e97a;
      }
    }
    function _0x57372d(_0x1089fd) {
      {
        var _0x4e3b1a = {
          tryLoc: "root"
        };
        this.tryEntries = [_0x4e3b1a];
        _0x1089fd.forEach(_0x3e365f, this);
        this.reset(true);
      }
    }
    function _0x2c04ca(_0x31754c) {
      {
        if (_0x31754c || "" === _0x31754c) {
          var _0x12e0f5 = _0x31754c[_0x157da6];
          if (_0x12e0f5) {
            return _0x12e0f5.call(_0x31754c);
          }
          if ("function" == typeof _0x31754c.next) {
            return _0x31754c;
          }
          if (!isNaN(_0x31754c.length)) {
            var _0x548f9e = -1;
            var _0x11ee16 = function _0x471631() {
              {
                for (; ++_0x548f9e < _0x31754c.length;) {
                  if (_0x2bfabb.call(_0x31754c, _0x548f9e)) {
                    _0x471631.value = _0x31754c[_0x548f9e];
                    _0x471631.done = false;
                    return _0x471631;
                  }
                }
                _0x471631.value = _0x767d8d;
                _0x471631.done = true;
                return _0x471631;
              }
            };
            return _0x11ee16.next = _0x11ee16;
          }
        }
        throw new TypeError(_0x5e22b5(_0x31754c) + " is not iterable");
      }
    }
    _0x502a51.prototype = _0x59ebc3;
    _0x162e4e(_0x46be51, "constructor", {
      value: _0x59ebc3,
      configurable: true
    });
    _0x162e4e(_0x59ebc3, "constructor", {
      value: _0x502a51,
      configurable: true
    });
    _0x502a51.displayName = _0x44f893(_0x59ebc3, _0x1c487a, "GeneratorFunction");
    _0x472351(_0x437c56.prototype);
    _0x44f893(_0x437c56.prototype, _0x912a7b, function () {
      {
        return this;
      }
    });
    _0x472351(_0x46be51);
    _0x44f893(_0x46be51, _0x1c487a, "Generator");
    _0x44f893(_0x46be51, _0x157da6, function () {
      return this;
    });
    _0x44f893(_0x46be51, "toString", function () {
      {
        return "[object Generator]";
      }
    });
    _0x57372d.prototype = {
      constructor: _0x57372d,
      reset: function (_0x1fc2b8) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = _0x767d8d, this.done = false, this.delegate = null, this.method = "next", this.arg = _0x767d8d, this.tryEntries.forEach(_0x22cf21), !_0x1fc2b8) {
          for (var _0x57eb98 in this) "t" === _0x57eb98.charAt(0) && _0x2bfabb.call(this, _0x57eb98) && !isNaN(+_0x57eb98.slice(1)) && (this[_0x57eb98] = _0x767d8d);
        }
      },
      stop: function () {
        {
          this.done = true;
          var _0x565451 = this.tryEntries[0].completion;
          if ("throw" === _0x565451.type) {
            throw _0x565451.arg;
          }
          return this.rval;
        }
      },
      dispatchException: function (_0x5bb5ce) {
        {
          if (this.done) {
            throw _0x5bb5ce;
          }
          var _0x18acdb = this;
          function _0x510948(_0x51ddc0, _0x48adb2) {
            {
              _0x3b6916.type = "throw";
              _0x3b6916.arg = _0x5bb5ce;
              _0x18acdb.next = _0x51ddc0;
              _0x48adb2 && (_0x18acdb.method = "next", _0x18acdb.arg = _0x767d8d);
              return !!_0x48adb2;
            }
          }
          for (var _0x200b54 = this.tryEntries.length - 1; _0x200b54 >= 0; --_0x200b54) {
            {
              var _0x177b30 = this.tryEntries[_0x200b54];
              var _0x3b6916 = _0x177b30.completion;
              if ("root" === _0x177b30.tryLoc) {
                return _0x510948("end");
              }
              if (_0x177b30.tryLoc <= this.prev) {
                var _0xc9ff31 = _0x2bfabb.call(_0x177b30, "catchLoc");
                var _0x97e44a = _0x2bfabb.call(_0x177b30, "finallyLoc");
                if (_0xc9ff31 && _0x97e44a) {
                  if (this.prev < _0x177b30.catchLoc) {
                    return _0x510948(_0x177b30.catchLoc, true);
                  }
                  if (this.prev < _0x177b30.finallyLoc) {
                    return _0x510948(_0x177b30.finallyLoc);
                  }
                } else {
                  if (_0xc9ff31) {
                    if (this.prev < _0x177b30.catchLoc) {
                      return _0x510948(_0x177b30.catchLoc, true);
                    }
                  } else {
                    if (!_0x97e44a) {
                      throw Error("try statement without catch or finally");
                    }
                    if (this.prev < _0x177b30.finallyLoc) {
                      return _0x510948(_0x177b30.finallyLoc);
                    }
                  }
                }
              }
            }
          }
        }
      },
      abrupt: function (_0x57b594, _0x4b73d6) {
        {
          for (var _0x88dea2 = this.tryEntries.length - 1; _0x88dea2 >= 0; --_0x88dea2) {
            {
              var _0x4f7e3a = this.tryEntries[_0x88dea2];
              if (_0x4f7e3a.tryLoc <= this.prev && _0x2bfabb.call(_0x4f7e3a, "finallyLoc") && this.prev < _0x4f7e3a.finallyLoc) {
                var _0xa737e1 = _0x4f7e3a;
                break;
              }
            }
          }
          _0xa737e1 && ("break" === _0x57b594 || "continue" === _0x57b594) && _0xa737e1.tryLoc <= _0x4b73d6 && _0x4b73d6 <= _0xa737e1.finallyLoc && (_0xa737e1 = null);
          var _0xb8840f = _0xa737e1 ? _0xa737e1.completion : {};
          _0xb8840f.type = _0x57b594;
          _0xb8840f.arg = _0x4b73d6;
          return _0xa737e1 ? (this.method = "next", this.next = _0xa737e1.finallyLoc, _0x398ed4) : this.complete(_0xb8840f);
        }
      },
      complete: function (_0x6ca19e, _0x427d9e) {
        {
          if ("throw" === _0x6ca19e.type) {
            throw _0x6ca19e.arg;
          }
          "break" === _0x6ca19e.type || "continue" === _0x6ca19e.type ? this.next = _0x6ca19e.arg : "return" === _0x6ca19e.type ? (this.rval = this.arg = _0x6ca19e.arg, this.method = "return", this.next = "end") : "normal" === _0x6ca19e.type && _0x427d9e && (this.next = _0x427d9e);
          return _0x398ed4;
        }
      },
      finish: function (_0x4132e5) {
        {
          for (var _0x536f28 = this.tryEntries.length - 1; _0x536f28 >= 0; --_0x536f28) {
            {
              var _0x2b7959 = this.tryEntries[_0x536f28];
              if (_0x2b7959.finallyLoc === _0x4132e5) {
                this.complete(_0x2b7959.completion, _0x2b7959.afterLoc);
                _0x22cf21(_0x2b7959);
                return _0x398ed4;
              }
            }
          }
        }
      },
      catch: function (_0x1a00e6) {
        {
          for (var _0x31bf2d = this.tryEntries.length - 1; _0x31bf2d >= 0; --_0x31bf2d) {
            {
              var _0x19b9bd = this.tryEntries[_0x31bf2d];
              if (_0x19b9bd.tryLoc === _0x1a00e6) {
                var _0x26442c = _0x19b9bd.completion;
                if ("throw" === _0x26442c.type) {
                  var _0x23404e = _0x26442c.arg;
                  _0x22cf21(_0x19b9bd);
                }
                return _0x23404e;
              }
            }
          }
          throw Error("illegal catch attempt");
        }
      },
      delegateYield: function (_0x475236, _0x19c991, _0x845042) {
        {
          this.delegate = {
            iterator: _0x2c04ca(_0x475236),
            resultName: _0x19c991,
            nextLoc: _0x845042
          };
          "next" === this.method && (this.arg = _0x767d8d);
          return _0x398ed4;
        }
      }
    };
    return _0x58e184;
  }
  function _0x40a995(_0x6a2003, _0x190c50, _0x1e762b, _0x176617, _0x42e6d1, _0x1d2654, _0x160089) {
    {
      try {
        {
          var _0x13c627 = _0x6a2003[_0x1d2654](_0x160089);
          var _0x4aa5ef = _0x13c627.value;
        }
      } catch (_0x5b749b) {
        {
          return void _0x1e762b(_0x5b749b);
        }
      }
      _0x13c627.done ? _0x190c50(_0x4aa5ef) : Promise.resolve(_0x4aa5ef).then(_0x176617, _0x42e6d1);
    }
  }
  function _0x38827e(_0x2243b6) {
    return function () {
      var _0xe0a111 = this;
      var _0x477ef7 = arguments;
      return new Promise(function (_0x398086, _0x8d3429) {
        var _0x3f0cae = _0x2243b6.apply(_0xe0a111, _0x477ef7);
        function _0x33ff1a(_0x42b450) {
          {
            _0x40a995(_0x3f0cae, _0x398086, _0x8d3429, _0x33ff1a, _0x3e3dc6, "next", _0x42b450);
          }
        }
        function _0x3e3dc6(_0x1ce51e) {
          {
            _0x40a995(_0x3f0cae, _0x398086, _0x8d3429, _0x33ff1a, _0x3e3dc6, "throw", _0x1ce51e);
          }
        }
        _0x33ff1a(undefined);
      });
    };
  }
  var _0x1b33b6 = ($.isNode() ? process.env.WangChao : $.getdata("WangChao")) || "";
  var _0x3cabe1 = ($.isNode() ? process.env.GHPROXYURL : $.getdata("GHPROXYURL")) || "https://ghfast.top";
  var _0x4d0ec2 = undefined;
  var _0x37d04a = "";
  var _0x5c2ed7 = "64";
  var _0x1e0e0c = "";
  var _0x220135 = "";
  var _0x2d3573 = "";
  var _0x2e1d10 = "";
  var _0x3d3765 = "";
  var _0x269d50 = "";
  var _0x27e10b = "";
  var _0x192014 = "";
  var _0x45f494 = "";
  var _0x51470d = "";
  var _0x4d3b1f = "10019";
  var _0x38e1c1 = "";
  var _0x2ef687 = "";
  var _0x4ba4c4 = "";
  var _0x334499 = "";
  var _0x1c6ab2 = "";
  var _0x28bafd = "FR*r!isE5W";
  function _0x396db7() {
    {
      return _0x39ce61.apply(this, arguments);
    }
  }
  function _0x39ce61() {
    _0x39ce61 = _0x38827e(_0x224103().mark(function _0x33ce28() {
      {
        var _0xab0523;
        var _0x30c2b8;
        var _0x4aa87e;
        var _0xa79279;
        var _0x869eba;
        var _0x353268;
        var _0x3873d7;
        var _0x4d9813;
        var _0x5a1801;
        var _0x2d906e;
        var _0x887dc3;
        var _0x2f10c2;
        var _0x556ae4;
        var _0x452f60;
        var _0x4844a2;
        var _0x389f21;
        var _0x3ecf13;
        var _0x1caac1;
        var _0x88a67e;
        var _0x411b05;
        var _0x188677;
        var _0x3aa4e9;
        var _0xcaeb78;
        var _0x1a4e28;
        var _0x4c626e;
        var _0x4d0987;
        var _0x256544;
        var _0x12f710;
        var _0x46488e;
        var _0x1cb825;
        var _0x98162a;
        var _0x2e08fe;
        var _0x1c2518;
        var _0x5746c3;
        var _0x3c0a0;
        var _0x1b1148;
        var _0x3bbd23;
        var _0x5558ad;
        var _0x32f731;
        var _0xc35a97;
        var _0x2235ba;
        var _0x1691cb;
        var _0x753e3e;
        var _0x366620;
        var _0x56cd67;
        var _0x408801;
        var _0x16546f;
        var _0x5baa2b;
        return _0x224103().wrap(function (_0x5bb1f7) {
          {
            for (;;) {
              switch (_0x5bb1f7.prev = _0x5bb1f7.next) {
                case 0:
                  if (_0x1b33b6) {
                    _0x5bb1f7.next = 5;
                    break;
                  }
                  console.log("先去boxjs填写账号密码");
                  _0x5bb1f7.next = 4;
                  return _0x329023("先去boxjs填写账号密码");
                case 4:
                  return _0x5bb1f7.abrupt("return");
                case 5:
                  _0x5bb1f7.next = 7;
                  return _0x30b15c();
                case 7:
                  _0x4d0ec2 = _0x5bb1f7.sent;
                  _0xab0523 = _0x1b33b6.split(" ");
                  _0x30c2b8 = _0x51b042(_0xab0523);
                  _0x5bb1f7.prev = 10;
                  _0x30c2b8.s();
                case 12:
                  if ((_0x4aa87e = _0x30c2b8.n()).done) {
                    _0x5bb1f7.next = 227;
                    break;
                  }
                  _0xa79279 = _0x4aa87e.value;
                  _0x5bb1f7.prev = 14;
                  console.log("随机生成UA");
                  _0x869eba = _0x242ca7();
                  _0x1e0e0c = _0x869eba.ua;
                  _0x220135 = _0x869eba.commonUa;
                  _0x2d3573 = _0x869eba.uuid;
                  console.log(_0x1e0e0c);
                  console.log(_0x220135);
                  _0x27e10b = _0xa79279.split("&")[0];
                  _0x192014 = _0xa79279.split("&")[1];
                  _0x45f494 = _0xa79279.split("&")[2];
                  _0x51470d = _0xa79279.split("&")[3] || _0x27e10b;
                  console.log("用户：".concat(_0x27e10b, "开始任务"));
                  console.log("获取sessionId");
                  _0x5bb1f7.next = 30;
                  return _0x48eb8f("/api/account/init");
                case 30:
                  _0x353268 = _0x5bb1f7.sent;
                  _0x38e1c1 = _0x353268.data.session.id;
                  console.log(_0x38e1c1);
                  console.log("获取signature_key");
                  _0x5bb1f7.next = 36;
                  return _0x206446("/web/init?client_id=".concat(_0x4d3b1f));
                case 36:
                  _0x3873d7 = _0x5bb1f7.sent;
                  _0x37d04a = _0x3873d7.data.client.signature_key;
                  console.log(_0x37d04a);
                  console.log("获取code");
                  _0x5bb1f7.next = 42;
                  return _0x1bf50f("/web/oauth/credential_auth");
                case 42:
                  if (_0x4d9813 = _0x5bb1f7.sent, _0x4d9813.data) {
                    _0x5bb1f7.next = 46;
                    break;
                  }
                  console.log(_0x4d9813.message);
                  return _0x5bb1f7.abrupt("continue", 225);
                case 46:
                  _0x5a1801 = _0x4d9813.data.authorization_code.code;
                  console.log(_0x5a1801);
                  console.log("登录");
                  _0x5bb1f7.next = 51;
                  return _0x48eb8f("/api/zbtxz/login", "check_token=&code=".concat(_0x5a1801, "&token=&type=-1&union_id="));
                case 51:
                  _0x2d906e = _0x5bb1f7.sent;
                  console.log("登录成功");
                  _0x269d50 = _0x2d906e.data.session.account_id;
                  _0x38e1c1 = _0x2d906e.data.session.id;
                  _0x5bb1f7.next = 57;
                  return _0x81a779("/api/app_feature_switch/list");
                case 57:
                  _0x887dc3 = _0x5bb1f7.sent;
                  console.log("进入app：".concat(_0x887dc3.message));
                  console.log("————————————");
                  console.log("每日签到");
                  _0x5bb1f7.next = 63;
                  return _0x9fe370("/auth/userLogin", {
                    accountId: _0x269d50,
                    sessionId: _0x38e1c1,
                    q: "bcuABCdvYzEJodimBMvIjKjDQ5CiVGO2yL2Tm66bWYU=",
                    tenantCode: "xsb_wangchao"
                  });
                case 63:
                  _0x2f10c2 = _0x5bb1f7.sent;
                  _0x2ef687 = _0x2f10c2.data.token;
                  _0x5bb1f7.next = 67;
                  return _0x63fadd("/activity/signin?deviceId=".concat(_0x2d3573, "&sessionId=").concat(_0x38e1c1));
                case 67:
                  _0x556ae4 = _0x5bb1f7.sent;
                  console.log("签到结果：".concat(_0x556ae4.message));
                  _0x5bb1f7.next = 71;
                  return _0x63fadd("/activity/getFixSigninInfo");
                case 71:
                  if (_0x452f60 = _0x5bb1f7.sent, !(_0x452f60.data.fixSigninDate.length > 0)) {
                    _0x5bb1f7.next = 81;
                    break;
                  }
                  _0x4844a2 = "";
                  _0x389f21 = _0x51b042(_0x452f60.data.fixSigninDate);
                  try {
                    {
                      for (_0x389f21.s(); !(_0x3ecf13 = _0x389f21.n()).done;) {
                        _0x1caac1 = _0x3ecf13.value;
                        _0x4844a2 += _0x1caac1 + ",";
                      }
                    }
                  } catch (_0x5239c7) {
                    {
                      _0x389f21.e(_0x5239c7);
                    }
                  } finally {
                    {
                      _0x389f21.f();
                    }
                  }
                  _0x4844a2 = _0x4844a2.substring(0, _0x4844a2.length - 1);
                  _0x5bb1f7.next = 79;
                  return _0x63fadd("/activity/fixSignin?deviceId=".concat(_0x2d3573, "&sessionId=").concat(_0x38e1c1, "&fixSigninDate=").concat(_0x4844a2));
                case 79:
                  _0x88a67e = _0x5bb1f7.sent;
                  console.log("补签结果：".concat(_0x88a67e.message));
                case 81:
                  _0x5bb1f7.next = 83;
                  return _0x63fadd("/activity/getUserActivityInfo?startTime=2025-03-15&endTime=2029-03-31&deviceId=".concat(_0x2d3573, "&ytoken="));
                case 83:
                  _0x411b05 = _0x5bb1f7.sent;
                  _0x188677 = _0x51b042(_0x411b05.data.h5ActivityExtraRewardList);
                  _0x5bb1f7.prev = 85;
                  _0x188677.s();
                case 87:
                  if ((_0x3aa4e9 = _0x188677.n()).done) {
                    _0x5bb1f7.next = 150;
                    break;
                  }
                  if (_0xcaeb78 = _0x3aa4e9.value, "已完成" == _0xcaeb78.completionDegree) {
                    _0x5bb1f7.next = 91;
                    break;
                  }
                  return _0x5bb1f7.abrupt("continue", 148);
                case 91:
                  _0x5bb1f7.next = 93;
                  return _0x63fadd("/activity/getLotteryLink?rewardId=".concat(_0xcaeb78.rewardId, "&type=").concat(_0xcaeb78.signinType));
                case 93:
                  if (_0x1a4e28 = _0x5bb1f7.sent, _0x1a4e28.data) {
                    _0x5bb1f7.next = 98;
                    break;
                  }
                  _0x5bb1f7.next = 97;
                  return _0x63fadd("/activity/getLotteryLink?rewardId=".concat(_0xcaeb78.rewardId, "&type=2"));
                case 97:
                  _0x1a4e28 = _0x5bb1f7.sent;
                case 98:
                  if (_0x1a4e28.data) {
                    _0x5bb1f7.next = 100;
                    break;
                  }
                  return _0x5bb1f7.abrupt("continue", 148);
                case 100:
                  _0x5bb1f7.next = 102;
                  return _0x425b2a("/api/auth/userLogin", {
                    accountId: _0x269d50,
                    sessionId: _0x38e1c1,
                    q: decodeURIComponent(_0x1a4e28.data.split("q=")[1]),
                    tenantCode: "xsb_wangchao"
                  });
                case 102:
                  _0x4c626e = _0x5bb1f7.sent;
                  _0x4ba4c4 = _0x4c626e.data.token;
                  _0x4d0987 = _0x4c626e.data.thirdId;
                  _0x5bb1f7.next = 107;
                  return _0x215777("/activity/lottery/frontPageNum?activityId=".concat(_0x4d0987));
                case 107:
                  _0x256544 = _0x5bb1f7.sent;
                  console.log("抽奖id：".concat(_0x4d0987, " 剩余抽奖次数：").concat(_0x256544.data.remainPrizeNum));
                  _0x12f710 = 0;
                case 110:
                  if (!(_0x12f710 < _0x256544.data.remainPrizeNum)) {
                    _0x5bb1f7.next = 118;
                    break;
                  }
                  var _0x391afa = {
                    activityId: _0x4d0987,
                    clientId: _0x2d3573
                  };
                  _0x5bb1f7.next = 113;
                  return _0x425b2a("/h5/activity/lottery/userActivityLottery", _0x391afa);
                case 113:
                  _0x46488e = _0x5bb1f7.sent;
                  1 == _0x46488e.data.isPrize ? (console.log("抽奖获得：".concat(_0x46488e.data.prizeName)), _0x1c6ab2 += "用户：".concat(_0x27e10b, " 抽奖获得：").concat(_0x46488e.data.prizeName, "\n")) : 0 == _0x46488e.data.isPrize ? console.log("未中奖") : console.log(JSON.stringify(_0x46488e));
                case 115:
                  _0x12f710++;
                  _0x5bb1f7.next = 110;
                  break;
                case 118:
                  _0x5bb1f7.next = 120;
                  return _0x215777("/activity/lottery/accountPrizeRecord/userPrizeRecord?activityId=".concat(_0x4d0987));
                case 120:
                  if (_0x1cb825 = _0x5bb1f7.sent, _0x98162a = /\?u=([^"]*)/, _0x2e08fe = JSON.stringify(_0x1cb825).match(_0x98162a), !_0x2e08fe) {
                    _0x5bb1f7.next = 147;
                    break;
                  }
                  _0x5bb1f7.next = 126;
                  return _0x14436a("/user/auth/userLogin", {
                    u: decodeURIComponent(_0x2e08fe[1]),
                    accountId: _0x269d50,
                    sessionId: _0x38e1c1
                  });
                case 126:
                  _0x1c2518 = _0x5bb1f7.sent;
                  _0x334499 = _0x1c2518.data.token;
                  _0x5bb1f7.next = 130;
                  return _0x895a45("/redBag/getFundsDetail?fundsChannelType=0");
                case 130:
                  if (_0x5746c3 = _0x5bb1f7.sent, _0x5746c3.data.account) {
                    _0x5bb1f7.next = 136;
                    break;
                  }
                  _0x5bb1f7.next = 134;
                  return _0x895a45("/redBag/saveAliPayAccount?userName=".concat(_0x45f494, "&account=").concat(_0x51470d));
                case 134:
                  _0x3c0a0 = _0x5bb1f7.sent;
                  console.log("绑定支付宝：".concat(_0x3c0a0.message));
                case 136:
                  _0x5bb1f7.next = 138;
                  return _0x895a45("/redBag/getWalletInfo");
                case 138:
                  if (_0x1b1148 = _0x5bb1f7.sent, console.log("钱包余额：".concat(_0x1b1148.data.aliPayTotalPrice)), !(_0x1b1148.data.aliPayTotalPrice > 0)) {
                    _0x5bb1f7.next = 145;
                    break;
                  }
                  _0x5bb1f7.next = 143;
                  return _0x895a45("/redBag/createTrans?price=".concat(_0x1b1148.data.aliPayTotalPrice, "&fundsChannelType=0&yToken=0&deviceId=").concat(_0x2d3573));
                case 143:
                  _0x3bbd23 = _0x5bb1f7.sent;
                  console.log("提现：".concat(_0x3bbd23.message));
                case 145:
                  _0x5bb1f7.next = 148;
                  break;
                case 147:
                  console.log("获取钱包id失败");
                case 148:
                  _0x5bb1f7.next = 87;
                  break;
                case 150:
                  _0x5bb1f7.next = 155;
                  break;
                case 152:
                  _0x5bb1f7.prev = 152;
                  _0x5bb1f7.t0 = _0x5bb1f7.catch(85);
                  _0x188677.e(_0x5bb1f7.t0);
                case 155:
                  _0x5bb1f7.prev = 155;
                  _0x188677.f();
                  return _0x5bb1f7.finish(155);
                case 158:
                  console.log("————————————");
                  console.log("阅读抽奖");
                  _0x2e1d10 = "";
                  console.log("获取登录cookie");
                  _0x5bb1f7.next = 164;
                  return _0x4e0310("/prod-api/user-read/app/login?id=".concat(_0x269d50, "&sessionId=").concat(_0x38e1c1, "&deviceId=").concat(_0x2d3573));
                case 164:
                  if (_0x2e1d10 = _0x5bb1f7.sent, _0x2e1d10) {
                    _0x5bb1f7.next = 167;
                    break;
                  }
                  return _0x5bb1f7.abrupt("continue", 225);
                case 167:
                  console.log(_0x2e1d10);
                  _0x5bb1f7.next = 170;
                  return _0x11b28c("/prod-api/user-read/list/".concat(_0x3286de()));
                case 170:
                  _0x5558ad = _0x5bb1f7.sent;
                  _0x32f731 = _0x51b042(_0x5558ad.data.articleIsReadList);
                  _0x5bb1f7.prev = 172;
                  _0x32f731.s();
                case 174:
                  if ((_0xc35a97 = _0x32f731.n()).done) {
                    _0x5bb1f7.next = 190;
                    break;
                  }
                  _0x2235ba = _0xc35a97.value;
                  console.log("文章：".concat(_0x2235ba.title));
                  _0x5bb1f7.next = 179;
                  return _0x81a779("/api/article/detail?id=".concat(_0x2235ba.newsId));
                case 179:
                  _0x5bb1f7.sent;
                  _0x5bb1f7.next = 182;
                  return _0x81a779("/api/article/read_time?channel_article_id=".concat(_0x2235ba.newsId, "&is_end=true&read_time=7934"));
                case 182:
                  _0x5bb1f7.sent;
                  _0x1691cb = JSON.stringify({
                    timestamp: Date.now(),
                    articleId: _0x2235ba.id,
                    accountId: _0x269d50
                  });
                  _0x5bb1f7.next = 186;
                  return _0x11b28c("/prod-api/already-read/article/new?signature=".concat(_0x5cfc0f(_0x1691cb)), _0x1691cb);
                case 186:
                  _0x753e3e = _0x5bb1f7.sent;
                  console.log("阅读：".concat(_0x753e3e.msg));
                case 188:
                  _0x5bb1f7.next = 174;
                  break;
                case 190:
                  _0x5bb1f7.next = 195;
                  break;
                case 192:
                  _0x5bb1f7.prev = 192;
                  _0x5bb1f7.t1 = _0x5bb1f7.catch(172);
                  _0x32f731.e(_0x5bb1f7.t1);
                case 195:
                  _0x5bb1f7.prev = 195;
                  _0x32f731.f();
                  return _0x5bb1f7.finish(195);
                case 198:
                  _0x5bb1f7.next = 200;
                  return _0x11b28c("/prod-api/user-read-count/count/".concat(_0x3286de()));
                case 200:
                  if (_0x366620 = _0x5bb1f7.sent, console.log("剩余抽奖次数：".concat(_0x366620.data)), !(_0x366620.data > 0)) {
                    _0x5bb1f7.next = 220;
                    break;
                  }
                  _0x3d3765 = "";
                  _0x5bb1f7.next = 206;
                  return _0xc592ec("/tzrb/user/loginWC?accountId=".concat(_0x269d50, "&sessionId=").concat(_0x38e1c1));
                case 206:
                  _0x3d3765 = _0x5bb1f7.sent;
                  console.log("获取抽奖cookie");
                  console.log(_0x3d3765);
                  _0x5bb1f7.next = 211;
                  return _0x4d4e63("/tzrb/awardUpgrade/list?activityId=67");
                case 211:
                  _0x56cd67 = _0x5bb1f7.sent;
                  _0x408801 = _0x56cd67.data;
                  _0x16546f = _0x224103().mark(function _0x5b9e02() {
                    {
                      var _0x44f67f;
                      var _0x24f87d;
                      return _0x224103().wrap(function (_0x38b7c3) {
                        {
                          for (;;) {
                            switch (_0x38b7c3.prev = _0x38b7c3.next) {
                              case 0:
                                _0x38b7c3.next = 2;
                                return _0x155dea("/tzrb/userAwardRecordUpgrade/saveUpdate", "activityId=67&sessionId=undefined&sig=undefined&token=undefined");
                              case 2:
                                _0x44f67f = _0x38b7c3.sent;
                                _0x24f87d = _0x408801.findIndex(function (_0x55a5e2) {
                                  return _0x55a5e2.id == _0x44f67f.data;
                                });
                                -1 != _0x24f87d ? (console.log("抽奖获得：".concat(_0x408801[_0x24f87d].title)), _0x1c6ab2 += "用户：".concat(_0x27e10b, " 抽奖获得：").concat(_0x408801[_0x24f87d].title, "\n")) : console.log(JSON.stringify(_0x44f67f));
                              case 5:
                              case "end":
                                return _0x38b7c3.stop();
                            }
                          }
                        }
                      }, _0x5b9e02);
                    }
                  });
                  _0x5baa2b = 0;
                case 215:
                  if (!(_0x5baa2b < _0x366620.data)) {
                    _0x5bb1f7.next = 220;
                    break;
                  }
                  return _0x5bb1f7.delegateYield(_0x16546f(), "t2", 217);
                case 217:
                  _0x5baa2b++;
                  _0x5bb1f7.next = 215;
                  break;
                case 220:
                  _0x5bb1f7.next = 225;
                  break;
                case 222:
                  _0x5bb1f7.prev = 222;
                  _0x5bb1f7.t3 = _0x5bb1f7.catch(14);
                  console.log(_0x5bb1f7.t3);
                case 225:
                  _0x5bb1f7.next = 12;
                  break;
                case 227:
                  _0x5bb1f7.next = 232;
                  break;
                case 229:
                  _0x5bb1f7.prev = 229;
                  _0x5bb1f7.t4 = _0x5bb1f7.catch(10);
                  _0x30c2b8.e(_0x5bb1f7.t4);
                case 232:
                  _0x5bb1f7.prev = 232;
                  _0x30c2b8.f();
                  return _0x5bb1f7.finish(232);
                case 235:
                  if (!_0x1c6ab2) {
                    _0x5bb1f7.next = 238;
                    break;
                  }
                  _0x5bb1f7.next = 238;
                  return _0x329023(_0x1c6ab2);
                case 238:
                case "end":
                  return _0x5bb1f7.stop();
              }
            }
          }
        }, _0x33ce28, null, [[10, 229, 232, 235], [14, 222], [85, 152, 155, 158], [172, 192, 195, 198]]);
      }
    }));
    return _0x39ce61.apply(this, arguments);
  }
  function _0x206446(_0x661655) {
    return _0x1373bd.apply(this, arguments);
  }
  function _0x1373bd() {
    _0x1373bd = _0x38827e(_0x224103().mark(function _0x16d6d1(_0x5245c7) {
      {
        return _0x224103().wrap(function (_0x123a41) {
          {
            for (;;) {
              switch (_0x123a41.prev = _0x123a41.next) {
                case 0:
                  return _0x123a41.abrupt("return", new Promise(function (_0x22e5d3) {
                    {
                      var _0x51596b = {
                        url: "https://passport.tmuyun.com".concat(_0x5245c7),
                        headers: {
                          Connection: "Keep-Alive",
                          "Cache-Control": "no-cache",
                          "X-REQUEST-ID": _0x5bc122(),
                          "Accept-Encoding": "gzip",
                          "user-agent": _0x1e0e0c
                        }
                      };
                      $.get(_0x51596b, function () {
                        {
                          var _0x34d965 = _0x38827e(_0x224103().mark(function _0x2df8ad(_0x4b2852, _0x251dcd, _0x2bc264) {
                            return _0x224103().wrap(function (_0x497b6d) {
                              {
                                for (;;) {
                                  switch (_0x497b6d.prev = _0x497b6d.next) {
                                    case 0:
                                      try {
                                        _0x4b2852 ? (console.log("".concat(JSON.stringify(_0x4b2852))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : _0x22e5d3(JSON.parse(_0x2bc264));
                                      } catch (_0x49ef00) {
                                        {
                                          $.logErr(_0x49ef00, _0x251dcd);
                                        }
                                      } finally {
                                        {
                                          _0x22e5d3();
                                        }
                                      }
                                    case 1:
                                    case "end":
                                      return _0x497b6d.stop();
                                  }
                                }
                              }
                            }, _0x2df8ad);
                          }));
                          return function (_0x173e46, _0x53a789, _0x3e5871) {
                            {
                              return _0x34d965.apply(this, arguments);
                            }
                          };
                        }
                      }());
                    }
                  }));
                case 1:
                case "end":
                  return _0x123a41.stop();
              }
            }
          }
        }, _0x16d6d1);
      }
    }));
    return _0x1373bd.apply(this, arguments);
  }
  function _0x1bf50f(_0x3d06c6) {
    return _0xed4f4.apply(this, arguments);
  }
  function _0xed4f4() {
    _0xed4f4 = _0x38827e(_0x224103().mark(function _0x116272(_0x4c4649) {
      {
        var _0x4ff938;
        return _0x224103().wrap(function (_0x5386bd) {
          {
            for (;;) {
              switch (_0x5386bd.prev = _0x5386bd.next) {
                case 0:
                  _0x4ff938 = _0x315a14();
                  return _0x5386bd.abrupt("return", new Promise(function (_0x2ab1d5) {
                    {
                      var _0x17b507 = {
                        Connection: "Keep-Alive",
                        "X-REQUEST-ID": _0x4ff938.uuid,
                        "X-SIGNATURE": _0x4ff938.signature,
                        "Cache-Control": "no-cache",
                        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                        "Accept-Encoding": "gzip",
                        "user-agent": _0x1e0e0c
                      };
                      var _0x26c8d3 = {
                        url: "https://passport.tmuyun.com".concat(_0x4c4649),
                        headers: _0x17b507,
                        body: _0x4ff938.body
                      };
                      $.post(_0x26c8d3, function () {
                        {
                          var _0x201ba0 = _0x38827e(_0x224103().mark(function _0x1be592(_0x384e3c, _0x310edb, _0x55094b) {
                            return _0x224103().wrap(function (_0x1ba139) {
                              {
                                for (;;) {
                                  switch (_0x1ba139.prev = _0x1ba139.next) {
                                    case 0:
                                      try {
                                        {
                                          _0x384e3c ? (console.log("".concat(JSON.stringify(_0x384e3c))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : _0x2ab1d5(JSON.parse(_0x55094b));
                                        }
                                      } catch (_0x31a757) {
                                        {
                                          $.logErr(_0x31a757, _0x310edb);
                                        }
                                      } finally {
                                        {
                                          _0x2ab1d5();
                                        }
                                      }
                                    case 1:
                                    case "end":
                                      return _0x1ba139.stop();
                                  }
                                }
                              }
                            }, _0x1be592);
                          }));
                          return function (_0xadf02c, _0x591707, _0x1b6ecc) {
                            return _0x201ba0.apply(this, arguments);
                          };
                        }
                      }());
                    }
                  }));
                case 2:
                case "end":
                  return _0x5386bd.stop();
              }
            }
          }
        }, _0x116272);
      }
    }));
    return _0xed4f4.apply(this, arguments);
  }
  function _0x81a779(_0x3ff615) {
    return _0x49c4c7.apply(this, arguments);
  }
  function _0x49c4c7() {
    _0x49c4c7 = _0x38827e(_0x224103().mark(function _0x4ba6e7(_0x414cc9) {
      var _0x81b100;
      return _0x224103().wrap(function (_0x2c5a25) {
        for (;;) {
          switch (_0x2c5a25.prev = _0x2c5a25.next) {
            case 0:
              _0x81b100 = _0x47a9ff(_0x414cc9);
              return _0x2c5a25.abrupt("return", new Promise(function (_0x1e1e2e) {
                var _0x391cfc = {
                  Connection: "Keep-Alive",
                  "X-TIMESTAMP": _0x81b100.time,
                  "X-SESSION-ID": _0x38e1c1,
                  "X-REQUEST-ID": _0x81b100.uuid,
                  "X-SIGNATURE": _0x81b100.signature,
                  "X-TENANT-ID": _0x5c2ed7,
                  "X-ACCOUNT-ID": _0x269d50,
                  "Cache-Control": "no-cache",
                  "Accept-Encoding": "gzip",
                  "user-agent": _0x220135
                };
                var _0x47c1ae = {
                  url: "https://vapp.taizhou.com.cn".concat(_0x414cc9),
                  headers: _0x391cfc
                };
                $.get(_0x47c1ae, function () {
                  var _0x486cba = _0x38827e(_0x224103().mark(function _0x1d2dea(_0x313c7d, _0x528893, _0x37a861) {
                    return _0x224103().wrap(function (_0x675a83) {
                      for (;;) {
                        switch (_0x675a83.prev = _0x675a83.next) {
                          case 0:
                            if (_0x675a83.prev = 0, !_0x313c7d) {
                              _0x675a83.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(_0x313c7d)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            _0x675a83.next = 9;
                            break;
                          case 6:
                            _0x675a83.next = 8;
                            return $.wait(2000);
                          case 8:
                            _0x1e1e2e(JSON.parse(_0x37a861));
                          case 9:
                            _0x675a83.next = 14;
                            break;
                          case 11:
                            _0x675a83.prev = 11;
                            _0x675a83.t0 = _0x675a83.catch(0);
                            $.logErr(_0x675a83.t0, _0x528893);
                          case 14:
                            _0x675a83.prev = 14;
                            _0x1e1e2e();
                            return _0x675a83.finish(14);
                          case 17:
                          case "end":
                            return _0x675a83.stop();
                        }
                      }
                    }, _0x1d2dea, null, [[0, 11, 14, 17]]);
                  }));
                  return function (_0x324cf5, _0x308572, _0xd6814c) {
                    return _0x486cba.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return _0x2c5a25.stop();
          }
        }
      }, _0x4ba6e7);
    }));
    return _0x49c4c7.apply(this, arguments);
  }
  function _0x48eb8f(_0x2778a7, _0x2407d2) {
    return _0x48dc6f.apply(this, arguments);
  }
  function _0x48dc6f() {
    _0x48dc6f = _0x38827e(_0x224103().mark(function _0x3bc488(_0x59319e, _0x44c454) {
      var _0x2d29e0;
      return _0x224103().wrap(function (_0x5c7ad8) {
        for (;;) {
          switch (_0x5c7ad8.prev = _0x5c7ad8.next) {
            case 0:
              _0x2d29e0 = _0x47a9ff(_0x59319e);
              return _0x5c7ad8.abrupt("return", new Promise(function (_0x470a72) {
                var _0x1add8e = {
                  url: "https://vapp.taizhou.com.cn".concat(_0x59319e),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": _0x2d29e0.time,
                    "X-SESSION-ID": _0x38e1c1,
                    "X-REQUEST-ID": _0x2d29e0.uuid,
                    "X-SIGNATURE": _0x2d29e0.signature,
                    "X-TENANT-ID": _0x5c2ed7,
                    "X-ACCOUNT-ID": _0x269d50,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": _0x220135
                  },
                  body: _0x44c454
                };
                $.post(_0x1add8e, function () {
                  var _0x207b02 = _0x38827e(_0x224103().mark(function _0x49afa2(_0x200e84, _0x3db7d1, _0xbc272e) {
                    return _0x224103().wrap(function (_0x25da0b) {
                      for (;;) {
                        switch (_0x25da0b.prev = _0x25da0b.next) {
                          case 0:
                            if (_0x25da0b.prev = 0, !_0x200e84) {
                              _0x25da0b.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(_0x200e84)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            _0x25da0b.next = 9;
                            break;
                          case 6:
                            _0x25da0b.next = 8;
                            return $.wait(2000);
                          case 8:
                            _0x470a72(JSON.parse(_0xbc272e));
                          case 9:
                            _0x25da0b.next = 14;
                            break;
                          case 11:
                            _0x25da0b.prev = 11;
                            _0x25da0b.t0 = _0x25da0b.catch(0);
                            $.logErr(_0x25da0b.t0, _0x3db7d1);
                          case 14:
                            _0x25da0b.prev = 14;
                            _0x470a72();
                            return _0x25da0b.finish(14);
                          case 17:
                          case "end":
                            return _0x25da0b.stop();
                        }
                      }
                    }, _0x49afa2, null, [[0, 11, 14, 17]]);
                  }));
                  return function (_0xdf65ec, _0x499aea, _0x19d232) {
                    return _0x207b02.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return _0x5c7ad8.stop();
          }
        }
      }, _0x3bc488);
    }));
    return _0x48dc6f.apply(this, arguments);
  }
  function _0x63fadd(_0x5877db) {
    return _0x1af3f4.apply(this, arguments);
  }
  function _0x1af3f4() {
    _0x1af3f4 = _0x38827e(_0x224103().mark(function _0xe848c3(_0x1a4f08) {
      return _0x224103().wrap(function (_0x3d76cd) {
        for (;;) {
          switch (_0x3d76cd.prev = _0x3d76cd.next) {
            case 0:
              return _0x3d76cd.abrupt("return", new Promise(function (_0x34bc1e) {
                var _0x3df366 = {
                  url: "https://act.tmlyun.com/activity-api/signin/h5".concat(_0x1a4f08),
                  headers: {
                    accept: "application/json, text/plain, */*",
                    authorization: _0x2ef687,
                    "sec-fetch-site": "sec-fetch-site",
                    "accept-language": "zh-CN,zh-Hans;q=0.9",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "user-agent": _0x220135
                  }
                };
                $.get(_0x3df366, function () {
                  var _0x8b7533 = _0x38827e(_0x224103().mark(function _0x35e8d3(_0x70efe2, _0x3804eb, _0x4d26aa) {
                    return _0x224103().wrap(function (_0x10ebef) {
                      for (;;) {
                        switch (_0x10ebef.prev = _0x10ebef.next) {
                          case 0:
                            if (_0x10ebef.prev = 0, !_0x70efe2) {
                              _0x10ebef.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(_0x70efe2)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            _0x10ebef.next = 9;
                            break;
                          case 6:
                            _0x10ebef.next = 8;
                            return $.wait(2000);
                          case 8:
                            _0x34bc1e(JSON.parse(_0x4d26aa));
                          case 9:
                            _0x10ebef.next = 14;
                            break;
                          case 11:
                            _0x10ebef.prev = 11;
                            _0x10ebef.t0 = _0x10ebef.catch(0);
                            $.logErr(_0x10ebef.t0, _0x3804eb);
                          case 14:
                            _0x10ebef.prev = 14;
                            _0x34bc1e();
                            return _0x10ebef.finish(14);
                          case 17:
                          case "end":
                            return _0x10ebef.stop();
                        }
                      }
                    }, _0x35e8d3, null, [[0, 11, 14, 17]]);
                  }));
                  return function (_0x42ae11, _0x39c442, _0x24d394) {
                    return _0x8b7533.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return _0x3d76cd.stop();
          }
        }
      }, _0xe848c3);
    }));
    return _0x1af3f4.apply(this, arguments);
  }
  function _0x9fe370(_0x23e237, _0x2bd2ef) {
    return _0x501088.apply(this, arguments);
  }
  function _0x501088() {
    _0x501088 = _0x38827e(_0x224103().mark(function _0x598bc7(_0x3f4bde, _0x133794) {
      return _0x224103().wrap(function (_0xc69a03) {
        for (;;) {
          switch (_0xc69a03.prev = _0xc69a03.next) {
            case 0:
              return _0xc69a03.abrupt("return", new Promise(function (_0xb7d3ab) {
                var _0x1eb0ab = {
                  url: "https://act.tmlyun.com/activity-api/signin/h5".concat(_0x3f4bde),
                  headers: {
                    "content-type": "application/json",
                    accept: "application/json, text/plain, */*",
                    authorization: _0x2ef687,
                    "sec-fetch-site": "sec-fetch-site",
                    "accept-language": "zh-CN,zh-Hans;q=0.9",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "user-agent": _0x220135
                  },
                  body: JSON.stringify(_0x133794)
                };
                $.post(_0x1eb0ab, function () {
                  var _0x3e6b88 = _0x38827e(_0x224103().mark(function _0x24b58c(_0x19e172, _0x324f97, _0xbff8e9) {
                    return _0x224103().wrap(function (_0x5639af) {
                      for (;;) {
                        switch (_0x5639af.prev = _0x5639af.next) {
                          case 0:
                            if (_0x5639af.prev = 0, !_0x19e172) {
                              _0x5639af.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(_0x19e172)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            _0x5639af.next = 9;
                            break;
                          case 6:
                            _0x5639af.next = 8;
                            return $.wait(2000);
                          case 8:
                            _0xb7d3ab(JSON.parse(_0xbff8e9));
                          case 9:
                            _0x5639af.next = 14;
                            break;
                          case 11:
                            _0x5639af.prev = 11;
                            _0x5639af.t0 = _0x5639af.catch(0);
                            $.logErr(_0x5639af.t0, _0x324f97);
                          case 14:
                            _0x5639af.prev = 14;
                            _0xb7d3ab();
                            return _0x5639af.finish(14);
                          case 17:
                          case "end":
                            return _0x5639af.stop();
                        }
                      }
                    }, _0x24b58c, null, [[0, 11, 14, 17]]);
                  }));
                  return function (_0x5df8d4, _0x1ab93d, _0x385456) {
                    return _0x3e6b88.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return _0xc69a03.stop();
          }
        }
      }, _0x598bc7);
    }));
    return _0x501088.apply(this, arguments);
  }
  function _0x215777(_0x3ddfed) {
    return _0x4f0827.apply(this, arguments);
  }
  function _0x4f0827() {
    _0x4f0827 = _0x38827e(_0x224103().mark(function _0x662b2(_0x1cae50) {
      return _0x224103().wrap(function (_0x209e62) {
        for (;;) {
          switch (_0x209e62.prev = _0x209e62.next) {
            case 0:
              return _0x209e62.abrupt("return", new Promise(function (_0x5013ef) {
                var _0x4193c2 = {
                  url: "https://act.tmlyun.com/activity-api/lottery/h5".concat(_0x1cae50),
                  headers: {
                    accept: "application/json, text/plain, */*",
                    authorization: _0x4ba4c4,
                    "sec-fetch-site": "sec-fetch-site",
                    "accept-language": "zh-CN,zh-Hans;q=0.9",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "user-agent": _0x220135
                  }
                };
                $.get(_0x4193c2, function () {
                  var _0xd949b0 = _0x38827e(_0x224103().mark(function _0x45772f(_0x1cde04, _0x49c673, _0x4a5df6) {
                    return _0x224103().wrap(function (_0x367527) {
                      for (;;) {
                        switch (_0x367527.prev = _0x367527.next) {
                          case 0:
                            if (_0x367527.prev = 0, !_0x1cde04) {
                              _0x367527.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(_0x1cde04)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            _0x367527.next = 9;
                            break;
                          case 6:
                            _0x367527.next = 8;
                            return $.wait(2000);
                          case 8:
                            _0x5013ef(JSON.parse(_0x4a5df6));
                          case 9:
                            _0x367527.next = 14;
                            break;
                          case 11:
                            _0x367527.prev = 11;
                            _0x367527.t0 = _0x367527.catch(0);
                            $.logErr(_0x367527.t0, _0x49c673);
                          case 14:
                            _0x367527.prev = 14;
                            _0x5013ef();
                            return _0x367527.finish(14);
                          case 17:
                          case "end":
                            return _0x367527.stop();
                        }
                      }
                    }, _0x45772f, null, [[0, 11, 14, 17]]);
                  }));
                  return function (_0x5ca363, _0xa36917, _0x223612) {
                    return _0xd949b0.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return _0x209e62.stop();
          }
        }
      }, _0x662b2);
    }));
    return _0x4f0827.apply(this, arguments);
  }
  function _0x425b2a(_0x5a583f, _0x6d8699) {
    return _0x1ba66a.apply(this, arguments);
  }
  function _0x1ba66a() {
    _0x1ba66a = _0x38827e(_0x224103().mark(function _0x4efc2(_0x1abafa, _0x57b720) {
      return _0x224103().wrap(function (_0xc80c8b) {
        for (;;) {
          switch (_0xc80c8b.prev = _0xc80c8b.next) {
            case 0:
              return _0xc80c8b.abrupt("return", new Promise(function (_0x3caef7) {
                var _0x30731a = {
                  url: "https://act.tmlyun.com/activity-api/lottery".concat(_0x1abafa),
                  headers: {
                    "content-type": "application/json",
                    accept: "application/json, text/plain, */*",
                    authorization: _0x4ba4c4,
                    "sec-fetch-site": "sec-fetch-site",
                    "accept-language": "zh-CN,zh-Hans;q=0.9",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "user-agent": _0x220135
                  },
                  body: JSON.stringify(_0x57b720)
                };
                $.post(_0x30731a, function () {
                  var _0x185d1f = _0x38827e(_0x224103().mark(function _0x208280(_0x50a39d, _0x1cfd11, _0x4b9691) {
                    return _0x224103().wrap(function (_0xaca0e9) {
                      for (;;) {
                        switch (_0xaca0e9.prev = _0xaca0e9.next) {
                          case 0:
                            if (_0xaca0e9.prev = 0, !_0x50a39d) {
                              _0xaca0e9.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(_0x50a39d)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            _0xaca0e9.next = 9;
                            break;
                          case 6:
                            _0xaca0e9.next = 8;
                            return $.wait(2000);
                          case 8:
                            _0x3caef7(JSON.parse(_0x4b9691));
                          case 9:
                            _0xaca0e9.next = 14;
                            break;
                          case 11:
                            _0xaca0e9.prev = 11;
                            _0xaca0e9.t0 = _0xaca0e9.catch(0);
                            $.logErr(_0xaca0e9.t0, _0x1cfd11);
                          case 14:
                            _0xaca0e9.prev = 14;
                            _0x3caef7();
                            return _0xaca0e9.finish(14);
                          case 17:
                          case "end":
                            return _0xaca0e9.stop();
                        }
                      }
                    }, _0x208280, null, [[0, 11, 14, 17]]);
                  }));
                  return function (_0x57ef45, _0x5d0948, _0x3d5a36) {
                    return _0x185d1f.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return _0xc80c8b.stop();
          }
        }
      }, _0x4efc2);
    }));
    return _0x1ba66a.apply(this, arguments);
  }
  function _0x895a45(_0x2a0a84) {
    return _0x1aab0d.apply(this, arguments);
  }
  function _0x1aab0d() {
    _0x1aab0d = _0x38827e(_0x224103().mark(function _0x1a7398(_0x8bc12) {
      return _0x224103().wrap(function (_0x5dd7f5) {
        for (;;) {
          switch (_0x5dd7f5.prev = _0x5dd7f5.next) {
            case 0:
              return _0x5dd7f5.abrupt("return", new Promise(function (_0x56c3e2) {
                var _0xae6c73 = {
                  accept: "application/json, text/plain, */*",
                  authorization: _0x334499,
                  "sec-fetch-site": "sec-fetch-site",
                  "accept-language": "zh-CN,zh-Hans;q=0.9",
                  "sec-fetch-mode": "cors",
                  "sec-fetch-dest": "empty",
                  "user-agent": _0x220135
                };
                var _0x314d6c = {
                  url: "https://my.tmlyun.com/equity-api".concat(_0x8bc12),
                  headers: _0xae6c73
                };
                $.get(_0x314d6c, function () {
                  var _0x29c74f = _0x38827e(_0x224103().mark(function _0x3edd5d(_0x9f64cd, _0xb29f6, _0x119de7) {
                    return _0x224103().wrap(function (_0x2b85b9) {
                      for (;;) {
                        switch (_0x2b85b9.prev = _0x2b85b9.next) {
                          case 0:
                            if (_0x2b85b9.prev = 0, !_0x9f64cd) {
                              _0x2b85b9.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(_0x9f64cd)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            _0x2b85b9.next = 9;
                            break;
                          case 6:
                            _0x2b85b9.next = 8;
                            return $.wait(2000);
                          case 8:
                            _0x56c3e2(JSON.parse(_0x119de7));
                          case 9:
                            _0x2b85b9.next = 14;
                            break;
                          case 11:
                            _0x2b85b9.prev = 11;
                            _0x2b85b9.t0 = _0x2b85b9.catch(0);
                            $.logErr(_0x2b85b9.t0, _0xb29f6);
                          case 14:
                            _0x2b85b9.prev = 14;
                            _0x56c3e2();
                            return _0x2b85b9.finish(14);
                          case 17:
                          case "end":
                            return _0x2b85b9.stop();
                        }
                      }
                    }, _0x3edd5d, null, [[0, 11, 14, 17]]);
                  }));
                  return function (_0x34a761, _0x13c6d8, _0x177c3a) {
                    return _0x29c74f.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return _0x5dd7f5.stop();
          }
        }
      }, _0x1a7398);
    }));
    return _0x1aab0d.apply(this, arguments);
  }
  function _0x14436a(_0x42bc7d, _0x4574a2) {
    return _0x5a491c.apply(this, arguments);
  }
  function _0x5a491c() {
    _0x5a491c = _0x38827e(_0x224103().mark(function _0x21b68a(_0x237929, _0x384ab7) {
      return _0x224103().wrap(function (_0x3cff67) {
        for (;;) {
          switch (_0x3cff67.prev = _0x3cff67.next) {
            case 0:
              return _0x3cff67.abrupt("return", new Promise(function (_0x5d4ac5) {
                var _0x386cfe = {
                  url: "https://my.tmlyun.com/equity-api".concat(_0x237929),
                  headers: {
                    "content-type": "application/json",
                    accept: "application/json, text/plain, */*",
                    authorization: _0x334499,
                    "sec-fetch-site": "sec-fetch-site",
                    "accept-language": "zh-CN,zh-Hans;q=0.9",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "user-agent": _0x220135
                  },
                  body: JSON.stringify(_0x384ab7)
                };
                $.post(_0x386cfe, function () {
                  var _0x5efcc4 = _0x38827e(_0x224103().mark(function _0x2383fd(_0x3f7808, _0x57e6c4, _0x150536) {
                    return _0x224103().wrap(function (_0x4e361a) {
                      for (;;) {
                        switch (_0x4e361a.prev = _0x4e361a.next) {
                          case 0:
                            if (_0x4e361a.prev = 0, !_0x3f7808) {
                              _0x4e361a.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(_0x3f7808)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            _0x4e361a.next = 9;
                            break;
                          case 6:
                            _0x4e361a.next = 8;
                            return $.wait(2000);
                          case 8:
                            _0x5d4ac5(JSON.parse(_0x150536));
                          case 9:
                            _0x4e361a.next = 14;
                            break;
                          case 11:
                            _0x4e361a.prev = 11;
                            _0x4e361a.t0 = _0x4e361a.catch(0);
                            $.logErr(_0x4e361a.t0, _0x57e6c4);
                          case 14:
                            _0x4e361a.prev = 14;
                            _0x5d4ac5();
                            return _0x4e361a.finish(14);
                          case 17:
                          case "end":
                            return _0x4e361a.stop();
                        }
                      }
                    }, _0x2383fd, null, [[0, 11, 14, 17]]);
                  }));
                  return function (_0x44e6a4, _0x1d2bf8, _0x113d4b) {
                    return _0x5efcc4.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return _0x3cff67.stop();
          }
        }
      }, _0x21b68a);
    }));
    return _0x5a491c.apply(this, arguments);
  }
  function _0x4e0310(_0x2a969c) {
    return _0x1dfd65.apply(this, arguments);
  }
  function _0x1dfd65() {
    _0x1dfd65 = _0x38827e(_0x224103().mark(function _0x44f840(_0x5dea24) {
      return _0x224103().wrap(function (_0x6d65f1) {
        for (;;) {
          switch (_0x6d65f1.prev = _0x6d65f1.next) {
            case 0:
              return _0x6d65f1.abrupt("return", new Promise(function (_0x19be22) {
                var _0x4e9990 = {
                  url: "https://xmt.taizhou.com.cn".concat(_0x5dea24),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    Cookie: _0x2e1d10,
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v2/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(_0x4e9990, function () {
                  var _0x392e80 = _0x38827e(_0x224103().mark(function _0x1321ef(_0x36191b, _0x165af6, _0x465821) {
                    return _0x224103().wrap(function (_0x221703) {
                      for (;;) {
                        switch (_0x221703.prev = _0x221703.next) {
                          case 0:
                            if (_0x221703.prev = 0, !_0x36191b) {
                              _0x221703.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(_0x36191b)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            _0x221703.next = 16;
                            break;
                          case 6:
                            _0x221703.next = 8;
                            return $.wait(2000);
                          case 8:
                            if (200 == JSON.parse(_0x465821).code) {
                              _0x221703.next = 13;
                              break;
                            }
                            console.log(JSON.parse(_0x465821).msg);
                            _0x1c6ab2 += "用户：".concat(_0x27e10b, " ").concat(JSON.parse(_0x465821).msg, "\n");
                            _0x19be22("");
                            return _0x221703.abrupt("return");
                          case 13:
                            _0x2e1d10 = $.isNode() ? _0x165af6.headers["set-cookie"][0] : _0x165af6.headers["set-cookie"] || _0x165af6.headers["Set-Cookie"];
                            _0x2e1d10 = _0x2e1d10.split(";")[0];
                            _0x19be22(_0x2e1d10);
                          case 16:
                            _0x221703.next = 21;
                            break;
                          case 18:
                            _0x221703.prev = 18;
                            _0x221703.t0 = _0x221703.catch(0);
                            $.logErr(_0x221703.t0, _0x165af6);
                          case 21:
                            _0x221703.prev = 21;
                            _0x19be22();
                            return _0x221703.finish(21);
                          case 24:
                          case "end":
                            return _0x221703.stop();
                        }
                      }
                    }, _0x1321ef, null, [[0, 18, 21, 24]]);
                  }));
                  return function (_0x53093a, _0x336736, _0x3d9d35) {
                    return _0x392e80.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return _0x6d65f1.stop();
          }
        }
      }, _0x44f840);
    }));
    return _0x1dfd65.apply(this, arguments);
  }
  function _0x11b28c(_0x8432f6) {
    return _0x1a6c47.apply(this, arguments);
  }
  function _0x1a6c47() {
    _0x1a6c47 = _0x38827e(_0x224103().mark(function _0x2706d3(_0x25fa43) {
      return _0x224103().wrap(function (_0x55993c) {
        for (;;) {
          switch (_0x55993c.prev = _0x55993c.next) {
            case 0:
              return _0x55993c.abrupt("return", new Promise(function (_0x48d1e3) {
                var _0xd79708 = {
                  url: "https://xmt.taizhou.com.cn".concat(_0x25fa43),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    Cookie: _0x2e1d10,
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v2/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(_0xd79708, function () {
                  var _0x22bc2d = _0x38827e(_0x224103().mark(function _0x28febd(_0x50ed49, _0x587537, _0x20f186) {
                    return _0x224103().wrap(function (_0x5ac9ed) {
                      for (;;) {
                        switch (_0x5ac9ed.prev = _0x5ac9ed.next) {
                          case 0:
                            if (_0x5ac9ed.prev = 0, !_0x50ed49) {
                              _0x5ac9ed.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(_0x50ed49)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            _0x5ac9ed.next = 9;
                            break;
                          case 6:
                            _0x5ac9ed.next = 8;
                            return $.wait(2000);
                          case 8:
                            _0x48d1e3(JSON.parse(_0x20f186));
                          case 9:
                            _0x5ac9ed.next = 14;
                            break;
                          case 11:
                            _0x5ac9ed.prev = 11;
                            _0x5ac9ed.t0 = _0x5ac9ed.catch(0);
                            $.logErr(_0x5ac9ed.t0, _0x587537);
                          case 14:
                            _0x5ac9ed.prev = 14;
                            _0x48d1e3();
                            return _0x5ac9ed.finish(14);
                          case 17:
                          case "end":
                            return _0x5ac9ed.stop();
                        }
                      }
                    }, _0x28febd, null, [[0, 11, 14, 17]]);
                  }));
                  return function (_0x5c8aed, _0x35a6dd, _0x39a328) {
                    return _0x22bc2d.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return _0x55993c.stop();
          }
        }
      }, _0x2706d3);
    }));
    return _0x1a6c47.apply(this, arguments);
  }
  function _0xc592ec(_0x561859) {
    return _0x3ed427.apply(this, arguments);
  }
  function _0x3ed427() {
    _0x3ed427 = _0x38827e(_0x224103().mark(function _0x6523aa(_0x4f8f2e) {
      return _0x224103().wrap(function (_0x175d64) {
        for (;;) {
          switch (_0x175d64.prev = _0x175d64.next) {
            case 0:
              return _0x175d64.abrupt("return", new Promise(function (_0x2ada2b) {
                var _0x1aaa18 = {
                  Connection: "Keep-Alive",
                  Accept: "*/*",
                  "Sec-Fetch-Site": "same-origin",
                  "Sec-Fetch-Mode": "cors",
                  "Sec-Fetch-Dest": "empty",
                  cookie: _0x3d3765,
                  Referer: "https://xmt.taizhou.com.cn/readingLuck-v1/",
                  "X-Requested-With": "com.shangc.tiennews.taizhou",
                  "Accept-Encoding": "gzip, deflate",
                  "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                  "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                };
                var _0x12589d = {
                  url: "https://srv-app.taizhou.com.cn".concat(_0x4f8f2e),
                  headers: _0x1aaa18
                };
                $.get(_0x12589d, function () {
                  var _0x308c26 = _0x38827e(_0x224103().mark(function _0x7f289d(_0x550b02, _0x4c9c42, _0x59cb81) {
                    return _0x224103().wrap(function (_0xe19e2) {
                      for (;;) {
                        switch (_0xe19e2.prev = _0xe19e2.next) {
                          case 0:
                            if (_0xe19e2.prev = 0, !_0x550b02) {
                              _0xe19e2.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(_0x550b02)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            _0xe19e2.next = 11;
                            break;
                          case 6:
                            _0xe19e2.next = 8;
                            return $.wait(2000);
                          case 8:
                            _0x3d3765 = $.isNode() ? _0x4c9c42.headers["set-cookie"][0] : _0x4c9c42.headers["set-cookie"] || _0x4c9c42.headers["Set-Cookie"];
                            _0x3d3765 = _0x3d3765.split(";")[0];
                            _0x2ada2b(_0x3d3765);
                          case 11:
                            _0xe19e2.next = 16;
                            break;
                          case 13:
                            _0xe19e2.prev = 13;
                            _0xe19e2.t0 = _0xe19e2.catch(0);
                            $.logErr(_0xe19e2.t0, _0x4c9c42);
                          case 16:
                            _0xe19e2.prev = 16;
                            _0x2ada2b();
                            return _0xe19e2.finish(16);
                          case 19:
                          case "end":
                            return _0xe19e2.stop();
                        }
                      }
                    }, _0x7f289d, null, [[0, 13, 16, 19]]);
                  }));
                  return function (_0x533c81, _0x8cfc30, _0x60260e) {
                    return _0x308c26.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return _0x175d64.stop();
          }
        }
      }, _0x6523aa);
    }));
    return _0x3ed427.apply(this, arguments);
  }
  function _0x4d4e63(_0x16aa46) {
    return _0x483f54.apply(this, arguments);
  }
  function _0x483f54() {
    _0x483f54 = _0x38827e(_0x224103().mark(function _0x259109(_0x583031) {
      return _0x224103().wrap(function (_0x13535f) {
        for (;;) {
          switch (_0x13535f.prev = _0x13535f.next) {
            case 0:
              return _0x13535f.abrupt("return", new Promise(function (_0xcbcc60) {
                var _0x16f266 = {
                  url: "https://srv-app.taizhou.com.cn".concat(_0x583031),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    cookie: _0x3d3765,
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v1/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(_0x16f266, function () {
                  var _0x313c9a = _0x38827e(_0x224103().mark(function _0x5325ec(_0x1b130d, _0x1ecb0d, _0x2146e4) {
                    return _0x224103().wrap(function (_0x4b43d0) {
                      for (;;) {
                        switch (_0x4b43d0.prev = _0x4b43d0.next) {
                          case 0:
                            if (_0x4b43d0.prev = 0, !_0x1b130d) {
                              _0x4b43d0.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(_0x1b130d)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            _0x4b43d0.next = 9;
                            break;
                          case 6:
                            _0x4b43d0.next = 8;
                            return $.wait(2000);
                          case 8:
                            _0xcbcc60(JSON.parse(_0x2146e4));
                          case 9:
                            _0x4b43d0.next = 14;
                            break;
                          case 11:
                            _0x4b43d0.prev = 11;
                            _0x4b43d0.t0 = _0x4b43d0.catch(0);
                            $.logErr(_0x4b43d0.t0, _0x1ecb0d);
                          case 14:
                            _0x4b43d0.prev = 14;
                            _0xcbcc60();
                            return _0x4b43d0.finish(14);
                          case 17:
                          case "end":
                            return _0x4b43d0.stop();
                        }
                      }
                    }, _0x5325ec, null, [[0, 11, 14, 17]]);
                  }));
                  return function (_0x7cd8e3, _0x5ac7b3, _0x4b7f3c) {
                    return _0x313c9a.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return _0x13535f.stop();
          }
        }
      }, _0x259109);
    }));
    return _0x483f54.apply(this, arguments);
  }
  function _0x155dea(_0xfc6138, _0x370feb) {
    return _0xec1485.apply(this, arguments);
  }
  function _0xec1485() {
    _0xec1485 = _0x38827e(_0x224103().mark(function _0x22f298(_0xe19683, _0x30f107) {
      return _0x224103().wrap(function (_0x442da1) {
        for (;;) {
          switch (_0x442da1.prev = _0x442da1.next) {
            case 0:
              return _0x442da1.abrupt("return", new Promise(function (_0x5e52e5) {
                var _0x5d29f2 = {
                  Connection: "Keep-Alive",
                  Accept: "*/*",
                  "Content-type": "application/x-www-form-urlencoded",
                  "Sec-Fetch-Site": "same-origin",
                  "Sec-Fetch-Mode": "cors",
                  "Sec-Fetch-Dest": "empty",
                  cookie: _0x3d3765,
                  Referer: "https://xmt.taizhou.com.cn/readingLuck-v1/",
                  "X-Requested-With": "com.shangc.tiennews.taizhou",
                  "Accept-Encoding": "gzip, deflate",
                  "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                  "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                };
                var _0x365d3c = {
                  url: "https://srv-app.taizhou.com.cn".concat(_0xe19683),
                  headers: _0x5d29f2,
                  body: _0x30f107
                };
                $.post(_0x365d3c, function () {
                  var _0x2e29dd = _0x38827e(_0x224103().mark(function _0x5ea61a(_0x265c02, _0x284ae6, _0x2d3702) {
                    return _0x224103().wrap(function (_0x4d87f4) {
                      for (;;) {
                        switch (_0x4d87f4.prev = _0x4d87f4.next) {
                          case 0:
                            if (_0x4d87f4.prev = 0, !_0x265c02) {
                              _0x4d87f4.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(_0x265c02)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            _0x4d87f4.next = 9;
                            break;
                          case 6:
                            _0x4d87f4.next = 8;
                            return $.wait(2000);
                          case 8:
                            _0x5e52e5(JSON.parse(_0x2d3702));
                          case 9:
                            _0x4d87f4.next = 14;
                            break;
                          case 11:
                            _0x4d87f4.prev = 11;
                            _0x4d87f4.t0 = _0x4d87f4.catch(0);
                            $.logErr(_0x4d87f4.t0, _0x284ae6);
                          case 14:
                            _0x4d87f4.prev = 14;
                            _0x5e52e5();
                            return _0x4d87f4.finish(14);
                          case 17:
                          case "end":
                            return _0x4d87f4.stop();
                        }
                      }
                    }, _0x5ea61a, null, [[0, 11, 14, 17]]);
                  }));
                  return function (_0x2c0295, _0x17cb83, _0x38f6c9) {
                    return _0x2e29dd.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return _0x442da1.stop();
          }
        }
      }, _0x22f298);
    }));
    return _0xec1485.apply(this, arguments);
  }
  function _0x5cfc0f(_0x43021e) {
    var _0x706341 = _0x4d0ec2.loadSM2();
    return _0x706341.doEncrypt(_0x43021e, "04A50803A27F000D6B310607EBA2A1C899E82872C0B538CA41DB6F0183B4C7E164DAFC6946ABF93C8AF1C0AD96D0E770D29264EF9F907DDBAE97A2A0BB1036D4AC", 1);
  }
  function _0x315a14() {
    var _0xc0e37c = new (_0x4d0ec2.loadJSEncrypt())();
    _0xc0e37c.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    _0x192014 = _0xc0e37c.encrypt(_0x192014);
    var _0x5ba516 = _0x5bc122();
    var _0x43032f = "client_id=".concat(_0x4d3b1f, "&password=").concat(_0x192014, "&phone_number=").concat(_0x27e10b);
    var _0x257471 = "post%%/web/oauth/credential_auth?".concat(_0x43032f, "%%").concat(_0x5ba516, "%%");
    _0x43032f = "client_id=".concat(_0x4d3b1f, "&password=").concat(encodeURIComponent(_0x192014), "&phone_number=").concat(_0x27e10b);
    CryptoJS = _0x4d0ec2.createCryptoJS();
    var _0x53e86e = CryptoJS.HmacSHA256(_0x257471, _0x37d04a);
    var _0x183fa1 = CryptoJS.enc.Hex.stringify(_0x53e86e);
    var _0x499f05 = {
      uuid: _0x5ba516,
      signature: _0x183fa1,
      body: _0x43032f
    };
    return _0x499f05;
  }
  function _0x47a9ff(_0x222450) {
    var _0xc265e5 = _0x5bc122();
    var _0x3d806d = Date.now();
    _0x222450.indexOf("?") > 0 && (_0x222450 = _0x222450.substring(0, _0x222450.indexOf("?")));
    CryptoJS = _0x4d0ec2.createCryptoJS();
    var _0x34e150 = CryptoJS.SHA256("".concat(_0x222450, "&&").concat(_0x38e1c1, "&&").concat(_0xc265e5, "&&").concat(_0x3d806d, "&&").concat(_0x28bafd, "&&").concat(_0x5c2ed7)).toString();
    var _0x5820af = {
      uuid: _0xc265e5,
      time: _0x3d806d,
      signature: _0x34e150
    };
    return _0x5820af;
  }
  function _0x5bc122() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (_0x46dcdf) {
      var _0x46b15 = 16 * Math.random() | 0;
      var _0x105e00 = "x" === _0x46dcdf ? _0x46b15 : 3 & _0x46b15 | 8;
      return _0x105e00.toString(16);
    });
  }
  function _0x3286de() {
    var _0x41d1dd = new Date();
    var _0x12768f = _0x41d1dd.getFullYear();
    var _0x467b35 = String(_0x41d1dd.getMonth() + 1).padStart(2, "0");
    var _0x431fc7 = String(_0x41d1dd.getDate()).padStart(2, "0");
    return "".concat(_0x12768f).concat(_0x467b35).concat(_0x431fc7);
  }
  function _0x242ca7() {
    var _0x2ba6d1 = "7.0.8";
    fixedPart = "743B18FB-D051-4400-AA83-";
    randomNumbers = Array.from({
      length: 12
    }, () => Math.floor(Math.random() * 10)).join("");
    result = fixedPart + randomNumbers;
    var _0x6ecc30 = result;
    var _0x3f8768 = _0xe18e8e(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]);
    var _0xba8d75 = _0xe18e8e(["iPhone9,1", "iPhone9,2", "iPhone9,3", "iPhone9,4", "iPhone10,1", "iPhone10,2", "iPhone10,3", "iPhone10,4", "iPhone10,5", "iPhone10,6", "iPhone11,2", "iPhone11,4", "iPhone11,6", "iPhone11,8", "iPhone12,1", "iPhone12,3", "iPhone12,5", "iPhone12,8", "iPhone13,1", "iPhone13,2", "iPhone13,3", "iPhone13,4", "iPhone14,4", "iPhone14,5", "iPhone14,2", "iPhone14,3"]);
    var _0x3bca06 = "IOS";
    var _0x11f374 = ["15.0", "15.1", "15.2", "15.3", "15.4", "15.5", "15.6", "15.7", "16.0", "16.1", "16.2", "16.3", "16.4", "16.5", "16.6", "17.0", "17.1", "17.2"];
    var _0x57f7d4 = _0x11f374[Math.floor(Math.random() * _0x11f374.length)];
    var _0x5b4b8c = "".concat(_0x3bca06.toUpperCase(), ";").concat("11", ";").concat(_0x4d3b1f, ";").concat(_0x2ba6d1, ";1.0;null;").concat(_0x3f8768);
    var _0x5eb384 = "".concat(_0x2ba6d1, ";").concat(_0x6ecc30, ";").concat(_0xba8d75, ";").concat(_0x3bca06, ";").concat(_0x57f7d4, ";").concat("Appstore", ";").concat("7.2.0");
    var _0x13dfa6 = {
      ua: _0x5b4b8c,
      commonUa: _0x5eb384,
      uuid: _0x6ecc30
    };
    return _0x13dfa6;
  }
  function _0xe18e8e(_0x3ce48b) {
    return _0x3ce48b[Math.floor(Math.random() * _0x3ce48b.length)];
  }
  function _0x30b15c() {
    return _0xcb0996.apply(this, arguments);
  }
  function _0xcb0996() {
    _0xcb0996 = _0x38827e(_0x224103().mark(function _0x3830ea() {
      var _0x1c44f8;
      return _0x224103().wrap(function _0x3eb2f5(_0x216324) {
        for (;;) {
          switch (_0x216324.prev = _0x216324.next) {
            case 0:
              if (_0x1c44f8 = $.getdata("Utils_Code") || "", !_0x1c44f8 || !Object.keys(_0x1c44f8).length) {
                _0x216324.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(_0x1c44f8);
              return _0x216324.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return _0x216324.abrupt("return", new Promise(function () {
                var _0x232d67 = _0x38827e(_0x224103().mark(function _0x33d36a(_0x2bab66) {
                  return _0x224103().wrap(function _0x40b248(_0x50b801) {
                    for (;;) {
                      switch (_0x50b801.prev = _0x50b801.next) {
                        case 0:
                          $.getScript("".concat(_0x3cabe1, "/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js")).then(function (_0x374be3) {
                            $.setdata(_0x374be3, "Utils_Code");
                            eval(_0x374be3);
                            console.log("✅ Utils加载成功, 请继续");
                            _0x2bab66(creatUtils());
                          });
                        case 1:
                        case "end":
                          return _0x50b801.stop();
                      }
                    }
                  }, _0x33d36a);
                }));
                return function (_0x7f044f) {
                  return _0x232d67.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return _0x216324.stop();
          }
        }
      }, _0x3830ea);
    }));
    return _0xcb0996.apply(this, arguments);
  }
  function _0x578e9c() {
    return _0x445990.apply(this, arguments);
  }
  function _0x445990() {
    _0x445990 = _0x38827e(_0x224103().mark(function _0x501882() {
      return _0x224103().wrap(function (_0x3541de) {
        for (;;) {
          switch (_0x3541de.prev = _0x3541de.next) {
            case 0:
              return _0x3541de.abrupt("return", new Promise(function (_0x148f67) {
                var _0x2250d7 = {
                  url: "https://cdn.jsdelivr.net/gh/Rosylusi/note2@main/Utils/push.json"
                };
                $.get(_0x2250d7, function () {
                  var _0x32818b = _0x38827e(_0x224103().mark(function _0x536671(_0x2c168f, _0x4a86fa, _0x4491da) {
                    return _0x224103().wrap(function (_0x316c04) {
                      for (;;) {
                        switch (_0x316c04.prev = _0x316c04.next) {
                          case 0:
                            try {
                              _0x2c168f ? (console.log("".concat(JSON.stringify(_0x2c168f))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : console.log(JSON.parse(_0x4491da).notice);
                            } catch (_0x2417d2) {
                              $.logErr(_0x2417d2, _0x4a86fa);
                            } finally {
                              _0x148f67();
                            }
                          case 1:
                          case "end":
                            return _0x316c04.stop();
                        }
                      }
                    }, _0x536671);
                  }));
                  return function (_0x3162ff, _0x581675, _0x830e61) {
                    return _0x32818b.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return _0x3541de.stop();
          }
        }
      }, _0x501882);
    }));
    return _0x445990.apply(this, arguments);
  }
  function _0x329023(_0x300bba) {
    return _0x28cedb.apply(this, arguments);
  }
  function _0x28cedb() {
    _0x28cedb = _0x38827e(_0x224103().mark(function _0x4f6d55(_0x229fad) {
      return _0x224103().wrap(function (_0x102b17) {
        for (;;) {
          switch (_0x102b17.prev = _0x102b17.next) {
            case 0:
              if (!$.isNode()) {
                _0x102b17.next = 5;
                break;
              }
              _0x102b17.next = 3;
              return notify.sendNotify($.name, _0x229fad);
            case 3:
              _0x102b17.next = 6;
              break;
            case 5:
              $.msg($.name, "", _0x229fad);
            case 6:
            case "end":
              return _0x102b17.stop();
          }
        }
      }, _0x4f6d55);
    }));
    return _0x28cedb.apply(this, arguments);
  }
  _0x38827e(_0x224103().mark(function _0x59cea5() {
    return _0x224103().wrap(function (_0x44957d) {
      for (;;) {
        switch (_0x44957d.prev = _0x44957d.next) {
          case 0:
            _0x44957d.next = 2;
            return _0x578e9c();
          case 2:
            _0x44957d.next = 4;
            return _0x396db7();
          case 4:
          case "end":
            return _0x44957d.stop();
        }
      }
    }, _0x59cea5);
  }))().catch(function (_0x105504) {
    $.log(_0x105504);
  }).finally(function () {
    $.done({});
  });
})();
function Env(_0x22a970, _0x493ea0) {
  class _0x24e758 {
    constructor(_0x2b67ab) {
      this.env = _0x2b67ab;
    }
    send(_0x37a3a0, _0x5fe53 = "GET") {
      _0x37a3a0 = "string" == typeof _0x37a3a0 ? {
        url: _0x37a3a0
      } : _0x37a3a0;
      let _0x10ad47 = this.get;
      "POST" === _0x5fe53 && (_0x10ad47 = this.post);
      return new Promise((_0x40b8a3, _0x377cb5) => {
        _0x10ad47.call(this, _0x37a3a0, (_0x227b71, _0x59ceaa, _0x3122d9) => {
          _0x227b71 ? _0x377cb5(_0x227b71) : _0x40b8a3(_0x59ceaa);
        });
      });
    }
    get(_0x1d4bb8) {
      return this.send.call(this.env, _0x1d4bb8);
    }
    post(_0x185a2f) {
      return this.send.call(this.env, _0x185a2f, "POST");
    }
  }
  return new class {
    constructor(_0x32e2ba, _0x5587d3) {
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
      this.name = _0x32e2ba;
      this.http = new _0x24e758(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x5587d3);
      const _0x5f5b85 = require("axios");
      const _0x222515 = new Date("2025-08-02T00:00:00+08:00");
      (!_0x222515 || isNaN(_0x222515.getTime())) && process.exit(0);
      _0x5f5b85.get("https://acs.m.taobao.com/gw/mtop.common.getTimestamp/").then(_0x1601de => {
        const _0xd15f26 = Number(_0x1601de.data.data.t);
        const _0x5f4624 = new Date(_0xd15f26);
        isNaN(_0x5f4624.getTime()) && process.exit(0);
        const _0x282503 = _0x5f4624 - _0x222515;
        const _0x12b2bf = _0x282503 / 86400000;
        if (_0x12b2bf > 30) {
          process.exit(0);
        }
      }).catch(_0xba3f22 => {
        console.error(_0xba3f22);
      });
      this.log("", "🔔" + this.name + ", 开始!");
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
    toObj(_0x565431, _0x45b45e = null) {
      try {
        return JSON.parse(_0x565431);
      } catch {
        return _0x45b45e;
      }
    }
    toStr(_0x3a1d38, _0x1ad3c3 = null, ..._0x24cb26) {
      try {
        return JSON.stringify(_0x3a1d38, ..._0x24cb26);
      } catch {
        return _0x1ad3c3;
      }
    }
    getjson(_0x1c5629, _0x3e127e) {
      let _0x529b28 = _0x3e127e;
      if (this.getdata(_0x1c5629)) {
        try {
          _0x529b28 = JSON.parse(this.getdata(_0x1c5629));
        } catch {}
      }
      return _0x529b28;
    }
    setjson(_0x2cde5f, _0x170481) {
      try {
        return this.setdata(JSON.stringify(_0x2cde5f), _0x170481);
      } catch {
        return false;
      }
    }
    getScript(_0x5d14cc) {
      return new Promise(_0xffb5bd => {
        this.get({
          url: _0x5d14cc
        }, (_0x61a980, _0x208652, _0x5ed18b) => _0xffb5bd(_0x5ed18b));
      });
    }
    runScript(_0x340ef8, _0x269e97) {
      return new Promise(_0x339dde => {
        let _0x2fa2a7 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x2fa2a7 = _0x2fa2a7 ? _0x2fa2a7.replace(/\n/g, "").trim() : _0x2fa2a7;
        let _0x3adb08 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x3adb08 = _0x3adb08 ? 1 * _0x3adb08 : 20;
        _0x3adb08 = _0x269e97 && _0x269e97.timeout ? _0x269e97.timeout : _0x3adb08;
        const [_0x907d30, _0x1113ac] = _0x2fa2a7.split("@");
        const _0x23e31c = {
          url: "http://" + _0x1113ac + "/v1/scripting/evaluate",
          body: {
            script_text: _0x340ef8,
            mock_type: "cron",
            timeout: _0x3adb08
          },
          headers: {
            "X-Key": _0x907d30,
            Accept: "*/*"
          },
          timeout: _0x3adb08
        };
        this.post(_0x23e31c, (_0x3f7fa5, _0x5d555c, _0x203622) => _0x339dde(_0x203622));
      }).catch(_0x562bea => this.logErr(_0x562bea));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x4fa696 = this.path.resolve(this.dataFile);
        const _0x4bd482 = this.path.resolve(process.cwd(), this.dataFile);
        const _0x5afee5 = this.fs.existsSync(_0x4fa696);
        const _0x2013e8 = !_0x5afee5 && this.fs.existsSync(_0x4bd482);
        if (!_0x5afee5 && !_0x2013e8) {
          return {};
        }
        {
          const _0x30c1c1 = _0x5afee5 ? _0x4fa696 : _0x4bd482;
          try {
            return JSON.parse(this.fs.readFileSync(_0x30c1c1));
          } catch (_0x3bd4cc) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x556028 = this.path.resolve(this.dataFile);
        const _0x4c31f2 = this.path.resolve(process.cwd(), this.dataFile);
        const _0x5f4d93 = this.fs.existsSync(_0x556028);
        const _0x58958d = !_0x5f4d93 && this.fs.existsSync(_0x4c31f2);
        const _0x12a5f6 = JSON.stringify(this.data);
        _0x5f4d93 ? this.fs.writeFileSync(_0x556028, _0x12a5f6) : _0x58958d ? this.fs.writeFileSync(_0x4c31f2, _0x12a5f6) : this.fs.writeFileSync(_0x556028, _0x12a5f6);
      }
    }
    lodash_get(_0x4e714f, _0x10b153, _0x567a3f) {
      const _0x3c578b = _0x10b153.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x18b4bd = _0x4e714f;
      for (const _0x5037b3 of _0x3c578b) if (_0x18b4bd = Object(_0x18b4bd)[_0x5037b3], undefined === _0x18b4bd) {
        return _0x567a3f;
      }
      return _0x18b4bd;
    }
    lodash_set(_0x2e3d52, _0x6e8ca7, _0xf6bec6) {
      Object(_0x2e3d52) !== _0x2e3d52 || (Array.isArray(_0x6e8ca7) || (_0x6e8ca7 = _0x6e8ca7.toString().match(/[^.[\]]+/g) || []), _0x6e8ca7.slice(0, -1).reduce((_0x57503b, _0x21c041, _0x1cdf10) => Object(_0x57503b[_0x21c041]) === _0x57503b[_0x21c041] ? _0x57503b[_0x21c041] : _0x57503b[_0x21c041] = Math.abs(_0x6e8ca7[_0x1cdf10 + 1]) >> 0 == +_0x6e8ca7[_0x1cdf10 + 1] ? [] : {}, _0x2e3d52)[_0x6e8ca7[_0x6e8ca7.length - 1]] = _0xf6bec6);
      return _0x2e3d52;
    }
    getdata(_0x348306) {
      let _0x45ea38 = this.getval(_0x348306);
      if (/^@/.test(_0x348306)) {
        const [, _0x438389, _0x2bc697] = /^@(.*?)\.(.*?)$/.exec(_0x348306);
        const _0x563c02 = _0x438389 ? this.getval(_0x438389) : "";
        if (_0x563c02) {
          try {
            const _0x1ba953 = JSON.parse(_0x563c02);
            _0x45ea38 = _0x1ba953 ? this.lodash_get(_0x1ba953, _0x2bc697, "") : _0x45ea38;
          } catch (_0x5094d2) {
            _0x45ea38 = "";
          }
        }
      }
      return _0x45ea38;
    }
    setdata(_0x17fccc, _0x350771) {
      let _0x156d80 = false;
      if (/^@/.test(_0x350771)) {
        const [, _0x166e0c, _0x3804d8] = /^@(.*?)\.(.*?)$/.exec(_0x350771);
        const _0x1606d1 = this.getval(_0x166e0c);
        const _0x5748a7 = _0x166e0c ? "null" === _0x1606d1 ? null : _0x1606d1 || "{}" : "{}";
        try {
          const _0x4f7761 = JSON.parse(_0x5748a7);
          this.lodash_set(_0x4f7761, _0x3804d8, _0x17fccc);
          _0x156d80 = this.setval(JSON.stringify(_0x4f7761), _0x166e0c);
        } catch (_0x5b87f2) {
          const _0x5ca8aa = {};
          this.lodash_set(_0x5ca8aa, _0x3804d8, _0x17fccc);
          _0x156d80 = this.setval(JSON.stringify(_0x5ca8aa), _0x166e0c);
        }
      } else {
        _0x156d80 = this.setval(_0x17fccc, _0x350771);
      }
      return _0x156d80;
    }
    getval(_0x5c2567) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(_0x5c2567);
        case "Quantumult X":
          return $prefs.valueForKey(_0x5c2567);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[_0x5c2567];
        default:
          return this.data && this.data[_0x5c2567] || null;
      }
    }
    setval(_0x24b428, _0x183612) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(_0x24b428, _0x183612);
        case "Quantumult X":
          return $prefs.setValueForKey(_0x24b428, _0x183612);
        case "Node.js":
          this.data = this.loaddata();
          this.data[_0x183612] = _0x24b428;
          this.writedata();
          return true;
        default:
          return this.data && this.data[_0x183612] || null;
      }
    }
    initGotEnv(_0x404ddc) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x404ddc && (_0x404ddc.headers = _0x404ddc.headers ? _0x404ddc.headers : {}, _0x404ddc && (_0x404ddc.headers = _0x404ddc.headers ? _0x404ddc.headers : {}, undefined === _0x404ddc.headers.cookie && undefined === _0x404ddc.headers.Cookie && undefined === _0x404ddc.cookieJar && (_0x404ddc.cookieJar = this.ckjar)));
    }
    get(_0x12644a, _0x3cf33c = () => {}) {
      switch (_0x12644a.headers && (delete _0x12644a.headers["Content-Type"], delete _0x12644a.headers["Content-Length"], delete _0x12644a.headers["content-type"], delete _0x12644a.headers["content-length"]), _0x12644a.params && (_0x12644a.url += "?" + this.queryStr(_0x12644a.params)), undefined === _0x12644a.followRedirect || _0x12644a.followRedirect || ((this.isSurge() || this.isLoon()) && (_0x12644a["auto-redirect"] = false), this.isQuanX() && (_0x12644a.opts ? _0x12644a.opts.redirection = false : _0x12644a.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (_0x12644a.headers = _0x12644a.headers || {}, Object.assign(_0x12644a.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient.get(_0x12644a, (_0x7edb28, _0x2de0ea, _0x362219) => {
            !_0x7edb28 && _0x2de0ea && (_0x2de0ea.body = _0x362219, _0x2de0ea.statusCode = _0x2de0ea.status ? _0x2de0ea.status : _0x2de0ea.statusCode, _0x2de0ea.status = _0x2de0ea.statusCode);
            _0x3cf33c(_0x7edb28, _0x2de0ea, _0x362219);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (_0x12644a.opts = _0x12644a.opts || {}, Object.assign(_0x12644a.opts, {
            hints: false
          }));
          $task.fetch(_0x12644a).then(_0x4de49a => {
            const {
              statusCode: _0x55659d,
              statusCode: _0xec6376,
              headers: _0x49e914,
              body: _0xc7b7ea,
              bodyBytes: _0x1a8cf0
            } = _0x4de49a;
            _0x3cf33c(null, {
              status: _0x55659d,
              statusCode: _0xec6376,
              headers: _0x49e914,
              body: _0xc7b7ea,
              bodyBytes: _0x1a8cf0
            }, _0xc7b7ea, _0x1a8cf0);
          }, _0x3d3266 => _0x3cf33c(_0x3d3266 && _0x3d3266.error || "UndefinedError"));
          break;
        case "Node.js":
          let _0x2c2127 = require("iconv-lite");
          this.initGotEnv(_0x12644a);
          this.got(_0x12644a).on("redirect", (_0x28c642, _0x38a26b) => {
            try {
              if (_0x28c642.headers["set-cookie"]) {
                const _0x45fd7b = _0x28c642.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                _0x45fd7b && this.ckjar.setCookieSync(_0x45fd7b, null);
                _0x38a26b.cookieJar = this.ckjar;
              }
            } catch (_0x14d3fa) {
              this.logErr(_0x14d3fa);
            }
          }).then(_0x59999c => {
            const {
              statusCode: _0x1e2bae,
              statusCode: _0x5569c8,
              headers: _0x149904,
              rawBody: _0x448c8d
            } = _0x59999c;
            const _0x41b71f = _0x2c2127.decode(_0x448c8d, this.encoding);
            _0x3cf33c(null, {
              status: _0x1e2bae,
              statusCode: _0x5569c8,
              headers: _0x149904,
              rawBody: _0x448c8d,
              body: _0x41b71f
            }, _0x41b71f);
          }, _0x49a814 => {
            const {
              message: _0x4c7cf2,
              response: _0xcb2d60
            } = _0x49a814;
            _0x3cf33c(_0x4c7cf2, _0xcb2d60, _0xcb2d60 && _0x2c2127.decode(_0xcb2d60.rawBody, this.encoding));
          });
          break;
      }
    }
    post(_0x20e550, _0x1e0522 = () => {}) {
      const _0x56a48a = _0x20e550.method ? _0x20e550.method.toLocaleLowerCase() : "post";
      switch (_0x20e550.body && _0x20e550.headers && !_0x20e550.headers["Content-Type"] && !_0x20e550.headers["content-type"] && (_0x20e550.headers["content-type"] = "application/x-www-form-urlencoded"), _0x20e550.headers && (delete _0x20e550.headers["Content-Length"], delete _0x20e550.headers["content-length"]), undefined === _0x20e550.followRedirect || _0x20e550.followRedirect || ((this.isSurge() || this.isLoon()) && (_0x20e550["auto-redirect"] = false), this.isQuanX() && (_0x20e550.opts ? _0x20e550.opts.redirection = false : _0x20e550.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (_0x20e550.headers = _0x20e550.headers || {}, Object.assign(_0x20e550.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient[_0x56a48a](_0x20e550, (_0x545499, _0x4c3b3b, _0x5f1f51) => {
            !_0x545499 && _0x4c3b3b && (_0x4c3b3b.body = _0x5f1f51, _0x4c3b3b.statusCode = _0x4c3b3b.status ? _0x4c3b3b.status : _0x4c3b3b.statusCode, _0x4c3b3b.status = _0x4c3b3b.statusCode);
            _0x1e0522(_0x545499, _0x4c3b3b, _0x5f1f51);
          });
          break;
        case "Quantumult X":
          _0x20e550.method = _0x56a48a;
          this.isNeedRewrite && (_0x20e550.opts = _0x20e550.opts || {}, Object.assign(_0x20e550.opts, {
            hints: false
          }));
          $task.fetch(_0x20e550).then(_0x16d840 => {
            const {
              statusCode: _0x26e1ae,
              statusCode: _0xcc37c,
              headers: _0x25eabe,
              body: _0x358e84,
              bodyBytes: _0x10db71
            } = _0x16d840;
            _0x1e0522(null, {
              status: _0x26e1ae,
              statusCode: _0xcc37c,
              headers: _0x25eabe,
              body: _0x358e84,
              bodyBytes: _0x10db71
            }, _0x358e84, _0x10db71);
          }, _0x2bd4af => _0x1e0522(_0x2bd4af && _0x2bd4af.error || "UndefinedError"));
          break;
        case "Node.js":
          let _0x3e2e22 = require("iconv-lite");
          this.initGotEnv(_0x20e550);
          const {
            url: _0x2849c1,
            ..._0x52ef9d
          } = _0x20e550;
          this.got[_0x56a48a](_0x2849c1, _0x52ef9d).then(_0x22c3db => {
            const {
              statusCode: _0x3070af,
              statusCode: _0x5ba003,
              headers: _0x305c9e,
              rawBody: _0x1c0b0e
            } = _0x22c3db;
            const _0x55cbc5 = _0x3e2e22.decode(_0x1c0b0e, this.encoding);
            _0x1e0522(null, {
              status: _0x3070af,
              statusCode: _0x5ba003,
              headers: _0x305c9e,
              rawBody: _0x1c0b0e,
              body: _0x55cbc5
            }, _0x55cbc5);
          }, _0x567e08 => {
            const {
              message: _0x34f012,
              response: _0x4440af
            } = _0x567e08;
            _0x1e0522(_0x34f012, _0x4440af, _0x4440af && _0x3e2e22.decode(_0x4440af.rawBody, this.encoding));
          });
          break;
      }
    }
    time(_0x613a0e, _0x1aa16e = null) {
      const _0x38cc98 = _0x1aa16e ? new Date(_0x1aa16e) : new Date();
      let _0x2bf841 = {
        "M+": _0x38cc98.getMonth() + 1,
        "d+": _0x38cc98.getDate(),
        "H+": _0x38cc98.getHours(),
        "m+": _0x38cc98.getMinutes(),
        "s+": _0x38cc98.getSeconds(),
        "q+": Math.floor((_0x38cc98.getMonth() + 3) / 3),
        S: _0x38cc98.getMilliseconds()
      };
      /(y+)/.test(_0x613a0e) && (_0x613a0e = _0x613a0e.replace(RegExp.$1, (_0x38cc98.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x3cccfb in _0x2bf841) new RegExp("(" + _0x3cccfb + ")").test(_0x613a0e) && (_0x613a0e = _0x613a0e.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x2bf841[_0x3cccfb] : ("00" + _0x2bf841[_0x3cccfb]).substr(("" + _0x2bf841[_0x3cccfb]).length)));
      return _0x613a0e;
    }
    queryStr(_0x265613) {
      let _0x18802b = "";
      for (const _0xe5975e in _0x265613) {
        let _0x122f8f = _0x265613[_0xe5975e];
        null != _0x122f8f && "" !== _0x122f8f && ("object" == typeof _0x122f8f && (_0x122f8f = JSON.stringify(_0x122f8f)), _0x18802b += _0xe5975e + "=" + _0x122f8f + "&");
      }
      _0x18802b = _0x18802b.substring(0, _0x18802b.length - 1);
      return _0x18802b;
    }
    msg(_0x16caca = _0x22a970, _0x30ddc3 = "", _0x2f7cb4 = "", _0x244a38 = {}) {
      const _0x35400a = _0x445e54 => {
        const {
          $open: _0x35bc34,
          $copy: _0x3361e8,
          $media: _0x2d9d8e,
          $mediaMime: _0x242d35
        } = _0x445e54;
        switch (typeof _0x445e54) {
          case undefined:
            return _0x445e54;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: _0x445e54
                };
              case "Loon":
              case "Shadowrocket":
                return _0x445e54;
              case "Quantumult X":
                return {
                  "open-url": _0x445e54
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
                  const _0x1d6abd = {};
                  let _0x41aa59 = _0x445e54.openUrl || _0x445e54.url || _0x445e54["open-url"] || _0x35bc34;
                  _0x41aa59 && Object.assign(_0x1d6abd, {
                    action: "open-url",
                    url: _0x41aa59
                  });
                  let _0x4d0602 = _0x445e54["update-pasteboard"] || _0x445e54.updatePasteboard || _0x3361e8;
                  if (_0x4d0602 && Object.assign(_0x1d6abd, {
                    action: "clipboard",
                    text: _0x4d0602
                  }), _0x2d9d8e) {
                    let _0x3fbfd6;
                    let _0x3ddb23;
                    let _0x120be9;
                    if (_0x2d9d8e.startsWith("http")) {
                      _0x3fbfd6 = _0x2d9d8e;
                    } else {
                      if (_0x2d9d8e.startsWith("data:")) {
                        const [_0x874eb4] = _0x2d9d8e.split(";");
                        const [, _0x3ac3bb] = _0x2d9d8e.split(",");
                        _0x3ddb23 = _0x3ac3bb;
                        _0x120be9 = _0x874eb4.replace("data:", "");
                      } else {
                        _0x3ddb23 = _0x2d9d8e;
                        _0x120be9 = (_0x43a961 => {
                          const _0x228c2e = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var _0x339819 in _0x228c2e) if (0 === _0x43a961.indexOf(_0x339819)) {
                            return _0x228c2e[_0x339819];
                          }
                          return null;
                        })(_0x2d9d8e);
                      }
                    }
                    Object.assign(_0x1d6abd, {
                      "media-url": _0x3fbfd6,
                      "media-base64": _0x3ddb23,
                      "media-base64-mime": _0x242d35 ?? _0x120be9
                    });
                  }
                  Object.assign(_0x1d6abd, {
                    "auto-dismiss": _0x445e54["auto-dismiss"],
                    sound: _0x445e54.sound
                  });
                  return _0x1d6abd;
                }
              case "Loon":
                {
                  const _0x5a5579 = {};
                  let _0xb12dbe = _0x445e54.openUrl || _0x445e54.url || _0x445e54["open-url"] || _0x35bc34;
                  _0xb12dbe && Object.assign(_0x5a5579, {
                    openUrl: _0xb12dbe
                  });
                  let _0xd87000 = _0x445e54.mediaUrl || _0x445e54["media-url"];
                  _0x2d9d8e?.["startsWith"]("http") && (_0xd87000 = _0x2d9d8e);
                  _0xd87000 && Object.assign(_0x5a5579, {
                    mediaUrl: _0xd87000
                  });
                  console.log(JSON.stringify(_0x5a5579));
                  return _0x5a5579;
                }
              case "Quantumult X":
                {
                  const _0xa9f61e = {};
                  let _0x4ab748 = _0x445e54["open-url"] || _0x445e54.url || _0x445e54.openUrl || _0x35bc34;
                  _0x4ab748 && Object.assign(_0xa9f61e, {
                    "open-url": _0x4ab748
                  });
                  let _0x1871d9 = _0x445e54["media-url"] || _0x445e54.mediaUrl;
                  _0x2d9d8e?.["startsWith"]("http") && (_0x1871d9 = _0x2d9d8e);
                  _0x1871d9 && Object.assign(_0xa9f61e, {
                    "media-url": _0x1871d9
                  });
                  let _0x40ac42 = _0x445e54["update-pasteboard"] || _0x445e54.updatePasteboard || _0x3361e8;
                  _0x40ac42 && Object.assign(_0xa9f61e, {
                    "update-pasteboard": _0x40ac42
                  });
                  console.log(JSON.stringify(_0xa9f61e));
                  return _0xa9f61e;
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
            $notification.post(_0x16caca, _0x30ddc3, _0x2f7cb4, _0x35400a(_0x244a38));
            break;
          case "Quantumult X":
            $notify(_0x16caca, _0x30ddc3, _0x2f7cb4, _0x35400a(_0x244a38));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let _0x536cd5 = ["", "==============📣系统通知📣=============="];
        _0x536cd5.push(_0x16caca);
        _0x30ddc3 && _0x536cd5.push(_0x30ddc3);
        _0x2f7cb4 && _0x536cd5.push(_0x2f7cb4);
        console.log(_0x536cd5.join("\n"));
        this.logs = this.logs.concat(_0x536cd5);
      }
    }
    debug(..._0x1359e6) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (_0x1359e6.length > 0 && (this.logs = [...this.logs, ..._0x1359e6]), console.log("" + this.logLevelPrefixs.debug + _0x1359e6.map(_0x34350f => _0x34350f ?? String(_0x34350f)).join(this.logSeparator)));
    }
    info(..._0x427b54) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (_0x427b54.length > 0 && (this.logs = [...this.logs, ..._0x427b54]), console.log("" + this.logLevelPrefixs.info + _0x427b54.map(_0x3d2c94 => _0x3d2c94 ?? String(_0x3d2c94)).join(this.logSeparator)));
    }
    warn(..._0x361287) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (_0x361287.length > 0 && (this.logs = [...this.logs, ..._0x361287]), console.log("" + this.logLevelPrefixs.warn + _0x361287.map(_0x30d2c5 => _0x30d2c5 ?? String(_0x30d2c5)).join(this.logSeparator)));
    }
    error(..._0x3ca0ea) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (_0x3ca0ea.length > 0 && (this.logs = [...this.logs, ..._0x3ca0ea]), console.log("" + this.logLevelPrefixs.error + _0x3ca0ea.map(_0x27665a => _0x27665a ?? String(_0x27665a)).join(this.logSeparator)));
    }
    log(..._0x53c35d) {
      _0x53c35d.length > 0 && (this.logs = [...this.logs, ..._0x53c35d]);
      console.log(_0x53c35d.map(_0x539bea => _0x539bea ?? String(_0x539bea)).join(this.logSeparator));
    }
    logErr(_0xc6b444, _0x341d3b) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", "❗️" + this.name + ", 错误!", _0x341d3b, _0xc6b444);
          break;
        case "Node.js":
          this.log("", "❗️" + this.name + ", 错误!", _0x341d3b, undefined !== _0xc6b444.message ? _0xc6b444.message : _0xc6b444, _0xc6b444.stack);
          break;
      }
    }
    wait(_0x3fdad1) {
      return new Promise(_0x422b24 => setTimeout(_0x422b24, _0x3fdad1));
    }
    done(_0x2baeb3 = {}) {
      const _0x179139 = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x179139 + " 秒"), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(_0x2baeb3);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(_0x22a970, _0x493ea0);
}