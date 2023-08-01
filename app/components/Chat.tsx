import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

type propsType = {
    user: User,
    messages: Message[],
    currChat: string | null;
    setCurrChat: Dispatch<SetStateAction<string | null>>;
}

export default function Chat(
    // { user, messages, currChat, setCurrChat }: propsType) {
    props: { chat: Chat, currChat: string | null, setCurrChat: Dispatch<SetStateAction<string | null>> }) {
    
    const { chat, currChat, setCurrChat} = props;
    const { user, messages } = chat;

    const lastMessage = messages[0].content.substring(0, 55) + '...';
    const lastTime = messages[0].date.split(' ')[1];
    const [curr, setCurr] = useState<boolean>(false);

    useEffect(() => {
        if(currChat === user.name) setCurr(true);
        else setCurr(false);
    }, [currChat]);

    const handleOnClick = () => {
        setCurrChat(user.name);
    }

    const style: string = curr 
    ? 'flex justify-between w-[94%] max-h-[12vh] min-h-[10vh] rounded-2xl p-1 items-center bg-[#cae6d3] shadow-md ml-[2%] mb-1' 

    : 'flex justify-between w-[94%] bg-[#c0d6c7] max-h-[12vh] min-h-[10vh] rounded-2xl p-1 items-center hover:bg-[#c5dacb] active:bg-bg-[#c6dfce]shadow-sm ml-[2%] mb-1';

  return (
    
    <div className='min-w-full flex justify-start bg-[#b0c7b7] my-2 bg-origi select-none'>

        <div className={style} onClick={handleOnClick}>
        
            <div className="rounded-full bg-white w-[60px] h-[60px]"></div>
            <div className='flex flex-col flex-[0.98]'>

                <div className='flex flex-row justify-between'>

                    <div className='p-1 flex h-[85%] justify-start text-left'>
                        {user.name}
                    </div>
                    <div className='p-1 flex h-[85%] justify-start text-left pr-2'>
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
