import React from 'react'

export default function SearchBar() {
  return (
    <div className='h-[10vh] flex bg-[#fff0] shadow-md mb-4'>
        <div className="m-[2%] shadow-inner bg-[#a2beae] rounded-2xl h-[50%] w-[85%] self-center">
            <input type="text" className='w-full h-full bg-transparent border-0 focus:outline-0 px-3 placeholder:text-[#757575] focus:placeholder:text-transparent' placeholder='&#x1F50E;&#xFE0E; Search'/>
        </div>
    </div>
  )
}
