import React from 'react'; 

type actionType = {
    action: string,
    disabled: boolean
}

export default function Button({ action, disabled }: actionType) {
  return (
    <div>
        <button className='bg-[#869997] px-8 py-3 rounded-lg font-bold text-white hover:bg-[#7a8b8a] active:bg-[#6d7c7b] mt-4 text-lg min-w-[80%] disabled:bg-[#d1d1d1] disabled:text-[#5f6161]' type='submit' disabled={disabled}>{action}</button>
    </div>
  )
}
