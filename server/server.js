const io = require('socket.io')(7890);

io.on('connect', socket => {

  socket.on('file-read', data => {
    console.log('*** 1st', data);
    socket.broadcast.emit('file-read', data);
  });

  socket.on('file-write', data => {
    console.log('*** 2nd', data);
    socket.broadcast.emit('')
  });

});
