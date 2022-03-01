const express = require('express');
const WebSocket = require('ws');
const mysql = require('mysql');

const dbconnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qwe123',
    database: 'nodetok'
});

const app = express();

app.listen(8080);

const socket = new WebSocket.Server({
    port: 8081
});

socket.on('connection', (ws, req) => {
    ws.on('message', (msg) => {
        console.log('내용:' + msg)
    })
});