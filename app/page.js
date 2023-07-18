import Link from "next/link";
import Head from "next/head";
import Header from "app/components/Header";
// import Footer from "app/components/Footer";
export default function Home() {
  return (
    <>
      <head>
        <title>Mary Xu</title>
        <link rel="icon" type="image/png" href="/mango.png"></link>
      </head>
      <div className="bg-white px-20">
        <nav className="py-10 mb-12 flex justify-between">
        <Header />
        </nav>
        <main>
            <div className="px-20">
              <h2 className = 'text-4xl py-2 font-semibold'>Hi, I&apos;m Mary 👋</h2>
              <p className = 'font-serif text-md py-2 mt-1 text-slate-800 max-w-3xl'>
                Currently, I&apos;m a data science intern at Atlassian. I study statistics 
                and business at the University of Pennsylvania/The Wharton School, researching small-group
                deliberation at the <Link className="underline decoration-sky-500/30" href="https://css.seas.upenn.edu/">Computational Social Science Lab</Link>.
              </p>
              <p className = 'font-serif text-md py-1 mt-1 text-slate-800 max-w-3xl'>
                My passion lies at the intersection of technology and various fields, including product development, academia, and accessibility. 
                This passion has driven me to explore these areas more deeply and understand how they can be optimized using modern technologies.
              </p>
              <p className = 'font-serif text-md py-1 mt-1 text-slate-800 max-w-3xl'>
                Previously, I was a data engineering intern at Bank of America, a data stories reporter at <Link className="underline decoration-sky-500/30" href="https://www.thedp.com/">The Daily Pennsylvanian</Link>,
                and a web developer at the UPenn Student Federal Credit Union.
              </p>
              <p className = 'font-serif text-md py-1 mt-1 text-slate-800 max-w-3xl'>
                I&apos;m most reachable by <Link className="underline decoration-sky-500/30" href="https://www.linkedin.com/in/mxumary/">LinkedIn</Link>. You can also find me on <Link className="underline decoration-sky-500/30" href="https://github.com/mxumary">Github</Link>. Feel free to say hi!
              </p>
            </div>
            {/* <div className="fixed bottom-0 left-0 right-0">
              <Footer />
            </div> */}
        </main>
      </div>
    </>
  );
}