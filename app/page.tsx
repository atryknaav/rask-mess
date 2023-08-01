'use client';

import { useState } from 'react';
import Sidebar from './components/Sidebar';
import CurrentChat from './components/CurrentChat';

export default function Home() {
 const [currChat, setCurrChat] = useState<string | null>(null);
  return (
    <div className='flex flex-row h-full w-full'>

      <Sidebar currChat={currChat} setCurrChat={setCurrChat} />
      <CurrentChat currChat={currChat} setCurrChat={setCurrChat}/>
    </div>
  )
}
