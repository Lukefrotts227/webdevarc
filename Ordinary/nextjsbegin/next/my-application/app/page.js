"use client"; 

import { Time } from '@/components/timedisp'
import { useRouter } from 'next/navigation'; 

export default function Home() {
  const router = useRouter(); 
  return (
    <main >
      <section> 
        <header className ="text-5xl text-extrabold text-center">
          <h1>My Next App</h1>
        </header>
      </section>
      <Time />

      <div>
        <button onClick={() => router.push('/goto')} className="">
          Go to another page
        </button>
      </div>
    </main>
  )
}
