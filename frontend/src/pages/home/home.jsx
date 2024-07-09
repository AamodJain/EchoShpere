import React from 'react'

import Sidebar from '../../components/sidebar/sidebar'
import MessageBox from '../../components/messages/messageBox'

const home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <Sidebar/>
      <MessageBox/>
    </div>
  )
}

export default home
