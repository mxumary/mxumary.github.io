// import Link from "next/link";
import Header from "app/components/Header";
import Head from "next/head";
export default function Home() {
    return (
        <>
          <head>
            <link rel="icon" type="image/png" href="/mango.png" />
            <title>Sandbox</title>
          </head>
          <div className="bg-white px-20">
            <nav className="py-10 mb-12 flex justify-between">
            <Header />
            </nav>
            <main>
                <div className="px-20">
                  <h2 className = 'text-4xl py-2 font-bold'>Sandbox</h2>
                  <p className = 'mb-4 text-md py-2 mt-1 text-slate-800 max-w-3xl font-serif'>
                  Projects that are older/might not fit into a traditional data science portfolio.
                  </p>
                  <h2 className = 'text-xl font-semibold'>This website!</h2>
                  <p className = 'font-serif text-md py-2 mt-1 text-gray-800 max-w-3xl'>Since my research involves React, I wanted to get better at web development. This website was built with Next.js, Tailwind, and Vercel.
            </p>
                </div>
            </main>
          </div>
        </>
      );
    }