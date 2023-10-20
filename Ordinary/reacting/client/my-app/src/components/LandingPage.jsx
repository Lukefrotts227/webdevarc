import React from 'react'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function LandingPage(){

    return(
        <>
            <main className = " grid place-items-center min-h-screen bg-gradient-to-l from-slate-900 to-slate-500"> 

                <section className="h-44 bg-black"> 
                    <header className = "text-4xl text-center text-zinc-100 p-20">
                        <h1>Welcome to my Page</h1>
                    </header>
                </section>
                
            </main>
        </>
        ); 
}
