// The challenge
//
// An encrypted, gzipped tar file will be piped in on process.stdin. To beat
// this challenge, for each file in the tar input, print a hex-encoded md5
// hash of the file contents followed by a single space followed by the file
// path, then a newline.

// The tar module from npm has a tar.Parse() constructor that can unzip
// gzipped tar files automatically ( if detected ) and  emits entry events
// for each file in the tar input.

const crypto = require("crypto");
const tar = require("tar");
const concat = require("concat-stream");

// Using the tar module
const parser = new tar.Parse();
parser.on("entry", function (e) {
  // console.dir(e);

  if (e.type !== "File") return e.resume();

  // generate a stream that outputs a hex md5 hash for the content written to it.
  const hasher = crypto.createHash("md5", { encoding: "hex" });

  // The concat-stream module could be useful to concatenate all stream data.
  e.pipe(hasher).pipe(
    concat(function (hash) {
      console.log(hash + " " + e.path);
    })
  );
});

// const fs = require("fs");
// fs.createReadStream("file.tar").pipe(parser);

// End - Using the tar module

const algo = process.argv[2]; // cipher algorithm name. e.g.: aes-192-cbc
const key = process.argv[3]; // cipher key. e.g.: Zmp6eri1bksmfdTXw25XZQ==
const iv = process.argv[4]; // cipher initialization vector. e.g.: 0420445450d45129
const decrypter = crypto.createDecipheriv(algo, key, iv);

process.stdin
  .pipe(decrypter)
  .pipe(parser);
