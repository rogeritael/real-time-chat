const express = require("express");
const app = express();


const server = require('http').createServer(app);
const io = require("socket.io")(server, { cors: { origin: 'http://localhost:5137' }})

const PORT = 5000;

server.listen(PORT, () => console.log('Server running...'))