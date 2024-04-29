import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";
import Chatbot from './Chatbot';
import ChatPage from './ChatPage';
import HomePage from './HomePage';

function App() {



  return (
    <>
      <ChatPage />
    </>
  )
}

export default App
