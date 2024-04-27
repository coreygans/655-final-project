import React, { useState } from "react";
import { nanoid } from "nanoid";

import SiteHeader from "../components/Header";

function Chat(props) {
  const [hasClass, setHasClass] = useState(false);

  const [messages, setMessages] = useState(props.messages || []);
  const [chatMessage, setChatMessage] = useState("");
  const endChat = () => {
    setHasClass(!hasClass);

  };

  const startChat = () => {
    setHasClass(!hasClass);
    setMessages([]);
  };

  function addMessage(chatMessage) {
    const newMessage = { id: `msg-${nanoid()}`, chatMessage };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    console.log("Updated messages:", updatedMessages);
  
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (chatMessage === "") {
      alert("Please enter a message before clicking send");
    } else {
      addMessage(chatMessage);
      console.log("Here is the prop being set:" + chatMessage);
    }
    setChatMessage("");
  }

  function downloadChat(){
    const jsonString = JSON.stringify(messages, null, 2);
    navigator.clipboard.writeText(jsonString)
      .then(() => {
        alert("Messages copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy messages to clipboard:", error);
      });  }

  return (
    <div>

      <div className="chat-with-ducky">
        <div className="rdChatMessage">
          <div className="avatar">
            <img
              width={50}
              alt="rubber ducky"
              src="/images/rd-high-res.jpg"></img>
          </div>

          <div className="message-content">
            Hi! Welcome to Rubber Ducky! I'm here to listen to any ideas,
            problems, or proposals that you need to work through. I won't
            interrupt, provide feedback, or judge. I'm here just to listen. With
            that said, what do you want to talk about?
          </div>
        </div>
        {messages.map((message) => (
          <div key={message.id} className="rdChatMessage">
            <div className="avatar">
              <img width={50} alt="rubber ducky" src="/images/user-avatar.png"></img>
            </div>
            <div className="message-content">{message.chatMessage}</div>
          </div>
        ))}
        <div className={hasClass ? "rdChatMessage" : "hide"}>
          <div className="avatar">
            <img
              width={50}
              alt="rubber ducky"
              src="/images/rd-high-res.jpg"></img>
          </div>
          <div className="message-content">
            Thanks for stopping by and chatting! I hope that you were able to
            make progress on your thoughts. If you ever need to chat again, I'm
            always here.{" "}
          </div>
        </div>
        <div className="chatBox">
          <form onSubmit={handleSubmit}>
            <input
              className="chatTextField"
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              type="text"></input>
            <button>Send message</button>
          </form>
        </div>
        <div className="rdChatButtons">

          <button
            onClick={endChat}
            className={hasClass ? "hide" : "endChat"}>
            End Chat
          </button>
          <button
            onClick={startChat}
            className={hasClass ? "startNewChat" : "hide"}>
            Start New Chat
          </button>
          <button onClick={downloadChat}>Copy Chat to Clipboard</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
