import React from 'react'

import { IoIosSend } from "react-icons/io";

const messageInput = () => {
    return (
        // <div className='relative flex'>
        //   <input type="text" placeholder="Type a message" className="input input-bordered w-full m-1 overflow-auto" />
        //   <button type='submit' className='absolute items-center pe-3 end-0 inset-y-0'>
        //   <IoIosSend className='w-6 h-6 '/>
        //   </button>
        // </div>

        <form className='px-2 my-3 '>
            <div className='w-full flex relative'>
                <input type="text" placeholder="Type a message" className="input input-bordered w-full m-1 overflow-auto" />
                <button type='submit' className='absolute items-center pe-3 end-0 inset-y-0'>
                    <IoIosSend className='w-6 h-6 ' />
                </button>
            </div>
        </form>
    )
}

export default messageInput
