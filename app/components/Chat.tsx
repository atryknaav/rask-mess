import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';



export default function Chat(
    // { user, messages, currChat, setCurrChat }: propsType) {
    props: { chat: Chat, currChat: string | null, setCurrChat: Dispatch<SetStateAction<string | null>> }) {
    
    const { chat, currChat, setCurrChat} = props;
    const { user, messages } = chat;

    const lastMessage = messages[0].content.substring(0, 56) + '...';
    const timeArray = messages[0].date.split(' ')[4].split(':');
    const lastTime = `${timeArray[0]}:${timeArray[1]}`
    const [curr, setCurr] = useState<boolean>(false);

    useEffect(() => {
        if(currChat === user.name) setCurr(true);
        else setCurr(false);
    }, [currChat]);

    const handleOnClick = () => {
        console.log(`Username:${user.name}`)
        setCurrChat(user.name);
    }

    const style: string = curr 
    ? 'bg-[#cae6d3] shadow-md' 

    : 'bg-[#c0d6c7] hover:bg-[#c5dacb] active:bg-bg-[#c6dfce] shadow-sm';

  return (
    
    <div className='min-w-full flex justify-start bg-[#b0c7b7] select-none border-b-2 border-[#aaaaaa03]'>

        <div className={'flex justify-between w-full max-h-[12vh] min-h-[10vh] p-1 items-center ' + style} onClick={handleOnClick}>
        
            <div className="rounded-full bg-white w-[8vh] h-[8vh] ml-1"></div>
            <div className='flex flex-col flex-[0.98] text-[1.5vh]'>

                <div className='flex flex-row justify-between'>

                    <div className='p-1 flex h-[85%] justify-start text-left'>
                        {user.name}
                    </div>
                    <div className='p-1 flex h-[85%] justify-start text-left pr-8'>
                        {lastTime}
                    </div>

                </div>

                <div className='p-1 h-[85%]'>
                        {lastMessage}
                </div>

            </div>
        </div>
    </div>
  )
}
