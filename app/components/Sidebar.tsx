import React, { Dispatch, SetStateAction } from 'react';
import ChatBar from './ChatBar';
import SearchBar from './SearchBar';

type propsType = {
    currChat: string | null;
    setCurrChat: Dispatch<SetStateAction<string | null>>;
}

export default function Sidebar({ currChat, setCurrChat }: propsType) {
  return (
    <div className='flex flex-col overflow-y-auto overflow-x-hidden h-[100vh]'>
      <div className='left-0 bg-[#b0c7b7] h-[100hv] min-w-[35vw] sticky shadow-xl z-10'>
        <SearchBar />
        <ChatBar currChat={currChat} setCurrChat={setCurrChat} />
      </div>
    </div>
  )
}
