
import React from 'react';
import './Chat.css'; 

const BotaoEnviar = ({ onClick }) => {
    return (
        <a href="#" className="btn" onClick={onClick}>Enviar</a>
    );
};

export default BotaoEnviar;

