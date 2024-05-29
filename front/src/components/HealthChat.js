import React, { useState, useEffect } from 'react';
import './Chat.css';
import axios from 'axios';
import { Dock } from 'primereact/dock';

function HealthChat() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [position] = useState('left');

  const handleMessageSend = () => {
    if (inputValue.trim() !== '') {
      axios.post("http://localhost:3001/pergunte-ao-chatgpt", {prompt: inputValue}).then(x => {
        setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: x.data.completion }]);
      });
      setMessages(prevMessages => [...prevMessages, { sender: 'user', text: inputValue }]);
      setInputValue('');
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  const items = [
    {
      label: 'Photos',
      icon: () => <img alt="Home" src="https://cdn-icons-png.flaticon.com/256/4022/4022659.png" width="100%" onClick={clearChat} />,
    },
    {
      label: 'Trash',
      icon: () => <img alt="Lixo" src="https://cdn-icons-png.flaticon.com/512/8258/8258343.png" width="100%" onClick={clearChat} />,
    }
  ];

  useEffect(() => {
    const chatBox = document.querySelector(".chat-box");
    chatBox.scrollTop = chatBox.scrollHeight;
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    handleMessageSend();
  };

  return (
    <div className="card dock-demo">
      <div className="flex flex-wrap gap-3 mb-5">
        <div className="flex align-items-center"></div>
      </div>
      <div className="dock-window" style={{ backgroundImage: 'url(https://primefaces.org/cdn/primereact/images/dock/window.jpg)' }}>
        <Dock model={items} position={position} />
      </div>
      <div className="chat-container">
        <div className="chat-box">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Escreva brevemente o que está sentindo (ex: dor de cabeça)"
            className="input-field"
          />
          <button type="submit" className="send-button">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default HealthChat;


