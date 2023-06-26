export default function Home() {
  return (
    <div>
      <head>
        <link rel="icon" type="image/png" href="/mango.png"></link>
        <title>Mary Xu</title>
     </head>
      <main className="bg-white px-20">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl px-20">Mary Xu</h1>
            <ul className="flex items-center">
              <li><a className="px-20 py-2 rounded-md ml-8" href="https://www.linkedin.com/in/mxumary/">LinkedIn</a></li>
            </ul>
          </nav>
          <div className="px-20">
            <h2 className = 'text-4xl py-2 font-large'>Hi, I&apos;m Mary 👋</h2>
            <p className = 'text-md py-2 mt-1 text-gray-800 max-w-3xl'>
              Currently, I&apos;m a data science intern at Atlassian. I study statistics at The University of Pennsylvania, where I conduct research
              at the <a class="underline decoration-sky-500/30" href="https://css.seas.upenn.edu/">Computational Social Science Lab</a>.
            </p>
            <p className = 'text-md py-2 text-gray-800 max-w-3xl'>
              Check out my work below.
            </p>
          </div>
          <div className="px-20">
            <h1 className = 'text-4xl mt-36 font-large'>Technical Work</h1>
            <div className = 'py-2 mt-1 text-gray-800 max-w-3xl'>
              <li>CSSLab (Feb 2023-Present)</li>
              <li>Atlassian (May 2023-August 2023)</li>
              <li>Bank of America (June 2022-August 2022)</li>
              <li>Some other projects...</li>
              {/* mktg 4760, cis 5450, sendy logistics, cis 120,  */}
            </div>
          </div>
        </section>
        {/* <section>
          <div className="p-20">
            <h3 className="text-3xl py-500">Projects</h3>
            <p className = "text-md py-2">I love reading about Miguel! :D</p>
          </div>
        </section> */}
      </main>
    </div>
  );
}
