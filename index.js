const { spawn } = require("child_process");
const path = require("path");

function start() {
  let args = [path.join(__dirname, "rtaserver.js"), ...process.argv.slice(2)];
  console.log([process.argv[0], ...args].join("\n"));
  let p = spawn(process.argv[0], args, {
    stdio: ["inherit", "inherit", "inherit", "ipc"],
  })
    .on("message", (data) => {
      if (data == "reset") {
        console.log("Reiniciando el bot ...");
        p.kill();
        start();
        delete p;
      }
    })
    .on("exit", (code) => {
      console.error("Salió con el código:", code);
      if (code == "." || code == 1 || code == 0) start();
    });
}
start();
