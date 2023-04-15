const socket = io()
let chatBox = document.getElementById('chatBox')

chatBox.addEventListener('keyup', evt => {
    console.log(evt.key)
})