console.log(validateIPAddress("192.168.1.1")); // true
console.log(validateIPAddress("10.0.0.1")); // true
console.log(validateIPAddress("255.255.255.255")); // true
console.log(validateIPAddress("0.0.0.0")); // true
console.log(validateIPAddress("256.256.256.256")); // false
console.log(validateIPAddress("192.168.1.999")); // false
console.log(validateIPAddress("192.168.1")); // false
console.log(validateIPAddress("99.67.67.227")) // should be true

/**
 * Test copy and paste
 */
function testCopy(){
    const serverIp = document.getElementById('serverIn')
    console.log("Yes")
    document.getElementById('response').innerHTML = 'Hello!'
}

function validateIPAddress(inputText) {
    // Regular expression to validate IPv4 address
    const ipRegex = /^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])$/;
    
    return ipRegex.test(inputText);
}

function loadServer(){ 
    const serverIp = document.getElementById('serverIn')
    if (fetchData(serverIp) === true){
        console.log('A server we have found!')
        window.location.href = 'signup.html'
    } else {
        console.log('This is not a valid server IP')
        document.getElementById('response').innerHTML = 'Not a valid Server IP! :('
    }
}

// function sendData() {
//     const data = {
//         name: "Alice",
//         age: 25
//     };

//     fetch('http://localhost:8080/submit-data', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//     .then(response => response.json())
//     .then(data => {
//         document.getElementById('response').innerText = `Server Response: ${JSON.stringify(data)}`;
//     })
//     .catch(error => console.error('Error:', error));
// }

function fetchData(server) {
    fetch(server + '/get-data', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include' // Include credentials if needed
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return true;
    })
    .catch(error => {
        console.error('Error:', error);
        return false;
    });
}