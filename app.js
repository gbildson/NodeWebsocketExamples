var express = require("express"),
    wsio = require("websocket.io") 

/* Create express app. */
var app = express.createServer(); 

/* Attach websocket server. */
var ws = wsio.attach(app); 

/* Serve your code */ 
app.use(express.static("public"));

/* Listen */ 
console.log(purdy("About to listen"));
app.listen( 3000);

console.log(purdy("Registering connection"));

/* Listening on connections */ 
ws.on("connection", function (socket) {
  // . . . 
  socket.on("message", function (msg) {
         console.log(purdy("got:") + msg);
         socket.send("pong");
  });
}); 

function purdy(str) {
    return " \033[96m"+str+"\033[39m ";
}
