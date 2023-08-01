import React from 'react';
import { localUser } from '@/db/db';

type propsType = {
    message: Message
}

export default function Message(props: { message: Message}) {
  const { message } = props;

  const time = message.date.split(' ')[1];

  const align = message.sender !== localUser
  ? 'self-start bg-[#f9fae1]' : 'self-end bg-[#e9e9dd]';

  return (
    <div className={'flex flex-col shadow-sm mx-6 px-6 pt-6 pb-2 w-[fit-content] max-w-[30vw] rounded-3xl m-5 ' + align}>
        {message.content}
        <div className="flex flex-row justify-end mt-1">
            {time}
        </div>
    </div>
  )
}
