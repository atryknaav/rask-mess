import React from 'react'

export default function UserBar() {
  return (
    <div className='fixed w-full h-[10vh] flex bg-[#fff0] shadow-md mb-4 flex-row'>
        <div className="rounded-full bg-white w-[80px] h-[80px] ml-2 mt-2"></div>
        <div className='ml-5 self-center'>Name</div>
    </div>
  )
}
