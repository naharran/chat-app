import { Message } from "../../../common";


interface MessageListProps {
    messages: Message[]
}

const MessageItem = ({message} : {message:Message}) =>{
    return <div>
        <span>{message.createdAt.toDateString()} </span> : <span> {message.content}</span>
    </div>
}

const MessageList = ({messages}: MessageListProps) =>{
   return <div>

        {messages.map(m => {
            return <MessageItem message={m}/>
        })}

        
    </div>
}

export default MessageList