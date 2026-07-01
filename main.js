const chatBox = document.getElementById("chatBox");
const input = document.getElementById("userInput");

input.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        sendMessage();
    }
});

function sendMessage(){

    const text = input.value.trim();

    if(text === "") return;

    // User Message
    addMessage(text,"user");

    input.value="";

    // Fake AI Typing...
    setTimeout(()=>{

        let reply = getBotReply(text);

        addMessage(reply,"bot");

    },800);

}

function addMessage(message,sender){

    const div = document.createElement("div");

    div.classList.add("message",sender);

    div.innerText = message;

    chatBox.appendChild(div);

    chatBox.scrollTop = chatBox.scrollHeight;

}

function getBotReply(message){

    message = message.toLowerCase();

    if(message.includes("hello"))
        return "Hello!";

    if(message.includes("hi"))
        return "Hi there!";

    if(message.includes("how are you"))
        return "I'm doing great!";

    if(message.includes("your name"))
        return "I'm your AI Assistant.";

    if(message.includes("bye"))
        return "Goodbye!";

    return "Sorry, I don't understand. Connect me to an AI API for real responses.";
}
