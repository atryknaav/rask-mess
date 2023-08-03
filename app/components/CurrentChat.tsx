import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { chats } from '@/db/db';
import Message from './Message';
import UserBar from './UserBar';
import SendMessage from './SendMessage';

type propsType = {
  currChat: string | null;
  setCurrChat: Dispatch<SetStateAction<string | null>>;
}


export default function CurrentChat({ currChat, setCurrChat }: propsType) {
  const [messages, setMessages] = useState<Message[]>();
  const msgListRef = useRef<HTMLDivElement>(null);
  useEffect(() => {

    if(currChat){
      

  const chat = chats.find(chat => chat.user.name === currChat);

  setMessages(chat?.messages)
    }

  
  }, [currChat])

  useEffect(() => {
  if(currChat && msgListRef.current){
    msgListRef.current.scrollTop = msgListRef.current.scrollHeight;
    console.log(msgListRef.current?.scrollTop)
  }
  }, [messages])




  console.log(messages)

  return (
    <div>
      <div className='bg-[#E7E8D1] flex min-h-full min-w-[65vw] align-bottom shadow-inner'>


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

            <div className='flex flex-col max-h-[80%] w-full overflow-y-auto' ref={msgListRef}>
             { currChat && messages?.map((message, index) => {
                return(
                  <Message key={index} message={message} />
                  
                )
              })}
              

            </div>

              {currChat &&
                <SendMessage setMessages={setMessages} messages={messages}/>
              }

        </div>
        }
          


      </div>
    </div>
  )
}
