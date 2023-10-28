import Link from "next/link";
import { Login } from "@/helpers/api";



export default function Log(){

    return(
        <main>
            <contain className="flex items-center justify-center pb-16">
                <Link href="/">
                    <button className="w-44 bg-gray-400 font-extrabold hover:bg-gray-500 hover:font-extralight">
                        click here to go to req
                    </button>
                </Link>
            </contain>
            <header className = {`text-center text-4xl text-bold pb-24`}>
                <h1>Login</h1>
            </header>

            <section className = " flex justify-center shadow-lg border-2 border-red-300 rounder-md bg-slate-600 p-8 h-40">
                <form className = "flex flex-col gap-3">
                    <input type="text" className= "w-72" placeholder="Email"/>
                    <input type="password" className= "w-72" placeholder="Password"/>
                </form>
            </section>


        </main>
        
        )
}