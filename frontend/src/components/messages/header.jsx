import React from 'react'
import { useSocketContext } from '../../context/socketContext';

const header = ({conversation}) => {
    // console.log(conversation);
    const {onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id);
    return (
        <div className='bg-slate-400 px-4 py-2 mb-2 flex'>
            <div className={`avatar ${isOnline ? "online":""}`}>
                <div className="w-10 rounded-full">
                    <img src= {conversation.profilePic} />
                </div>
            </div>
            <div className='flex items-center ml-3'><span className='text-gray-900 font-semibold text-xl'>{conversation.fullName}</span></div>
        </div>
    )
}

export default header
