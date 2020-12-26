const through = require("through2");
// const stream = through(write, end);

// function write(buffer, encoding, next) {
//   // The write function is called for every buffer of available input

//   // To convert a buffer to a string, call buffer.toString()
//   this.push(buffer.toString().toUpperCase());
//   next();
// }

// function end(done) {
//   // The end function is called when there is no more data
//   done();
// }

// process.stdin.pipe(stream).pipe(process.stdout);

// Or another way
const tr = through(function (buf, _, next) {
  this.push(buf.toString().toUpperCase());
  next();
});

process.stdin.pipe(tr).pipe(process.stdout);
