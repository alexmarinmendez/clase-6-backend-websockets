const express = require('express')
const { Server } = require('socket.io')

const app = express()
const httpServer = app.listen(8080, () => console.log('Server Up'))

app.use(express.static('public'))

const socketServer = new Server(httpServer)

let log = []

socketServer.on('connection', (socketClient) => {
    console.log('Nuevo cliente conectado...')
    socketClient.on('message', (data) => {
        console.log(`Me enviaron: ${data}`)
        log.push(data)
        socketClient.emit('history', log)
    })
})