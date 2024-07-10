import React from 'react'
import useConversation from '../../zustand/useConversation';

const conversation = ({conversation , emoji , lastIdx}) => {
    // console.log(conversation.fullname);
    const {selectedConversation , setSelectedConversation} = useConversation();
    const isSelected = selectedConversation?._id === conversation._id;
  return (
    <>
            <div className={`${isSelected ? "bg-sky-500" : ""} flex gap-2 items-center hover:bg-sky-500 rounded cursor-pointer py-1 p-2`} onClick={()=>setSelectedConversation(conversation)}>
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img src= {conversation.profilePic} />
                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                    <div className='flex justify-between'>
                        <p className='font-bold text-gray-200'>{conversation.fullName}</p>
                        <span className='text-xl'>{emoji}</span>
                    </div>
                </div>
            </div>
            {lastIdx ? null : <div className='divider my-0 py-0 h-1'></div>}
        </>
  )
}

export default conversation
