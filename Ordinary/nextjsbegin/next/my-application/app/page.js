"use client"; 

import { Time } from '@/components/timedisp'
import { useRouter } from 'next/navigation'; 
import { sitebackground1, button1 } from '@/universalstyles/number1';

export default function Home() {
  const router = useRouter(); 
  return (
    <main className={`${sitebackground1}`} >
      <section> 
        <header className ="text-5xl text-extrabold text-center">
          <h1>My Next App</h1>
        </header>
      </section>
      <Time />

      <div>
        <button onClick={() => router.push('/goto')}className ={`w-44 ${button1}}`}>
          Go to another page
        </button>
      </div>
    </main>
  )
}
