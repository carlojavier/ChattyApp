// server.js

const express = require('express');
const SocketServer = require('ws').Server;
const SocketConnector = require('ws');
const uuidv4 = require('uuid/v4');

const PORT = 3001;

const server = express()
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

const wss = new SocketServer({ server });


wss.on('connection', (ChattyServerLink) => {
  console.log('Client connected');

  wss.clients.forEach(function each(client) {
    if (client.readyState === SocketConnector.OPEN) {
      let users = {
        type: 'clients',
        numberOfUsers: wss.clients.size
      }
      client.send(JSON.stringify(users));
    }
  })
  
  ChattyServerLink.on('message', (message) => {
    let msg = JSON.parse(message)
    msg.id = uuidv4();

    switch(msg.type) {
      case 'postMessage':
        msg.type = 'incomingMessage'
      break;
      case 'postNotification':
        msg.type = 'incomingNotification';
      break;
    }

    wss.clients.forEach((client) => {
      if(client.readyState === SocketConnector.OPEN) {
        client.send(JSON.stringify(msg))
      }
    });
    console.log('received: %s', message);
  })
  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ChattyServerLink.on('close', () => console.log('Client disconnected'));
});