function toggleChat() {
    let chat = document.getElementById("chatbot");
    chat.style.display = chat.style.display === "none" ? "block" : "none";
}

function handleKey(event) {
    if (event.key === "Enter") {
        let input = document.getElementById("user-input");
        let message = input.value.toLowerCase();
        input.value = "";

        let response = getResponse(message);
        displayMessage("You: " + message);
        displayMessage("Bot: " + response);
    }
}

function displayMessage(msg) {
    let chatBody = document.getElementById("chat-body");
    chatBody.innerHTML += "<p>" + msg + "</p>";
}

function getResponse(msg) {
    if (msg.includes("hello")) return "Hi! I'm Sonia's AI assistant 👋";
    if (msg.includes("name")) return "My name is Sonia Ravish.";
    if (msg.includes("project")) return "I have built AI Chatbot and Finance Analyzer.";
    if (msg.includes("skill")) return "Python, AI, APIs, SQL.";
    if (msg.includes("contact")) return "You can email me!";

    return "Sorry, I didn't understand that 😅";
}