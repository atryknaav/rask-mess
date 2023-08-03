import React from 'react';
import { localUser } from '@/db/db';
import DoneAllIcon from '@mui/icons-material/DoneAll';

type propsType = {
    message: Message
}

export default function Message(props: { message: Message}) {
  const { message } = props;

  const timeArray = message.date.split(' ')[4].split(':');
  const time = `${timeArray[0]}:${timeArray[1]}`

  const alignStyle = message.sender !== localUser
  ? 'self-start bg-[#f9fae1]' : 'self-end bg-[#e9e9dd]';

  const checkedStyle = message.read 
  ? 'text-text-[#53514bb9]' : 'text-[#949494b9]'

  return (
    <div className={'flex flex-col shadow-sm mx-6 px-6 pt-6 pb-2 w-[fit-content] max-w-[30vw] rounded-3xl mb-2 ' + alignStyle}>
        {message.content}
        <div className="flex flex-row justify-end mt-1">
            <div className='mr-3'>
              {time}
            </div>
            {message.sender === localUser && 
              <div className={checkedStyle}>
                <DoneAllIcon />
              </div>
            } 
        </div>
    </div>
  )
}
