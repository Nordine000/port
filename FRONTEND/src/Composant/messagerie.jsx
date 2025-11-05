import React, { useState } from "react";
import "../App.css";

function Messagerie() {
  const [messages, setMessages] = useState([
    { id: 1, username: "Alice", text: "Salut !", time: "14:00", isOwn: false },
    { id: 2, username: "Moi", text: "Salut Alice !", time: "14:01", isOwn: true },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim() === "") return;

    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    const message = {
      id: messages.length + 1,
      username: "Moi",
      text: newMessage,
      time,
      isOwn: true,
    };

    setMessages([...messages, message]);
    setNewMessage("");
  };

  return (
    <div className="messagerie-container">
      <h2>Messagerie</h2>
      <div className="messages-list">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.isOwn ? "own" : ""}`}>
            <div className="message-header">
              <strong>{msg.username}</strong>
              <span className="message-time">{msg.time}</span>
            </div>
            <p className="message-text">{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          placeholder="Écris ton message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSend}>Envoyer</button>
      </div>
    </div>
  );
}

export default Messagerie;
