const apiUrl = 'http://localhost:8080/api'

window.onload = function() {
    // Your JavaScript code here
    document.getElementById('messageInput').addEventListener('keypress', function(event) {
        if (event.key === 'enter') {
            sendMessage();
        }
    });
};

async function sendMessage() {
    const message = document.getElementById('messageInput').value;
    const username = document.getElementById('usernameInput').value;

    if (username === '' || message === '') {
        alert('Username and message cannot be empty!');
        return;
    }

    const chatMessage = {
        username: username,
        message: message
    }

    const response = await fetch(`${apiUrl}/send`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(chatMessage)
    })

    await response.text();
    document.getElementById('result').innerHTML = "sent message!"
    loadChatLog()
}

async function loadChatLog() {
    const response = await fetch(`${apiUrl}/receive`);
    const chatLog = await response.json(); // Parse response as JSON
    
    const chatLogDiv = document.getElementById('chatLog');
    chatLogDiv.innerHTML = ''; // Clear the chat log div

    chatLog.forEach(chatEntry => {
        const messageElement = document.createElement('p');
        messageElement.textContent = `${chatEntry.username}: ${chatEntry.message}`;
        chatLogDiv.appendChild(messageElement);
    });
}

window.onload = loadChatLog()