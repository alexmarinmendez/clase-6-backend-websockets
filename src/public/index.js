// const socketClient = io()
// let chatBox = document.getElementById('chatBox')

// chatBox.addEventListener('keyup', evt => {
//     if (evt.key == "Enter")  {
//         socketClient.emit('message', chatBox.value)
//         chatBox.value = ""
//     }
// })

// socketClient.on('history', data => {
//     let history = document.getElementById('history')
//     let messages = ''
//     data.forEach(item => {
//         messages+= `[${item.userId}] dice: ${item.message}<br />`
//     })
//     history.innerHTML = messages
// })

let socket
let user = ''

Swal.fire({
    title: 'Chat de Coder',
    input: 'text',
    text: 'Set your username for the chat',
    inputValidator: value => {
        return !value.trim() && 'Please write a username'
    },
    allowOutsideClick: false
})
    .then(result => {
        user = result.value
        socket = io()
    })
