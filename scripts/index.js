function loadServer(){
}

/**
 * Test copy and paste
 */
function testCopy(){
    const serverIp = document.getElementById('serverIn')
    console.log("Yes")
    document.getElementById('response').innerHTML = "Hello~"
}

function sendData() {
    const data = {
        name: "Alice",
        age: 25
    };

    fetch('http://localhost:8080/submit-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').innerText = `Server Response: ${JSON.stringify(data)}`;
    })
    .catch(error => console.error('Error:', error));
}

function fetchData() {
    fetch('http://localhost:8080/get-data', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include' // Include credentials if needed
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}