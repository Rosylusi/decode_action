//Wed Dec 17 2025 02:12:26 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
  spawn,
  exec
} = require("child_process");
const fs = require("fs");
const path = require("path");
const http = require("http");
const readline = require("readline");
const _0x2fc20f = {
  input: process.stdin,
  output: process.stdout
};
const rl = readline.createInterface(_0x2fc20f);
function askQuestion(_0x272488, _0x5443bf = "") {
  return new Promise(_0x35e68f => {
    const _0x4d7e71 = _0x5443bf ? _0x272488 + " [" + _0x5443bf + "]: " : _0x272488 + ": ";
    rl.question(_0x4d7e71, _0x18f1e8 => {
      _0x35e68f(_0x18f1e8.trim() || _0x5443bf);
    });
  });
}
function askPassword(_0x4856bc) {
  return new Promise(_0x2eb265 => {
    const _0x5b6ed5 = spawn("sh", ["-c", "read -s -p \"" + _0x4856bc + ": \" password && echo $password"], {
      stdio: ["inherit", "pipe", "inherit"]
    });
    let _0x4f978f = "";
    _0x5b6ed5.stdout.on("data", _0x52490d => {
      _0x4f978f = _0x52490d.toString().trim();
    });
    _0x5b6ed5.on("close", _0x5dfe25 => {
      {
        console.log();
        _0x5dfe25 === 0 ? _0x2eb265(_0x4f978f) : rl.question(_0x4856bc + ": ", _0x236b02 => {
          _0x2eb265(_0x236b02);
        });
      }
    });
    _0x5b6ed5.on("error", () => {
      rl.question(_0x4856bc + ": ", _0x8b8c17 => {
        _0x2eb265(_0x8b8c17);
      });
    });
  });
}
async function getConfiguration() {
  console.log("\n" + "=".repeat(55));
  console.log("           移动SOCKS5代理配置向导");
  console.log("            Powered by 空山新雨后");
  console.log("=".repeat(55) + "\n");
  const _0x518cbe = {};
  try {
    _0x518cbe.domain = await askQuestion("请输入服务器域名", "");
    _0x518cbe.serverPort = await askQuestion("请输入SSH端口", "");
    _0x518cbe.remotePort = await askQuestion("请输入远程代理端口", "");
    _0x518cbe.backupRemotePort = await askQuestion("请输入备用远程端口", "");
    _0x518cbe.localPort = await askQuestion("请输入本地SOCKS5端口", "");
    _0x518cbe.proxyPassword = await askQuestion("请输入SOCKS5代理密码");
    _0x518cbe.sshPassword = await askQuestion("请输入SSH登录密码");
    console.log("\n" + "-".repeat(55));
    console.log("配置确认：");
    console.log("服务器域名: " + _0x518cbe.domain);
    console.log("SSH端口: " + _0x518cbe.serverPort);
    console.log("远程代理端口: " + _0x518cbe.remotePort);
    console.log("备用远程端口: " + _0x518cbe.backupRemotePort);
    console.log("本地SOCKS5端口: " + _0x518cbe.localPort);
    console.log("SOCKS5密码: " + _0x518cbe.proxyPassword);
    console.log("SSH密码: " + _0x518cbe.sshPassword);
    console.log("-".repeat(55));
    const _0x1632c6 = await askQuestion("确认配置是否正确？(y/n)", "y");
    _0x1632c6.toLowerCase() !== "y" && _0x1632c6.toLowerCase() !== "yes" && (console.log("配置已取消，程序退出"), rl.close(), process.exit(0));
    console.log("\n配置已保存，开始启动代理...\n");
  } catch (_0x4fa7bc) {
    console.log("配置输入出错:", _0x4fa7bc.message);
    rl.close();
    process.exit(1);
  }
  return _0x518cbe;
}
let config = {};
const colors = {
  red: "[0;31m",
  green: "[0;32m",
  yellow: "[1;33m",
  blue: "[0;34m",
  cyan: "[0;36m",
  nc: "[0m"
};
let socks5Process = null;
let tunnelProcess = null;
let mobileIP = "未知";
function colorLog(_0x23139b, _0x19cfa2) {
  console.log("" + colors[_0x23139b] + _0x19cfa2 + "[0m");
}
function clearScreen() {
  console.clear();
}
function ensureWorkDir() {
  if (!fs.existsSync(config.workDir)) {
    {
      const _0x16e24a = {
        recursive: true
      };
      fs.mkdirSync(config.workDir, _0x16e24a);
    }
  }
}
function cleanup() {
  colorLog("yellow", "\n清理进程...");
  exec("pkill -f \"microsocks\"", () => {});
  exec("pkill -f \"ssh.*" + config.remotePort + "\"", () => {});
  exec("pkill -f \"ssh.*2088\"", () => {});
  exec("pkill -f \"sshpass\"", () => {});
  socks5Process && socks5Process.kill();
  tunnelProcess && tunnelProcess.kill();
  rl.close();
  setTimeout(() => {
    process.exit(0);
  }, 2000);
}
process.on("SIGINT", cleanup);
process.on("SIGTERM", cleanup);
async function getMobileIP() {
  return new Promise(_0x33fe99 => {
    const _0x30f967 = http.get("http://ipinfo.io/ip", _0x2c15f7 => {
      let _0x3e3934 = "";
      _0x2c15f7.on("data", _0x576bd4 => _0x3e3934 += _0x576bd4);
      _0x2c15f7.on("end", () => {
        mobileIP = _0x3e3934.trim() || "未知";
        _0x33fe99(mobileIP);
      });
    });
    _0x30f967.on("error", () => {
      _0x33fe99("未知");
    });
    _0x30f967.setTimeout(5000, () => {
      _0x30f967.destroy();
      _0x33fe99("未知");
    });
  });
}
function execCommand(_0x215a61, _0xe3567c = []) {
  return new Promise((_0x4a7a77, _0x583d75) => {
    {
      const _0x4c6b48 = {
        stdio: "pipe"
      };
      const _0x2ce939 = spawn(_0x215a61, _0xe3567c, _0x4c6b48);
      let _0x2b2301 = "";
      let _0x4553c1 = "";
      _0x2ce939.stdout.on("data", _0x480a14 => {
        _0x2b2301 += _0x480a14.toString();
      });
      _0x2ce939.stderr.on("data", _0x245fef => {
        _0x4553c1 += _0x245fef.toString();
      });
      _0x2ce939.on("close", _0x10888c => {
        _0x10888c === 0 ? _0x4a7a77(_0x2b2301) : _0x583d75(new Error(_0x4553c1 || "Command failed with code " + _0x10888c));
      });
      _0x2ce939.on("error", _0xf55058 => {
        _0x583d75(_0xf55058);
      });
    }
  });
}
async function checkCommand(_0x2a36aa) {
  try {
    await execCommand("command", ["-v", _0x2a36aa]);
    return true;
  } catch {
    {
      try {
        await execCommand(_0x2a36aa, ["--version"]);
        return true;
      } catch {
        return false;
      }
    }
  }
}
async function installSSHpass() {
  const _0x703ef3 = await checkCommand("sshpass");
  if (!_0x703ef3) {
    {
      colorLog("yellow", "安装sshpass...");
      try {
        await execCommand("pkg", ["install", "sshpass", "-y"]);
        colorLog("green", "✓ sshpass安装成功");
      } catch (_0x522ea3) {
        colorLog("red", "✗ sshpass安装失败: " + _0x522ea3.message);
        process.exit(1);
      }
    }
  }
}
async function startSOCKS5() {
  return new Promise((_0xf46419, _0x508fe5) => {
    colorLog("yellow", "[2/6] 启动SOCKS5服务器...");
    const _0x4a26e3 = {
      stdio: "pipe"
    };
    socks5Process = spawn("microsocks", ["-p", config.localPort, "-i", "0.0.0.0", "-u", "admin", "-P", config.proxyPassword], _0x4a26e3);
    setTimeout(async () => {
      {
        try {
          await execCommand("ps", ["aux"]);
          const _0xd344f0 = await execCommand("ps", ["aux"]);
          if (_0xd344f0.includes("microsocks")) {
            {
              colorLog("green", "✓ SOCKS5启动成功 (PID: " + socks5Process.pid + ")");
              _0xf46419();
            }
          } else {
            colorLog("red", "✗ SOCKS5启动失败");
            _0x508fe5(new Error("SOCKS5启动失败"));
          }
        } catch {
          colorLog("red", "✗ SOCKS5启动失败");
          _0x508fe5(new Error("SOCKS5启动失败"));
        }
      }
    }, 2000);
  });
}
async function testSSHConnection() {
  colorLog("yellow", "[3/6] 测试SSH连接...");
  console.log("请稍候，正在测试连接...");
  const _0x283ba3 = path.join(config.workDir, "ssh_config");
  const _0x4b58ce = "\nHost " + config.domain + "\n    Port " + config.serverPort + "\n    User root\n    StrictHostKeyChecking no\n    ServerAliveInterval 30\n    ServerAliveCountMax 3\n    ExitOnForwardFailure yes\n";
  fs.writeFileSync(_0x283ba3, _0x4b58ce.trim());
  try {
    await execCommand("sshpass", ["-p", config.sshPassword, "ssh", "-F", _0x283ba3, config.domain, "echo SSH连接成功"]);
    colorLog("green", "✅ SSH连接成功");
  } catch (_0x12d862) {
    {
      colorLog("red", "❌ SSH连接测试失败");
      console.log("");
      colorLog("yellow", "可能的原因：");
      console.log("1. 密码错误");
      console.log("2. 服务器禁止密码登录");
      console.log("3. 需要SSH密钥");
      console.log("");
      colorLog("yellow", "请手动测试：");
      console.log("ssh -p " + config.serverPort + " root@" + config.domain);
      throw _0x12d862;
    }
  }
}
async function startSSHtunnel(_0x5eaa06) {
  colorLog("yellow", "启动SSH隧道 (端口: " + _0x5eaa06 + ")...");
  const _0x55ad68 = path.join(config.workDir, "ssh_config");
  tunnelProcess = spawn("sshpass", ["-p", config.sshPassword, "ssh", "-F", _0x55ad68, "-R", "127.0.0.1:" + _0x5eaa06 + ":127.0.0.1:" + config.localPort, "-N", "-o", "ServerAliveInterval=30", "-o", "ServerAliveCountMax=3", "-o", "ExitOnForwardFailure=yes", config.domain], {
    stdio: "pipe"
  });
  fs.writeFileSync(path.join(config.workDir, "tunnel.pid"), tunnelProcess.pid.toString());
  return new Promise((_0x5f4ae0, _0x2795c6) => {
    setTimeout(async () => {
      tunnelProcess.pid && !tunnelProcess.killed ? (colorLog("green", "✓ SSH隧道启动成功 (端口: " + _0x5eaa06 + ")"), _0x5f4ae0()) : (colorLog("red", "✗ SSH隧道启动失败 (端口: " + _0x5eaa06 + ")"), _0x2795c6(new Error("SSH隧道启动失败")));
    }, 3000);
  });
}
async function establishTunnel() {
  colorLog("yellow", "[4/6] 建立SSH隧道...");
  try {
    {
      await startSSHtunnel(config.remotePort);
    }
  } catch {
    {
      colorLog("yellow", "尝试备用端口...");
      try {
        {
          await startSSHtunnel(config.backupRemotePort);
          config.remotePort = config.backupRemotePort;
        }
      } catch {
        {
          colorLog("red", "✗ 备用端口也失败");
          throw new Error("无法建立SSH隧道");
        }
      }
    }
  }
}
function displayStatus() {
  clearScreen();
  console.log("[0;34m═══════════════════════════════════════════════════[0m");
  console.log("[0;32m           移动SOCKS5代理启动成功！              [0m");
  console.log("[0;32m            Powered by 空山新雨后             [0m");
  console.log("[0;34m═══════════════════════════════════════════════════[0m");
  console.log("");
  console.log("[1;33m📱 手机端信息：[0m");
  console.log("   移动网络IP: [0;32m" + mobileIP + "[0m");
  console.log("");
  console.log("[1;33m🌐 代理服务器信息：[0m");
  console.log("   服务器域名: [0;32m" + config.domain + "[0m");
  console.log("   地址: [0;32m127.0.0.1:" + config.remotePort + " (服务器本地)" + "[0m");
  console.log("   类型: [0;32mSOCKS5[0m");
  console.log("");
  console.log("[1;33m🔐 认证信息：[0m");
  console.log("   SOCKS5用户名: [0;32madmin[0m");
  console.log("   SOCKS5密码: [0;32m" + config.proxyPassword + "[0m");
  console.log("");
  console.log("[1;33m💻 电脑测试命令 (需先SSH到服务器)：[0m");
  console.log("   [0;36m# 1. 先登录服务器[0m");
  console.log("   [0;36mssh -p " + config.serverPort + " root@" + config.domain + "[0m");
  console.log("   [0;36m# 2. 在服务器上执行测试[0m");
  console.log("   [0;36mcurl --socks5 127.0.0.1:" + config.remotePort + " \\" + "[0m");
  console.log("        [0;36m--proxy-user admin:'" + config.proxyPassword + "' \\" + "[0m");
  console.log("        [0;36mhttp://ipinfo.io/ip[0m");
  console.log("");
  console.log("[1;33m⚡ 运行状态：[0m");
  console.log("   SOCKS5服务: [0;32m运行中 ✓[0m");
  console.log("   SSH隧道: [0;32m连接正常 ✓[0m");
  console.log("   最后更新: [0;32m" + new Date().toLocaleTimeString() + "[0m");
  console.log("");
  console.log("[0;34m═══════════════════════════════════════════════════[0m");
  console.log("[1;33m按 Ctrl+C 停止代理[0m");
  console.log("[0;34m═══════════════════════════════════════════════════[0m");
}
async function checkProcess(_0x2522a8) {
  try {
    const _0x39fb68 = await execCommand("ps", ["aux"]);
    return _0x39fb68.includes(_0x2522a8);
  } catch {
    {
      return false;
    }
  }
}
async function monitorLoop() {
  while (true) {
    {
      await new Promise(_0xe80d16 => setTimeout(_0xe80d16, 30000));
      !(await checkProcess("microsocks")) && (console.log("[" + new Date().toLocaleTimeString() + "] SOCKS5服务停止，重启..."), await startSOCKS5());
      const _0x2bc4e8 = path.join(config.workDir, "tunnel.pid");
      if (fs.existsSync(_0x2bc4e8)) {
        const _0x2f312c = parseInt(fs.readFileSync(_0x2bc4e8, "utf8").trim());
        try {
          {
            process.kill(_0x2f312c, 0);
          }
        } catch {
          console.log("[" + new Date().toLocaleTimeString() + "] SSH隧道断开，自动重启...");
          await establishTunnel();
        }
      } else {
        console.log("[" + new Date().toLocaleTimeString() + "] SSH隧道PID文件丢失，重新启动...");
        await establishTunnel();
      }
      displayStatus();
    }
  }
}
async function main() {
  try {
    {
      config = await getConfiguration();
      config.workDir = path.join(process.env.HOME, ".mobile_proxy");
      clearScreen();
      console.log("[0;34m═══════════════════════════════════════════════════[0m");
      console.log("[0;32m          移动SOCKS5代理 (Node.js版)           [0m");
      console.log("[0;32m            Powered by 空山新雨后             [0m");
      console.log("[0;34m═══════════════════════════════════════════════════[0m");
      console.log("");
      ensureWorkDir();
      colorLog("yellow", "[1/6] 清理旧进程...");
      exec("pkill -f \"microsocks\"", () => {});
      exec("pkill -f \"ssh.*" + config.remotePort + "\"", () => {});
      exec("pkill -f \"ssh.*2088\"", () => {});
      exec("pkill -f \"sshpass\"", () => {});
      await new Promise(_0xf2bb70 => setTimeout(_0xf2bb70, 2000));
      await installSSHpass();
      await startSOCKS5();
      await testSSHConnection();
      await establishTunnel();
      colorLog("yellow", "[5/5] 启动完成！");
      await getMobileIP();
      displayStatus();
      monitorLoop();
    }
  } catch (_0x2864a8) {
    colorLog("red", "错误: " + _0x2864a8.message);
    cleanup();
  }
}
main();