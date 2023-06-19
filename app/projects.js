export default function Home() {
    return (
      <div>
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
              <p className = 'text-md py-2 text-gray-800 max-w-3xl'>
                Currently, I&apos;m a data science intern at Atlassian. I study statistics at The University of Pennsylvania, where I conduct research
                at the <a class="underline decoration-sky-500/30" href="https://css.seas.upenn.edu/">Computational Social Science Lab</a>.
              </p>
              <p className = 'text-md py-2 text-gray-800 max-w-3xl'>
                Check out my projects here.
              </p>
            </div>
          </section>
            {/* <section>
            <div className="p-10">
              <h3 className="text-3xl py-500">Projects</h3>
              <p className = "text-md py-2">I love reading about Miguel! :D</p>
            </div>
            <div className='shadow-lg p-10 rounded-xl my-10'>
              <div>
                <p className="text-lg font-medium pt-8 pb-2">hey girl</p>
              </div>
            </div>
          </section> */}
        </main>
      </div>
    );
  }
  