import { IoSearch } from "react-icons/io5";
import React from 'react'

const searchBar = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type='text' placeholder='Search...' className='input input-bordered rounded-full' />
        <button className='btn btn-circle bg-sky-500 text-white'>
            <IoSearch className="w-6 h-6"/>
        </button>
    </form>
  )
}

export default searchBar
