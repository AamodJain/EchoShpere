import React from 'react'

import { CiLogout } from "react-icons/ci";
import useLogout from '../../hooks/useLogout';

const logoutBtn = () => {
  const {loading, logout} = useLogout();
  return (
      <div className='mt-auto'>
        {loading ? <div className='loading loading-spinner'></div> : <CiLogout className='text-white w-6 h-6 cursor-pointer' onClick={logout}/> }
      </div>
  )
}

export default logoutBtn


// import { BiLogOut } from "react-icons/bi";

// const logoutBtn = () => {
//   return (
//       <div className='mt-auto'><BiLogOut className='text-white w-6 h-6 cursor-pointer '/></div>
//   )
// }