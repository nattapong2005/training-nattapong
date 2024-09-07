import React from 'react'
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
   <div className="flex flex-col h-screen items-center justify-center">
    <h1 className='text-5xl font-bold text-red-900'>ไม่พบหน้าที่เรียกใช้</h1>
    <NavLink className="py-2 px-5 mt-5 outline outline-2 outline-red-900 rounded-md hover:bg-red-800 hover:text-white" to='/'>กลับหน้าหลัก</NavLink>
   </div>
  )
}

export default NotFound
