import React from 'react'
import { useState } from 'react'

import Header from './header'
import Messages from './messages'
import MessageInput from './messageInput'

import { TiMessages } from "react-icons/ti";
import { LuMessagesSquare } from "react-icons/lu";

const noChatSelected = ()=>{
  return(
    <div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 Aamod Jain </p>
				<p>Select a chat to start messaging</p>
				{/* <TiMessages className='text-3xl md:text-6xl text-center' /> */}
        <TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
  )
}


const messageBox = () => {
  const [isChatSelected, setisChatSelected] = useState(false)
  return (
    <div className='md:min-w-[450px] flex flex-col'>
    {!isChatSelected ? noChatSelected() : 
    (  
      <>
      <Header/>
      <Messages/>
      <MessageInput/>
      </>
    )}
    </div>
  )
}


export default messageBox
