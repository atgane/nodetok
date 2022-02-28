const express = require('express');
const WebSocket = require('ws');

const app = express();
app.use("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.listen(8080);

const socket = new WebSocket.Server({
    port: 8081
});

socket.on('connection', (ws, req) => {
    ws.on('message', (msg) => {
        console.log('내용:' + msg)
    })
});