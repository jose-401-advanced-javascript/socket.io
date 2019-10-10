const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const fs = require('fs').promises;

const writeFile = (path, content) => {
  return fs.writeFile(path, content);
};

socket.on('file-write', data => {
  console.log(data);
  return writeFile(data.path, data.content)
    .then(data => {
      socket.emit('file-saved', data);
    })
    .catch((error) => {
      socket.emit('file-error', error);
    });
});

