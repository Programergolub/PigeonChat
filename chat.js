// Simulated responses for the pigeon chat
const PIGEON_RESPONSES = [
    "Coo! (That's fascinating!)",
    "*waddles closer* Coo coo! (Tell me more!)",
    "COOOO! (How interesting!)",
    "*pecks ground* Coo... (Go on...)",
    "*flutters wings* Coo coo coo! (I totally agree!)",
    "*tilts head* Coo? (Is that so?)",
    "Coo coo! *preens feathers* (You don't say!)",
    "*ruffles feathers* Coooo! (That's amazing!)"
  ];
  
  class PigeonChat {
    constructor() {
      this.messageInput = document.getElementById('message-input');
      this.sendButton = document.getElementById('send-button');
      this.messagesContainer = document.getElementById('messages');
      
      this.setupEventListeners();
    }
  
    setupEventListeners() {
      this.sendButton.addEventListener('click', () => this.sendMessage());
      this.messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          this.sendMessage();
        }
      });
    }
  
    sendMessage() {
      const message = this.messageInput.value.trim();
      if (message) {
        this.addMessage(message, 'sent');
        this.messageInput.value = '';
        
        // Simulate pigeon thinking and typing
        setTimeout(() => {
          this.pigeonIsTyping();
          setTimeout(() => {
            const response = PIGEON_RESPONSES[Math.floor(Math.random() * PIGEON_RESPONSES.length)];
            this.addMessage(response, 'received');
          }, 1500);
        }, 500);
      }
    }
  
    pigeonIsTyping() {
      const typingDiv = document.createElement('div');
      typingDiv.className = 'message received typing';
      typingDiv.textContent = '*pigeon is cooing...*';
      this.messagesContainer.appendChild(typingDiv);
      this.scrollToBottom();
      
      // Remove typing indicator after response
      setTimeout(() => typingDiv.remove(), 1500);
    }
  
    addMessage(text, type) {
      const messageDiv = document.createElement('div');
      messageDiv.className = `message ${type}`;
      messageDiv.textContent = text;
      this.messagesContainer.appendChild(messageDiv);
      this.scrollToBottom();
    }
  
    scrollToBottom() {
      this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }
  }
  
  // Initialize the chat
  const chat = new PigeonChat();
