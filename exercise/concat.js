const concat = require("concat-stream");
// const http = require("http");

// const server = http.createServer(function (req, res) {
//   if (req.method === "POST") {
//     req.pipe(concat(function (body) {
//       const obj = JSON.parse(body);
//       res.end(Object.keys(obj).join('\n'));
//     }));
//   } else {
//     res.end();
//   }
// });

// server.listen(8080);

// Another example (solution to challenge)
process.stdin.pipe(concat(function (src) {
  const s = src.toString().split('').reverse().join('');
  process.stdout.write(s)
}));
