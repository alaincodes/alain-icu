const express = require('express');
const server = require('http').createServer();
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });

});

server.on('request', app);
server.listen(3000, () => console.log(`Server started on http://127.0.0.1:${PORT}`))

/** Begin websocket */
const WebSocketServer = require('ws').Server;

const wss = new WebSocketServer({ server: server });

wss.on('connection', function connection (ws) {
  const numClients = wss.clients.size;
  console.log('Clients connected:', numClients);

  wss.broadcast(`Current visitors: ${numClients}`);
  
  if (ws.readyState === ws.OPEN) {
    console.log('Welcome to my server');
  }
  
  ws.on('close', function close() {
    wss.broadcast(`Current visitors: ${numClients}`);
    console.log('A client has disconnected');
  })
});

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    client.send(data);
  });
}

