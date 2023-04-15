const socketClient = io()
let chatBox = document.getElementById('chatBox')

chatBox.addEventListener('keyup', evt => {
    if (evt.key == "Enter")  {
        socketClient.emit('message', chatBox.value)
        chatBox.value = ""
    }
})

socketClient.on('history', data => {
    let history = document.getElementById('history')
    let messages = ''
    data.forEach(item => {
        messages+= `${item}<br />`
    })
    history.innerHTML = messages
})