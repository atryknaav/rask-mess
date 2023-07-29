"use client";

import { redirect } from 'next/navigation';
import { useSession, SessionProvider } from 'next-auth/react';
import { useEffect } from 'react';

function Home() {
  
  const { data: session, status } =  useSession()

  useEffect(() => {
    if (status === "unauthenticated") {
      redirect('/auth');
    }
  }, [status]);
  return (
    <div>
    {status === "loading" 
    ?
    <div>Defining your sesssion</div>
    : 
    <div>HHHHHHIIII</div>
    }
    </div>
  )
}

export default function HomeWithSession() {
  return (
    <SessionProvider>
      <Home />
    </SessionProvider>
  );
}