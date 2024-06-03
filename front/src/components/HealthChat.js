import React, { useState, useEffect, useRef } from 'react';
import './Chat.css';
import axios from 'axios';
import { Dock } from 'primereact/dock';
import { Sidebar } from 'primereact/sidebar';
import { Toast } from 'primereact/toast';
import InfoIcon from '../components/img/Info.png'; // esse importa o ícone de info
import LixoIcon from '../components/img/Lixo.png'; // esse importa o ícone de lixo
import SalvarIcon from '../components/img/Salvar.png'; // esse importa o ícone de salvar


function HealthChat() {
 
  const [messages, setMessages] = useState([]); // pra armazenar mensagens
 const [inputValue, setInputValue] = useState('');// pra armazenar valor do input
 const [position] = useState('left');// pra deixar os icones na esquerda da tela
  const [visible, setVisible] = useState(false);
    const toast = useRef(null);

  // Função pra enviar mensagem
  const handleMessageSend = () => {
    if (inputValue.trim() !== '') {
      // Requisição POST para o back
      axios.post("http://localhost:3001/pergunte-ao-chatgpt", { prompt: inputValue }).then(x => {
        setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: x.data.completion }]);
      });
      // Adiciona mensagem do usuário as mensagens
      setMessages(prevMessages => [...prevMessages, { sender: 'user', text: inputValue }]);
      // pra limpar o valor do input
      setInputValue('');
    }
  };

  // isso limpar o chat
  const clearChat = () => {
    setMessages([]);
  };

  // exibi a mensagem de sucesso
  const save = () => {
    toast.current.show({ summary: 'Boa!', detail: 'Histórico Salvo' });
  };

  // Icones na tela 
  const items = [
    {
      label: 'Info',
      icon: () => <img alt="Info" src={InfoIcon} width="110%" onClick={() => setVisible(true)} />,
    },
    {
      label: 'Save',
      icon: () => <img alt="Save" src={SalvarIcon} width="110%" onClick={save} />,
    },
    { //nao muda pra n da erro no limpa chat
      label: 'Trash',
      icon: () => <img alt="Trash" src={LixoIcon} width="110%" onClick={clearChat}  />,
    }
  ];

  // isso é pra rolar automatico
  useEffect(() => {
    const chatBox = document.querySelector(".chat-box");
    chatBox.scrollTop = chatBox.scrollHeight;
  }, [messages]);

  // envio do formulário
  //essa função faz com que ao enviar o formulário a página não seja recarregada e que a mensagem digitada pelo usuário seja enviada para o chat
  const handleSubmit = (e) => {
    e.preventDefault();
    handleMessageSend();
  };

  return (
    <div className="card dock-demo">
      <Toast ref={toast}></Toast>
      <div className="flex flex-wrap gap-3 mb-5">
        <div className="flex align-items-center"></div>
      </div>
      {/* Dock dos ícones */}
      <div className="dock-window" >
        <Dock model={items} position={position} />
      </div>
      {/* Sidebar para exibir informações */}
      <Sidebar visible={visible} onHide={() => setVisible(false)}>
        <h2>Health Care</h2>
        <p>
          {/* Texto sobre o projeto */}
          Nosso projeto tem o intuito de oferecer uma experiência acolhedora e confidencial em um mundo onde o acesso à informação é crucial para o bem-estar. Oferecemos suporte e orientação para suas preocupações de saúde, quando e onde você precisar.

          Se você está lidando com preocupações de saúde mental, questões físicas ou simplesmente precisa de conselhos sobre como manter um estilo de vida saudável, estamos aqui para ajudar. No entanto, lembre-se de que sou um programa de computador e não um profissional de saúde. Posso fornecer informações gerais e dicas sobre saúde com base em dados disponíveis publicamente, mas não posso oferecer diagnósticos específicos ou substituir a consulta com um médico qualificado.
        </p>
      </Sidebar>
      {/* Container do chat */}
      <div className="chat-container">
        <div className="chat-box">
          {/* exibe as mensagens */}
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
        </div>
        {/* Formulário para enviar mensagem */}
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
