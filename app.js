const express = require('express')
const { Server } = require('socket.io')

const app = express()
const serverHttp = app.listen(8080, () => console.log('Server Up'))

app.use(express.static('public'))

const serverSocket = new Server(serverHttp)