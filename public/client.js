document.querySelector("#msg").addEventListener("change", function() {
    let msg = this.value
    postMessage(msg)
})

async function postMessage(msg) {
    let r = await fetch("http://localhost:8080/new-message", {
        method: "post",
        body: JSON.stringify({ message: msg }),
        headers: {
            "Content-type": "application/json"
        }
    })
}

async function getMessages() {
    let r = await fetch("http://localhost:8080/messages")
    let data = await r.json()
    document.querySelector("#log").innerHTML = data.message.join('<br />')
    getMessages()
}

getMessages()