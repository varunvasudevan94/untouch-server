const WebSocket = require('ws');
var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;
var server = app.listen(PORT, function(){
    console.log('app started');
});

wss = new WebSocket.Server({server : server}); 

app.get('/', function(req, res){

    res.send('hello world!');
});


wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('some text');
});

