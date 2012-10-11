var ws = require('websocket.io')
  , server = ws.listen(3000)

console.log("Ready to go ServerA");
server.on('connection', function (socket) {
  console.log("in connection function");
  socket.on('message', function () { 
	console.log("in message function");
  });
  socket.on('close', function () { 
	console.log("in close function");
  });
});
