// public/script.js

function sendText() {
    const text = document.getElementById("textInput").value;
    fetch('/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: text })
        })
        .then(res => res.json())
        .then(data => {
            document.getElementById("response").innerText = "Bot: " + data.reply;
        });
}

function sendImage() {
    const file = document.getElementById("imageInput").files[0];
    const formData = new FormData();
    formData.append('image', file);

    fetch('/upload', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            document.getElementById("response").innerText = "Bot: " + data.reply;
        });
}