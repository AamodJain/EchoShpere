import { useState } from 'react'
import useConversation from '../zustand/useConversation';
import toast from 'react-hot-toast';

const useSendMessage = () => {
    const [loading, setLoading] = useState(false)
    const {Messages , setMessages , selectedConversation} = useConversation();

    const sendMessage = async (message)=>{
        setLoading(true);
        try {
            const res = await fetch(`/api/message/send/${selectedConversation._id}`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                }
                ,body: JSON.stringify({message})
            });
            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }  
            console.log("data : ",data);
            console.log("messages : ",Messages);
            setMessages([...Messages , data]);
            // console.log(data);
        } catch (error) {
            console.log("error in useSendMessage");
            toast.error(error.message);
        }finally{
            setLoading(false);  
        }
    }
    return {sendMessage,loading};
}

export default useSendMessage
