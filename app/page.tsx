import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/auth')
  return (
    <main>
      Hi
    </main>
  )
}
