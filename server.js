var express = require('express');
var app = express();
var server = require('http').createServer(app);
var socketio = require('socket.io');
var io = socketio().listen(server);


 
io.on('connection', (socket) => {
  console.log("A new client has connected with the Id" + socket.id + "!");
  
  socket.on('disconnect', function(){
    console.log("The client has disconnected!");
  });
 
  socket.on('Message', (data) => {
    console.log(data.message);
    io.emit('Message', data)
  });
});
 
var port = process.env.PORT || 3001;
 
server.listen(port, function(){
   console.log('listening in http://localhost:' + port);
});