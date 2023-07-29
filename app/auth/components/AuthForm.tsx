'use client';

import React, { FormEvent, useCallback, useState } from 'react';
import Input from './Input';
import Button from './Button';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import axios from 'axios';
import { signIn } from "next-auth/react";
import { redirect } from 'next/navigation';


export default function AuthForm() {
  enum aOptions {
    'LOGIN',
    'REGISTER'
  };

  const [aOption, setAOption] = useState<aOptions>(aOptions.LOGIN);
  const[isLoading, setIsLoading] = useState<boolean>(false);

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rePwd, setRePwd] = useState<string>('');

  const toggleAOption = useCallback(() => {
    if (aOption === aOptions.LOGIN) {
      setAOption(aOptions.REGISTER);
    } else {
      setAOption(aOptions.LOGIN);
    }
  }, [aOption]);

  type authType = {
    username: string,
    password: string,
    rePwd?: string
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    
    const regData = password === rePwd && aOption === aOptions.REGISTER
      ? {
        username, 
        password
      }
      
      : { };
    if (!regData.password && aOption === aOptions.REGISTER) throw new Error("The passwords don't match");


    const signInData = {
      username, 
      password
    }

    if(aOption === aOptions.REGISTER) {
      axios.post('/api/register', regData);
    } else {
      signIn('credentials', {...signInData, redirect: false})
      .then(
        () => {redirect("/");}
      )
      
    }
  };

  const socialAuth = (action: string) => {
    setIsLoading(true);
  }

  return (
      <div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-[#2c2c2c]">
        {aOption === aOptions.LOGIN ? 'Sign in to your account' : 'Register a new account'}
        </h2>
        <div className="text-center mt-8 max-w-2xl sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-[#E7E8D1] px-4 py-8 shadow rounded-lg sm:px-10">

            {aOption === aOptions.LOGIN 
            
            
            ?
            <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
              
              <Input id='username' label='Username' disabled={isLoading} type='text' placeholder='Enter your username' state={username} setState={setUsername}/>
              <Input id='password' label='Password' disabled={isLoading} type='password' placeholder='Enter your password' state={password} setState={setPassword}/>
              <Button disabled={isLoading} action='Sign In' />
              
            </form>


            :


            <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
              
              <Input id='username' label='Username' disabled={isLoading} type='text' placeholder='Enter your username' state={username} setState={setUsername}/>
              <Input id='password' label='Password' disabled={isLoading} type='password' placeholder='Enter your password' state={password} setState={setPassword}/>
              <Input id='repassword' label='Confirm the password' disabled={false} type='password' placeholder='Confirm your password' state={rePwd} setState={setRePwd}/>
              <Button disabled={isLoading}  action='Register' />
            </form>

            }

            <hr className='border-[#0000002a] my-6'/>
            <p className='my-3 text-[#2c2c2c]'>Or sign in with:</p>
            <div className="flex justify-center">
              <FaGoogle className="text-[#808080] text-4xl hover:cursor-pointer mx-3 hover:text-[#6b6b6b] active:text-[#5a5a5a]"/>
              <FaGithub className="text-[#808080] text-4xl hover:cursor-pointer mx-3 hover:text-[#6b6b6b] active:text-[#5a5a5a]"/>
            </div>
            <h1 onClick={() => toggleAOption()} className='hover:cursor-pointer hover:text-[#000000] text-[#333] underline select-none'>{aOption === aOptions.LOGIN ? "Don't have an account?" : 'Already have an account?'}</h1>
          </div>
        </div>
      </div>
  )
}
