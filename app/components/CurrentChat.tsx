import React, { Dispatch, SetStateAction } from 'react';
import { chats } from '@/db/db';
import Message from './Message';
import UserBar from './UserBar';
import SendMessage from './SendMessage';

type propsType = {
  currChat: string | null;
  setCurrChat: Dispatch<SetStateAction<string | null>>;
}


export default function CurrentChat({ currChat, setCurrChat }: propsType) {
  const chat = chats.filter(chat => chat.user.name === currChat)[0];
  return (
    <div>
      <div className='bg-[#E7E8D1] flex min-h-full min-w-[65vw] align-bottom'>


        {currChat === null
        ?
        <div className='flex justify-center items-center min-h-[100vh] w-full select-none'>
          <p>
            Select a chat to start a conversation
          </p>
        </div>
        :
        <div className='flex flex-col justify-end w-full h-[100vh]'>

          <div className='flex flex-col justify-self-start flex-auto'>
            <UserBar />
          </div>

          <div className="h-[90%] overflow-y-scroll">
            <div className='flex flex-col justify-end h-[100%] w-full'>
              <Message message={chat.messages[0]} />
              <Message message={chat.messages[1]} />
              <Message message={chat.messages[2]} />
              <Message message={chat.messages[0]} />
              <Message message={chat.messages[1]} />
              <Message message={chat.messages[2]} />
              <Message message={chat.messages[0]} />
              <Message message={chat.messages[1]} />
              <Message message={chat.messages[2]} />
              <Message message={chat.messages[0]} />
              <Message message={chat.messages[1]} />
              <Message message={chat.messages[2]} />
              <Message message={chat.messages[0]} />
              

            </div>
          </div>

          <SendMessage />

        </div>
        }
          


      </div>
    </div>
  )
}
