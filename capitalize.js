const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const capitalize = require('./modules/uppercase');

socket.on('file-read', data => {
  socket.emit('file-write', { content: capitalize(data.content), path: data.path });
});

