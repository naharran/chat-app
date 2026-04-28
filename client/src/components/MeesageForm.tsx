
import {Message} from "../../../common"
import {useState} from "react"

interface MeesageFormProps {
    userId: string
    onSend : (message: Message) => void
}

 const MessageForm = ({userId, onSend}: MeesageFormProps) =>  {
    const [content,setContent] = useState("")
    const handleClick = () => {
        const message = {userId, content,createdAt: new Date()}
        onSend(message)
    }
    return <div>
        <input onChange={e => setContent(e.target.value)} placeholder="Enter your message" />
        <button onClick={handleClick}> Send</button>
    </div>
}  

export default MessageForm