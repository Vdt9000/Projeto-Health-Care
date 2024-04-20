import React, { useState } from 'react';
import './Chat.css';

function HealthChat() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleMessageSend = () => {
    if (inputValue.trim() !== '') {
      setMessages([...messages, { sender: 'user', text: inputValue }]);
      handleChatbotResponse(inputValue); // Chama a função para lidar com a resposta do chatbot
      setInputValue('');
    }
  };

  // Função para lidar com as respostas padrão do chatbot
  const handleChatbotResponse = (input) => {
    let response = '';

    // Analisa a entrada do usuário e define a resposta do chatbot
    switch (input.toLowerCase()) {
      case 'dor de cabeça':
        response = 'Sinto muito ouvir isso! Dor de cabeça pode ser realmente desagradável. Você já tentou descansar um pouco em um lugar silencioso e escuro? Às vezes, isso pode ajudar a aliviar um pouco. Também é importante manter-se hidratado e talvez considerar tomar um analgésico suave, se não houver contraindicações para você. Se a dor persistir ou piorar, é sempre uma boa ideia consultar um médico. Como você está se sentindo além da dor de cabeça?';
        break;
      case 'garganta ruim':
        response = 'Parece que você não está se sentindo muito bem. Uma garganta irritada ou dolorida pode ser bastante desconfortável. Aqui estão algumas coisas que podem ajudar 1-Gargarejo com água salgada morna: Isso pode ajudar a aliviar a dor e reduzir a inflamação.2-Beba líquidos quentes: Chás de ervas, caldo de galinha ou apenas água quente com mel e limão podem ser reconfortantes para a garganta. 3-Evite irritantes: Tente não fumar, evite fumaça de cigarro e poluentes do ar que possam irritar ainda mais a garganta.4- Mantenha-se hidratado: Beber muitos líquidos pode ajudar a manter a garganta úmida e acelerar o processo de cura. Se a dor de garganta persistir por mais de alguns dias, piorar significativamente ou vier acompanhada de outros sintomas preocupantes, como febre alta, dificuldade para engolir ou falta de ar, é importante procurar orientação médica. Espero que você se sinta melhor em breve!';
        break;
      case 'insônia':
        response = 'A insônia pode ser muito desafiadora, e sei que pode afetar sua qualidade de vida, pode ser útil consultar um médico para descartar qualquer condição médica subjacente e discutir outras opções de tratamento, como terapia cognitivo-comportamental para insônia (TCC-I) ou medicamentos prescritos.';
        break;
      default:
        response = 'Desculpe, não entendi. Como posso ajudá-lo?';
        break;
    }

    setMessages([...messages, { sender: 'bot', text: response }]);
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Escreva brevemente o que esta sentindo (ex: dor de cabeça)"
        className="input-field"
      />
      <button onClick={handleMessageSend} className="send-button">
        Enviar
      </button>
    </div>
  );
}

export default HealthChat;

