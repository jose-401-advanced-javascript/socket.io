const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const fs = require('fs').promises;

const readFile = () => {
  return fs.readFile(process.argv[2], { encoding: 'utf-8' });
};

readFile()
  .then(text => socket.emit('file-read', { content: text, path: process.argv[2] }))
  .catch((error) => {
    socket.emit('file-error', error);
  });