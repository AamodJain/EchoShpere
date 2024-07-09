import React from 'react'

const message = () => {
    return (
        <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS chat bubble component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <div className='chat-bubble text-white bg-blue-500'>Hello</div>
            <div className='chat-footer text-xs opacity-70 gap-1 items-center'>12:35 pm</div>
        </div>
    )
}

export default message
