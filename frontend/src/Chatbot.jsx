import { useState, useEffect } from 'react'
import './App.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";
import figures from './figures';


function Chatbot({ figure }) {

  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState(figures[figure].messages)

  

  useEffect(() => {

    setMessages(figures[figure].messages);
  }, [figure])

  const handleSend = async (message) => {

    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing"
    };

    const newMessages = [...messages, newMessage]; // all the old messages and the new messages

    // update our messages state
    setMessages(newMessages);

    // set a typing indicator
    setTyping(true);

    // send the request to chatGPT.
    await processMessageToChatGPT(newMessages);

    // update typing status after the figure responds.
    setTyping(false);
  }

  async function processMessageToChatGPT(chatMessages) {

    let apiMessages = chatMessages.map((messageObject) => {
      let role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
      let apiMessage = messageObject.message;

      return { role : role, content : apiMessage }

    });

    const systemMessage = {
      role: "system",
      content: figures[figure].prompt //`Respond and talk like you are the mythological figure, ${figure}.`
    }

    const apiRequestBody = {
      "model": "gpt-4-turbo",
      "messages": [
        systemMessage,
        ...apiMessages
      ]
    }

    // make api call to chatgpt
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + import.meta.env.VITE_GPT_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    })

    const data = await response.json();

    setMessages(
          [...chatMessages, 
            {
              message: await data.choices[0].message.content,
              sender: "ChatGPT",
              direction: "incoming"
            }
          ]
    )

    // update what's stored in our 'mock database' after chatgpt responds.
    figures[figure].messages = [...chatMessages, 
        {
          message: await data.choices[0].message.content,
          sender: "ChatGPT",
          direction: "incoming"
        }
      ];
  }

  return (
    <>
      <div>
        <MainContainer className="chatbot-container">
          <ChatContainer>
            <MessageList typingIndicator={typing ? <TypingIndicator content={`${figure} is typing...`} /> : null} >
              {messages.map((message, i) => {
                return <Message key={i} model={message} />
              })}
            </MessageList>
            <MessageInput placeholder={`Type a message here. For example, Hey ${figure}!`} onSend={handleSend} attachButton={false} />
          </ChatContainer>
        </MainContainer>

      </div>  
    </>
  )
}

export default Chatbot