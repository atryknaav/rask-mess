'use client';

import React, { FormEvent, useCallback, useState } from 'react';
import Input from './Input';
import Button from './Button';
import { FaGoogle, FaGithub } from 'react-icons/fa';

export default function AuthForm() {
  enum aOptions {
    'LOGIN',
    'REGISTER'
  };

  const [aOption, setAOption] = useState<aOptions>(aOptions.LOGIN);
  const[isLoading, setIsLoading] = useState<boolean>(false);

  const toggleAOption = useCallback(() => {
    if (aOption === aOptions.LOGIN) {
      setAOption(aOptions.REGISTER);
    } else {
      setAOption(aOptions.LOGIN);
    }
  }, [aOption]);

  type authType = {
    username: string,
    password: string
  };

  const handleSubmit = (data: FormEvent<HTMLFormElement>) => {
    data.preventDefault();
    setIsLoading(true);

    if(aOption === aOptions.REGISTER) {

    } else {

    }
  };

  const socialAuth = (action: string) => {
    setIsLoading(true);
  }

  return (
    <div>
      {aOption === aOptions.LOGIN 
      
      ?

      <div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-[#2c2c2c]">
        Sign in to your account
        </h2>
        <div className="text-center mt-8 max-w-2xl sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-[#E7E8D1] px-4 py-8 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
              
              <Input id='username' label='Username' disabled={isLoading} type='text' placeholder='Enter your username'/>
              <Input id='password' label='Password' disabled={isLoading} type='password' placeholder='Enter your password'/>
              <Button disabled={isLoading} action='Sign In' />
            </form>

            <hr className='border-[#0000002a] my-6'/>
            <p className='my-3 text-[#2c2c2c]'>Or sign in with:</p>
            <div className="flex justify-center">
              <FaGoogle className="text-[#808080] text-4xl hover:cursor-pointer mx-3 hover:text-[#6b6b6b] active:text-[#5a5a5a]"/>
              <FaGithub className="text-[#808080] text-4xl hover:cursor-pointer mx-3 hover:text-[#6b6b6b] active:text-[#5a5a5a]"/>
            </div>
            <h1 onClick={() => toggleAOption()} className='hover:cursor-pointer hover:text-[#000000] text-[#333] underline select-none'>Don't have an account?</h1>
          </div>
        </div>
      </div>

      :

      <div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-[#2c2c2c]">
                  Register a new account
              </h2>
        <div className="text-center mt-8 max-w-2xl sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-[#E7E8D1] px-4 py-8 shadow rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
              
              <Input id='username' label='Username' disabled={isLoading} type='text' placeholder='Enter your username'/>
              <Input id='password' label='Password' disabled={isLoading} type='password' placeholder='Enter your password'/>
              <Input id='repassword' label='Confirm the password' disabled={false} type='password' placeholder='Confirm your password'/>
              <Button disabled={isLoading}  action='Register' />
            </form>

            <hr className='border-[#585858] my-6'/>
            <p className='my-3 text-[#2c2c2c]'>Or sign in with:</p>
            <div className="flex justify-center">
              <FaGoogle className="text-[#808080] text-4xl hover:cursor-pointer mx-3 hover:text-[#6b6b6b] active:text-[#5a5a5a]"/>
              <FaGithub className="text-[#808080] text-4xl hover:cursor-pointer mx-3 hover:text-[#6b6b6b] active:text-[#5a5a5a]"/>
            </div>
            <p onClick={() => toggleAOption()} className='hover:cursor-pointer hover:text-[#000000] text-[#333] underline select-none'>Already have an account?</p>
          </div>
        </div>
      </div>
    }
    </div>
    
  )
}
