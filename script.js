const messageInput = document.getElementById("message-input");
const checkMessageButton  = document.getElementById("check-message-btn");
const result = document.getElementById("result");


const isSpam = (msg) => false;



checkMessageButton.addEventListener("click" , ()=> {

    if (messageInput.value == "")
    {
        alert("Please enter a message");
        return;

    }

    



})