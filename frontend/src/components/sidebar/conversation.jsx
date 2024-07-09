import React from 'react'

const conversation = () => {
  return (
    <>
            <div className='flex gap-2 items-center hover:bg-sky-500 rounded cursor-pointer py-1 p-2'>
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                    <div className='flex justify-between'>
                        <p className='font-bold text-gray-200'>Aamod Jain</p>
                        <span className='text-xl'>🔥</span>
                    </div>
                </div>
            </div>
            <div className='divider my-0 py-0 h-1'></div>
        </>
  )
}

export default conversation
