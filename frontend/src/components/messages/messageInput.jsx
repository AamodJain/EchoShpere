import React from 'react'

import { IoIosSend } from "react-icons/io";
import useSendMessage from '../../hooks/useSendMessage';
import { useState } from 'react';

const messageInput = () => {
    const {loading , sendMessage} = useSendMessage();
    const [message, setMessage] = useState("");
    const handleSubmit = async(e) => {
        e.preventDefault();
        if(!message) return;
        await sendMessage(message);
        setMessage("");
    }
    return (

        <form className='px-2 my-3' onSubmit={handleSubmit}>
            <div className='w-full flex relative'>
                <input type="text" placeholder="Type a message" className="input input-bordered w-full m-1 overflow-auto" value={message} onChange={(e)=>{setMessage(e.target.value)}} />
                <button type='submit' className='absolute items-center pe-3 end-0 inset-y-0'>
                    {loading ? <span className='loading loading-spinner'></span> : <IoIosSend className='w-6 h-6 ' />}
                </button>
            </div>
        </form>
    )
}

export default messageInput
