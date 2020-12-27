const { spawn } = require("child_process");
const duplexer = require("duplexer2");

module.exports = function (cmd, args) {
  // spawn the process and return a single stream
  // joining together the stdin and stdout here
  const ps = spawn(cmd, args);
  return duplexer(ps.stdin, ps.stdout);
};
