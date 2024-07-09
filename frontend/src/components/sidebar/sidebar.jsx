import React from 'react'

import SearchBar from './searchBar'
import Conversations from './conversations'
import LogoutBtn from './logoutBtn'

const sidebar = () => {
  return (
    <div className='flex flex-col border-r border-slate-500  p-4'>
      <SearchBar/>
      <div className='divider px-3'></div>
      <Conversations/>
      <LogoutBtn/>
    </div>
  )
}

export default sidebar
