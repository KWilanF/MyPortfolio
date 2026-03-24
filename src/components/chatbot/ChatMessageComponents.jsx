 import ChatMessage from "./ChatMessage";
 import { messages } from "./Messages";
 
 const ChatMessageComponents = messages.map((chatMessage) => {
    
    return (
      <ChatMessage
        message={chatMessage.message}
        sender={chatMessage.sender}
      />
    )
  });

  export default ChatMessageComponents;