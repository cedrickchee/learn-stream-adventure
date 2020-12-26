const trumpet = require("trumpet");
const through = require("through2");
const fs = require("fs");

const tr = trumpet();
// fs.createReadStream("input.html").pipe(tr);

const loud = tr.select(".loud").createStream();

loud.pipe(through(function (buf, _, next) {
  this.push(buf.toString().toUpperCase());
  next()
})).pipe(loud);

process.stdin.pipe(tr).pipe(process.stdout);
