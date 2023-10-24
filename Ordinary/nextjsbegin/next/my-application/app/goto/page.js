import Link from 'next/link';
import { sitebackground1, button1 } from '@/universalstyles/number1';


export default function NextPage(){

    return(
        <main className={`${sitebackground1}`}>
            <header className="text-9xl text-center">
                this is the next page
            </header>

            <Link href="/">
                <section className ={`w-44 ${button1}}`}> 
                    <button>
                        requiem
                    </button>
                </section>
            </Link>

            <Link href="/auth">
                <section ClassNaem={`w-56 text-3xl ${button1}`}>
                    <button>
                        Authentication
                    </button>
                </section>
            </Link>
        </main>

    )
}