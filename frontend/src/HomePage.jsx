import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";
import Chatbot from './Chatbot';
import './HomePage.css';

function HomePage() {

  return (
    <>
        <div className="home-container">
            <div className="home-content">

                <div className="title-container">
                    <div className="title-content">

                        Explore mythology in the modern world.
                    </div>
                </div>

                <div className="try-button-container">
                    <div className="try-button-content">
                        Try Now!
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default HomePage;
