import Image from 'next/image'
import { Time } from '@/components/timedisp'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-tl from-stone-500 to-emerald-400">
      <section> 
        <header>
          <h1>My Next App</h1>
        </header>
      </section>
      <Time />
    </main>
  )
}
