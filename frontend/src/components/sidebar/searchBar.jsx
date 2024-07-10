import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import useGetConversation from "../../hooks/useGetConversations";
import useConversation from "../../zustand/useConversation";  
import React from 'react'
import toast from "react-hot-toast";

const searchBar = () => {
  const [search, setSearch] = useState("")
  const {conversations} = useGetConversation();
  const {setSelectedConversation} = useConversation();
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!search) return;
    const conversation = conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()));
    if(conversation){
      setSelectedConversation(conversation);
      setSearch("");
  }else{
    toast.error('No such conversation found');
  }
}
  return (
    <form className='flex items-center gap-2' onSubmit={handleSubmit}>
        <input type='text' placeholder='Search...' className='input input-bordered rounded-full' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
        <button className='btn btn-circle bg-sky-500 text-white'>
            <IoSearch className="w-6 h-6"/>
        </button>
    </form>
  )
}
export default searchBar
