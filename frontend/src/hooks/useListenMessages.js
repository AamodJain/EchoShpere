import { useEffect } from 'react'

import { useSocketContext } from '../context/socketContext'
import useConversation from '../zustand/useConversation'
import notificationSound from '../assets/sound/notificationSound.mp3'

const useListenMessages = () => {
    const { Socket } = useSocketContext()
    const {Messages , setMessages} = useConversation();
    useEffect(()=>{
        Socket?.on("newMessage", (newMessage) => {
            newMessage.shouldJump = true;
            const notifSound = new Audio(notificationSound);
            notifSound.play();
            setMessages([...Messages, newMessage]);
        });
        // return () => {
        //     Socket?.off("newMessage");
        // }
    },[Messages, setMessages, Socket])
}

export default useListenMessages
