import React, { useEffect } from 'react'
import { useState } from 'react'

import Header from './header'
import Messages from './messages'
import MessageInput from './messageInput'
import useConversation from '../../zustand/useConversation';

import { TiMessages } from "react-icons/ti";

const messageBox = () => {
  const {selectedConversation , setSelectedConversation} = useConversation();
  useEffect(() => {
		// cleanup function (unmounts)
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);
  return (
    <div className='md:min-w-[450px] flex flex-col'>
    {!selectedConversation ? noChatSelected() : 
    (  
      <>
      <Header conversation={selectedConversation}/>
      <Messages/>
      <MessageInput/>
      </>
    )}
    </div>
  )
}

const noChatSelected = ()=>{
  return(
    <div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 Aamod Jain </p>
				<p>Select a chat to start messaging</p>
        <TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
  )
}

export default messageBox
