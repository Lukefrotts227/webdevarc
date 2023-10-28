import Link from 'next/link';


export default function NextPage(){

    return(
        <main>
            <header className="text-9xl text-center">
                this is the next page
            </header>

            <Link href="/">
                <section className =""> 
                    <button>
                        requiem 
                    </button>
                </section>
            </Link>

            <Link href="/auth">
                <section ClassName={`w-56 text-3xl`}>
                    <button>
                        Authentication
                    </button>
                </section>
            </Link>
        </main>

    )
}