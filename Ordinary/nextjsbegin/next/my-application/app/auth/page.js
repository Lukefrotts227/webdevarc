import Link from "next/link";
import { sitebackground1, button1, forminner, formouter, logininput } from '@/universalstyles/number1';



export default function Login(){

    return(
        <main className={sitebackground1}>
            
            <Link href="/">
                <top>
                    click here to go to req
                </top>
            </Link>
            <header className = {`text-center text-3xl text-bold`}>
                <h1>Login</h1>
            </header>

            <section className = {`${formouter} `}>
                <form className = {`${forminner} `}>
                    <input className={`${logininput} `} />
                    <input className={`${logininput} `} />
                </form>
            </section>


        </main>
        
        )
}