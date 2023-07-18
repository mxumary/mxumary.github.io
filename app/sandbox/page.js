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
                  <p className = 'mb-4 text-md py-2 mt-1 text-slate-800 max-w-3xl font-serif'>
                  Praesent ut convallis augue. Donec auctor consequat molestie. Maecenas lobortis, lorem porta auctor rutrum, libero ex pulvinar massa, id dapibus ex erat vel velit. Nam egestas vulputate lacus, quis elementum ante euismod id. Donec id tortor sagittis, tincidunt lectus gravida, auctor lectus.
                  </p>
                  <p className = 'mb-4 text-md py-2 mt-1 text-slate-800 max-w-3xl font-serif'>
                  Vestibulum fermentum lacus at arcu vulputate, sodales vehicula justo posuere. Aenean mattis, justo ultricies convallis auctor, leo odio vehicula leo, ac pretium eros ligula ut tortor. Aliquam non dolor nec dui sagittis lobortis at sodales ipsum. Mauris gravida volutpat justo, in semper leo scelerisque vel. Nam ut risus vel magna fermentum mollis vitae ut diam. Duis vitae turpis tellus. Etiam semper non mauris facilisis porta.
                  </p>
                </div>
            </main>
          </div>
        </div>
      );
    }