import { useState,useEffect } from 'react';
import { Message } from '../../common';
import './App.css'
import MeesageForm from './components/MeesageForm';
import { ws } from './main';
import MessageList from './components/MessageList';
import axios from 'axios';

function App() {

  const userId = crypto.randomUUID();

  const [messages, setMessages] = useState([])

  useEffect(() =>{
    async function getMessages(){
        const {data: messagesFromDb} = await axios.get("http://localhost:3000/messages")
        console.log(messagesFromDb)
        const mappedDatesMessages =  
        messagesFromDb.map((messageObj: Message) => {
          return {
          ...messageObj,
        createdAt: new Date(messageObj.createdAt)
        }
        }
      )
        setMessages(mappedDatesMessages)
    }
    getMessages()
  },[])

  const sendMessageToServer = (message:Message) => {
    ws.send(JSON.stringify(message))
  }
  
  ws.onmessage = (message => {
    const messageObj = JSON.parse(message.data)
    messageObj.createdAt = new Date(messageObj.createdAt)
    setMessages([...messages, messageObj])
  })
  return (
    <>
      <MessageList messages={messages} />
      <MeesageForm onSend={sendMessageToServer} userId={userId}/>
    </>
  )
}

export default App
