import React from 'react'

export default function UserBar() {
  return (
    <div className='z-3 relative w-full h-[10vh] flex bg-[#d3d3b2] shadow-md flex-row border-b-2 border-[#6f6f6f17] z-1'>
        <div className="rounded-full bg-white w-[8vh] h-[8vh] self-center ml-3"></div>
        <div className='ml-5 self-center'>Name</div>
    </div>
  )
}
