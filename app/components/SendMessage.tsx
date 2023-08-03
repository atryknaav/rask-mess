import React, { useRef, useState } from 'react';
import SendButton from './SendButton';
import { localUser } from '@/db/db';

export default function SendMessage(props: { messages?: Message[], setMessages: React.Dispatch<React.SetStateAction<Message[] | undefined>>}) {
  const { messages, setMessages } = props;

  const [text, setText] = useState<string>('');

  const msgField = useRef<HTMLTextAreaElement>(null);

  const handleSend = (e?: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if(e){
      if(e.key === 'Enter'){
        if(text !== ''){
          setText('');
          setMessages(
            [ ...messages!,
            {
              sender: localUser,
              content: text,
              date: new Date().toString(),
              read: false
            }
          ]
          )
          console.log(new Date());
          msgField.current?.focus();
        }
      }
    } else {
    if(text !== ''){

      setMessages(
        [ ...messages!,
        {
          sender: localUser,
          content: text,
          date: new Date().toString(),
          read: false
        }
        ]
      )

      console.log(new Date());
      msgField.current?.focus();

      setText('');
  }
  }
  }

  return (
    <div className='w-full h-[10vh] max-h-[15vh] flex bg-[#8c9e8d] flex-col shadow-[40px_30px_30px_30px_rgba(0,0,0,0.1)] justify-center'>
      <div className='flex flex-row h-[80%]'>
        <div className='bg-transparent h-[80%] min-h-[80%] max-h-[90%] w-[80%] self-center flex flex-row'>
          <textarea className='justify-self-center ml-[1.5vw] rounded-2xl w-full bg-[#b6c6b9] shadow-inner focus:outline-none px-2 py-1 text-[2vh] overflow-y-auto resize-none' rows={1} value={text} onChange={(e) => {
            if(e.target.value.charAt(e.target.value.length -1) !== '\n')setText(e.target.value)}} 
            
            placeholder='Send a message...' ref={msgField} onKeyDown={(e) => handleSend(e)}/>

          <div onClick={() => handleSend()}>
            <SendButton />
          </div>
        </div>
      </div>
    </div>
  )
}
