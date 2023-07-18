import Header from "app/components/Header";
// import Link from "next/link";
import Head from "next/head";
export default function Projects() {
  return (
    <>
      <head>
        <link rel="icon" type="image/png" href="/mango.png" />
        <title>Projects</title>
      </head>
      <div className="bg-white px-20">
        <nav className="py-10 mb-12 flex justify-between">
          <Header />
        </nav>
        <main>
          <div className="px-20">
            <h2 className = 'text-4xl py-2 font-semibold'>Projects</h2>
          </div>
          <div className="px-20 py-8">
            <h2 className = 'text-xl font-semibold'>Atlassian</h2>
            <p className = 'font-serif text-md py-2 mt-1 text-gray-800 max-w-3xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </div>
          <div className="px-20 py-8">
            <h2 className = 'text-xl font-semibold'>Computational Social Science Lab</h2>
            <p className = 'font-serif text-md py-2 mt-1 text-gray-800 max-w-3xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
          </div>
          <div className="px-20 py-8">
            <h2 className = 'text-xl py-2 font-semibold'>Applied Probability Models in Marketing</h2>
            <p className = 'font-serif text-md py-2 mt-1 text-gray-800 max-w-3xl'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
          </div>
          <div className="px-20 py-5">
            <h2 className = 'text-xl py-2 font-semibold'>Bank of America</h2>
            <p className = 'font-serif text-md py-2 mt-1 text-gray-800 max-w-3xl'>
            Nam pellentesque mi at lacus iaculis, et ornare turpis efficitur. Suspendisse velit turpis, bibendum et elit ac, molestie consectetur leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam sollicitudin ligula ac egestas posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur a diam mauris. Aliquam eget laoreet dolor. Nulla quis ligula in arcu consequat sagittis consectetur in purus. Etiam nec odio venenatis, dapibus odio tincidunt, ullamcorper ipsum. Proin scelerisque commodo dui in porttitor.
            </p>
          </div>
          <div className="px-20 py-5">
            <h2 className = 'text-xl font-semibold'>Other projects</h2>
            <ul className = 'font-serif text-md py-2 mt-1 text-gray-800 max-w-3xl'>
              <li>hi there</li>
              <li>another one</li>
              <li>put this in later</li>
            </ul>
          </div>
        </main>
      </div>
    </>
  );
}