'use client';

import React from 'react';

type inputProps = {
    label: string,
    id: string,
    type?: string,
    required?: boolean,
    disabled: boolean,
    placeholder: string
};

export default function Input({
    label,
    id,
    type,
    required,
    disabled,
    placeholder
}: inputProps) {


    return (
        <div>
            <label htmlFor={id} className='block font-bold leading-6 text-[#2c2c2c] text-lg'>
                {label}
            </label>

            <div className="mt-2">
                <input id={id} type={type} autoComplete={id} disabled={disabled} required={required} className='p-3 min-w-[80%] rounded-lg bg-slate-50 disabled:bg-[#d6d6d6] disabled:text-[#a1a1a1]' placeholder={placeholder}/>
            </div>
        </div>
    )
}
