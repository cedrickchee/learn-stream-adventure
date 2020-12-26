const split2 = require('split2');
const through2 = require('through2');

// let lineCount = 0
// process.stdin
//   .pipe(split2())
//   .pipe(through2(function (line, _, next) {
//     if (lineCount++ % 2) {
//       this.push(line.toString().toUpperCase() + '\n');
//     } else {
//       this.push(line.toString().toLowerCase() + '\n');
//     }
//     next();
//   }))
//   .pipe(process.stdout);

// Or another solution
let lineCount = 0
const tr = through2(function (buf, _, next) {
  const line = buf.toString();
  this.push(lineCount % 2 === 0
    ? line.toLowerCase() + '\n'
    : line.toUpperCase() + '\n'
  );
  lineCount++;
  next();
});

process.stdin
  .pipe(split2())
  .pipe(tr)
  .pipe(process.stdout);
