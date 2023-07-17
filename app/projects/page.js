import Header from "app/components/Header";
// import Link from "next/link";
import Head from "next/head";
export default function Projects() {
  return (
    <div>
      <Head>
        <link rel="icon" type="image/png" href="/mango.png"></link>
        <title>About me</title>
      </Head>
      <div className="bg-white px-20">
        <nav className="py-10 mb-12 flex justify-between">
          <Header />
        </nav>
        <main>
          <div className="px-20">
            <h2 className = 'text-4xl py-2 font-semibold'>Projects</h2>
            <p className = 'text-md py-2 mt-1 text-slate-800 max-w-3xl'>
              Check out my major projects.
            </p>
          </div>
          <div className="px-20 py-8">
            <h2 className = 'text-xl font-semibold'>Atlassian</h2>
            <p className = 'text-md py-2 mt-1 text-gray-800 max-w-3xl'>Write info here</p>
          </div>
          <div className="px-20 py-8">
            <h2 className = 'text-xl font-semibold'>Computational Social Science Lab</h2>
            <p className = 'text-md py-2 mt-1 text-gray-800 max-w-3xl'>Write info here</p>
          </div>
          <div className="px-20 py-8">
            <h2 className = 'text-xl py-2 font-semibold'>Applied Probability Models in Marketing</h2>
            <p className = 'text-md py-2 mt-1 text-gray-800 max-w-3xl'>Write info here</p>
          </div>
          <div className="px-20 py-5">
            <h2 className = 'text-xl py-2 font-semibold'>Bank of America</h2>
            <p>write info here</p>
          </div>
          <div className="px-20 py-5">
            <h2 className = 'text-xl font-semibold'>Other projects</h2>
            <ul className = 'text-md py-2 mt-1 text-gray-800 max-w-3xl'>
              <li>hi there</li>
              <li>another one</li>
              <li>put this in later</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}