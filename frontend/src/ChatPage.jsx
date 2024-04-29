import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator, ConversationList, Conversation } from "@chatscope/chat-ui-kit-react";
import Chatbot from './Chatbot';
import figures from './figures';
import Card from './Components/Card';

function ChatPage() {

  const [currFigure, setFigure] = useState("Zeus");

  const figureChoices = ["Zeus", "Aphrodite", "Hesiod", "Ovid", "Oedipus", "Antigone", "Herakles", "Theseus", "Homer", "Apollo", "Vergil"];

  return (
    <>
        <div className="chatpage-container">
            <div className="chatpage-content">
                
                <div className="left-side-container">

                    <h1 className="title">Mythology ChatBot</h1>
                    <p>Welcome to Robert Tezock's Mythology Chatbot! Please Click on a hero and then start typing to get started!</p>

                    <div className="cards-container">
                        <div className="cards-content">

                            {figureChoices.map((figure) => {
                            return <Card figure={figure} setFigure={setFigure}/>
                        })}
                        </div>
                    </div>
                </div>
                
                <Chatbot figure={currFigure} />

            </div>
        </div>
    </>
  )
}

export default ChatPage
