import React, { Dispatch, SetStateAction } from 'react'
import Chat from './Chat'
import { chats, users } from '@/db/db'

type propsType = {
    currChat: string | null;
    setCurrChat: Dispatch<SetStateAction<string | null>>;
}

export default function ChatsBar({ currChat, setCurrChat }: propsType) {
  return (
    <div>
      <Chat 
        chat={chats[0]}
        currChat={currChat}
        setCurrChat={setCurrChat}
      />
      <Chat 
        chat={chats[1]}
        currChat={currChat}
        setCurrChat={setCurrChat}
      />
      <Chat 
        chat={chats[2]}
        currChat={currChat}
        setCurrChat={setCurrChat}
      />
      <Chat 
        chat={chats[3]}
        currChat={currChat}
        setCurrChat={setCurrChat}
      />
      <Chat 
        chat={chats[4]}
        currChat={currChat}
        setCurrChat={setCurrChat}
      />
      <Chat 
        chat={chats[5]}
        currChat={currChat}
        setCurrChat={setCurrChat}
      />
      <Chat 
        chat={chats[5]}
        currChat={currChat}
        setCurrChat={setCurrChat}
      />
      <Chat 
        chat={chats[5]}
        currChat={currChat}
        setCurrChat={setCurrChat}
      />
      <Chat 
        chat={chats[5]}
        currChat={currChat}
        setCurrChat={setCurrChat}
      />
      <Chat 
        chat={chats[5]}
        currChat={currChat}
        setCurrChat={setCurrChat}
      />
      <Chat 
        chat={chats[5]}
        currChat={currChat}
        setCurrChat={setCurrChat}
      />
      
    </div>
  )
}
