import Head from "app/components/Head";
import Link from "next/link";
export default function Projects() {
  return (
    <div>
      <head>
        <link rel="icon" type="image/png" href="/mango.png"></link>
        <title>About me</title>
      </head>
      <body className="bg-white px-20">
        <Head />
        <main>
          <div className="px-20 py-8">
            <h2 className = 'text-3xl font-semibold'>Atlassian</h2>
            <p className = 'text-md py-2 mt-1 text-gray-800 max-w-3xl'>Write info here</p>
          </div>
          <div className="px-20 py-8">
            <h2 className = 'text-3xl font-semibold'>Computational Social Science Lab</h2>
            <p className = 'text-md py-2 mt-1 text-gray-800 max-w-3xl'>Write info here</p>
          </div>
          <div className="px-20 py-8">
            <h2 className = 'text-3xl py-2 font-semibold'>Applied Probability Models in Marketing</h2>
            <p className = 'text-md py-2 mt-1 text-gray-800 max-w-3xl'>Write info here</p>
          </div>
          <div className="px-20 py-5">
            <h2 className = 'text-3xl py-2 font-semibold'>Bank of America</h2>
            <p>write info here</p>
          </div>
          <div className="px-20 py-5">
            <h2 className = 'text-3xl font-semibold'>Other projects</h2>
            <ul className = 'text-md py-2 mt-1 text-gray-800 max-w-3xl'>
              <li>hi there</li>
              <li>another one</li>
              <li>put this in later</li>
            </ul>
          </div>
        </main>
      </body>
    </div>
  );
}