import { useState } from 'react'

import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";
import figures from '../figures';

function Card({ figure, setFigure }) {

  const handleClick = () => {

    setFigure(figure);
  }

  return (
    <div className="card-container">
        <div className="card-content">

            <img src={figures[figure].imageUrl}  className="card-img"/>
            <div className="button-56" onClick={handleClick}>{figure}</div>
        </div>
    </div>
  )
}

export default Card
