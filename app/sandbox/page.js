// import Link from "next/link";
import Header from "app/components/Header";
import Head from "next/head";
export default function Home() {
    return (
        <div>
          <Head>
            <link rel="icon" type="image/png" href="/mango.png"></link>
            <title>Mary Xu</title>
          </Head>
          <div className="bg-white px-20">
            <nav className="py-10 mb-12 flex justify-between">
            <Header />
            </nav>
            <main>
                <div className="px-20">
                  <h2 className = 'text-4xl py-2 font-semibold'>Sandbox</h2>
                  <p className = 'text-md py-2 mt-1 text-slate-800 max-w-3xl'>
                    Some other projects that might not fit under the traditional "data science portfolio".
                  </p>
                </div>
            </main>
          </div>
        </div>
      );
    }