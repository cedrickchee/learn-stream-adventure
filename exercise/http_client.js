const { request } = require("http");

const options = { method: "POST" };

const req = request("http://localhost:8099", options, (res) => {
  // The res object in the callback function is a readable stream.
  res.pipe(process.stdout);
});

// The req object that you get back from request() is a writable stream.
process.stdin.pipe(req);
