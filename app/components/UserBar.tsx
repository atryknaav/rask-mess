import React from 'react'

export default function UserBar() {
  return (
    <div className='z-2 w-full h-[10vh] flex bg-[#fff0] shadow-md flex-row'>
        <div className="rounded-full bg-white w-[5rem] h-[5rem] self-center ml-3"></div>
        <div className='ml-5 self-center'>Name</div>
    </div>
  )
}
