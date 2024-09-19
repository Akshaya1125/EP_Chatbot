// Function to handle the loading screen
function handleLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    
    // Hide the loading screen after 3 seconds
    setTimeout(() => {
        loadingScreen.style.transition = 'opacity 1s ease'; // Add transition for smooth fading
        loadingScreen.style.opacity = 0;
        
        // Remove the loading screen from the DOM after fading out
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 1000); // Matches the duration of the opacity transition
    }, 3000); // Display the loading screen for 3 seconds
}

// Function to append messages to the chat log
function appendMessage(content, className) {
    const chatLog = document.getElementById('chat-log');
    const message = document.createElement('div');
    message.className = className;
    message.textContent = content;
    chatLog.appendChild(message);
    chatLog.scrollTop = chatLog.scrollHeight; // Scroll to the bottom
}

// Function to analyse user input and generate a bot response
function analysePrompt(userInput) {
    let botResponse = "";

    // Normalize user input to lowercase for case-insensitive comparison
    userInput = userInput.toLowerCase();

    // Check the user's input and set the appropriate bot response
    if (userInput === "hello" || userInput === "hi") {
        botResponse = "Hlo user, how can I assist you today?";
    } else if (userInput === "explain about the employment classification") {
        botResponse = `According to Section 4 of the handbook, Employment Classification, there are three types of employment classifications:\n\n` +
                      `Exempt\n` +
                      `Non-Exempt\n` +
                      `Part-Time, Full-Time or Temporary Status\n\n` +
                      `This information is provided in subsections 4.1, 4.2, and 4.3, respectively.`;
    }
    
    else if(userInput === "mention about the health and safety at the workplace") {
        botResponse = `According to the provided context, the company takes every reasonable precaution to ensure that employees have a safe working environment. The company has a workplace safety policy that includes:\n\n` +
                      `- Conducting risk assessments and job hazard analyses through a workplace safety committee\n` +
                      `- Establishing preventative measures to address risks accordingly\n` +
                      `- Providing protective gear like gloves, protective uniforms, and goggles\n` +
                      `- Directing inspectors and quality control employees to evaluate equipment and infrastructure regularly\n\n` +
                      `The company also expects employees to take safety seriously by always using protective equipment and following standards whenever necessary. If an employee deliberately disregards the guidelines, they may be terminated for their own and others' safety.\n\n` +
                      `Additionally, the company has emergency management provisions in place, including functional smoke alarms and sprinklers that are regularly inspected, technicians available to repair leakages, damages, and blackouts quickly, and fire extinguishers and other fire protection equipment that are easily accessible.`;
    }
    
    
    else {
        botResponse = "I'm sorry, I didn't understand that. Can you please rephrase?";
    }

    // Append the bot's response to the chat log
    appendMessage(botResponse, 'bot-message');
}

// Function to send the user's message
function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();

    if (message) {
        appendMessage(message, 'user-message');
        userInput.value = '';

        // Analyse the user's message and respond accordingly
        setTimeout(() => {
            analysePrompt(message);
        }, 500);
    }
}

// Allow pressing Enter to send the message
document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

// Initialize the loading screen
window.onload = handleLoadingScreen;
