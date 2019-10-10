const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const readFile = require('./modules/file-reader');


readFile()
  .then(text => socket.emit('file-read', { content: text, path: process.argv[2] }))
  .catch((error) => {
    socket.emit('file-error', error);
  });