import React from 'react'
import { useAuthContex } from '../../context/authContext';
import  useConversation from '../../zustand/useConversation';
import { extractTime } from '../../../../backend/utils/extractTime';

const message = ({message}) => {
    const {authUser} = useAuthContex();
    const {selectedConversation} = useConversation();
    const fromMe =  message.senderId === authUser._id;
    const chatClass = !fromMe ? 'chat-start' : 'chat-end';
    const chatColor = fromMe ? 'bg-blue-500' : '';
    const profilepic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
    return (
        <div className={`chat ${chatClass}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS chat bubble component"
                        src= {profilepic} />
                </div>
            </div>
            <div className= {`chat-bubble text-white ${chatColor}`}>{message.message}</div>
            <div className='chat-footer text-xs opacity-70 gap-1 items-center mt-1'>{extractTime(message.createdAt)}</div>
        </div>
    )
}

export default message
