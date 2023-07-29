'use client';

import Image from 'next/image';
import logo from '/images/logo.png';
import AuthForm from './components/AuthForm';

export default function AuthScreen() {
  return (
    <div className="flex min-h-full justify-center flex-col py-12 px-3 lg:px-8 bg-[#A7BEAE]">
        <div className="">
            <Image src={logo} alt='Logo' height={48} width={48} className='mx-auto w-auto rounded-[40px] border-[3px] p-6 border-black -mt-15 mb-5'/>

            <p className='font-bold text-5xl text-primary text-center mb-20'>Welcome to Rask!</p>
            
            <AuthForm />
        </div>
    </div>
  )
}