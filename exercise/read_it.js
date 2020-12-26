const { Readable } = require('stream');

// const myStream = new Readable({});
// myStream._read = () => {};

// myStream.push(process.argv[2]);
// myStream.pipe(process.stdout);

// Or another way
// const stream = new Readable({
//     read () {}
// });

// stream.push(process.argv[2]);
// stream.pipe(process.stdout);

// Or another way
class ReadableStream extends Readable {
    _read (size) {}
}

const stream = new ReadableStream();

stream.push(process.argv[2]);
stream.pipe(process.stdout);
