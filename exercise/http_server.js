const http = require("http");
const fs = require("fs");

/**
 * Example 1: stream a file to the response object
 */
// const server = http.createServer(function (req, res) {
//   fs.createReadStream("file.txt").pipe(res);
// });

// server.listen(process.argv[2]);

/**
 * Example 2:
 */
// const server = http.createServer(function (req, res) {
//   if (req.method === "POST") {
//     req.pipe(fs.createWriteStream("post.txt"));
//   }
//   res.end("beep bool\n");
// });

// server.listen(process.argv[2]);

/**
 * Solution to challenge
 */
const through = require("through2");
// process.stdin.pipe(through(write, end)).pipe(process.stdout);

function write(buf, _, next) {
  this.push(buf.toString().toUpperCase());
  next();
}
function end(done) {
  done();
}

const server = http.createServer(function (req, res) {
  if (req.method === "POST") {
    req.pipe(through(write, end)).pipe(res);
  } else {
    res.end('send me a POST\n');
  }
});

server.listen(parseInt(process.argv[2]));
