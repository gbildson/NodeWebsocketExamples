var ws = require('websocket.io')
  , http = require('http').createServer().listen(3000)
  , server = ws.attach(http)

console.log("Ready to go");
server.on('connection', function (socket) {
  console.log("in connection function");
  socket.on('message', function () { 
	console.log("in message function");
  });
  socket.on('close', function () { 
	console.log("in close function");
  });
});
