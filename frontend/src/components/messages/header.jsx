import React from 'react'

const header = () => {
    return (
        <div className='bg-slate-400 px-4 py-2 mb-2 flex'>
            <div className="avatar online">
                <div className="w-10 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <div className='flex items-center ml-3'><span className='text-gray-900 font-semibold text-xl'>Aamod Jain</span></div>
        </div>
    )
}

export default header
