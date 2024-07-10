import React, { useEffect } from 'react'
import Message from './message'
import useGetMessages from '../../hooks/useGetMessages';
import MessageSkeleton from '../skeletons/messageSkeleton';
import { useRef } from 'react';
import { set } from 'mongoose';

const Messages = () => {
  const {loading , Messages} = useGetMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({behavior:'smooth'});
    }
    ,100);
  },[Messages])

  return (
    <div className='px-4 overflow-auto flex-1'>
      {!loading && (Messages.length > 0) && Messages.map((message) => (
         <div key={message._id} ref={lastMessageRef}>
          <Message  message={message}/>
        </div>
      ))}

      {loading && [...Array(3)].map((_,index)=><MessageSkeleton key={index}/>) }
      
      {!loading && Messages.length === 0 && (<p className='text-center'>Send a message to start a conversation</p>)}
    </div>
  )
}

export default Messages


// const Messages = () => {
//   const { loading, messages } = useGetMessages();
//   console.log('Loading:', loading);
//   console.log('Messages:', typeof(messages));
//   return (
//     <div className='px-4 overflow-auto flex-1'>
//       {loading && [...Array(3)].map((_, index) => <MessageSkeleton key={index} />)}
      
//       {!loading && messages.length === 0 && (
//         <p className='text-center'>Send a message to start a conversation</p>
//       )}

//       {!loading && messages.length > 0 && (
//         messages.map(message => (
//           <Message key={message._id} {...message} />
//         ))
//       )}
//     </div>
//   )
// }

// export default Messages
