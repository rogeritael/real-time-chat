const express = require("express");
const app = express();
const server = require('http').createServer(app);
const io = require("socket.io")(server, { cors: { origin: 'http://localhost:5173' }})


const PORT = 5000;

io.on('connection', socket => {
    console.log('Usuário conectado!')

    //ao desconectar
    socket.on('disconnect', reason => {
        console.log('Usuário desconectado')
    })

    socket.on('set_username', username => {
        //cria propriedade username
        socket.data.username = username;
        console.log(socket.data.username)
    })

    socket.on('message', text => {
        io.emit('receive_message', {
            text: text,
            authorId: socket.id,
            author: socket.data.username
        })
    })
})

server.listen(PORT, () => console.log('Server running...'))